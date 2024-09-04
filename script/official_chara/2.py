# 2 means genshin

from script import utils
from script import type

import os


url_global = "https://sg-public-api-static.hoyoverse.com/content_v2_user/app/a1b1f9d3315447cc/getContentList?iAppId=32&iChanId=407&iPageSize=999&iPage=1&sLangKey=en-us&iOrder=6"
url_zh = "https://api-takumi-static.mihoyo.com/content_v2_user/app/16471662a82d418a/getContentList?iAppId=43&iChanId=732&iPageSize=999&iPage=1&sLangKey=zh-cn&iOrder=6"


url_city_name = "https://sg-public-api-static.hoyoverse.com/content_v2_user/app/a1b1f9d3315447cc/getContentList?iAppId=32&iChanId=414&iPageSize=50&iPage=1&sLangKey=en-us&iOrder=6"


URL_GLOBAL_PREFIX = "https://sg-public-api-static.hoyoverse.com/content_v2_user/app/a1b1f9d3315447cc/getContentList"
URL_ZH_PREFIX = "https://api-takumi-static.mihoyo.com/content_v2_user/app/16471662a82d418a/getContentList"

APP_ID_GLOBAL = 32
APP_ID_ZH = 43

CHAR_CHAN_ID_GLOBAL = 407
CHAR_CHAN_ID_ZH = 732
CITY_CHAN_ID_GLOBAL = {
    403: utils.Genshin.City.Mondstadt,
    404: utils.Genshin.City.Liyue,
    405: utils.Genshin.City.Inazuma,
    406: utils.Genshin.City.Sumeru,
    653: utils.Genshin.City.Fontaine,
    934: utils.Genshin.City.Natlan,
    0: utils.Genshin.City.Snezhnaya
}
CITY_CHAN_ID_ZH = {
    727: utils.Genshin.City.Mondstadt,
    728: utils.Genshin.City.Liyue,
    729: utils.Genshin.City.Inazuma,
    730: utils.Genshin.City.Sumeru,
    731: utils.Genshin.City.Fontaine,
    936: utils.Genshin.City.Natlan,
    0: utils.Genshin.City.Snezhnaya
}

LANG_KEY_EN = 'en-us'
LANG_KEY_ZH = 'zh-cn'


CHAR_DIR = f"{utils.get_project_root()}/game/public/image/genshin/characters"
CHAR_FULL_DIR = f"{CHAR_DIR}/full"
CHAR_HALF_DIR = f"{CHAR_DIR}/half"


def attach_url(url_prefix: str, appId: int, chanId: int, langKey: str, pageSize: int = 99):
    order = "&iOrder=6"
    return f'{url_prefix}?iAppId={appId}&iChanId={chanId}&iPageSize={pageSize}&iPage=1&sLangKey={langKey}'


def handle_ext(ext: str):
    ext_obj: dict = utils.str_to_dict(ext)
    list_str: list = []
    list_img: list = []
    for val in ext_obj.values():
        if isinstance(val, str) and val != "":
            list_str.append(val)
            continue
        if isinstance(val, list):
            for vv in val:
                if vv['name'] is None or vv['url'] is None:
                    continue
                if utils.url_is_img(vv['url']):
                    list_img.append(vv['url'])
    return list_str, list_img


def handle_character(obj: object):
    if obj['sChanId'] is None or obj['sTitle'] is None or obj['sExt'] is None:
        print(f"!!! ERROR OBJ[{obj}] !!!")
        return
    chan_ids = [val for val in obj['sChanId'] if val]
    name = obj['sTitle']
    ext = obj['sExt']
    return chan_ids, name, handle_ext(ext)


def down_img(dir_prefix: str, name_img: str, list_img: list):
    full_dir = f"{dir_prefix}/{name_img}"
    utils.make_dir(full_dir)
    for idx, img in enumerate(list_img):
        # 只取 前两个，0 为头像 1 为全图
        if idx > 1:
            break
        filename_without_ext, extension = os.path.splitext(img)
        filename = f'{full_dir}/{idx}{extension}'
        utils.wget_file(img, filename)
        # cp img
        if idx == 0:
            des_filename = f'{CHAR_DIR}/{name_img}{extension}'
            utils.cp_file(filename, des_filename)
        elif idx == 1:
            des_filename = f'{CHAR_FULL_DIR}/{name_img}{extension}'
            utils.cp_file(filename, des_filename)
            des_filename = f'{CHAR_HALF_DIR}/{name_img}{extension}'
            utils.cp_file(filename, des_filename)


def get_city(chan_ids: list, lang: type.LANG = type.LANG.ZH_CN):
    if lang == type.LANG.EN_US:
        city_chan_id_dict = CITY_CHAN_ID_GLOBAL
    elif lang == type.LANG.ZH_CN:
        city_chan_id_dict = CITY_CHAN_ID_ZH
    for id_str in chan_ids:
        id = int(id_str)
        if id not in city_chan_id_dict:
            continue
        return city_chan_id_dict[id]

    return utils.Genshin.City.Invalid


def get_char_intro(list_str: list):
    # 0,1,2 为声优 3 为 intro
    for idx, s in enumerate(list_str):
        if idx == 3:
            return s
    return ""


def get_chara_list(url: str):
    url_response = utils.get_url_data(url)
    data = url_response['data']
    url_exception = data is None or data['list'] is None or len(
        data['list']) == 0
    if url_exception:
        print("!!! ERROR URL !!!")
        return None
    data_list: list = data['list']
    return data_list


def diff_lang(lang: type.LANG = type.LANG.ZH_CN):
    des_dir_prefix = f"{utils.get_project_root()}/script/auto/output/char/2"
    if lang == type.LANG.EN_US:
        des_dir = LANG_KEY_EN
        url = attach_url(URL_GLOBAL_PREFIX, APP_ID_GLOBAL,
                         CHAR_CHAN_ID_GLOBAL, LANG_KEY_EN)
    elif lang == type.LANG.ZH_CN:
        des_dir = LANG_KEY_ZH
        url = attach_url(URL_ZH_PREFIX, APP_ID_ZH,
                         CHAR_CHAN_ID_ZH, LANG_KEY_ZH)
    data_list = get_chara_list(url)
    if data_list is None:
        return
    des_dir_prefix += f"/{des_dir}"
    for per_char in data_list:
        chan_ids, name, (list_str, list_img) = handle_character(per_char)
        chara_city: utils.Genshin.City = get_city(chan_ids, lang)
        chara_intro = get_char_intro(list_str)
        chara_id = utils.replace_characters(name)
        chara_name = name

        # English only, get character's image
        name_img = chara_id
        if lang == type.LANG.EN_US:
            down_img(des_dir_prefix, chara_id, list_img)


def get_chara_name_and_intro(data_list: list):
    list_chara_name = []
    list_chara_intro = []
    for per_char in data_list:
        chan_ids, name, (list_str, list_img) = handle_character(per_char)
        chara_intro = get_char_intro(list_str)
        modified_intro = utils.rm_html_tag(chara_intro)
        list_chara_name.append(name)
        list_chara_intro.append(modified_intro)
    return list_chara_name, list_chara_intro


def i18n_chara():

    url = attach_url(URL_GLOBAL_PREFIX, APP_ID_GLOBAL,
                     CHAR_CHAN_ID_GLOBAL, LANG_KEY_EN)
    data_list = get_chara_list(url)
    if data_list is None:
        return
    name_en, intro_en = get_chara_name_and_intro(data_list)

    url = attach_url(URL_ZH_PREFIX, APP_ID_ZH,
                     CHAR_CHAN_ID_ZH, LANG_KEY_ZH)
    data_list = get_chara_list(url)
    if data_list is None:
        return
    name_zh, intro_zh = get_chara_name_and_intro(data_list)

    exception_name = len(name_en) != len(name_zh) or len(name_en) == 0
    exception_intro = len(intro_en) != len(intro_zh) or len(intro_en) == 0

    res_name = []
    res_intro = []
    if not exception_name:
        for idx, n in enumerate(name_en):
            res_name.append({
                n: name_zh[idx]
            })
    if not exception_intro:
        for idx, i in enumerate(intro_en):
            res_intro.append({
                i: intro_zh[idx]
            })

    des_dir_prefix = f"{utils.get_project_root()}/script/auto/output/char/2/i18n"
    utils.make_dir(des_dir_prefix)
    des_dir_char_name = f"{des_dir_prefix}/char_name.json"
    des_dir_char_intro = f"{des_dir_prefix}/char_intro.json"
    utils.OperateFile.save_dict_to_file(res_name, des_dir_char_name, False)
    utils.OperateFile.save_dict_to_file(res_intro, des_dir_char_intro, False)


def main():
    i18n_chara()
    # get url, get name, info, img
    diff_lang(type.LANG.EN_US)
    # diff_lang(type.LANG.ZH_CN)


if __name__ == "__main__":
    main()
