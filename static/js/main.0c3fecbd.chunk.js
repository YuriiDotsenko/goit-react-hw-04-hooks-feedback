(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),a=n(4),i=n.n(a),r=n(2),o=(n(9),n(10),n(0)),l=function(e){var t=e.good,n=e.neutral,c=e.bad,s=e.total,a=e.percentage;return Object(o.jsxs)("ul",{className:"Stats",children:[Object(o.jsx)("li",{children:Object(o.jsxs)("span",{children:["Good: ",Object(o.jsx)("span",{children:t})]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("span",{children:["Neutral: ",Object(o.jsx)("span",{children:n})]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("span",{children:["Bad: ",Object(o.jsx)("span",{children:c})]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("span",{children:["Total: ",Object(o.jsx)("span",{children:s()})]})}),Object(o.jsx)("li",{children:Object(o.jsxs)("span",{children:["Positive feedback: ",Object(o.jsx)("span",{children:"".concat(a(),"%")})]})})]})},j=(n(12),function(e){var t=e.handleClickOnBtn,n=e.options;return Object(o.jsx)("div",{className:"btn__Container",children:n.map((function(e,n){return Object(o.jsx)("button",{type:"button",onClick:function(){return t(e)},children:e},n)}))})}),d=(n(13),function(e){var t=e.title,n=e.children;return Object(o.jsxs)("section",{className:"Section",children:[Object(o.jsx)("h1",{className:"Title",children:t}),n]})});d.defaultProps={title:"",children:[]};var b=d,u=function(e){var t=e.message;return Object(o.jsx)("p",{children:t})};u.defayltProps={message:"Oops, something went wrong here :("};var h=u,O=function(e){var t=e.handleClickOnBtn,n=e.countTotalFeedback,c=e.countPositiveFeedbackPercentage,s=e.good,a=e.neutral,i=e.bad;return Object(o.jsxs)(b,{title:"Please, leave your feedback here: ",children:[Object(o.jsx)(j,{handleClickOnBtn:t,options:["good","neutral","bad"]}),Object(o.jsx)("h2",{className:"Statistic__title",children:"Statistics"}),0===n()?Object(o.jsx)(h,{message:"No feedback given"}):Object(o.jsx)(l,{good:s,neutral:a,bad:i,total:n,percentage:c})]})},x=function(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],s=t[1],a=Object(c.useState)(0),i=Object(r.a)(a,2),l=i[0],j=i[1],d=Object(c.useState)(0),b=Object(r.a)(d,2),u=b[0],h=b[1],x={good:function(){s((function(e){return e+1}))},neutral:function(){j((function(e){return e+1}))},bad:function(){h((function(e){return e+1}))}},f=function(){return n+l+u};return Object(o.jsx)("div",{children:Object(o.jsx)(O,{handleClickOnBtn:x,countTotalFeedback:f,countPositiveFeedbackPercentage:function(){return(n/f()*100).toFixed(2)},good:n,neutral:l,bad:u})})};i.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(x,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.0c3fecbd.chunk.js.map