(this["webpackJsonpmy-app10"]=this["webpackJsonpmy-app10"]||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),o=n(6),r=n.n(o),i=(n(13),n(7)),m=n(1),l=n(2),s=n(4),u=n(3),p=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("input",{type:"text",placeholder:"enter comment",ref:this.props.commentRef}),a.a.createElement("button",{onClick:this.props.handleClick},"Add comment"))}}]),n}(c.Component),h=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){return Object(m.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return a.a.createElement("div",null,this.props.comments.map((function(e,t){return a.a.createElement("div",null,e)})))}}]),n}(c.Component),f=function(e){Object(s.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).state={comments:[]},e.commentRef=Object(c.createRef)(),e.handleClick=function(){e.setState({comments:[].concat(Object(i.a)(e.state.comments),[e.commentRef.current.value])})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){console.log("useeffect:"+this.state.comments)}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement(p,{handleClick:this.handleClick,commentRef:this.commentRef}),a.a.createElement(h,{comments:this.state.comments}))}}]),n}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(f,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.68216191.chunk.js.map