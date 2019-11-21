(this["webpackJsonpreact-todo-list"]=this["webpackJsonpreact-todo-list"]||[]).push([[0],{14:function(e,t,n){e.exports=n(23)},19:function(e,t,n){},20:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),o=n(11),d=n.n(o),r=(n(19),n(20),n(13)),l=n(7),c=n(2),s=n(3),u=n(5),h=n(4),p=n(1),b=n(6),m=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={todo:""},n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(b.a)(t,e),Object(s.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(l.a)({},e.target.name,e.target.value.trimStart()))}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.addTodo(this.state),this.setState({todo:""})}},{key:"render",value:function(){return i.a.createElement("div",{id:"form"},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{id:"todo",placeholder:"Enter New Todo",name:"todo",value:this.state.todo,type:"text",onChange:this.handleChange,required:!0}),i.a.createElement("button",{type:"submit"},"Add to List")))}}]),t}(a.Component),f=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).handleDelete=n.handleDelete.bind(Object(p.a)(n)),n.handleToggle=n.handleToggle.bind(Object(p.a)(n)),n.handleEdit=n.handleEdit.bind(Object(p.a)(n)),n.handleChange=n.handleChange.bind(Object(p.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(p.a)(n)),n}return Object(b.a)(t,e),Object(s.a)(t,[{key:"handleDelete",value:function(){this.props.delete(this.props.id)}},{key:"handleToggle",value:function(){this.props.toggle(this.props.id)}},{key:"handleEdit",value:function(){this.props.edit(this.props.id)}},{key:"handleChange",value:function(e){this.props.setEditContent(this.props.id,e.target.value)}},{key:"handleSubmit",value:function(e){e.preventDefault(),this.props.update(this.props.id)}},{key:"render",value:function(){var e=i.a.createElement("div",{id:"form"},i.a.createElement("form",{onSubmit:this.handleSubmit},i.a.createElement("input",{id:"todo",placeholder:"Edit Todo",name:"todo",value:this.props.todo,type:"text",onChange:this.handleChange,required:!0}),i.a.createElement("button",{type:"submit"},"Edit Todo"))),t=i.a.createElement("div",{className:"List"},i.a.createElement("p",{className:this.props.clicked?"strike":void 0,onClick:this.handleToggle},this.props.todo),i.a.createElement("span",{onClick:this.handleEdit},i.a.createElement("i",{className:"fas fa-pen"})),i.a.createElement("span",{onClick:this.handleDelete},i.a.createElement("i",{className:"far fa-trash-alt"})));return this.props.clickEdit?e:t}}]),t}(a.Component),E=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"Header"},i.a.createElement("h1",null,"Todo List!"),i.a.createElement("p",null,"A Simple React Todo List App"),i.a.createElement("hr",null))}}]),t}(a.Component),O=n(12),v=n.n(O);function j(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}var g=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(h.a)(t).call(this,e))).state={todo:[]},n.handleAddTodo=n.handleAddTodo.bind(Object(p.a)(n)),n.handleDelete=n.handleDelete.bind(Object(p.a)(n)),n.handleToggle=n.handleToggle.bind(Object(p.a)(n)),n.handleEdit=n.handleEdit.bind(Object(p.a)(n)),n.handleEditContent=n.handleEditContent.bind(Object(p.a)(n)),n.handleUpdate=n.handleUpdate.bind(Object(p.a)(n)),n}return Object(b.a)(t,e),Object(s.a)(t,[{key:"handleAddTodo",value:function(e){var t=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?j(n,!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):j(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{id:v()(),isClicked:!1,requestEdit:!1});this.setState((function(e){return{todo:[].concat(Object(r.a)(e.todo),[t])}}))}},{key:"handleUpdate",value:function(e){this.setState((function(t){return{todo:t.todo.map((function(t){return t.id===e?(t.isClicked=!1,t.requestEdit=!1,t):t}))}}))}},{key:"handleDelete",value:function(e){this.setState((function(t){return{todo:t.todo.filter((function(t){return t.id!==e}))}}))}},{key:"handleToggle",value:function(e){this.setState((function(t){return{todo:t.todo.map((function(t){return t.id===e?(t.isClicked=!t.isClicked,t):t}))}}))}},{key:"handleEditContent",value:function(e,t){this.setState((function(n){return{todo:n.todo.map((function(n){return n.id===e?(n.todo=t,n):n}))}}))}},{key:"handleEdit",value:function(e){this.setState((function(t){return{todo:t.todo.map((function(t){return t.id===e?(t.requestEdit=!t.requestEdit,t):t}))}}))}},{key:"render",value:function(){var e=this,t=this.state.todo.map((function(t){return i.a.createElement(f,{clicked:t.isClicked,todo:t.todo,id:t.id,key:t.id,toggle:e.handleToggle,edit:e.handleEdit,delete:e.handleDelete,clickEdit:t.requestEdit,setEditContent:e.handleEditContent,update:e.handleUpdate})}));return i.a.createElement("div",{className:"Ui"},i.a.createElement(E,null),t,i.a.createElement(m,{addTodo:this.handleAddTodo}))}}]),t}(a.Component);var k=function(){return i.a.createElement("div",{className:"App"},i.a.createElement(g,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));d.a.render(i.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[14,1,2]]]);
//# sourceMappingURL=main.c7089ee1.chunk.js.map