(this["webpackJsonpreact-rpg"]=this["webpackJsonpreact-rpg"]||[]).push([[0],{26:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var c=a(1),i=a.n(c),n=a(18),s=a.n(n),l=(a(26),a(5)),r=a(0),j=function(){return Object(r.jsx)("footer",{className:"page-footer green lighten-2",children:Object(r.jsx)("div",{className:"footer-copyright",children:Object(r.jsxs)("div",{className:"container container-footer",children:["\xa9 ",(new Date).getFullYear," Aleksandr Levchenko and @Levkas my profile in github.com",Object(r.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/ALevkas/",children:"My others app in github page."})]})})})},b=function(){return Object(r.jsx)("nav",{className:"green darken-1",children:Object(r.jsx)("div",{className:"nav-wrapper",children:Object(r.jsx)(l.b,{to:"/",className:"brand-logo",children:"React App Hero"})})})},d=a(3),h=a(16),o=a.n(h),m=a(20),u=a(2),O=a(8),v=a(21),x=function e(t,a,c,i,n){Object(v.a)(this,e),this.name=void 0,this.force=void 0,this.agility=void 0,this.intellect=void 0,this.charisma=void 0,this.vitality=void 0,this.evasion=void 0,this.energy=void 0,this.attack=0,this.stealth=0,this.archery=0,this.learnability=0,this.survival=0,this.medicine=0,this.bullying=0,this.insight=0,this.appearance=0,this.manipulation=0,this.name=t,this.force=a,this.agility=c,this.intellect=i,this.charisma=n,this.vitality=3+this.force,this.evasion=10+this.agility,this.energy=this.agility+this.intellect},g=Object(c.createContext)({}),p=function(e){var t=Object(c.useState)({name:"",force:0,agility:0,intellect:0,charisma:0,vitality:0,evasion:0,energy:0,attack:0,stealth:0,archery:0,learnability:0,survival:0,medicine:0,bullying:0,insight:0,appearance:0,manipulation:0}),a=Object(O.a)(t,2),i=a[0],n=a[1],s=function(){return null},l=function(){var e=Object(m.a)(o.a.mark((function e(){var t,a;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(t=window.localStorage.getItem("Hero"))&&(a=JSON.parse(t),n(Object(u.a)(Object(u.a)({},i),{},{name:a.name,force:a.force,agility:a.agility,intellect:a.intellect,charisma:a.charisma,vitality:a.vitality,evasion:a.evasion,energy:a.energy,attack:a.attack,stealth:a.stealth,archery:a.archery,learnability:a.learnability,survival:a.survival,medicine:a.medicine,bullying:a.bullying,insight:a.insight,appearance:a.appearance,manipulation:a.manipulation})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)(g.Provider,{value:{hero:i,createHero:function(e,t,a,c,i){n(new x(e,t,a,c,i))},updateHero:function(e){n(e)},upAttack:function(){i.attack+1<=i.force&&i.attack+1<=5&&n(Object(u.a)(Object(u.a)({},i),{},{attack:i.attack+1}))},upStealth:function(){i.stealth+1<=i.agility&&i.stealth+1<=5&&n(Object(u.a)(Object(u.a)({},i),{},{stealth:i.stealth+1}))},upArchery:function(){i.archery+1<=i.agility&&i.archery+1<=5&&n(Object(u.a)(Object(u.a)({},i),{},{archery:i.archery+1}))},upLearnability:function(){i.learnability+1<=i.intellect&&i.learnability+1<=5&&n(Object(u.a)(Object(u.a)({},i),{},{learnability:i.learnability+1}))},upSurvival:function(){i.survival+1<=i.intellect&&i.survival+1<=5&&n(Object(u.a)(Object(u.a)({},i),{},{survival:i.survival+1}))},upMedicine:function(){i.medicine+1<=i.intellect&&i.medicine+1<=5&&n(Object(u.a)(Object(u.a)({},i),{},{medicine:i.medicine+1}))},upBullying:function(){i.bullying+1<=i.charisma&&i.bullying+1<=5&&n(Object(u.a)(Object(u.a)({},i),{},{bullying:i.bullying+1}))},upInsight:function(){i.insight+1<=i.charisma&&i.insight+1<=5&&n(Object(u.a)(Object(u.a)({},i),{},{insight:i.insight+1}))},upAppearance:function(){i.appearance+1<=i.charisma&&i.appearance+1<=5&&n(Object(u.a)(Object(u.a)({},i),{},{appearance:i.appearance+1}))},upManipulation:function(){i.manipulation+1<=i.charisma&&i.manipulation+1<=5&&n(Object(u.a)(Object(u.a)({},i),{},{manipulation:i.manipulation+1}))},getDescriptionSkill:function(e){switch(e){case 5:return"\u041c\u0430\u0441\u0442\u0435\u0440";case 4:return"\u042d\u043a\u0441\u043f\u0435\u0440\u0442";case 3:return"\u0410\u0434\u0435\u043f\u0442";case 2:return"\u0423\u0447\u0435\u043d\u0438\u043a";case 1:return"\u041d\u043e\u0432\u0438\u0447\u043e\u043a";default:return"\u041d\u0435\u0442\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0439"}},getDamage:function(){if(!(i.vitality>0))return s();n(Object(u.a)(Object(u.a)({},i),{},{vitality:i.vitality-1}))},saveHero:function(){window.localStorage.setItem("Hero",JSON.stringify(i))},loadHero:l},children:e.children})},f=(a(34),function(){var e=Object(c.useContext)(g),t=e.hero,a=e.loadHero;return Object(r.jsx)("div",{className:"menu",children:0===t.name.length?Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l.b,{to:"/settings",className:"btn green darken-1",children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430"}),Object(r.jsx)("button",{className:"btn green darken-1",onClick:function(){a()},children:"\u0418\u043c\u043f\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430"})]}):Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(l.b,{to:"/game",className:"btn green darken-1",children:"\u041f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c \u0438\u0433\u0440\u0443"}),Object(r.jsx)(l.b,{to:"/settings",className:"btn green darken-1",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430"})]})})}),N=(a(35),function(){var e=Object(d.f)(),t=Object(c.useContext)(g),a=t.hero,i=t.createHero,n=Object(c.useState)(10),s=Object(O.a)(n,2),l=s[0],j=s[1],b=Object(c.useState)(""),h=Object(O.a)(b,2),o=h[0],m=h[1],u=Object(c.useState)((null===a||void 0===a?void 0:a.name)||""),v=Object(O.a)(u,2),x=v[0],p=v[1],f=Object(c.useState)((null===a||void 0===a?void 0:a.force)||0),N=Object(O.a)(f,2),k=N[0],y=N[1],_=Object(c.useState)((null===a||void 0===a?void 0:a.agility)||0),C=Object(O.a)(_,2),S=C[0],w=C[1],H=Object(c.useState)((null===a||void 0===a?void 0:a.intellect)||0),A=Object(O.a)(H,2),F=A[0],M=A[1],D=Object(c.useState)((null===a||void 0===a?void 0:a.charisma)||0),I=Object(O.a)(D,2),L=I[0],J=I[1],B=function(e,t){var a=k+S+F+L;switch(e){case"force":var c=k;if(y(t),10-(a=t+S+F+L)<0)return void y(c);break;case"agility":var i=S;if(w(t),10-(a=k+t+F+L)<0)return void w(i);break;case"intellect":var n=F;if(M(t),10-(a=k+S+t+L)<0)return void M(n);break;case"charisma":var s=L;if(J(t),10-(a=k+S+F+t)<0)return void J(s)}j(10-a)};return Object(c.useEffect)((function(){a&&j(10-(a.force+a.agility+a.intellect+a.charisma))}),[a]),Object(r.jsx)("div",{className:"hero__create",children:Object(r.jsxs)("div",{className:"hero__settings",children:[Object(r.jsxs)("h6",{children:["\u0421\u0432\u043e\u0431\u043e\u0434\u043d\u044b\u0445 \u043e\u0447\u043a\u043e\u0432 \u0430\u0442\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u0432: ",l]}),Object(r.jsxs)("p",{className:"range-field ",children:["\u0421\u0438\u043b\u0430 ",Object(r.jsx)("span",{className:"right",children:k}),Object(r.jsx)("input",{type:"range",id:"force",min:"0",max:"10",value:k,step:"1",onChange:function(e){B("force",+e.target.value)}})]}),Object(r.jsxs)("p",{className:"range-field",children:["\u041b\u043e\u0432\u043a\u043e\u0441\u0442\u044c ",Object(r.jsx)("span",{className:"right",children:S}),Object(r.jsx)("input",{type:"range",id:"agility",min:"0",max:"10",value:S,step:"1",onChange:function(e){B("agility",+e.target.value)}})]}),Object(r.jsxs)("p",{className:"range-field",children:["\u0418\u043d\u0442\u0435\u043b\u0435\u043a\u0442 ",Object(r.jsx)("span",{className:"right",children:F}),Object(r.jsx)("input",{type:"range",id:"intellect",min:"0",max:"10",value:F,step:"1",onChange:function(e){B("intellect",+e.target.value)}})]}),Object(r.jsxs)("p",{className:"range-field",children:["\u0425\u0430\u0440\u0438\u0437\u043c\u0430 ",Object(r.jsx)("span",{className:"right",children:L}),Object(r.jsx)("input",{type:"range",id:"charisma",min:"0",max:"10",value:L,step:"1",onChange:function(e){B("charisma",+e.target.value)}})]}),Object(r.jsx)("input",{placeholder:"\u0418\u043c\u044f \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430",id:"first_name",type:"text",className:"validate",value:x,onChange:function(e){p(e.target.value)}}),Object(r.jsx)("label",{htmlFor:"first_name",children:"\u0418\u043c\u044f \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430"}),Object(r.jsx)("br",{}),Object(r.jsx)("button",{className:"btn green darken-1",onClick:function(){return 0===l&&0!==x.length&&(i(x,k,S,F,L),e.push("/game")),m("\u041d\u0435\u043e\u0431\u0445\u043e\u0434\u0438\u043c\u043e \u043f\u043e\u0442\u0440\u0430\u0442\u0438\u0442\u044c \u0432\u0441\u0435 \u043e\u0447\u043a\u0438 \u0430\u0442\u0442\u0440\u0438\u0431\u0443\u0442\u043e\u0432 \u0438 \u0443\u043a\u0430\u0437\u0430\u0442\u044c \u0438\u043c\u044f \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430!"),void setTimeout((function(){m("")}),1e4)},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}),Object(r.jsx)("p",{className:"error",children:o})]})})}),k=a.p+"static/media/witcher.3aee24ec.png",y=(a(36),function(){var e=Object(c.useContext)(g),t=e.hero,a=e.updateHero,i=e.getDescriptionSkill,n=e.upAttack,s=e.upStealth,j=e.upArchery,b=e.upLearnability,d=e.upSurvival,h=e.upMedicine,o=e.upBullying,m=e.upInsight,u=e.upAppearance,v=e.upManipulation,x=e.getDamage,p=e.saveHero,f=Object(c.useState)("\u0416\u0438\u0432"),N=Object(O.a)(f,2),y=N[0],_=N[1];return Object(c.useEffect)((function(){}),[t,a]),Object(r.jsx)(r.Fragment,{children:t.name?Object(r.jsxs)("div",{className:"game__wrapper",children:[Object(r.jsxs)("div",{className:"card game__info",children:[Object(r.jsxs)("div",{className:"card-image",children:[Object(r.jsx)("img",{src:k,className:"game-image",alt:"\u0422\u0443\u0442 \u0434\u043e\u043b\u0436\u043d\u0430 \u0431\u044b\u043b\u0430 \u0431\u044b\u0442\u044c \u0444\u043e\u0442\u043e \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430"}),Object(r.jsx)("p",{className:"game__status",children:y})]}),Object(r.jsxs)("div",{className:"card-stacked",children:[Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsxs)("p",{children:["\u0418\u043c\u044f: ",t.name]}),Object(r.jsx)("hr",{}),Object(r.jsxs)("div",{className:"game__attribute",children:[Object(r.jsxs)("p",{children:["\u0421\u0438\u043b\u0430: ",t.force]}),Object(r.jsxs)("p",{children:["\u041b\u043e\u0432\u043a\u043e\u0441\u0442\u044c: ",t.agility]}),Object(r.jsxs)("p",{children:["\u0418\u043d\u0442\u0435\u043b\u043b\u0435\u043a\u0442: ",t.intellect]}),Object(r.jsxs)("p",{children:["\u0425\u0430\u0440\u0438\u0437\u043c\u0430: ",t.charisma]})]}),Object(r.jsx)("hr",{}),Object(r.jsxs)("div",{className:"game__parameters",children:[Object(r.jsxs)("p",{children:["\u0416\u0438\u0437\u043d\u0435\u043d\u043d\u0430\u044f \u0441\u0438\u043b\u0430: ",t.vitality]}),Object(r.jsxs)("p",{children:["\u0423\u043a\u043b\u043e\u043d\u0435\u043d\u0438\u0435: ",t.evasion]}),Object(r.jsxs)("p",{children:["\u042d\u043d\u0435\u0440\u0433\u0438\u044f: ",t.energy]})]}),Object(r.jsx)("hr",{}),Object(r.jsxs)("div",{className:"game__skills",children:[Object(r.jsxs)("div",{className:"game__skill",children:[Object(r.jsx)("div",{className:"skill-name",children:"\u0410\u0442\u0430\u043a\u0430:"}),Object(r.jsx)("div",{className:"skill-level",children:i(t.attack)})]}),Object(r.jsxs)("div",{className:"game__skill",children:[Object(r.jsx)("div",{className:"skill-name",children:"\u0421\u0442\u0435\u043b\u0441:"}),Object(r.jsx)("div",{className:"skill-level",children:i(t.stealth)})]}),Object(r.jsxs)("div",{className:"game__skill",children:[Object(r.jsx)("div",{className:"skill-name",children:"\u0421\u0442\u0440\u0435\u043b\u044c\u0431\u0430 \u0438\u0437 \u043b\u0443\u043a\u0430:"}),Object(r.jsx)("div",{className:"skill-level",children:i(t.archery)})]}),Object(r.jsxs)("div",{className:"game__skill",children:[Object(r.jsx)("div",{className:"skill-name",children:"\u041e\u0431\u0443\u0447\u0430\u0435\u043c\u043e\u0441\u0442\u044c:"}),Object(r.jsx)("div",{className:"skill-level",children:i(t.learnability)})]}),Object(r.jsxs)("div",{className:"game__skill",children:[Object(r.jsx)("div",{className:"skill-name",children:"\u0412\u044b\u0436\u0430\u043d\u0438\u0435:"}),Object(r.jsx)("div",{className:"skill-level",children:i(t.survival)})]}),Object(r.jsxs)("div",{className:"game__skill",children:[Object(r.jsx)("div",{className:"skill-name",children:"\u041c\u0435\u0434\u0438\u0446\u0438\u043d\u0430:"}),Object(r.jsx)("div",{className:"skill-level",children:i(t.medicine)})]}),Object(r.jsxs)("div",{className:"game__skill",children:[Object(r.jsx)("div",{className:"skill-name",children:"\u0417\u0430\u043f\u0443\u0433\u0438\u0432\u0430\u043d\u0438\u0435:"}),Object(r.jsx)("div",{className:"skill-level",children:i(t.bullying)})]}),Object(r.jsxs)("div",{className:"game__skill",children:[Object(r.jsx)("div",{className:"skill-name",children:"\u041f\u0440\u043e\u043d\u0438\u0446\u0430\u043d\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c:"}),Object(r.jsx)("div",{className:"skill-level",children:i(t.insight)})]}),Object(r.jsxs)("div",{className:"game__skill",children:[Object(r.jsx)("div",{className:"skill-name",children:"\u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u0432\u0438\u0434:"}),Object(r.jsx)("div",{className:"skill-level",children:i(t.appearance)})]}),Object(r.jsxs)("div",{className:"game__skill",children:[Object(r.jsx)("div",{className:"skill-name",children:"\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435:"}),Object(r.jsx)("div",{className:"skill-level",children:i(t.manipulation)})]})]})]}),Object(r.jsxs)("div",{className:"card-action game__footer",children:[Object(r.jsx)("button",{className:"btn",onClick:function(){p()},children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430"}),Object(r.jsx)(l.b,{to:"/settings",className:"btn",children:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430"})]})]})]}),Object(r.jsx)("div",{className:"card game__actions",children:Object(r.jsx)("div",{className:"card-stacked",children:Object(r.jsxs)("div",{className:"card-content",children:[Object(r.jsx)("p",{children:"\u0422\u0440\u0435\u043d\u0438\u0440\u043e\u0432\u0430\u0442\u044c"}),Object(r.jsx)("hr",{}),Object(r.jsxs)("div",{className:"game__training",children:[Object(r.jsx)("button",{className:"btn",onClick:function(){n()},children:"\u0410\u0442\u0430\u043a\u0443"}),Object(r.jsx)("button",{className:"btn",onClick:function(){s()},children:"\u0421\u0442\u0435\u043b\u0441"}),Object(r.jsx)("button",{className:"btn",onClick:function(){j()},children:"\u041b\u0443\u043a"}),Object(r.jsx)("button",{className:"btn",onClick:function(){b()},children:"\u041e\u0431\u0443\u0447\u0430\u0435\u043c\u043e\u0441\u0442\u044c"}),Object(r.jsx)("button",{className:"btn",onClick:function(){d()},children:"\u0412\u044b\u0436\u0430\u043d\u0438\u0435"}),Object(r.jsx)("button",{className:"btn",onClick:function(){h()},children:"\u041c\u0435\u0434\u0438\u0446\u0438\u043d\u0430"}),Object(r.jsx)("button",{className:"btn",onClick:function(){o()},children:"\u0417\u0430\u043f\u0443\u0433\u0438\u0432\u0430\u043d\u0438\u0435"}),Object(r.jsx)("button",{className:"btn",onClick:function(){m()},children:"\u041f\u0440\u043e\u043d\u0438\u0446\u0430\u043d\u0435\u043b\u044c\u043d\u043e\u0441\u0442\u044c"}),Object(r.jsx)("button",{className:"btn",onClick:function(){u()},children:"\u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u0432\u0438\u0434"}),Object(r.jsx)("button",{className:"btn",onClick:function(){v()},children:"\u041c\u0430\u043d\u0438\u043f\u0443\u043b\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435"})]}),Object(r.jsx)("hr",{}),Object(r.jsx)("div",{className:"game__world",children:Object(r.jsx)("button",{className:"btn",onClick:function(){null===x()&&_("\u041f\u043e\u0433\u0438\u0431 \u0432 \u0441\u0440\u0430\u0436\u0435\u043d\u0438\u0438..")},children:"\u041f\u043e\u043b\u0443\u0447\u0435\u043d\u0438\u0435 \u0443\u0440\u043e\u043d\u0430"})})]})})})]}):Object(r.jsxs)("div",{className:"error",children:[Object(r.jsx)("h3",{children:"\u0421\u043f\u0435\u0440\u0432\u0430 \u0441\u043e\u0437\u0434\u0430\u0439\u0442\u0435 \u043f\u0435\u0440\u0441\u043e\u043d\u0430\u0436\u0430"}),Object(r.jsx)(l.b,{to:"/settings",className:"btn green darken-1",children:"\u041f\u0435\u0440\u0435\u0439\u0442\u0438 \u043a \u0441\u043e\u0437\u0434\u0430\u043d\u0438\u044e"})]})})}),_=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)("main",{className:"container content",children:Object(r.jsxs)(d.c,{children:[Object(r.jsx)(d.a,{exact:!0,path:"/",component:f}),Object(r.jsx)(d.a,{exact:!0,path:"/settings",component:N}),Object(r.jsx)(d.a,{exact:!0,path:"/game",component:y})]})})})};var C=function(){return Object(r.jsx)(r.Fragment,{children:Object(r.jsx)(l.a,{basename:"react-app-hero",children:Object(r.jsxs)(p,{children:[Object(r.jsx)(b,{}),Object(r.jsx)(_,{}),Object(r.jsx)(j,{})]})})})};s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(C,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.2e11d6a8.chunk.js.map