(this.webpackJsonplanding_app=this.webpackJsonplanding_app||[]).push([[0],{22:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a.n(s),n=a(14),c=a.n(n),i=(a(22),a(32)),l=a(7),d=a(1),m=[{name:"Dashboard",href:"#page",current:!0},{name:"Team",href:"#page",current:!1},{name:"Projects",href:"#page",current:!1},{name:"Calendar",href:"#page",current:!1}];function o(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.filter(Boolean).join(" ")}function x(){return Object(d.jsx)(i.a,{as:"nav",className:"sticky top-0 z-50 bg-white",children:function(e){var t=e.open;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("div",{className:"max-w-7xl mx-auto px-2 sm:px-6 lg:px-8",children:Object(d.jsxs)("div",{className:"relative flex items-center justify-between h-16",children:[Object(d.jsx)("div",{className:"absolute inset-y-0 right-0 flex items-center sm:hidden",children:Object(d.jsxs)(i.a.Button,{className:"inline-flex items-center justify-center p-2 rounded-md text-black-400 hover:text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-800",children:[Object(d.jsx)("span",{className:"sr-only",children:"Open main menu"}),t?Object(d.jsx)(l.e,{className:"block h-6 w-6","aria-hidden":"true"}):Object(d.jsx)(l.c,{className:"block h-6 w-6","aria-hidden":"true"})]})}),Object(d.jsxs)("div",{className:"flex-1 flex items-center tracking-tighter justify-center sm:items-stretch sm:justify-start",children:[Object(d.jsx)("div",{className:"absolute left-0 pl-2 inset-y-0 flex-shrink-0 flex items-center",children:Object(d.jsx)("p",{className:"text-black-600 font-normal leading-8 subpixel-antialiased text-2xl",children:"Leebi.co"})}),Object(d.jsx)("div",{className:"hidden sm:block sm:ml-6",children:Object(d.jsx)("div",{className:"flex absolute inset-y-0 items-center flex-shrink-0 right-0 pl-2  space-x-4",children:m.map((function(e){return Object(d.jsx)("a",{href:e.href,className:o(e.current?"bg-gray-900 text-white":"text-black-300 hover:bg-gray-700 hover:text-white","px-3 py-2 rounded-md text-sm font-medium"),"aria-current":e.current?"page":void 0,children:e.name},e.name)}))})})]})]})}),Object(d.jsx)(i.a.Panel,{className:"sm:hidden",children:Object(d.jsx)("div",{className:"px-2 pt-2 pb-3 space-y-1",children:m.map((function(e){return Object(d.jsx)(i.a.Button,{as:"a",href:e.href,className:o(e.current?"bg-gray-900 text-white":"text-black-300 hover:bg-gray-700 hover:text-white","block px-3 py-2 rounded-md text-base font-medium"),"aria-current":e.current?"page":void 0,children:e.name},e.name)}))})})]})}})}var j=a(11),u=a(13),b=["buy/rent homes","invest in real estates"];function g(){var e=r.a.useState(0),t=Object(j.a)(e,2),a=t[0],s=t[1];return r.a.useEffect((function(){var e=setInterval((function(){return s((function(e){return e+1}))}),3e3);return function(){return clearTimeout(e)}}),[]),Object(d.jsx)("div",{className:"py-12 bg-white",children:Object(d.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:Object(d.jsxs)("div",{className:"lg:text-center sm:px-8 md:px-48",children:[Object(d.jsxs)("div",{className:"flex flex-row justify-center items-center mx-auto mt-5",children:[Object(d.jsx)("a",{href:"#waitlist",children:Object(d.jsx)(l.b,{className:"flex text-purple-400 mr-2 h-6 w-6"})}),Object(d.jsxs)("a",{className:"text-lg font-medium text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",href:"#waitlist",children:["Join our waitlist"," "]}),Object(d.jsx)("a",{href:"#waitlist",children:Object(d.jsx)(l.a,{className:"flex text-red-400 ml-2 h-6 w-6"})})]}),Object(d.jsxs)("p",{className:"mt-1 text-5xl p-4 leading-snug font-light tracking-tight text-center text-gray-900",children:[Object(d.jsx)("span",{children:"We're flipping the way people "}),Object(d.jsx)("span",{className:"text-blue-500",children:Object(d.jsx)(u.a,{text:b[a%b.length],springConfig:u.b.wobbly})}),Object(d.jsx)("span",{children:"in Ghana."})]})]})})})}var h=a(3),p=a(6),f=a(5),O=a(4),y=a(17),v=function(e){var t,a=e.status,r=e.message,n=e.onValidated,c=Object(s.useState)("Join the waitlist"),i=Object(j.a)(c,1)[0];return Object(d.jsxs)("div",{children:["error"===a&&Object(d.jsx)("div",{style:{color:"red"},dangerouslySetInnerHTML:{__html:r}}),"success"===a&&Object(d.jsx)("div",{className:"text-center text-sm",style:{color:"green"},dangerouslySetInnerHTML:{__html:r}}),Object(d.jsx)("div",{className:"rounded-md mt-4 shadow-sm -space-y-px",children:Object(d.jsxs)("div",{children:[Object(d.jsx)("label",{htmlFor:"email-address",className:"sr-only",children:"Email address"}),Object(d.jsx)("input",{ref:function(e){return t=e},id:"email-address",name:"email",type:"email",autoComplete:"email",required:!0,className:"appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-gray-500 focus:z-10 sm:text-sm",placeholder:"Email address"})]})}),Object(d.jsxs)("div",{className:"w-auto mx-auto mt-5",children:[Object(d.jsxs)("button",{className:"flex relative w-full justify-center items-center mx-auto px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black",onClick:function(){return t&&t.value.indexOf("@")>-1&&n({EMAIL:t.value})},children:["sending"===a&&Object(d.jsx)(l.d,{className:"animate-spin h-5 w-5 mr-3"}),i]}),Object(d.jsx)("p",{className:"mt-4 text-center text-gray-700 text-xs",children:"*we hate spams too. we got you!"})]})]})},w=function(e){Object(f.a)(a,e);var t=Object(O.a)(a);function a(){return Object(h.a)(this,a),t.apply(this,arguments)}return Object(p.a)(a,[{key:"render",value:function(){return Object(d.jsx)("div",{children:Object(d.jsx)(y.a,{url:"https://leebi.us20.list-manage.com/subscribe/post?u=f2c401429ba181ddcae164829&amp;id=7e2b75c9bc",render:function(e){var t=e.subscribe,a=e.status,s=e.message;return Object(d.jsx)(v,{status:a,message:s,onValidated:function(e){return t(e)}})}})})}}]),a}(s.Component);function N(){return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("div",{className:"min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8",id:"waitlist",children:Object(d.jsxs)("div",{className:"max-w-md w-full space-y-8",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("p",{className:"text-3xl text-center font-extrabold tracking-tight text-gray-900 sm:text-4xl",children:"Get on board."}),Object(d.jsx)("p",{className:"text-center text-xl mt-4 text-gray-900",children:"Be a part of our journey as we build from the ground up!"}),Object(d.jsx)("p",{className:"mt-5 text-center text-sm text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500",children:"Early access. Seed investing. Project updates."})]}),Object(d.jsx)(w,{})]})})})}var k=a.p+"static/media/img-1.db028703.jpg",S=a.p+"static/media/img-2.c8283455.jpg",E=a.p+"static/media/img-3.9def66a1.jpg",I=a.p+"static/media/img-4.2401688a.jpg",W=[{name:"Easy rent",description:"We are making moving a little less painful with our technology."},{name:"Manage real estate business",description:"Reduce all the friction that comes with managing a real estate business."},{name:"Invest in homes.",description:"We are building for people who want to invest in real estate properties with low capital."}];function _(){return Object(d.jsx)("div",{className:"bg-white",children:Object(d.jsxs)("div",{className:"max-w-2xl mx-auto py-24 px-4 grid items-center grid-cols-1 gap-y-16 gap-x-8 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8 lg:grid-cols-2",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("h2",{className:"text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl",children:"Simple is better."}),Object(d.jsx)("p",{className:"mt-4 text-gray-500",children:"We are building for you. Here's what we have in mind."}),Object(d.jsx)("dl",{className:"mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:gap-x-8",children:W.map((function(e){return Object(d.jsxs)("div",{className:"border-t border-gray-200 pt-4",children:[Object(d.jsx)("dt",{className:"font-medium text-gray-900",children:e.name}),Object(d.jsx)("dd",{className:"mt-2 text-sm text-gray-500",children:e.description})]},e.name)}))})]}),Object(d.jsxs)("div",{className:"grid grid-cols-2 grid-rows-2 gap-4 sm:gap-6 lg:gap-8",children:[Object(d.jsx)("img",{src:I,alt:"Walnut card tray with white powder coated steel divider and 3 punchout holes.",className:"bg-gray-100 rounded-lg"}),Object(d.jsx)("img",{src:S,alt:"Top down view of walnut card tray with embedded magnets and card groove.",className:"bg-gray-100 rounded-lg"}),Object(d.jsx)("img",{src:E,alt:"Side of walnut card tray with card groove and recessed card area.",className:"bg-gray-100 rounded-lg"}),Object(d.jsx)("img",{src:k,alt:"Walnut card tray filled with cards and card angled in dedicated groove.",className:"bg-gray-100 rounded-lg"})]})]})})}var B=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(x,{}),Object(d.jsx)(g,{}),Object(d.jsx)(_,{}),Object(d.jsx)(N,{})]})};c.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(B,{})}),document.getElementById("root"))}},[[30,1,2]]]);
//# sourceMappingURL=main.26ffc0b4.chunk.js.map