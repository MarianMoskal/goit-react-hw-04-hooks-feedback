(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],{17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a,r=n(1),c=n.n(r),o=n(5),i=n.n(o),d=(n(17),n(6)),s=n(7),l=n(8),b=n(11),j=n(10),u=n(2),h=n(3),g=h.a.button(a||(a=Object(u.a)(["\n  width: 80px;\n  padding: 8px;\n  border: none;\n  border-radius: 50%;\n  cursor: pointer;\n  font-weight: 500;\n  color: blue;\n  background-color: yellow;\n  &:not(:last-of-type) {\n    margin-right: 20px;\n  }\n"]))),O=n(0);var v,x,f=function(e){var t=e.eventHandler,n=e.name;return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(g,{id:"good",type:"button",onClick:t,children:n[0]}),Object(O.jsx)(g,{id:"neutral",type:"button",onClick:t,children:n[1]}),Object(O.jsx)(g,{id:"bad",type:"button",onClick:t,children:n[2]})]})},p=h.a.div(v||(v=Object(u.a)(["\n  text-align: center;\n  background-color: yellowgreen;\n  padding: 20px;\n"])));h.a.h1(x||(x=Object(u.a)([""])));var k,y,w=function(e){var t=e.title,n=e.children;return Object(O.jsxs)(p,{children:[t&&Object(O.jsx)("h1",{children:t}),n]})},m=h.a.div(k||(k=Object(u.a)(["\n  text-align: center;\n  font-weight: 600;\n  background-color: yellowgreen;\n"]))),P=h.a.p(y||(y=Object(u.a)(["\n  font-weight: 700;\n"])));var N=function(e){var t=e.good,n=e.neutral,a=e.bad,r=e.total,c=e.positivePercentage;return Object(O.jsxs)(m,{children:[0===r&&Object(O.jsx)("h3",{children:"No feedback given"}),r>0&&Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(P,{children:["Good: ",t]}),Object(O.jsxs)(P,{children:["Neutral: ",n]}),Object(O.jsxs)(P,{children:["Bad: ",a]}),Object(O.jsxs)(P,{children:["Total: ",r]}),Object(O.jsxs)(P,{children:["Positive feedback: ",c,"%"]})]})]})},C={good:0,neutral:0,bad:0},F=function(e){Object(b.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state=C,e.keyNames=Object.keys(e.state),e.onLeaveFeedback=function(t){var n=t.target.id;e.setState((function(e){return Object(d.a)({},n,e[n]+1)}))},e.countTotal=function(){var t=e.state;return t.good+t.neutral+t.bad},e.countPositivePercentage=function(){return Number(Math.round(e.state.good/e.countTotal()*100))},e}return Object(l.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,r=this.countTotal(),c=this.countPositivePercentage();return Object(O.jsxs)(w,{title:"Please leave feedback",children:[Object(O.jsx)(f,{name:this.keyNames,eventHandler:this.onLeaveFeedback}),Object(O.jsx)(N,{good:t,neutral:n,bad:a,total:r,positivePercentage:c})]})}}]),n}(r.Component),T=F;i.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(T,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.041d05fd.chunk.js.map