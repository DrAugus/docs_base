import{t as v}from"./utils.I4CLDPKf.js";import{d as A,p as E,c as l,o as m,j as f,a as p,F as u,B as g,t as C,k as j}from"./framework.BZf_BKPf.js";const W=A({__name:"UpTimes",props:{WISH:{},CHARACTER:{},GAME_NAME:{}},setup(c){const i=c,d=s=>{n.value=n.value.sort((t,e)=>s?e.times-t.times:t.times-e.times)},h=Object.values(i.CHARACTER).filter(s=>s.star===5).map(s=>s.id);let r={};(s=>{for(let t of s){r[t]=[];for(let e of i.WISH.characters){let o=e.wish5star.indexOf(t);if(o!==-1){let a={};a.name=e.name[o],a.image=e.image[o],a.shortName=e.wish5star[o],a.start=e.start,a.end=e.end,a.version=e.version,r[t].push(a)}}}})(h),r=v(r,s=>s.length);let n=E([]);return Object.values(r).forEach(s=>{let t=s[0].shortName,e={};e.id=t,e.name=i.CHARACTER[t].name,e.times=s.length,n.value.push(e)}),(s,t)=>(m(),l(u,null,[f("p",null,[t[2]||(t[2]=p(" 次数 ")),f("a",{onClick:t[0]||(t[0]=e=>d(0))},"递增"),t[3]||(t[3]=p(" | ")),f("a",{onClick:t[1]||(t[1]=e=>d(1))},"递减")]),(m(!0),l(u,null,g(j(n),(e,o)=>(m(),l("div",null,C(e.name)+" : "+C(e.times),1))),256))],64))}});export{W as _};
