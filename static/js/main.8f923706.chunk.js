(this["webpackJsonpportfolio-website"]=this["webpackJsonpportfolio-website"]||[]).push([[0],{102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},114:function(e,t,n){},121:function(e,t,n){},122:function(e,t,n){},123:function(e,t,n){},124:function(e,t,n){},223:function(e,t,n){},224:function(e,t,n){},225:function(e,t,n){},226:function(e,t,n){},227:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(43),o=n.n(i),r=(n(102),n(103),n(104),n(5)),s=n(16),l=n(26),u=n(63),d={fr:{Navbar:{firstLink:"Nos travaux",secondLink:"A propos"},Hero:{firstHeading:"Vous cherchez \xe0 vous d\xe9marquer davantage ? obtenir un site Web",secondHeading:"Nous vous aidons \xe0 para\xeetre plus professionnel avec un site Web qui refl\xe8te votre exp\xe9rience",Button:"Nous contacter"},Techs:{heading:"Les technologies qu'on travail avec"},About:{heading:"Qui sommes nous?",paragraph:""},Contact:{heading:"Nous contacter",namePlaceholder:"Nom",emailPlaceholder:"Adresse mail",Button:"Envoyer"}},en:{Navbar:{firstLink:"Works",secondLink:"About"},Hero:{firstHeading:"Are you looking to stand out more? Get a website",secondHeading:"We help you look more professional with a website that reflects your experience",Button:"Contact us"},Techs:{heading:"Technologies we work with"},About:{heading:"Who are we?",paragraph:""},Contact:{heading:"Contact us",namePlaceholder:"Name",emailPlaceholder:"Email address",Button:"Send Message"}}},j=(n(114),n(2)),b=function(e){var t=e.Language,n=e.setLanguage,c=Object(a.useState)(!1),i=Object(r.a)(c,2),o=i[0],b=i[1],m=Object(a.useState)(!1),h=Object(r.a)(m,2),p=h[0],O=h[1],g=function(){return O(!1)};return window.addEventListener("scroll",(function(){window.scrollY>50?b(!0):b(!1)})),Object(j.jsx)("header",{className:"navbar-header ".concat(o?"scroll-border":""),children:Object(j.jsxs)("div",{className:"navbar",id:"container",children:[Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)(s.Link,{to:"hero",smooth:!0,duration:300,offset:-100,children:Object(j.jsx)(l.b,{to:"/",children:"Logo"})})}),Object(j.jsxs)("nav",{children:[Object(j.jsxs)("ul",{className:"".concat(p?"hidden":""),children:[Object(j.jsx)("li",{children:Object(j.jsx)(s.Link,{onClick:g,activeClass:"active-link",to:"work",spy:!0,smooth:!0,duration:300,offset:-70,children:d[t].Navbar.firstLink})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.Link,{onClick:g,activeClass:"active-link",to:"about-us",spy:!0,smooth:!0,duration:300,offset:-70,children:d[t].Navbar.secondLink})}),Object(j.jsx)("li",{children:Object(j.jsx)(s.Link,{onClick:g,activeClass:"active-link",to:"contact",spy:!0,smooth:!0,duration:300,offset:-70,children:"Contact"})})]}),Object(j.jsx)("div",{className:"nav-lang-change",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{className:"".concat("fr"===t?"selected-lang":""),onClick:function(){return n("fr")},children:Object(j.jsx)("p",{children:"FR"})}),Object(j.jsx)("li",{className:"".concat("en"===t?"selected-lang":""),onClick:function(){return n("en")},children:Object(j.jsx)("p",{children:"EN"})})]})}),p?Object(j.jsx)(u.a,{className:"nav-icon",onClick:g,size:32}):Object(j.jsx)(u.b,{className:"nav-icon",onClick:function(){return O((function(e){return!e}))},size:32})]})]})})},m=n(4),h=(n(121),function(e){var t=e.label,n=e.variant,c=e.color,i=e.hoverColor,o=e.size,s=e.StartIcon,l=e.EndIcon,u=e.fullWidth,d=(e.OnClick,e.boxShadow),b=(e.to,e.toLink),m=Object(a.useState)(!1),h=Object(r.a)(m,2),p=h[0],O=h[1];"contained"===n?p&&(c=i):"outlined"===n?p&&"white"!==c&&(n="contained"):"none"===n&&p&&(n="none");var g={backgroundColor:"contained"===n?c:("outlined"===n||"none"===n)&&"transparent",border:"none"!==n&&"1px solid ".concat(c),fontSize:"medium"===o?"var(--fz-m)":"small"===o?"var(--fz-s)":"extraSmall"===o&&"var(--fz-xs)",width:u&&"100%",boxShadow:p&&d?"0 8px 20px 0 ".concat(d):"none",textDecoration:"none",color:"contained"===n?"white":"outlined"===n||"none"===n?c:"outlined"===n&&"white"===c&&"black"},x={color:"contained"===n&&"white",margin:s?"0 .5rem -.1rem 0":l&&" 0 0 -.1rem .5rem",fontSize:".875rem",position:"relative",transition:".15s ease-out",top:"1px",right:l&&p?"-3px":"0"};return Object(j.jsxs)("a",{onMouseEnter:function(){return O(!0)},onMouseLeave:function(){return O(!1)},className:"btn",style:g,target:"_blank",rel:"noreferrer",href:b,children:[s&&Object(j.jsx)(s,{style:x}),t,l&&Object(j.jsx)(l,{style:x})]})});h.defaultProps={variant:"contained",color:"var(--clr-primary)",hoverColor:"var(--clr-primary-dark)",size:"medium"};var p,O=h,g=n(15),x=(n(122),function(e){var t=e.project,n=e.Language,a=t.title,c=t.description,i=t.demo,o=t.showUpImage,r=Object(m.f)(),s={backgroundImage:"url(".concat(o,")"),backgroundSize:"cover"};return Object(j.jsxs)("section",{className:"project-details",children:[Object(j.jsx)("div",{id:"container",children:Object(j.jsxs)("div",{className:"project-details__infos",children:[Object(j.jsx)(g.a,{onClick:function(){return r.push("/")}}),Object(j.jsx)("h1",{children:a}),Object(j.jsx)("p",{children:c[n]}),Object(j.jsx)(O,{variant:"outlined",color:"white",hoverColor:"black",label:"Demo",toLink:i})]})}),Object(j.jsx)("div",{style:s,className:"project-details__image-container"})]})}),f=n.p+"static/media/PC-MAC.2042c2e5.png",v=[{title:"Crispy Chicken",description:{fr:"Crispy Chicken est un site de restaurant que nous designer et d\xe9velopp\xe9",en:"Crispy Chicken is a restaurant website we designed & developed."},demo:"https://addayounes.github.io/CrispyChicken/",thumbnail:n.p+"static/media/PC-Crispy.2e49da16.png",showUpImage:n.p+"static/media/website-crispy.887c6619.png",to:"Crispy"},{title:"MAC Science Club",description:{fr:"Le Mechanical Activities Club est une structure estudiantine scientifique regroupant des \xe9tudiants de l\u2019\xc9cole Nationale Polytechnique d\u2019Oran \u2013 Maurice Audin \u2013 autour d\u2019un domaine d\u2019activit\xe9 technologique.",en:"The Mechanical Activities Club is a scientific student structure bringing together students from the National Polytechnic School of Oran - Maurice Audin - around a field of technological activity."},demo:"https://www.mac-club-oran.com/",thumbnail:f,showUpImage:n.p+"static/media/website-mac.0a356d9b.png",to:"MAC"}],C=(n(123),function(){var e=Object(a.useState)(!1),t=Object(r.a)(e,2),n=t[0],c=t[1];return window.addEventListener("scroll",(function(){window.scrollY>850?c(!0):c(!1)})),Object(j.jsx)(j.Fragment,{children:n&&Object(j.jsx)("div",{onClick:function(){s.animateScroll.scrollToTop(150)},className:"scroll-to-top-icon",children:Object(j.jsx)(g.b,{})})})}),N=(n(124),function(e){var t=e.Language;return Object(j.jsx)("section",{className:"about-us-section",name:"about-us",children:Object(j.jsxs)("div",{className:"about-us",id:"container",children:[Object(j.jsx)("h1",{children:d[t].About.heading}),Object(j.jsx)("p",{children:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, aperiam amet iusto vitae corporis ex iure doloribus incidunt magni ullam. Dolorum odio non, doloremque quo, cupiditate modi praesentium, aperiam eligendi culpa sequi magni! Voluptatum voluptatem facilis mollitia? Harum alias eveniet quidem sunt repellendus qui veniam rem exercitationem itaque enim numquam cumque, maiores hic eos, necessitatibus molestias libero sed velit! Eos, earum. Cupiditate maxime et placeat eos consequatur facilis iusto error."})]})})}),w=n(22),y=n(33),k=n(97),L=n(12),S=n(96),M=(n(90),["placeholder","errorMessage","textarea","type","messageSent"]),q=function(e){var t=e.errorMessage,n=e.className,a=e.sent;return Object(j.jsxs)("div",{className:"error-text ".concat(n),children:[a&&Object(j.jsx)(g.c,{className:"message-sent-icon"}),t]})},A=function(e){var t=e.placeholder,n=(e.errorMessage,e.textarea),a=e.type,c=e.messageSent,i=Object(S.a)(e,M),o=Object(w.d)(i),s=Object(r.a)(o,2),l=s[0],u=s[1],d=u.error&&u.touched?u.error:"";return Object(j.jsx)(j.Fragment,{children:n?Object(j.jsxs)("div",{className:"input",children:[Object(j.jsx)("textarea",Object(L.a)({rows:"3",type:a,placeholder:t},l)),c&&Object(j.jsx)(q,{className:"message-sent",errorMessage:"Message Sent",sent:!0})]}):Object(j.jsxs)("div",{className:"input",children:[Object(j.jsx)("input",Object(L.a)({type:a,placeholder:t},l)),Object(j.jsx)(q,{errorMessage:d})]})})},E=y.a({name:y.b().required("le nom est un champ obligatoire").max(22).min(3,"le nom doit comporter au moins 3 caract\xe8res"),email:y.b().email("l'email doit \xeatre un email valide").required("l'adresse mail est un champ obligatoire"),message:y.b().required()}),P=function(e){!function(e,t,n){k.a.send("service_ykd0m2u",e,n,t).then((function(e){console.log()})).catch((function(e){return console.error(e)}))}("template_dhcj2le","user_spT0gesNImN6sDQ9pUGBm",e)},_=function(e){var t=e.Language,n=Object(a.useState)(!1),c=Object(r.a)(n,2),i=c[0],o=c[1];return Object(j.jsx)("section",{className:"contact",name:"contact",children:Object(j.jsxs)("div",{className:"contact-us",children:[Object(j.jsx)("h1",{children:d[t].Contact.heading}),Object(j.jsx)(w.c,{validationSchema:E,initialValues:{name:"",email:"",message:""},onSubmit:function(e,t){var n=t.resetForm,a=t.setSubmitting;a(!0),P(e),a(!1),o(!0),n(),setTimeout((function(){o(!1)}),2e3)},children:function(e){var n=e.isSubmitting;return Object(j.jsxs)(w.b,{children:[Object(j.jsx)(w.a,{name:"name",placeholder:d[t].Contact.namePlaceholder,type:"text",as:A}),Object(j.jsx)(w.a,{name:"email",placeholder:d[t].Contact.emailPlaceholder,type:"text",as:A}),Object(j.jsx)(w.a,{placeholder:"Message",name:"message",type:"text",messageSent:i,textarea:!0,as:A}),Object(j.jsx)("input",{disabled:n,type:"submit",value:d[t].Contact.Button,className:"active-submit ".concat(n?"disabled":"")})]})}})]})})},B=["title","titleId"];function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}function z(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}function F(e,t){var n=e.title,c=e.titleId,i=z(e,B);return a.createElement("svg",H({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 80 1440 220",ref:t,"aria-labelledby":c},i),n?a.createElement("title",{id:c},n):null,p||(p=a.createElement("path",{fill:"var(--clr-primary)",fillOpacity:1,d:"M0,192L48,181.3C96,171,192,149,288,160C384,171,480,213,576,202.7C672,192,768,128,864,122.7C960,117,1056,171,1152,192C1248,213,1344,203,1392,197.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"})))}var I=a.forwardRef(F),D=(n.p,n(223),function(){return Object(j.jsxs)("div",{children:[Object(j.jsx)(I,{className:"wave"}),Object(j.jsx)("footer",{children:Object(j.jsxs)("p",{children:["Nom \xa9 ",(new Date).getFullYear()]})})]})}),T=n.p+"static/media/Programmer.a2100325.gif",R=(n(224),function(e){var t=e.Language;return Object(j.jsx)("section",{className:"hero",name:"hero",children:Object(j.jsxs)("div",{className:"hero-split",id:"container",children:[Object(j.jsxs)("div",{className:"hero-split__left",children:[Object(j.jsxs)("div",{className:"hero__heading",children:[Object(j.jsx)("h1",{children:d[t].Hero.firstHeading}),Object(j.jsxs)("p",{children:[d[t].Hero.secondHeading," "]})]}),Object(j.jsx)(s.Link,{to:"contact",smooth:!0,spy:!0,duration:300,offset:-70,children:Object(j.jsx)(O,{to:"contact",label:d[t].Hero.Button,boxShadow:"var(--clr-primary-light)"})})]}),Object(j.jsx)("div",{className:"hero-split__right",children:Object(j.jsx)("img",{src:T,alt:"Programmer"})})]})})}),W=n(32),J=n(47),U=[{name:"React",Logo:g.e,color:"#00D8FF"},{name:"Redux",Logo:J.c,color:"#764ABC"},{name:"NodeJS",Logo:g.d,color:"#83CD29"},{name:"MongoDB",Logo:J.b,color:"#4EB13E"},{name:"Firebase",Logo:J.a,color:"#F4C43D"}],V=(n(225),function(e){var t=e.Language,n=Object(a.useState)({React:!1,Redux:!1,NodeJS:!1,MongoDB:!1,Firebase:!1}),c=Object(r.a)(n,2),i=c[0],o=c[1];return Object(j.jsxs)("section",{className:"technologies",children:[Object(j.jsx)("h1",{children:d[t].Techs.heading}),Object(j.jsx)("div",{className:"techs",id:"container",children:U.map((function(e,t){return Object(j.jsxs)("div",{className:"techs-col",children:[Object(j.jsx)("div",{style:{display:i[e.name]?"block":"none"},className:"tech-name",children:e.name}),Object(j.jsx)(e.Logo,{onMouseLeave:function(){return o((function(t){return Object(L.a)(Object(L.a)({},t),{},Object(W.a)({},e.name,!1))}))},onMouseEnter:function(){return o((function(t){return Object(L.a)(Object(L.a)({},t),{},Object(W.a)({},e.name,!0))}))},style:{color:i[e.name]?e.color:"rgb(151, 151, 151)"}})]},t)}))})]})}),Y=function(e){var t=e.title,n=e.thumbnail,c=e.to,i=Object(a.useState)(!1),o=Object(r.a)(i,2),s=o[0],u=o[1];return Object(j.jsx)("div",{className:"project",children:Object(j.jsx)(l.b,{to:c,children:Object(j.jsx)("img",{className:"".concat(s?"":"darken-image"),onMouseEnter:function(){return u(!0)},onMouseLeave:function(){return u(!1)},src:n,alt:t})})})},G=(n(226),function(){return Object(j.jsx)("section",{name:"work",className:"works",children:v.map((function(e,t){return Object(j.jsx)(Y,Object(L.a)({},e),t)}))})}),Q=function(e){var t=e.Language;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(R,{Language:t}),Object(j.jsx)(G,{}),Object(j.jsx)(V,{Language:t}),Object(j.jsx)(N,{Language:t}),Object(j.jsx)(_,{Language:t}),Object(j.jsx)(D,{})]})};var Z=function(){var e=Object(a.useState)("fr"),t=Object(r.a)(e,2),n=t[0],c=t[1];return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(l.a,{basename:"our-portfolio",children:[Object(j.jsx)(C,{}),Object(j.jsx)(b,{setLanguage:c,Language:n}),Object(j.jsxs)(m.c,{children:[Object(j.jsx)(m.a,{exact:!0,path:"/",component:function(){return Object(j.jsx)(Q,{Language:n})}}),Object(j.jsx)(m.a,{path:"/MAC",component:function(){return Object(j.jsx)(x,{Language:n,project:v[1]})}}),Object(j.jsx)(m.a,{path:"/Crispy",component:function(){return Object(j.jsx)(x,{Language:n,project:v[0]})}})]})]})})};o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(Z,{})}),document.getElementById("root"))},90:function(e,t,n){}},[[227,1,2]]]);
//# sourceMappingURL=main.8f923706.chunk.js.map