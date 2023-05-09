import { WISH } from "./genshin/wish";
import { processEvent } from "./eventHandle";
import { Deadline, replaceAndLow, formatDayjs } from "./utils";

import dayjs from "dayjs";
import "dayjs/locale/zh";

dayjs.locale("zh");

const eventObj = processEvent(WISH);

let wishCharacters = eventObj.events[0];
let wishLength = wishCharacters.length;
// console.log(wishCharacters)

//----------------------------

//找出当前在哪个祈愿时间段
const getWishObj = () => {

    let obj = {
        wishIndex: [],//索引集 一个为当前祈愿或者即将开放的祈愿 两个为双复刻池
        comingIndex: []//即将到来的未开放的
    };

    //当前时间所处的祈愿时间段
    for (let e of wishCharacters) {
        //当前时间在祈愿起始时间后
        let startAfter = dayjs().isAfter(e.start, "second");
        //当前时间在祈愿结束时间前
        let endBefore = dayjs().isBefore(e.end, "second");
        if (startAfter && endBefore) {
            obj.wishIndex.push(e.index2);
        }
        //当前时间在祈愿起始时间前
        let startBefore = dayjs().isBefore(e.start, "second");
        if (startBefore) {
            obj.comingIndex.push(e.index2)
        }
    }

    return obj;

};
let objWish = getWishObj();
// console.log("objWish", objWish);

const getWish = (wish) => {
    let picName = replaceAndLow(wish.name) + "_" + wish.image;
    let img = "/image/genshin/wish/";
    img += picName;
    img += ".jpg";
    let s = formatDayjs(wish.start);
    let e = formatDayjs(wish.end);
    // console.log(s, e);
    let wish4star = wish.wish4star.length > 0 ? wish.wish4star : ""
    // 有部分没有小写
    if (wish4star != "")
        wish4star = wish4star.map((v, i, arr) => replaceAndLow(v))
    return {
        name: wish.wishName,
        date: s + " ~ " + e,
        ver: wish.version,
        src: img,
        wish5star: wish.wish5star,
        wish4star
    }
}

export let current = {
    index: objWish.wishIndex,
    able: objWish.wishIndex.length > 0,
    name: [],
    date: [],
    ver: [],
    src: [],
    wish5star: [],
    wish4star: []
};
for (let v of objWish.wishIndex) {
    const obj = getWish(wishCharacters[v])
    current.name.push(obj.name);
    current.date.push(obj.date);
    current.ver.push(obj.ver);
    current.src.push(obj.src);
    current.wish4star.push(obj.wish4star);
    current.wish5star.push(obj.wish5star);
}

export let future = {
    index: objWish.comingIndex,
    able: objWish.comingIndex.length > 0,
    name: [],
    date: [],
    ver: [],
    src: [],
    wish5star: [],
    wish4star: []
};
for (let v of objWish.comingIndex) {
    const obj = getWish(wishCharacters[v])
    future.name.push(obj.name);
    future.date.push(obj.date);
    future.ver.push(obj.ver);
    future.src.push(obj.src);
    future.wish4star.push(obj.wish4star);
    future.wish5star.push(obj.wish5star);
}

// console.log(current, future);
export const wishDeadline = () =>
    current.able ?
        Deadline(dayjs(), dayjs(wishCharacters[objWish.wishIndex[0]].end)) :
        -1;
export const wishBegin = () =>
    future.able ?
        Deadline(dayjs(), dayjs(wishCharacters[objWish.comingIndex[0]].start)) :
        -1;

// console.log(wishDeadline(), wishBegin());

