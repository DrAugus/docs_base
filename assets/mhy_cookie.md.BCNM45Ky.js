import{_ as e,c as t,o as a,ai as c}from"./chunks/framework.BZf_BKPf.js";const m=JSON.parse('{"title":"米哈游 cookie","description":"","frontmatter":{},"headers":[],"relativePath":"mhy/cookie.md","filePath":"mhy/cookie.md","lastUpdated":1704615545000}'),r={name:"mhy/cookie.md"};function i(s,o,d,k,n,l){return a(),t("div",null,o[0]||(o[0]=[c('<h1 id="米哈游-cookie" tabindex="-1">米哈游 cookie <a class="header-anchor" href="#米哈游-cookie" aria-label="Permalink to &quot;米哈游 cookie&quot;">​</a></h1><h2 id="获取米哈游-cookie" tabindex="-1">获取米哈游 cookie <a class="header-anchor" href="#获取米哈游-cookie" aria-label="Permalink to &quot;获取米哈游 cookie&quot;">​</a></h2><blockquote><p>登陆账号后，直接在 F12 网络/network 里查看 <code>ys/</code> 内的 cookie，或者使用 console 命令 <code>document.cookie</code>，获取到的 cookie 都无法使用</p></blockquote><p>参考了一些文章/文档，尝试后，这里提供一种方法，来获取 cookie。</p><blockquote><p>仅提供电脑端获取 Edge/Safari/Google Chrome</p></blockquote><p>首先进入米哈游通行证(<a href="https://user.mihoyo.com" target="_blank" rel="noreferrer">https://user.mihoyo.com</a>)并登陆，不要注销登录。<br> 然后，打开米游社(<a href="https://bbs.mihoyo.com/ys" target="_blank" rel="noreferrer">https://bbs.mihoyo.com/ys</a>)并登陆。打开开发者工具（F12或者Fn+F12，Safari需要在偏好设置里先启用开发者工具），切换到 <code>网络/network</code> 这一栏。刷新网页重新加载，如果网页停住，需要去掉调试断点。在 <code>All/全部</code> 最上方找到<code>ys/</code>，点进去，找到以 cookie 字样开头的地方，这一栏全部的内容就是cookie。</p>',6)]))}const p=e(r,[["render",i]]);export{m as __pageData,p as default};
