(window["webpackJsonpgoit-react-hw-02-bank-account"]=window["webpackJsonpgoit-react-hw-02-bank-account"]||[]).push([[0],{13:function(e,t,n){e.exports={balance:"Balance_balance__FKW4s"}},14:function(e,t,n){e.exports={history:"TransactionHistory_history__2YyWN"}},15:function(e,t,n){e.exports={dashboard:"Dashboard_dashboard__2F9IR"}},20:function(e,t,n){e.exports=n(34)},25:function(e,t,n){},26:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),o=n(2),c=n.n(o),l=(n(25),n(26),n(7)),i=n(10),s=n(11),u=n(18),m=n(12),d=n(19),p=n(5),h=n.n(p),b=n(6),f=(n(29),n(4)),E=n.n(f),w=function(e){var t=e.handleDeposit,n=e.handleWithdraw;return r.a.createElement("section",{className:E.a.controls},r.a.createElement("input",{type:"number",min:"0",name:"amount"}),r.a.createElement("button",{onClick:function(e){return t(e)},type:"button",className:E.a.button},"Deposit"),r.a.createElement("button",{onClick:function(e){return n(e)},type:"button",className:E.a.button},"Withdraw"))},v=n(13),y=n.n(v),g=function(e){var t=e.income,n=e.expense,a=e.balance;return r.a.createElement("section",{className:y.a.balance},r.a.createElement("span",null,r.a.createElement("span",{role:"img","aria-label":"arrow-up"},"\u2b06\ufe0f"),t,"$"),r.a.createElement("span",null,r.a.createElement("span",{role:"img","aria-label":"arrow-down"},"\u2b07\ufe0f"),n,"$"),r.a.createElement("span",null,"Balance: ",a,"$"))},_=n(14),k=n.n(_),D=function(e){return e.transactions.map((function(e){var t=e.id,n=e.type,a=e.amount,o=e.date;return r.a.createElement("tr",{key:t},r.a.createElement("td",null,n),r.a.createElement("td",null,a,"$"),r.a.createElement("td",null,o))}))};D.defaultProps={transactions:[]};var W=function(e){var t=e.transactions;return r.a.createElement("table",{className:k.a.history},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Transaction"),r.a.createElement("th",null,"Amount"),r.a.createElement("th",null,"Date"))),r.a.createElement("tbody",null,r.a.createElement(D,{transactions:t})))},x=n(15),N=n.n(x),j=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={income:0,expense:0,balance:0,transactions:[]},n.componentDidMount=function(){b.a.configure()},n.notify=function(e){return Object(b.a)(e)},n.handleDeposit=function(e){var t=Number(e.target.parentElement.firstElementChild.value);if(t){var a={id:h()(),type:"Deposit",amount:t,date:(new Date).toLocaleString("uk")};n.setState((function(e){return{income:e.income+=t,balance:e.balance+=t,transactions:[].concat(Object(l.a)(e.transactions),[a])}}))}else n.notify("Please enter amount")},n.handleWithdraw=function(e){var t=Number(e.target.parentElement.firstElementChild.value);if(t){var a=n.state.balance;if(t>a)return void n.notify("Not enough funds on your acoount");var r={id:h()(),type:"Withdrawal",amount:t,date:(new Date).toLocaleString("uk")};n.setState((function(e){return{expense:e.expense+=t,balance:e.balance-=t,transactions:[].concat(Object(l.a)(e.transactions),[r])}}))}else n.notify("Please enter amount")},n}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.state,t=e.income,n=e.expense,a=e.balance,o=e.transactions;return r.a.createElement("div",{className:N.a.dashboard},r.a.createElement(w,{handleDeposit:this.handleDeposit,handleWithdraw:this.handleWithdraw}),r.a.createElement(g,{income:t,expense:n,balance:a}),r.a.createElement(W,{transactions:o}))}}]),t}(a.Component);var O=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(j,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},4:function(e,t,n){e.exports={controls:"Controls_controls__3aurQ",button:"Controls_button__1WWDI"}}},[[20,1,2]]]);
//# sourceMappingURL=main.005919e5.chunk.js.map