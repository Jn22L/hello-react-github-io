(this["webpackJsonphello-react-github-io"]=this["webpackJsonphello-react-github-io"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(8),r=n.n(i),l=(n(14),n(6)),c=n(1),h=n(2),d=n(4),s=n(3),u=n(5),m=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={name:"",phone:""},e.handleChange=function(t){e.setState(Object(u.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.onCreate(e.state),e.setState({name:"",phone:""})},e}return Object(h.a)(n,[{key:"render",value:function(){return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{placeholder:"\uc774\ub984",value:this.state.name,onChange:this.handleChange,name:"name"}),o.a.createElement("input",{placeholder:"\uc804\ud654\ubc88\ud638",value:this.state.phone,onChange:this.handleChange,name:"phone"}),o.a.createElement("button",{type:"submit"},"\ub4f1\ub85d"))}}]),n}(a.Component),p=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={editing:!1,name:"",phone:""},e.handleRemove=function(){var t=e.props,n=t.info;(0,t.onRemove)(n.id)},e.handleToggleEdit=function(){var t=e.state.editing;e.setState({editing:!t})},e.handleChange=function(t){var n=t.target,a=n.name,o=n.value;e.setState(Object(u.a)({},a,o))},e}return Object(h.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return console.log("shouldComponentUpdate PhoneInfo"),!(!this.state.editing&&!t.editing&&e.info===this.props.info)}},{key:"componentDidUpdate",value:function(e,t){console.log("componentDidUpdate PhoneInfo");var n=this.props,a=n.info,o=n.onUpdate;!t.editing&&this.state.editing&&this.setState({name:a.name,phone:a.phone}),t.editing&&!this.state.editing&&o(a.id,{name:this.state.name,phone:this.state.phone})}},{key:"render",value:function(){console.log("render PhoneInfo "+this.props.info.id);var e={border:"1px solid black",padding:"8px",margin:"8px"};if(this.state.editing)return o.a.createElement("div",{style:e},o.a.createElement("div",null,o.a.createElement("input",{value:this.state.name,name:"name",placeholder:"\uc774\ub984",onChange:this.handleChange})),o.a.createElement("div",null,o.a.createElement("input",{value:this.state.phone,name:"phone",placeholder:"\uc804\ud654\ubc88\ud638",onChange:this.handleChange})),o.a.createElement("button",{onClick:this.handleToggleEdit},"\uc801\uc6a9"),o.a.createElement("button",{onClick:this.handleRemove},"\uc0ad\uc81c"));var t=this.props.info,n=t.name,a=t.phone;return o.a.createElement("div",{style:e},o.a.createElement("div",null,o.a.createElement("b",null,n)),o.a.createElement("div",null,a),o.a.createElement("button",{onClick:this.handleToggleEdit},"\uc218\uc815"),o.a.createElement("button",{onClick:this.handleRemove},"\uc0ad\uc81c"))}}]),n}(a.Component);p.defaultProps={info:{name:"\uc774\ub984",phone:"010-0000-0000",id:0}};var f=p,v=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return console.log("shouldComponentUpdate PhoneInfoList"),e.data!==this.props.data}},{key:"render",value:function(){console.log("render PhoneInfoList");var e=this.props,t=e.data,n=e.onRemove,a=e.onUpdate,i=t.map((function(e){return o.a.createElement(f,{key:e.id,info:e,onRemove:n,onUpdate:a})}));return o.a.createElement("div",null,i)}}]),n}(a.Component);v.defaultProps={list:[],onRemove:function(){return console.warn("onRemove not defined")},onUpdate:function(){return console.warn("onUpdate not defined")}};var g=v,b=function(e){Object(d.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).id=2,e.state={information:[{id:0,name:"\uc18c\uace0\uae30",phone:"010-0000-0000",addr:"\uc6d4\ud3c9\ub3d9"},{id:1,name:"\uc0bc\uacb9\uc0b4",phone:"010-0000-0001",addr:"\uc0bc\uc131\ub3d9"},{id:2,name:"\ubbf8\uc5ed\uad6d",phone:"010-0000-0000",addr:"\uac08\ub9c8\ub3d9"}],keyword:""},e.handleChange=function(t){e.setState({keyword:t.target.value})},e.handleCreate=function(t){var n=e.state.information;e.setState({information:n.concat(Object(l.a)({id:e.id++},t))})},e.handleRemove=function(t){var n=e.state.information;e.setState({information:n.filter((function(e){return e.id!==t}))})},e.handleUpdate=function(t,n){var a=e.state.information;e.setState({information:a.map((function(e){return t===e.id?Object(l.a)(Object(l.a)({},e),n):e}))})},e}return Object(h.a)(n,[{key:"render",value:function(){console.log("render App");var e=this.state,t=e.information,n=e.keyword,a=t.filter((function(e){return-1!==e.name.indexOf(n)}));return o.a.createElement("div",null,o.a.createElement(m,{onCreate:this.handleCreate}),o.a.createElement("p",null,o.a.createElement("input",{placeholder:"\uac80\uc0c9 \ud560 \uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694..",onChange:this.handleChange,value:n})),o.a.createElement("hr",null),o.a.createElement(g,{data:a,onRemove:this.handleRemove,onUpdate:this.handleUpdate}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,n){e.exports=n(15)}},[[9,1,2]]]);
//# sourceMappingURL=main.9922b4db.chunk.js.map