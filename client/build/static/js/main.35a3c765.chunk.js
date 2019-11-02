(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{203:function(e,t,a){e.exports=a(442)},234:function(e,t,a){},235:function(e,t,a){},264:function(e,t,a){},268:function(e,t,a){},269:function(e,t,a){},270:function(e,t,a){},271:function(e,t,a){},272:function(e,t,a){},273:function(e,t,a){},442:function(e,t,a){"use strict";a.r(t);a(204);var n=a(0),r=a.n(n),c=a(49),s=a.n(c),i=a(36),l=a(50),o=a(194),m=a(4),u=a(5),d=a(7),p=a(6),h=a(8),f=a(445),v=a(446),E=(a(127),a(195),a(42)),j=a.n(E),b=j.a.create({baseURL:"http://localhost:5000/",withCredentials:!1}),g=a(68),y=function(){return function(e){e({type:"request_projects"}),b.get("/api/projects").then(function(t){return e({type:"receive_projects",payload:t.data})}).catch(function(e){return console.log(e)})}},k=function(e){return function(t){t({type:"admin_update_preview",payload:e})}},O=(a(234),a(235),a(128)),C=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"buttonMouseInteraction",value:function(e){for(var t=0,a=0,n=e.target;n;)t+=parseInt(n.offsetTop),a+=parseInt(n.offsetLeft),n=n.offsetParent;var r=e.pageX-a,c=e.pageY-t,s=e.target.querySelector("span");s&&s.setAttribute("style","top:"+c+"px;left:"+r+"px;")}},{key:"render",value:function(){var e=Object(O.css)({color:this.props.defaultColor,border:"1px solid "+this.props.defaultColor,":hover":{color:this.props.activeColor},".active":{color:this.props.activeColor}}),t=Object(O.css)({backgroundColor:this.props.defaultColor,top:this.props.footerFix?"0!important":""});return r.a.createElement("div",{"data-cursor":"hover"},r.a.createElement("a",Object.assign({onMouseEnter:this.buttonMouseInteraction,onMouseLeave:this.buttonMouseInteraction,onClick:this.props.onClick,className:"cursor-button"},e),""!==this.props.icon?this.props.icon:"",this.props.children,r.a.createElement("span",t)))}}]),t}(n.Component),N=(a(264),a(30)),w=a(31),P=a(80),S=a.n(P),L=a(81),I=a.n(L),_=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"scrollToForm",value:function(){window.scrollBy({top:document.getElementById("root").scrollHeight,left:0,behavior:"smooth"})}},{key:"render",value:function(){return r.a.createElement("div",{className:"about-section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row flex"},r.a.createElement("div",{className:"title valign-wrapper col m6 hide-on-small-only"},r.a.createElement("div",{className:"profile-picture"},r.a.createElement("img",{src:"/images/programming_code_2.svg",alt:"avatar"}))),r.a.createElement("div",{className:"content valign-wrapper col s12 m6"},r.a.createElement("div",{className:"summary"},r.a.createElement("div",{className:"summary-text"},"Corentin Chapatte"),r.a.createElement("div",{className:"summary-subtext"},"junior full-stack developer"),r.a.createElement("div",{className:"social-contact"},r.a.createElement("div",{className:"social","data-cursor":"hover"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/corentin-chapatte-684234160/",alt:"linkedIn"},r.a.createElement("img",{alt:"LinkedIn",src:I.a})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/corentinchap"},r.a.createElement("img",{alt:"Github",src:S.a}))),r.a.createElement("div",{className:"contact wrap"},r.a.createElement(C,{onClick:this.scrollToForm,defaultColor:"#fff",activeColor:"#174ffc"},"Get in touch"))))))),r.a.createElement("span",{className:"scroll-indicator"},r.a.createElement(N.a,{icon:w.a})))}}]),t}(n.Component),x=a(16),T=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={selectedProjectIndex:0},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"removeProjectDOM",value:function(e){document.getElementById("delete-card-"+e).parentElement.remove()}},{key:"deleteProject",value:function(e,t,a){var n=this;e.preventDefault(),j.a.post("/api/projects/delete/"+t).then(function(e){n.removeProjectDOM(a)}).catch(function(e){alert("Error deleting project :"+e)})}},{key:"renderList",value:function(){var e=this;try{return this.props.projects.map(function(t,a){var n="card",c=r.a.createElement("span",{id:"delete-card-"+a,onClick:function(t){return e.deleteProject(t,a)},className:"project-delete-button z-depth-2"},"X");return a===e.props.selectedProjectIndex&&(n+=" selected"),r.a.createElement("div",{key:t._id},r.a.createElement("div",{className:"col s12 m6","data-cursor":"action-see"},r.a.createElement("div",{className:n,"pj-index":a},e.props.enableEdits?c:"",r.a.createElement("div",{onClick:function(t){return e.props.onProjectClick(t)},className:"card-content"},t.name))))})}catch(t){console.log("Error while mappings projects"+t)}}},{key:"render",value:function(){return r.a.createElement("div",{id:"projects-list",className:"projects row"},this.renderList())}}]),t}(n.Component);var M=function(e){var t=e.data,a=t.author,n=t.authorOccupation,c=t.projectUrl,s=t.quote,i=t.avatar;return r.a.createElement("div",{className:"testimonial"+(e.display?" show":"")},r.a.createElement("blockquote",{className:"testimonial-quote"},r.a.createElement("span",{dangerouslySetInnerHTML:{__html:s}}),r.a.createElement("div",{className:"testimonial-author"},"\u2013 ",a,r.a.createElement("span",null,n)),r.a.createElement("div",{className:"website-link"},c)),r.a.createElement("div",{className:"testimonial-picture hide-on-med-and-down"},r.a.createElement("img",{src:i,alt:"testimonial-avatar"})))};var F=function(e){var t=e.data,a=t.url,n=t.titleUrl;return r.a.createElement("div",{className:"browser-frame z-depth-3"+(e.display?" show":"")},r.a.createElement("div",{className:"browser-controls"},r.a.createElement("div",{className:"window-controls"},r.a.createElement("span",{className:"close"}),r.a.createElement("span",{className:"minimise"}),r.a.createElement("span",{className:"maximise"})),r.a.createElement("span",{className:"url-bar white-container"},n)),r.a.createElement("img",{src:a,alt:"undefined"}))};var U=function(e){switch(e.type){case"testimonial":return r.a.createElement(M,{display:e.display,data:e.data});case"project":return r.a.createElement(F,{display:e.display,data:e.data})}};var q=function(e){var t=e.onClick,a=e.content,n=e.direction;return"left"===n?r.a.createElement("span",{"data-cursor":"action-prev",className:"control-left",onClick:t},r.a.createElement("i",null,r.a.createElement(N.a,{icon:w.b})," "),r.a.createElement("span",{className:"hide-on-small-down"},a)):"right"===n?r.a.createElement("span",{"data-cursor":"action-next",className:"control-right",onClick:t},r.a.createElement("span",{className:"hide-on-small-down"},a),r.a.createElement("i",null,r.a.createElement(N.a,{icon:w.c}))):void 0},D=(a(268),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).nextSlide=function(){var e=a.state.selected;e===a.state.nbrSlide?a.setState({selected:0}):a.setState({selected:e+1})},a.prevSlide=function(){var e=a.state.selected;0===e?a.setState({selected:a.state.nbrSlide}):a.setState({selected:e-1})},a.renderSelector=function(){var e,t=[];for(e=0;e<a.props.data.length;e++)t.push(a.selectable(e));return r.a.createElement("ul",{className:"selector"},t)},a.selectable=function(e){return r.a.createElement("li",{className:e===a.state.selected?"selected":"",key:e,onClick:function(){return a.setState({selected:e})}})},a.state={selected:0,nbrSlide:a.props.data.length-1},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return 0!==this.props.data.length?r.a.createElement("div",{className:"slider"},r.a.createElement("div",{className:"slider-wrapper"},r.a.createElement(q,{direction:"right",onClick:this.nextSlide}),"undefined"!=typeof this.props.data&&this.props.data.map(function(t,a){return a===e.state.selected?r.a.createElement(U,{display:!0,key:a,type:e.props.type,data:t}):r.a.createElement(U,{display:!1,key:a,type:e.props.type,data:t})}),r.a.createElement(q,{direction:"left",onClick:this.prevSlide}),this.renderSelector())):r.a.createElement("div",null)}}]),t}(n.Component));D.defaultProps={type:"testimonial"};var A=D,B=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){this.props.showProjectId!==this.props.project._id&&this.render()}},{key:"render",value:function(){var e=this.props.project,t=e.name,a=e.tags,n=e.description,c=e.images,s=e.url,i=e.gitUrl;return r.a.createElement("div",{className:this.props.showProjectId===this.props.project._id?"project-details selected":"project-details"},r.a.createElement("div",{className:"project-content"},r.a.createElement("div",{className:"project-title"},r.a.createElement("h1",null,t)),r.a.createElement("div",{className:"project-tags"},r.a.createElement("span",null,"technologies used : "),a.map(function(e,t){return r.a.createElement("span",{key:t},e)})),r.a.createElement("div",{className:"project-body"},n,r.a.createElement("div",{className:"cta"},s.length>0&&r.a.createElement(C,{defaultColor:"#1e1d28",activeColor:"#fe9b34",onClick:function(){return window.open(s,"_blank")},icon:r.a.createElement(N.a,{icon:w.f})},r.a.createElement("div",{className:"inner-text"},"website")),r.a.createElement(C,{activeColor:"white",defaultColor:"#fe9b34",onClick:function(){return window.open(i,"_blank")},icon:r.a.createElement(N.a,{icon:w.d})},r.a.createElement("div",{className:"inner-text"},"code"))),r.a.createElement(A,{type:"project",data:c}))))}}]),t}(n.Component),H=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"renderConditionnalLoader",value:function(){if(this.props.isLoading){for(var e=[],t=0;t<this.props.numberOfCards;t++)e.push(r.a.createElement("div",{key:t,"data-cursor":"action",className:"card-panel"},r.a.createElement("div",{className:"animated-loader"},"\xa0")));return e}return this.props.children}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderConditionnalLoader())}}]),t}(n.Component);H.defaultProps={isLoading:!0,numberOfCards:1};var X=H,Y=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).changeProject=function(e){var t=a.props.data.projects;return-1===e?e=t.length-1:e===t.length&&(e=0),a.setState({selectedProjectId:t[e]._id}),e},a.state={selectedProjectIndex:0,selectedProjectId:"5cc06b5d2197c42b1c7de3ce"},a.onProjectClickList=a.onProjectClickList.bind(Object(x.a)(Object(x.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"onProjectClickList",value:function(e){var t=e.target.parentNode.getAttribute("pj-index");document.querySelector("#projects-list .card.selected").classList.remove("selected"),document.querySelector('#projects-list .card[pj-index="'+t+'"]').classList.add("selected"),this.changeProject(t)}},{key:"renderProjectDetails",value:function(){var e=this;try{return this.props.projects.map(function(t,a){return r.a.createElement("div",{key:a},r.a.createElement(B,{project:t,showProjectId:e.state.selectedProjectId}))})}catch(t){console.log("Projects not available")}}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"work-section"},r.a.createElement("div",{className:"container fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement("h1",null,"click to see details on some of my projects"),r.a.createElement(X,{isLoading:this.props.data.isLoading,numberOfCards:3},r.a.createElement(T,{projects:this.props.data.projects,onProjectClick:this.onProjectClickList,selectedProjectIndex:this.state.selectedProjectIndex,enableEdits:!1}))),r.a.createElement("div",{className:"col m12 right-align"},r.a.createElement(X,{isLoading:this.props.data.isLoading},this.props.data.projects.map(function(t,a){return r.a.createElement("div",{key:a},r.a.createElement(B,{project:t,showProjectId:e.state.selectedProjectId}))}))))))}}]),t}(n.Component),z=(a(269),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).setCoordinates=function(e){a.clientX=e.clientX,a.clientY=e.clientY},a.initCursor=function(){document.addEventListener("mousemove",function(e){return a.setCoordinates(e)});requestAnimationFrame(function e(){a.cursor.style.transform="translate(".concat(a.clientX-26,"px, ").concat(a.clientY-26,"px)"),requestAnimationFrame(e)})},a.state={cursorType:"ring",cursorElement:void 0},a.clientX=-100,a.clientY=-100,a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.cursor=document.getElementById("cursor"),this.initCursor(),setTimeout(function(){var e=this;document.querySelectorAll("[data-cursor]").forEach(function(t){"cursor"!==t.id&&e.registerMouseEvent(t)})}.bind(this),3e3)}},{key:"render",value:function(){if("action"===this.state.cursorType.substr(0,6))var e=this.state.cursorType.substr(7);return r.a.createElement("div",{id:"cursor","data-cursor":this.state.cursorType},r.a.createElement("div",{className:"wrapper"},r.a.createElement("span",{className:"cursor-ring"}),r.a.createElement("span",{className:"cursor-hover"}),r.a.createElement("span",{className:"cursor-action"},r.a.createElement("span",null))),"undefined"!==typeof e&&r.a.createElement("style",{dangerouslySetInnerHTML:{__html:['#cursor[data-cursor^="action"] .cursor-action::after {','  content: "'+e+'";',"}"].join("\n")}}))}},{key:"handleClick",value:function(e){var t=this;this.state.cursorElement.classList.add("expend"),setTimeout(function(){t.state.cursorElement.classList.remove("expend")},500)}},{key:"registerMouseEvent",value:function(e){var t=this;e.addEventListener("mouseenter",function(e){var a=e.target.getAttribute("data-cursor");t.setState({cursorType:a})}),e.addEventListener("mouseleave",function(e){t.setState({cursorType:"ring"})})}}]),t}(n.Component)),W=a(58),R=a(82),G=a(83),J=a.n(G),Q=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={full_name:"",email:"",message:""},a.handleChange=a.handleChange.bind(Object(x.a)(Object(x.a)(a))),a.submitForm=a.submitForm.bind(Object(x.a)(Object(x.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){g.init("user_u7rBTEXHRV1B8c677mrUM")}},{key:"handleChange",value:function(e){this.setState(Object(R.a)({},this.state,Object(W.a)({},e.target.name,e.target.value)))}},{key:"validateEmail",value:function(){return!(!document.querySelector('input[name="full_name"]').classList.contains("valid")||!document.querySelector('input[name="email"]').classList.contains("valid"))}},{key:"submitForm",value:function(e){e.preventDefault(),this.validateEmail()?g.send("default_service","template_HMQ3hbU7",this.state).then(function(e){J.a.toast({html:"I'll reach out to you asap, thanks for your time !",classes:"success"})},function(e){J.a.toast({html:"Oops, look like the form is broken, please send mail manually to info@chapatte.co !"})}):J.a.toast({html:"Please fill the form correctly",classes:"warning"})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"col s12"},r.a.createElement("h3",null,"Drop me a message !"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("i",{className:"material-icons prefix"},r.a.createElement(N.a,{icon:w.h})),r.a.createElement("input",{name:"full_name",id:"full_name",type:"text",onChange:this.handleChange,className:"validate"}),r.a.createElement("label",{htmlFor:"full_name"},"Full name"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("i",{id:"mail-icon",className:"material-icons email prefix"},r.a.createElement(N.a,{id:"email-icon",icon:w.e})),r.a.createElement("input",{name:"email",id:"email",type:"email",onChange:this.handleChange,className:"validate"}),r.a.createElement("label",{htmlFor:"email"},"Email"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("i",{className:"material-icons prefix"},r.a.createElement(N.a,{icon:w.g})),r.a.createElement("textarea",{name:"message",id:"textarea1",onChange:this.handleChange,className:"materialize-textarea"}),r.a.createElement("label",{htmlFor:"textarea1"},"Message content")),r.a.createElement("div",{className:"input-field col s12 m6 push-m6"},r.a.createElement(C,{onClick:function(t){return e.submitForm(t)},defaultColor:"#fff",activeColor:"#fe9b34",footerFix:!0},"Contact me")))))}}]),t}(n.Component),V=(a(270),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col center m12 l6"},r.a.createElement("h3",null,"Stalk my social media"),r.a.createElement("div",{"data-cursor":"action-open"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/corentin-chapatte-684234160/",alt:"linkedIn"},r.a.createElement("div",{className:"social-links"},r.a.createElement("img",{className:"social-icon",alt:"LinkedIn",src:I.a}),r.a.createElement("div",{className:"social-text"},"+Corentin Chapatte")))),r.a.createElement("div",{"data-cursor":"action-open"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/corentinchap",alt:"github"},r.a.createElement("div",{className:"social-links"},r.a.createElement("img",{className:"social-icon",alt:"Github",src:S.a}),r.a.createElement("div",{className:"social-text"},"@corentinchap"))))),r.a.createElement("div",{className:"col m12 l6"},r.a.createElement(Q,null)))))}}]),t}(n.Component)),K=(a(271),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"container  testimonials"},r.a.createElement("h1",null,"What my clients says about me"),r.a.createElement(X,{isLoading:this.props.data.isLoading},r.a.createElement(A,{type:"testimonial",data:this.props.data.testimonials})))}}]),t}(n.Component));a(272);function Z(e){var t=e.data,a=t.isLoading,n=t.skillsets;function c(e){var t=e.skill,a=t.title,n=t.text,c=t.techs,s=t.imageUrl,i=e.index;return r.a.createElement("div",e,r.a.createElement("div",{className:"row flex"},r.a.createElement("div",{className:"skillset-text s12 m6 l6 col "+(i%2===0?"push-l6":"")},r.a.createElement("h4",null,a),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:n}}),r.a.createElement("div",{className:"techs"},c&&c.map(function(e,t){return r.a.createElement("span",{"data-cursor":"hover",key:t},r.a.createElement("img",{alt:e.alt,title:e.alt,src:e.logoUrl}))}))),r.a.createElement("div",{className:"skillset-image valign-wrapper s12 m6 l6 col "+(i%2===0?"pull-l6":"")},r.a.createElement("img",{className:i%2===0?"left":"",src:s,alt:a}))),r.a.createElement("hr",null))}return r.a.createElement("div",{className:"skillsets container"},r.a.createElement("h1",null,"Skillset"),r.a.createElement(X,{isLoading:a},n.map(function(e,t){return r.a.createElement(c,{skill:e,index:t,key:t})})))}Z.defaultProps={data:{isLoading:!0,skillsets:[]}};var $=Z,ee=(a(273),function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchTestimonials(),this.props.fetchSkillsets(),this.props.fetchProjects()}},{key:"render",value:function(){var e=Math.max(document.documentElement.clientWidth,window.innerWidth||0);return r.a.createElement("div",{className:"landing z-depth-5"},r.a.createElement(_,null),r.a.createElement(Y,{data:this.props.projects}),r.a.createElement(K,{data:this.props.testimonials}),r.a.createElement($,{data:this.props.skillsets}),r.a.createElement(V,null),e>=1020?r.a.createElement(z,{listenerElement:document}):"")}}]),t}(n.Component)),te=Object(i.b)(function(e){return{testimonials:e.testimonials,skillsets:e.skillsets,projects:e.projects}},{fetchTestimonials:function(){return function(e){e({type:"resquest_testimonials"}),b.get("/api/testimonials").then(function(t){e({type:"receive_testimonials",payload:t.data})}).catch(function(e){return console.log(e)})}},fetchSkillsets:function(){return function(e){e({type:"request_skillsets"}),b.get("/api/skillsets").then(function(t){return e({type:"receive_skillsets",payload:t.data})}).catch(function(e){return console.log(e)})}},fetchProjects:y})(ee),ae=a(202),ne=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={multerImages:[]},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"updateState",value:function(e){var t=new FormData;t.append("imageName","multer-image-"+Date.now()),t.append("imageData",e.target.files[0]),t.append("projectId",this.props.projectId),this.uploadImage(t)}},{key:"uploadImage",value:function(e){var t=this;j.a.post("http://localhost:5000/image/uploadmulter",e).then(function(e){e.data.success&&t.props.handleImageChange(e.data.imgPath)}).catch(function(e){alert("Error while uploading image using multer : WHY ? HERE IS : "+e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"image-container"},r.a.createElement("div",{className:"process"},r.a.createElement("p",{className:"process__details"},"Upload image"),r.a.createElement("input",{type:"file",name:"project-image",className:"process__upload-btn",onChange:function(t){return e.updateState(t)}})))}}]),t}(n.Component),re=a(197),ce=a.n(re),se=a(51),ie=a(198),le=a(199),oe=a.n(le),me=a(200),ue=a.n(me),de=(a(440),function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).onEditorStateChange=function(e){a.setState({editorState:e}),a.dispatchLastestProject()},a.state={projectId:ce.a.Types.ObjectId(),images:"",body:"",name:"",tags:"",date:Date.now(),editorState:se.EditorState.createEmpty()},a.handleChange=a.handleChange.bind(Object(x.a)(Object(x.a)(a))),a.handleImageChange=a.handleImageChange.bind(Object(x.a)(Object(x.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(x.a)(Object(x.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"dispatchLastestProject",value:function(){this.props.adminUpdatePreview({body:this.getEditorStateToHtml(),name:this.state.name,tags:this.state.tags})}},{key:"getEditorStateToHtml",value:function(){var e=Object(se.convertToRaw)(this.state.editorState.getCurrentContent());return oe()(e)}},{key:"handleChange",value:function(e){this.setState(Object(R.a)({},this.state,Object(W.a)({},e.target.name,e.target.value))),this.dispatchLastestProject()}},{key:"handleSubmit",value:function(e){var t;e.preventDefault(),t=this.state.tags instanceof String?{projectId:this.state.projectId,name:this.state.name,date:this.state.date,body:this.state.body,tags:this.state.tags.split(",")}:{projectId:this.state.projectId,name:this.state.name,date:this.state.date,body:this.state.body,tags:this.state.tags},j.a.post("http://localhost:5000/api/projects",t).then(function(e){e.data.success&&console.log("success : "+e.data)}).catch(function(e){alert("Error while uploading image using multer :"+e)})}},{key:"handleImageChange",value:function(e){this.setState(function(t){return{images:[].concat(Object(ae.a)(t.images),[e])}})}},{key:"renderUploadedImages",value:function(){if("undefined"!==typeof this.state.images&&this.state.images.length>0)return r.a.createElement("div",null,this.state.images.map(function(e,t){return r.a.createElement("img",{key:t,alt:"preview",width:"75px",src:e.replace("client\\public\\","")})}))}},{key:"injectBodyToEditorState",value:function(e){var t=ue()(e),a=t.contentBlocks,n=t.entityMap,r=se.ContentState.createFromBlockArray(a,n);return se.EditorState.createWithContent(r)}},{key:"render",value:function(){var e,t={};return void 0===this.props.selectedProject?(t=this.state,e=this.state.editorState):(t=this.props.selectedProject,e=this.injectBodyToEditorState(this.props.selectedProject.body)),r.a.createElement("form",{onSubmit:this.handleSubmit,method:"post",encType:"multipart/form-data"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name"},"First Name"),r.a.createElement("input",{type:"text",name:"name",value:t.name,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"tags"},"Tags [,]"),r.a.createElement("input",{type:"text",name:"tags",value:t.tags,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"images"},"images"),r.a.createElement(ne,{projectId:t.projectId,handleImageChange:this.handleImageChange}),this.renderUploadedImages()),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"body"},"Body"),r.a.createElement(ie.Editor,{editorState:e,wrapperClassName:"wrapper",editorClassName:"editor",onEditorStateChange:this.onEditorStateChange})),r.a.createElement("button",{type:"submit"},"Submit"))}}]),t}(n.Component)),pe=Object(i.b)(null,{adminUpdatePreview:k})(de),he=a(15),fe=function(e){function t(e){var a;return Object(m.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={currentProject:void 0},a.onProjectClick=a.onProjectClick.bind(Object(x.a)(Object(x.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchProjects()}},{key:"onProjectClick",value:function(e){this.setState({currentProject:this.props.projects[e]}),this.props.adminUpdatePreview(this.props.projects[e])}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"content",className:"admin row"},r.a.createElement("div",{className:"col s12"},"Ugly Admin Interface"),r.a.createElement("div",{className:"content col m2 s12"},r.a.createElement("h4",null,"Job Editor"),r.a.createElement(X,{isLoading:this.props.areProjectsLoading,numberOfCards:3},r.a.createElement(T,{projects:this.props.projects,currentProject:this.props.currentProject,onProjectClick:this.onProjectClick,enableEdits:!0}))),r.a.createElement("div",{className:"col s12 m10"},r.a.createElement(X,{isLoading:this.props.areProjectsLoading,numberOfCards:1},r.a.createElement(B,{selectedProject:this.props.currentProject}))),r.a.createElement("div",{className:"col s12 m12"},r.a.createElement(X,{isLoading:this.props.areProjectsLoading,numberOfCards:1},Object(he.isUndefined)(this.props.projects)?r.a.createElement(pe,null):r.a.createElement(pe,{selectedProject:this.state.currentProject})))))}}]),t}(n.Component);var ve=Object(i.b)(function(e){var t=e.projects,a=e.admin;return{projects:t.list,areProjectsLoading:t.isLoading,currentProject:a.lastest}},{fetchProjects:y,adminUpdatePreview:k})(fe),Ee=function(e){function t(){return Object(m.a)(this,t),Object(d.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.props.checkAuth()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement(v.a,{exact:!0,path:"/",component:te}),r.a.createElement(v.a,{exact:!0,path:"/admin",component:this.props.auth?ve:n.Component}))))}}]),t}(n.Component);Ee.defaultProps={auth:!1};var je=Object(i.b)(function(e){return{auth:e.auth}},{checkAuth:function(){return function(e){b.get("/api/check_auth").then(function(t){return e({type:"check_auth",payload:t.data})}).catch(function(e){return console.log(e)})}}})(Ee),be={isLoading:!0,projects:[]},ge={isLoading:!0,testimonials:[]},ye={isLoading:!0,skillsets:[]},ke=Object(l.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_user":case"check_auth":return t.payload||!1;default:return e}},projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:be,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"request_projects":return be;case"receive_projects":return{isLoading:!1,projects:t.payload};default:return e}},admin:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"admin_update_preview":return{lastest:t.payload};default:return e}},form:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"mail_sent":return!0;default:return e}},testimonials:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"resquest_testimonials":return e;case"receive_testimonials":return{isLoading:!1,testimonials:t.payload};default:return e}},skillsets:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"request_skillsets":return ye;case"receive_skillsets":return{isLoading:!1,skillsets:t.payload};default:return e}}}),Oe=a(130);Oe.a.initialize("UA-46181834-6"),Oe.a.pageview(window.location.pathname+window.location.search);var Ce=Object(l.d)(ke,Object(l.a)(o.a));s.a.render(r.a.createElement(i.a,{store:Ce}," ",r.a.createElement(je,null)," "),document.querySelector("#root"))},80:function(e,t,a){e.exports=a.p+"static/media/github.87e2efc0.svg"},81:function(e,t,a){e.exports=a.p+"static/media/linkedin.ac601e9e.svg"}},[[203,1,2]]]);
//# sourceMappingURL=main.35a3c765.chunk.js.map