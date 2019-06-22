(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{223:function(e,t,a){e.exports=a(495)},254:function(e,t,a){},255:function(e,t,a){},284:function(e,t,a){},290:function(e,t,a){},291:function(e,t,a){},292:function(e,t,a){},495:function(e,t,a){"use strict";a.r(t);a(224);var n=a(0),r=a.n(n),o=a(210),s=a(50),c=a.n(s),i=a(30),l=a(51),m=a(213),u=a(214),d=a.n(u),p=a(6),h=a(7),g=a(9),v=a(8),b=a(10),f=a(498),j=a(499),E=(a(134),a(215),a(35)),y=a.n(E),O=a(71),k=function(){return function(e){e({type:"request_projects"}),y.a.get("/api/projects").then(function(t){return e({type:"receive_projects",payload:t.data})}).catch(function(e){return console.log(e)})}},w=function(e){return function(t){t({type:"admin_update_preview",payload:e})}},C=(a(254),a(255),a(135)),N=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"buttonMouseInteraction",value:function(e){for(var t=0,a=0,n=e.target;n;)t+=parseInt(n.offsetTop),a+=parseInt(n.offsetLeft),n=n.offsetParent;var r=e.pageX-a,o=e.pageY-t,s=e.target.querySelector("span");s&&s.setAttribute("style","top:"+o+"px;left:"+r+"px;")}},{key:"render",value:function(){var e=Object(C.css)({color:this.props.defaultColor,border:"1px solid"+this.props.defaultColor,":hover":{color:this.props.activeColor},".active":{color:this.props.activeColor}}),t=Object(C.css)({backgroundColor:this.props.defaultColor});return r.a.createElement("div",{"data-cursor":"hover"},r.a.createElement("a",Object.assign({onMouseEnter:this.buttonMouseInteraction,onMouseLeave:this.buttonMouseInteraction,onClick:this.props.onClick,className:"cursor-button"},e),this.props.text,r.a.createElement("span",t)))}}]),t}(n.Component),P=(a(284),a(41)),S=a(42),x=a(83),I=a.n(x),_=a(84),L=a.n(_),T=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about-section"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row flex"},r.a.createElement("div",{className:"title valign-wrapper col m6 hide-on-small-only"},r.a.createElement("div",{className:"profile-picture"},r.a.createElement("img",{src:"/images/programming_code_2.svg",alt:"avatar"}))),r.a.createElement("div",{className:"content valign-wrapper col s12 m6"},r.a.createElement("div",{className:"summary"},r.a.createElement("div",{className:"summary-text"},"Corentin Chapatte"),r.a.createElement("div",{className:"summary-subtext"},"a full-stack developer"),r.a.createElement("div",{className:"social-contact"},r.a.createElement("div",{className:"social"},r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/corentin-chapatte-684234160/",alt:"linkedIn"},r.a.createElement("img",{"data-cursor":"hover",alt:"LinkedIn",src:L.a})),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/corentinchap"},r.a.createElement("img",{"data-cursor":"hover",alt:"Github",src:I.a}))),r.a.createElement("div",{className:"contact wrap"},r.a.createElement(N,{defaultColor:"#fff",activeColor:"#174ffc",text:"Hire me"}))))))),r.a.createElement("span",{className:"scroll-indicator"},r.a.createElement(P.a,{icon:S.a})))}}]),t}(n.Component),M=a(16),F=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(v.a)(t).call(this,e))).state={selectedProjectI:0,pushStatus:"push-m"+4*a.props.selectedProjectIndex},a.onProjectClick=a.onProjectClick.bind(Object(M.a)(Object(M.a)(a))),a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"removeProjectDOM",value:function(e){document.getElementById("delete-card-"+e).parentElement.remove()}},{key:"deleteProject",value:function(e,t,a){var n=this;e.preventDefault(),y.a.post("/api/projects/delete/"+t).then(function(e){n.removeProjectDOM(a)}).catch(function(e){alert("Error deleting project :"+e)})}},{key:"onProjectClick",value:function(e,t){this.props.onProjectClick(e);var a=t.target.parentNode,n=a.parentNode.parentNode,r=Array.prototype.indexOf.call(n.children,a.parentNode);this.setState({pushStatus:" push-m"+4*r})}},{key:"renderList",value:function(){var e=this;try{return this.props.projects.map(function(t,a){var n="card",o=r.a.createElement("span",{id:"delete-card-"+a,onClick:function(n){return e.deleteProject(n,t._id,a)},className:"project-delete-button z-depth-2"},"X");return a===e.props.selectedProjectIndex&&(n+=" selected"),r.a.createElement("div",{className:"col s6 m4",key:t._id},r.a.createElement("div",{className:n},e.props.enableEdits?o:"",r.a.createElement("div",{"data-cursor":"action",onClick:function(t){return e.onProjectClick(a,t)},className:"card-content"},t.name)))})}catch(t){console.log("Error while mappings projects"+t)}}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"projects-list",className:"row projects"},this.renderList()),r.a.createElement("div",{className:"row animated-selector show-on-medium-and-up"},r.a.createElement("div",{className:"col s6 m4 "+this.state.pushStatus},r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-content"},"\xa0")))))}}]),t}(n.Component),D=a(36),H=a.n(D),U=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"renderTags",value:function(e){var t="";return"string"==typeof e&e.indexOf(",")>-1&&(e=e.split(",")),"object"==typeof e&&e.forEach(function(e){t+="<span>"+String(e)+"</span>"}),t}},{key:"render",value:function(){return r.a.createElement("div",{className:"project-details"},r.a.createElement("div",{className:"project-content"},r.a.createElement("div",{className:"project-title"},r.a.createElement("h1",null,this.props.selectedProject.name)),r.a.createElement("div",{className:"project-tags",dangerouslySetInnerHTML:{__html:this.renderTags(this.props.selectedProject.tags)}}),r.a.createElement("div",{className:"project-body",dangerouslySetInnerHTML:{__html:this.props.selectedProject.body}},this.__html)))}}]),t}(n.Component);U.defaultProps={selectedProject:{name:"",tags:"",body:""}};var q=U,A=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"renderConditionnalLoader",value:function(){if(this.props.isLoading){for(var e=[],t=0;t<this.props.numberOfCards;t++)e.push(r.a.createElement("div",{key:t,"data-cursor":"action",className:"card-panel"},r.a.createElement("div",{className:"animated-loader"},"\xa0")));return e}return this.props.children}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderConditionnalLoader())}}]),t}(n.Component),z=a(18),B=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(v.a)(t).call(this,e))).state={selectedProject:void 0,selectedProjectIndex:0},a.onProjectClick=a.onProjectClick.bind(Object(M.a)(Object(M.a)(a))),a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidUpdate",value:function(){2===this.state.selectedProjectIndex&&H.a.Collapsible.init(document.querySelectorAll(".collapsible"))}},{key:"componentDidMount",value:function(){this.props.fetchProjects()}},{key:"onProjectClick",value:function(e){this.setState({selectedProjectIndex:e})}},{key:"render",value:function(){return r.a.createElement("div",{className:"work-section"},r.a.createElement("div",{className:"container fluid"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement("h1",null,"some of my projects"),r.a.createElement(A,{isLoading:this.props.areProjectsLoading,numberOfCards:3},r.a.createElement(F,{projects:this.props.projects,onProjectClick:this.onProjectClick,selectedProjectIndex:this.state.selectedProjectIndex,enableEdits:!1}))),r.a.createElement("div",{className:"col m12 title right-align"},r.a.createElement(A,{isLoading:this.props.areProjectsLoading,numberOfCards:1},Object(z.isUndefined)(this.props.projects)?r.a.createElement(q,null):r.a.createElement(q,{selectedProject:this.props.projects[this.state.selectedProjectIndex]}))))))}}]),t}(n.Component);var W=Object(i.b)(function(e){return{projects:e.projects.list,areProjectsLoading:e.projects.isLoading}},{fetchProjects:k})(B),J=(a(290),a(291),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(v.a)(t).call(this,e))).state={cursorType:"ring",target:void 0,cursorElement:void 0},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.setState({cursorElement:document.getElementById("cursor")}),this.props.listenerElement.addEventListener("mousemove",function(t){e.setCursorPosition(t)}),this.props.listenerElement.addEventListener("mousedown",function(t){e.handleClick(t)})}},{key:"setCursorPosition",value:function(e){var t,a=this,n=e.pageX-26,r=e.pageY-window.scrollY-26;this.state.cursorElement.setAttribute("style","top: "+r+"px; left:"+n+"px;"),setTimeout(function(){t=a.state.cursorType,e.target.hasAttribute("data-cursor")?a.setState({cursorType:e.target.getAttribute("data-cursor"),target:e.target}):"ring"!==a.state.cursorType&&a.setState({cursorType:"ring"}),e.target.classList.contains("btn-cursor")?e.target.classList.add("active"):"hover"===t&&document.body.contains(document.querySelector(".active"))&&document.querySelector(".active").classList.toggle("active")},300)}},{key:"render",value:function(){return r.a.createElement("div",{id:"cursor","data-cursor":this.state.cursorType},r.a.createElement("div",{className:"wrapper"},r.a.createElement("span",{className:"cursor-ring"}),r.a.createElement("span",{className:"cursor-hover"}),r.a.createElement("span",{className:"cursor-action"},r.a.createElement("span",null,"show"))))}},{key:"handleClick",value:function(e){var t=this;this.state.cursorElement.classList.add("expend"),setTimeout(function(){t.state.cursorElement.classList.remove("expend")},500)}}]),t}(n.Component)),R=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(n.Component),Y=a(60),G=a(85),X=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(v.a)(t).call(this,e))).state={full_name:"",email:"",message:""},a.handleChange=a.handleChange.bind(Object(M.a)(Object(M.a)(a))),a.submitForm=a.submitForm.bind(Object(M.a)(Object(M.a)(a))),a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){O.init("user_u7rBTEXHRV1B8c677mrUM")}},{key:"handleChange",value:function(e){this.setState(Object(G.a)({},this.state,Object(Y.a)({},e.target.name,e.target.value)))}},{key:"validateEmail",value:function(){return!(!document.querySelector('input[name="full_name"]').classList.contains("valid")||!document.querySelector('input[name="email"]').classList.contains("valid"))}},{key:"submitForm",value:function(e){e.preventDefault(),this.validateEmail()?O.send("default_service","template_HMQ3hbU7",this.state).then(function(e){H.a.toast({html:"I'll reach out to you asap, thanks for your time !",classes:"success"})},function(e){H.a.toast({html:"Oops, look like the form is broken, please send mail manually to info@chapatte.co !"})}):H.a.toast({html:"Please fill the form correctly",classes:"warning"})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"row"},r.a.createElement("form",{className:"col s12"},r.a.createElement("h3",null,"Drop me a message !"),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("i",{className:"material-icons prefix"},r.a.createElement(P.a,{icon:S.f})),r.a.createElement("input",{name:"full_name",id:"full_name",type:"text",onChange:this.handleChange,className:"validate"}),r.a.createElement("label",{htmlFor:"full_name"},"Full name"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("i",{id:"mail-icon",className:"material-icons email prefix"},r.a.createElement(P.a,{id:"email-icon",icon:S.d})),r.a.createElement("input",{name:"email",id:"email",type:"email",onChange:this.handleChange,className:"validate"}),r.a.createElement("label",{htmlFor:"email"},"Email"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("i",{className:"material-icons prefix"},r.a.createElement(P.a,{icon:S.e})),r.a.createElement("textarea",{name:"message",id:"textarea1",onChange:this.handleChange,className:"materialize-textarea"}),r.a.createElement("label",{htmlFor:"textarea1"},"Message content")),r.a.createElement("div",{className:"input-field col s12 m6 push-m6"},r.a.createElement(N,{onClick:function(t){return e.submitForm(t)},defaultColor:"#fff",activeColor:"#fe9b34",text:"Send"})))))}}]),t}(n.Component),Z=Object(i.b)(null,null)(X),Q=(a(292),function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("footer",{className:"footer"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col center s12 m6"},r.a.createElement("h3",null,"Stalk my social media"),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://www.linkedin.com/in/corentin-chapatte-684234160/",alt:"linkedIn"},r.a.createElement("div",{className:"row social-links"},r.a.createElement("div",{className:"col s4 social-icon"},r.a.createElement("img",{"data-cursor":"action",alt:"LinkedIn",src:L.a})),r.a.createElement("div",{"data-cursor":"action",className:"col s8 social-text"},"+Corentin Chapatte"))),r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/corentinchap",alt:"github"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s4 social-icon"},r.a.createElement("img",{"data-cursor":"action",alt:"Github",src:I.a})),r.a.createElement("div",{"data-cursor":"action",className:"col s8 social-text"},"@corentinchap")))),r.a.createElement("div",{className:"col m6 s12 "},r.a.createElement(Z,null)))))}}]),t}(n.Component)),V=a(216),K=[{author:"Fanny Zambaz",project:"fannyzambaz.ch",quote:"I am very happy with the website and the work he has done. It\u2019s such a pleasure to see the site look exactly like I wanted it to be. The great this is he's not only <b> knowledgable </b>, but he's also a great person to work with",avatar:"images/testimonials-woman-1.svg"},{author:"Philipp Reiss",project:"abgefatz.de",quote:"Corentin Chapatte has been assisting me throughout the entire process of creating and maintaining my own webpage 'www.abgefatzt.de'. He was  and is a very reliable consultant in all of my programming related issues.Since the beginning of this business relationship Mr. Chapatte always proved to be a <b>reliable partner and a precious consultant</b> in terms of customization and perfectionating. Furthermore his <b>deep knowledge</b> of Computing- and IT-related topics has been a consistent source of valuable information. I wish him all the best for his private and profesionnal life.",avatar:"images/testimonials-men-1.svg"},{author:"Aur\xe9lie Gross",project:"instinctmaman.be/",quote:"Corentin was an absolute pleasure to work with on our e-commerce site. He definitely exceeded our tasks by fixing the issues extremely quickly and efficiently. He is completely professional and I would work with him again in a heartbeat.",avatar:"images/testimonials-woman-2.svg"}],$=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this;H.a.AutoInit(),this.setState({carousel:H.a.Carousel.getInstance(document.getElementById("carousel-1"))}),this.interval=setInterval(function(){e.carouselTrigger("next")},this.props.intervalCarousel)}},{key:"componentWillUnmount",value:function(){clearInterval(this.interval)}},{key:"carouselTrigger",value:function(e){this.state&&("prev"===e?this.state.carousel.prev():"next"===e&&this.state.carousel.next())}},{key:"renderHtmlContent",value:function(e){return e}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"testimonials"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h1",null,"What people says about me"),r.a.createElement("div",{className:"col m12 s12 relative"},r.a.createElement("span",{className:"control-left hide-on-med-and-down",onClick:function(t){return e.carouselTrigger("prev")}},"  ",r.a.createElement(P.a,{icon:S.b})," "),r.a.createElement(V.Carousel,{carouselId:"carousel-1",options:{fullWidth:!0}},K.map(function(t,a){return r.a.createElement("div",{key:a,className:"testimonial"},r.a.createElement("blockquote",{className:"testimonial-quote"},r.a.createElement("span",{dangerouslySetInnerHTML:{__html:e.renderHtmlContent(t.quote)}}),r.a.createElement("cite",null," \u2013 ",t.author),r.a.createElement("div",{className:"website-link"},t.project)),r.a.createElement("img",{className:"hide-on-med-and-down",src:t.avatar,alt:"testimonial-avatar"}))})),r.a.createElement("span",{className:"control-right hide-on-med-and-down",onClick:function(t){return e.carouselTrigger("next")}},"  ",r.a.createElement(P.a,{icon:S.c})," ")))))}}]),t}(n.Component);var ee=function(){return r.a.createElement("div",{className:"skillsets container"},r.a.createElement("h1",null,"Skillset"),[{title:"Front End Development",text:"My knowledge of the DOM allow me to write <b>minimal</b>, clean and reusable code. I've been working on front-end projects since <b>2016</b>. I build my layouts with the lastest standards, <b>flexboxes and CSS grids</b> are the way to go nowadays !",image:"images/image_post.svg",techs:[{logo:"images/logos/react.svg",alt:"React : Front End framework"},{logo:"images/logos/javascript.svg",alt:"Javascript : Front End framework"},{logo:"images/logos/sass.svg",alt:"Sass : CSS with superpowers"},{logo:"images/logos/materialize.svg",alt:"MaterializeCSS : Organized layout and grid system / helpers"},{logo:"images/logos/bootstrap.svg",alt:"Bootstrap : Organized layout and grid system / helpers"},{logo:"images/logos/zeplin.svg",alt:"Zeplin : Pixel perfect mockup development"}]},{title:"Back End Development",text:"Wether you need an <b>API</b>, a custom <b>web app</b> or a native Windows app to answer specific needs for you business, my <b>expertise</b> and knowledge will make sure your app <b>easy to use, stable and future-proof</b>.",image:"images/process_building.svg",techs:[{logo:"images/logos/grav.svg",alt:"GravCMS : Easy to use and setup CMS"},{logo:"images/logos/nodejs.svg",alt:"NodeJS : Javascrit on the server-side"},{logo:"images/logos/yii.svg",alt:"Yii : Open Source PHP Framework"},{logo:"images/logos/umbraco.svg",alt:"Umbraco : Open Source ASP.NET framework"},{logo:"images/logos/dotnet.svg",alt:".NET : Web framework based on Microsoft technologies"},{logo:"images/logos/csharp.svg",alt:"C# : general-purpose, multi-paradigm programming language from Microsoft"}]},{title:"User Experience",text:"For your desktop, tablet and mobile touch-points, I\u2019ll create <b>wireframes</b> to build the best possible experience for your product, maximizing readability, SEO ranking and <b>user engagment</b>.",techs:[{logo:"images/logos/figma.svg",alt:"Figma : Prototype drawing tool"},{logo:"images/logos/photoshop-cc.svg",alt:"Adobe Photoshop : Advanced image editing software"}],image:"images/wireframe.svg"},{title:"Methodology",text:"Whether I work solo or in a team, I always apply the <b>SCRUM methodology</b> with lean and agile development. I still stay <b>flexible</b> for any change while having a clear overview of the work ahead.",image:"images/scrum_board.svg"}].map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("div",{className:"row flex"},r.a.createElement("div",{className:t%2===0?"text m6 col push-m6":"text m6 col"},r.a.createElement("h4",null,e.title),r.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.text}}),r.a.createElement("div",{className:"techs"},e.techs&&e.techs.map(function(e,t){return r.a.createElement("span",{key:t},r.a.createElement("img",{"data-cursor":"hover",alt:e.alt,title:e.alt,src:e.logo}))}))),r.a.createElement("div",{className:t%2===0?"valign-wrapper text m6 s12 col pull-m6":"valign-wrapper text m6 s12 col"},r.a.createElement("img",{className:t%2===0?"left":"",src:e.image,alt:e.title}))),r.a.createElement("hr",null))}))},te=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"landing z-depth-5"},r.a.createElement(J,{listenerElement:document}),r.a.createElement(T,null),r.a.createElement(W,null),r.a.createElement($,{intervalCarousel:8e3}),r.a.createElement(ee,null),r.a.createElement(Q,null),r.a.createElement(R,null))}}]),t}(n.Component),ae=a(222),ne=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(v.a)(t).call(this,e))).state={multerImages:[]},a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"updateState",value:function(e){var t=new FormData;t.append("imageName","multer-image-"+Date.now()),t.append("imageData",e.target.files[0]),t.append("projectId",this.props.projectId),this.uploadImage(t)}},{key:"uploadImage",value:function(e){var t=this;y.a.post("http://localhost:5000/image/uploadmulter",e).then(function(e){e.data.success&&t.props.handleImageChange(e.data.imgPath)}).catch(function(e){alert("Error while uploading image using multer : WHY ? HERE IS : "+e)})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"image-container"},r.a.createElement("div",{className:"process"},r.a.createElement("p",{className:"process__details"},"Upload image"),r.a.createElement("input",{type:"file",name:"project-image",className:"process__upload-btn",onChange:function(t){return e.updateState(t)}})))}}]),t}(n.Component),re=a(217),oe=a.n(re),se=a(52),ce=a(218),ie=a(219),le=a.n(ie),me=a(220),ue=a.n(me),de=(a(493),function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(v.a)(t).call(this,e))).onEditorStateChange=function(e){a.setState({editorState:e}),a.dispatchLastestProject()},a.state={projectId:oe.a.Types.ObjectId(),images:"",body:"",name:"",tags:"",date:Date.now(),editorState:se.EditorState.createEmpty()},a.handleChange=a.handleChange.bind(Object(M.a)(Object(M.a)(a))),a.handleImageChange=a.handleImageChange.bind(Object(M.a)(Object(M.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(M.a)(Object(M.a)(a))),a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"dispatchLastestProject",value:function(){this.props.adminUpdatePreview({body:this.getEditorStateToHtml(),name:this.state.name,tags:this.state.tags})}},{key:"getEditorStateToHtml",value:function(){var e=Object(se.convertToRaw)(this.state.editorState.getCurrentContent());return le()(e)}},{key:"handleChange",value:function(e){this.setState(Object(G.a)({},this.state,Object(Y.a)({},e.target.name,e.target.value))),this.dispatchLastestProject()}},{key:"handleSubmit",value:function(e){var t;e.preventDefault(),t=this.state.tags instanceof String?{projectId:this.state.projectId,name:this.state.name,date:this.state.date,body:this.state.body,tags:this.state.tags.split(",")}:{projectId:this.state.projectId,name:this.state.name,date:this.state.date,body:this.state.body,tags:this.state.tags},y.a.post("http://localhost:5000/api/projects",t).then(function(e){e.data.success&&console.log("success : "+e.data)}).catch(function(e){alert("Error while uploading image using multer :"+e)})}},{key:"handleImageChange",value:function(e){this.setState(function(t){return{images:[].concat(Object(ae.a)(t.images),[e])}})}},{key:"renderUploadedImages",value:function(){if("undefined"!==typeof this.state.images&&this.state.images.length>0)return r.a.createElement("div",null,this.state.images.map(function(e,t){return r.a.createElement("img",{key:t,alt:"preview",width:"75px",src:e.replace("client\\public\\","")})}))}},{key:"injectBodyToEditorState",value:function(e){var t=ue()(e),a=t.contentBlocks,n=t.entityMap,r=se.ContentState.createFromBlockArray(a,n);return se.EditorState.createWithContent(r)}},{key:"render",value:function(){var e,t={};return void 0===this.props.selectedProject?(t=this.state,e=this.state.editorState):(t=this.props.selectedProject,e=this.injectBodyToEditorState(this.props.selectedProject.body)),r.a.createElement("form",{onSubmit:this.handleSubmit,method:"post",encType:"multipart/form-data"},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name"},"First Name"),r.a.createElement("input",{type:"text",name:"name",value:t.name,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"tags"},"Tags [,]"),r.a.createElement("input",{type:"text",name:"tags",value:t.tags,onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"images"},"images"),r.a.createElement(ne,{projectId:t.projectId,handleImageChange:this.handleImageChange}),this.renderUploadedImages()),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"body"},"Body"),r.a.createElement(ce.Editor,{editorState:e,wrapperClassName:"wrapper",editorClassName:"editor",onEditorStateChange:this.onEditorStateChange})),r.a.createElement("button",{type:"submit"},"Submit"))}}]),t}(n.Component)),pe=Object(i.b)(null,{adminUpdatePreview:w})(de),he=function(e){function t(e){var a;return Object(p.a)(this,t),(a=Object(g.a)(this,Object(v.a)(t).call(this,e))).state={currentProject:void 0},a.onProjectClick=a.onProjectClick.bind(Object(M.a)(Object(M.a)(a))),a}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchProjects()}},{key:"onProjectClick",value:function(e){this.setState({currentProject:this.props.projects[e]}),this.props.adminUpdatePreview(this.props.projects[e])}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{id:"content",className:"admin row"},r.a.createElement("div",{className:"col s12"},"Ugly Admin Interface"),r.a.createElement("div",{className:"content col m2 s12"},r.a.createElement("h4",null,"Job Editor"),r.a.createElement(A,{isLoading:this.props.areProjectsLoading,numberOfCards:3},r.a.createElement(F,{projects:this.props.projects,currentProject:this.props.currentProject,onProjectClick:this.onProjectClick,enableEdits:!0}))),r.a.createElement("div",{className:"col s12 m10"},r.a.createElement(A,{isLoading:this.props.areProjectsLoading,numberOfCards:1},r.a.createElement(q,{selectedProject:this.props.currentProject}))),r.a.createElement("div",{className:"col s12 m12"},r.a.createElement(A,{isLoading:this.props.areProjectsLoading,numberOfCards:1},Object(z.isUndefined)(this.props.projects)?r.a.createElement(pe,null):r.a.createElement(pe,{selectedProject:this.state.currentProject})))))}}]),t}(n.Component);var ge=Object(i.b)(function(e){var t=e.projects,a=e.admin;return{projects:t.list,areProjectsLoading:t.isLoading,currentProject:a.lastest}},{fetchProjects:k,adminUpdatePreview:w})(he),ve=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null)}}]),t}(n.Component),be=function(e){function t(){return Object(p.a)(this,t),Object(g.a)(this,Object(v.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(h.a)(t,[{key:"componentDidMount",value:function(){this.props.checkAuth()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement("div",null,r.a.createElement(j.a,{exact:!0,path:"/",component:te}),r.a.createElement(j.a,{exact:!0,path:"/admin",component:this.props.auth?ge:ve}))))}}]),t}(n.Component);var fe=Object(i.b)(function(e){return{auth:e.auth}},{checkAuth:function(){return function(e){y.a.get("/api/check_auth").then(function(t){return e({type:"check_auth",payload:t.data})}).catch(function(e){return console.log(e)})}}})(be),je={list:void 0,isLoading:!0},Ee=Object(l.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"fetch_user":case"check_auth":return t.payload||!1;default:return e}},projects:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"request_projects":return je;case"receive_projects":return{list:t.payload,isLoading:!1};default:return e}},admin:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"admin_update_preview":return{lastest:t.payload};default:return e}},form:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case"mail_sent":return!0;default:return e}}}),ye=Object(o.composeWithDevTools)({trace:!0,traceLimit:25}),Oe=Object(l.d)(Ee,ye(Object(l.a)(m.a,d.a)));c.a.render(r.a.createElement(i.a,{store:Oe}," ",r.a.createElement(fe,null)," "),document.querySelector("#root"))},83:function(e,t,a){e.exports=a.p+"static/media/github.87e2efc0.svg"},84:function(e,t,a){e.exports=a.p+"static/media/linkedin.ac601e9e.svg"}},[[223,1,2]]]);
//# sourceMappingURL=main.ab25c99d.chunk.js.map