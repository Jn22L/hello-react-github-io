(this["webpackJsonphello-react-github-io"]=this["webpackJsonphello-react-github-io"]||[]).push([[0],{21:function(e,t,n){e.exports=n(44)},44:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),i=n(19),r=n.n(i),l=n(8),c=n(9),s=n.n(c),u=n(20),h=n(2),d=n(3),m=n(5),p=n(4),f=n(7),g=n.n(f),v=n(6),b=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={name:"",phone:""},e.handleChange=function(t){e.setState(Object(v.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.onCreate(e.state),e.setState({name:"",phone:""})},e.handleSaveDB=function(t){t.preventDefault(),window.confirm("\uc800\uc7a5\ud560\uae4c\uc694?")&&e.props.onSaveDB(e.state)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.state.name;return o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("input",{placeholder:"\uc774\ub984",value:this.state.name,onChange:this.handleChange,name:"name"}),o.a.createElement("input",{placeholder:"\uc804\ud654\ubc88\ud638",value:this.state.phone,onChange:this.handleChange,name:"phone"}),o.a.createElement("button",{type:"submit"},"\ub4f1\ub85d"),"iloveu"!==e?o.a.createElement("div",null):o.a.createElement("button",{onClick:this.handleSaveDB},"DB\uc800\uc7a5"))}}]),n}(a.Component),k=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={editing:!1,name:"",phone:""},e.handleRemove=function(){var t=e.props,n=t.info;(0,t.onRemove)(n.id)},e.handleToggleEdit=function(){var t=e.state.editing;e.setState({editing:!t})},e.handleChange=function(t){var n=t.target,a=n.name,o=n.value;e.setState(Object(v.a)({},a,o))},e}return Object(d.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return console.log("shouldComponentUpdate PhoneInfo"),!(!this.state.editing&&!t.editing&&e.info===this.props.info)}},{key:"componentDidUpdate",value:function(e,t){console.log("componentDidUpdate PhoneInfo");var n=this.props,a=n.info,o=n.onUpdate;!t.editing&&this.state.editing&&this.setState({name:a.name,phone:a.phone}),t.editing&&!this.state.editing&&o(a.id,{name:this.state.name,phone:this.state.phone})}},{key:"render",value:function(){console.log("render PhoneInfo "+this.props.info.id);var e={border:"1px solid black",padding:"8px",margin:"8px"};if(this.state.editing)return o.a.createElement("div",{style:e},o.a.createElement("div",null,o.a.createElement("input",{value:this.state.name,name:"name",placeholder:"\uc774\ub984",onChange:this.handleChange})),o.a.createElement("div",null,o.a.createElement("input",{value:this.state.phone,name:"phone",placeholder:"\uc804\ud654\ubc88\ud638",onChange:this.handleChange})),o.a.createElement("button",{onClick:this.handleToggleEdit},"\uc801\uc6a9"),o.a.createElement("button",{onClick:this.handleRemove},"\uc0ad\uc81c"));var t=this.props.info,n=t.name,a=t.phone;return o.a.createElement("div",{style:e},o.a.createElement("div",null,o.a.createElement("b",null,n)),o.a.createElement("div",null,a),o.a.createElement("button",{onClick:this.handleToggleEdit},"\uc218\uc815"),o.a.createElement("button",{onClick:this.handleRemove},"\uc0ad\uc81c"))}}]),n}(a.Component);k.defaultProps={info:{name:"\uc774\ub984",phone:"010-0000-0000",id:0}};var C=k,y=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){return Object(h.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"shouldComponentUpdate",value:function(e,t){return console.log("shouldComponentUpdate PhoneInfoList"),e.data!==this.props.data}},{key:"render",value:function(){console.log("render PhoneInfoList");var e=this.props,t=e.data,n=e.onRemove,a=e.onUpdate,i=t.map((function(e){return o.a.createElement(C,{key:e.id,info:e,onRemove:n,onUpdate:a})}));return o.a.createElement("div",null,i)}}]),n}(a.Component);y.defaultProps={list:[],onRemove:function(){return console.warn("onRemove not defined")},onUpdate:function(){return console.warn("onUpdate not defined")}};var E=y,j=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(e){var a;return Object(h.a)(this,n),(a=t.call(this,e)).handleKeyClick=function(e,t){e.preventDefault(),a.props.onKeyClick(t)},a.handleDelete=function(e,t){e.preventDefault(),window.confirm("\uc815\ub9d0 \uc0ad\uc81c\ud560\uae4c\uc694?")&&a.props.onDeleteClick(t)},a.handleDoubleClick=function(e){a.canDeleteCount=a.canDeleteCount+1,a.canDeleteCount>=3&&a.setState({isMaster:!0})},a.getLocalTime=function(e){var t=e.substring(11,15),n=e.substring(15,17)-1,a=e.substring(17,19),o=e.substring(20,22),i=e.substring(23,25),r=e.substring(26,28),l=new Date(t,n,a,o,i,r);return l.setHours(l.getHours()+9),l.toLocaleString()},a.canDeleteCount=0,a.state={isMaster:!1,items:[]},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=(t.items,t.isMaster),a=this.props,i=a.isLoading,r=a.data;return o.a.createElement("div",null,o.a.createElement("div",{onDoubleClick:function(t){return e.handleDoubleClick(t)}},"\u25b6 \uc1fc\ud551 \uc774\ub825 "),i?"\uc1fc\ud551\uc774\ub825 \uc870\ud68c\uc911 \uc785\ub2c8\ub2e4 ...":r.map((function(t,a){return o.a.createElement("li",{key:a},o.a.createElement("a",{href:"/",onClick:function(n){return e.handleKeyClick(n,t)},"data-dbkey":t},e.getLocalTime(t)),n?o.a.createElement("button",{onClick:function(n){return e.handleDelete(n,t)}},"\uc0ad\uc81c"):o.a.createElement("div",null))})))}}]),n}(a.Component),D=function(e){Object(m.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(h.a)(this,n);for(var a=arguments.length,o=new Array(a),i=0;i<a;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).id=2,e.state={information:[{id:0,name:"\ud488\ubaa91",phone:"010-0000-0000"},{id:1,name:"\ud488\ubaa92",phone:"010-0000-0001"}],keyword:"",my_key_list:[],isLoading:!0},e.getHistory=Object(u.a)(s.a.mark((function t(){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:g.a.get("https://jn22l.herokuapp.com/getKeys").then((function(t){200===t.status&&(console.log("getHeroku : res_data",t),e.setState({isLoading:!1,my_key_list:t.data})),console.log("getHeroku~: res_data",t)})).catch((function(e){console.error("getHeroku error",e)}));case 1:case"end":return t.stop()}}),t)}))),e.handleKeyClick=function(t){g.a.post("https://jn22l.herokuapp.com/getValue",t).then((function(t){200===t.status&&(console.log("handleKeyClick",t.data.information),e.setState({isLoading:!1,information:t.data.information}),0!==t.data.information.length?e.id=t.data.information[t.data.information.length-1].id+1:e.id=0)})).catch((function(e){console.error(e)})),console.log("handleKeyClick \ub05d")},e.handleSaveDB=function(){var t=e.state.information;g.a.post("https://jn22l.herokuapp.com/save",{information:t}).then((function(t){console.log(t.data),e.getHistory()}))},e.handleDelete=function(t){g.a.post("https://jn22l.herokuapp.com/delKey",t).then((function(t){200===t.status&&(console.log("handleDeleteDB",t),e.getHistory())})).catch((function(e){console.error(e)})),console.log("handleKeyClick \ub05d")},e.handleChange=function(t){e.setState({keyword:t.target.value})},e.handleChange=function(t){e.setState({keyword:t.target.value})},e.handleCreate=function(t){var n=e.state.information;e.setState({information:n.concat(Object(l.a)({id:e.id++},t))})},e.handleRemove=function(t){var n=e.state.information;e.setState({information:n.filter((function(e){return e.id!==t}))})},e.handleUpdate=function(t,n){var a=e.state.information;e.setState({information:a.map((function(e){return t===e.id?Object(l.a)(Object(l.a)({},e),n):e}))})},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getHistory()}},{key:"render",value:function(){console.log("render App");var e=this.state,t=e.information,n=e.keyword,a=e.my_key_list,i=e.isLoading,r=t.filter((function(e){return-1!==e.name.indexOf(n)}));return o.a.createElement("div",null,o.a.createElement(b,{onCreate:this.handleCreate,onSaveDB:this.handleSaveDB}),o.a.createElement("p",null,o.a.createElement("input",{placeholder:"\uac80\uc0c9 \ud560 \uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694..",onChange:this.handleChange,value:n})),o.a.createElement("hr",null),o.a.createElement(E,{data:r,onRemove:this.handleRemove,onUpdate:this.handleUpdate}),o.a.createElement(j,{data:a,onKeyClick:this.handleKeyClick,onDeleteClick:this.handleDelete,isLoading:i}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.bbb7c91a.chunk.js.map