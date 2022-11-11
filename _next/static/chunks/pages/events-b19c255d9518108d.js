(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[695],{3129:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/events",function(){return t(126)}])},7438:function(e,n,t){"use strict";t.d(n,{Z:function(){return m}});var r=t(5893),i=t(6447),o=t(6860),s=function(){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z",clipRule:"evenodd"})})},c=t(5368),l=t(2894),a=t.n(l),u=function(e){let{title:n,image:t,date:l,location:u,id:d}=e,h=new Date(l).toLocaleDateString("en-US",{day:"numeric",month:"long",year:"numeric"}),m=u.replace(",","\n");return(0,r.jsxs)("li",{className:a().item,children:[(0,r.jsx)("img",{src:"/"+t}),(0,r.jsxs)("div",{className:a().content,children:[(0,r.jsxs)("div",{className:a().summary,children:[(0,r.jsx)("h2",{children:n}),(0,r.jsxs)("div",{className:a().date,children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)("time",{children:h})]})]}),(0,r.jsxs)("div",{className:a().address,children:[(0,r.jsx)(o.Z,{}),(0,r.jsx)("address",{children:m})]})]}),(0,r.jsx)("div",{className:a().actions,children:(0,r.jsxs)(c.Z,{link:"/events/".concat(d),children:[(0,r.jsx)("span",{children:"Explore events"}),(0,r.jsx)("span",{className:a().icon,children:(0,r.jsx)(s,{})})]})})]})},d=t(6429),h=t.n(d),m=function(e){let{items:n}=e;return console.log(n),(0,r.jsx)("ul",{className:h().list,children:n.map(e=>(0,r.jsx)(u,{id:e.id,title:e.title,image:e.image,location:e.location,date:e.date},e.id))})}},6860:function(e,n,t){"use strict";var r=t(5893);n.Z=function(){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:[(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"}),(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M15 11a3 3 0 11-6 0 3 3 0 016 0z"})]})}},6447:function(e,n,t){"use strict";var r=t(5893);n.Z=function(){return(0,r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:2,d:"M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"})})}},5368:function(e,n,t){"use strict";var r=t(5893),i=t(1664),o=t.n(i),s=t(9932),c=t.n(s);n.Z=function(e){return e.link?(0,r.jsx)(o(),{href:e.link,className:c().btn,children:e.children}):(0,r.jsx)("button",{className:c().btn,onClick:e.onClick,children:e.children})}},7397:function(e,n,t){"use strict";t.d(n,{IP:function(){return o},N6:function(){return i},Y:function(){return c},nk:function(){return s}});let r=[{id:"e1",title:"Programming for everyone",description:"Everyone can learn to code! Yes, everyone! In this live event, we are going to go through all the key basics and get you started with programming as well.",location:"Somestreet 25, 12345 San Somewhereo",date:"2021-05-12",image:"images/coding-event.jpg",isFeatured:!1},{id:"e2",title:"Networking for introverts",description:"We know: Networking is no fun if you are an introvert person. That's why we came up with this event - it'll be so much easier. Promised!",location:"New Wall Street 5, 98765 New Work",date:"2021-05-30",image:"images/introvert-event.jpg",isFeatured:!0},{id:"e3",title:"Networking for extroverts",description:"You probably need no help with networking in general. But focusing your energy correctly - that is something where most people can improve.",location:"My Street 12, 10115 Broke City",date:"2022-04-10",image:"images/extrovert-event.jpg",isFeatured:!0}];function i(){return r.filter(e=>e.isFeatured)}function o(){return r}function s(e){let{year:n,month:t}=e;return r.filter(e=>{let r=new Date(e.date);return r.getFullYear()===n&&r.getMonth()===t-1})}function c(e){return r.find(n=>n.id===e)}},126:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return h}});var r=t(5893),i=t(7397),o=t(7438),s=t(5368),c=t(9059),l=t.n(c),a=t(7294),u=function(e){let n=(0,a.useRef)(),t=(0,a.useRef)();return(0,r.jsxs)("form",{className:l().form,children:[(0,r.jsxs)("div",{className:l().controls,children:[(0,r.jsxs)("div",{className:l().control,children:[(0,r.jsx)("label",{htmlFor:"year",children:"Year"}),(0,r.jsxs)("select",{id:"year",ref:n,children:[(0,r.jsx)("option",{value:"2021",children:"2021"}),(0,r.jsx)("option",{value:"2022",children:"2022"})]})]}),(0,r.jsxs)("div",{className:l().control,children:[(0,r.jsx)("label",{htmlFor:"month",children:"Month"}),(0,r.jsxs)("select",{id:"month",ref:t,children:[(0,r.jsx)("option",{value:"1",children:"January"}),(0,r.jsx)("option",{value:"2",children:"February"})]})]})]}),(0,r.jsx)(s.Z,{onClick:function(r){r.preventDefault();let i=n.current.value,o=t.current.value;e.onSearch(i,o)},children:"Find Events"})]})},d=t(1163),h=function(){let e=(0,i.IP)(),n=(0,d.useRouter)();return(0,r.jsxs)("div",{children:[(0,r.jsx)(u,{onSearch:function(e,t){let r="/events/".concat(e,"/").concat(t);n.push(r)}}),(0,r.jsx)(o.Z,{items:e})]})}},2894:function(e){e.exports={item:"EventItem_item__rN6e3",content:"EventItem_content__7ZejO",date:"EventItem_date__lovMq",address:"EventItem_address__lSx59",actions:"EventItem_actions__xBYbd",icon:"EventItem_icon__9_oqz"}},6429:function(e){e.exports={list:"EventList_list__UOAQV"}},9059:function(e){e.exports={form:"events-search_form__r_GYk",controls:"events-search_controls__34AL4",control:"events-search_control__BYmL_"}},9932:function(e){e.exports={btn:"button_btn__O_wkr"}},1163:function(e,n,t){e.exports=t(880)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=3129)}),_N_E=e.O()}]);