import{k as m,l as h,C as j,n as v,D as M,F as x,r as u}from"./utils.I4CLDPKf.js";import"./zh.bQ1W1E25.js";m.locale("zh");const p=10;let g=m().year(2e3),f=m();const b=(r,i,s)=>{let o,n;r.start=r.start.replace(/-/g,"/"),r.end=r.end.replace(/-/g,"/"),o=j(r.start).subtract(0,"minute"),n=j(r.end).subtract(0,"minute");const l=n.diff(o,"day",!0);return g<n&&(g=n),{...r,index:i,index2:s,start:o,end:n,duration:l}},B=r=>{let i=[],s={},o=[],n=[],l=[];l[h.Characters]=r.characters,l[h.Weapons]=r.weapons,r.chronicled&&(l[h.Chronicled]=r.chronicled);let c=l.map((t,a)=>Array.isArray(t)?t.map((e,y)=>b(e,a,y)):b(t,a,a));c.slice().sort((t,a)=>Array.isArray(t)&&Array.isArray(a)?t[0].start-a[0].start:!Array.isArray(t)&&Array.isArray(a)?t.start-a[0].start:Array.isArray(t)&&!Array.isArray(a)?t[0].start-a.start:t.start-a.start).forEach((t,a)=>{if(a===0&&(Array.isArray(t)?f=t[0].start.set("hour",0).set("minute",0).set("second",0).subtract(p,"day"):f=t.start.set("hour",0).set("minute",0).set("second",0).subtract(p,"day")),Array.isArray(t))for(let e=0;e<t.length;e++){const y=t[e];c[y.index][e].offset=Math.abs(f.diff(c[y.index][e].start,"day",!0))}else c[t.index].offset=Math.abs(f.diff(t.start,"day",!0))});const d=Math.abs(Math.ceil(f.diff(g,"day",!0)))+2*p;for(let t=0;t<d;t++){const a=f.add(t,"day").format("YYYY"),e=f.add(t,"day").format("MMMM");s[a]===void 0&&(s[a]={}),s[a][e]===void 0&&(s[a][e]={total:0,offset:0}),s[a][e].total++}o=Object.entries(s);for(let t=0;t<o.length;t++){let a=Object.entries(o[t][1]);n=n.concat(a)}for(let t=0;t<n.length;t++)n[t][1].offset=t-1>=0?n[t-1][1].total+n[t-1][1].offset:0;return i=[...new Array(d)].map((t,a)=>{const e=f.add(a,"day");return[e.date(),e.format("dd")]}),{dates:i,years:s,yearList:o,monthList:n,events:c,firstDay:f}},E=r=>{let i={wishIndex:[],comingIndex:[]};for(let s of r){let o=m().isAfter(s.start,"second"),n=m().isBefore(s.end,"second");o&&n&&i.wishIndex.push(s.index2),m().isBefore(s.start,"second")&&i.comingIndex.push(s.index2)}return i},D=(r,i=0)=>{var t,a;let s=v(i),o=[];for(let e=0;e<r.name.length;++e)o.push(`/image/${s}/wish/${M(r.name[e],r.image[e])}`);let n=x(r.start),l=x(r.end),c=r.wish5star;Array.isArray(c)?c=c==null?void 0:c.map((e,y,A)=>u(e)):c.characters=(t=c.characters)==null?void 0:t.map((e,y,A)=>u(e));let d=r.wish4star;return Array.isArray(d)?d=d==null?void 0:d.map((e,y,A)=>u(e)):d.characters=(a=d.characters)==null?void 0:a.map((e,y,A)=>u(e)),{name:r.wishName,date:n+" ~ "+l,ver:r.version,image:r.image,src:o,wish5star:c,wish4star:d}},T=(r,i,s=0)=>{let o={index:i,able:i.length>0,obj:[]};for(let n of i){const l=D(r[n],s);o.obj.push(l)}return o};export{T as a,E as g,B as p};
