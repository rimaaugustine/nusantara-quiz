(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t){},196:function(e,t,a){e.exports=a(444)},201:function(e,t,a){},400:function(e,t,a){},444:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(25),s=a.n(o),c=(a(201),a(17)),i=a(18),l=a(20),u=a(19),p=a(21),d=a(40),m=a(174),h=a(176),f=a(110),b=a(34),g=a(194).a({space:"381el0fe1wnr",accessToken:"79049fa3e3330fdad5efc9cfaa8108947ba665833011e56217e3d9c44882bf74"}),E="ADD_USERNAME",v="ADD_SCORE",O="RESET_SCORE",y="GET_NEXT_QUESTION",j="GET_OLD_QUESTIONS",w="FETCH_QUIZ_REQUEST",C="FETCH_QUIZ_SUCCESS",S="FETCH_QUIZ_FAILURE",Q="ANSWER_STATUS",k=function(){return function(e){e({type:O})}},N=function(e){return function(t){var a;a=0!==e.length?e[Math.floor(Math.random()*e.length)]:{},t({type:y,payload:e,payload1:a})}},A={username:"",questionEntries:[],prevQuestions:[],currentQuestion:{},isAnswered:!1,score:0,counter:0,isFetching:!1,error:!1};var x=Object(d.combineReducers)({data:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case E:return Object(b.a)({},e,{username:t.username});case w:return Object(b.a)({},e,{isFetching:!0});case C:return Object(b.a)({},e,{isFetching:!1,questionEntries:t.payload,currentQuestion:t.payload1,prevQuestions:[].concat(Object(f.a)(e.prevQuestions),[t.payload1])});case S:return Object(b.a)({},e,{isFetching:!1,error:!0});case y:return Object(b.a)({},e,{questionEntries:t.payload,currentQuestion:t.payload1,counter:e.counter+1,isAnswered:!1});case j:return Object(b.a)({},e,{prevQuestions:[].concat(Object(f.a)(e.prevQuestions),[t.payload])});case v:return Object(b.a)({},e,{score:e.score+t.score});case O:return Object(b.a)({},e,{score:0,counter:0,questionEntries:[],currentQuestion:{},prevQuestions:[],username:""});case Q:return Object(b.a)({},e,{isAnswered:!0});default:return e}}}),T=Object(d.createStore)(x,{},Object(m.composeWithDevTools)(Object(d.applyMiddleware)(h.a))),q=a(22),F=a(39),z=a(43),B=(a(56),a(23)),D=a(70),M=a.n(D),U=a(71),_=a.n(U),H=a(52),R=a.n(H),I=a(72),L=a.n(I),W=a(181),G=a.n(W),Y=a(33),P=a.n(Y),Z=a(183),J=a.n(Z),V=a(186),X=a.n(V),$=a(184),K=a.n($),ee=a(185),te=a.n(ee),ae=a(28),ne=a.n(ae),re=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleClose=function(){a.setState({openDialog:!1})},a.handleCloseYes=function(){a.setState({openDialog:!1}),a.props.history.push("/"),a.props.resetScore()},a.handleBackHome=function(){a.props.counter>0?a.setState({openDialog:!0}):a.props.history.push("/")},a.state={openDialog:!1},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.root},r.a.createElement(M.a,{className:e.bar,position:"static"},r.a.createElement(_.a,{variant:"dense"},r.a.createElement(L.a,{className:e.menuButton,color:"inherit","aria-label":"Menu",onClick:this.handleBackHome},r.a.createElement(G.a,null)),r.a.createElement(R.a,{variant:"h6",color:"inherit",className:e.grow},"Nusantara-Quiz"),r.a.createElement(P.a,{component:F.b,to:"/about",color:"inherit"},"About"))),r.a.createElement(J.a,{open:this.state.openDialog,onClose:this.handleClose,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description"},r.a.createElement(K.a,null,r.a.createElement(te.a,{id:"alert-dialog-description"},"Your state of quiz will be restart.  Are you sure to quit?")),r.a.createElement(X.a,null,r.a.createElement(P.a,{onClick:this.handleCloseYes,color:"primary"},"Yes"),r.a.createElement(P.a,{onClick:this.handleClose,color:"primary"},"No"))))}}]),t}(n.Component),oe=ne()(Object(B.withStyles)({root:{flexGrow:1},bar:{backgroundColor:"#7f0000"},grow:{flexGrow:1},menuButton:{marginLeft:-18,marginRight:20,color:"white"}}),Object(q.b)(function(e){return{counter:e.data.counter}},{resetScore:k}),z.d)(re);a(400);function se(){return r.a.createElement("div",null,r.a.createElement("div",{className:"center"},r.a.createElement("div",{className:"flag-container"},r.a.createElement("span",{className:"pole"}),r.a.createElement("span",{className:"knob"}),r.a.createElement("span",{className:"flag front"},r.a.createElement("span",{className:"rect"})),r.a.createElement("span",{className:"flag back"},r.a.createElement("span",{className:"rect2"}),r.a.createElement("span",{className:"shadow"})))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))}var ce=a(187),ie=a.n(ce),le=a(5),ue=a.n(le),pe=a(58),de=a.n(pe),me=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){var t=e.target.value;a.setState({name:t})},a.handleSubmit=function(e){e.preventDefault(),a.props.addUsername(a.state.name),a.props.history.push("/quiz")},a.state={name:""},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.name,t=this.props.classes;return r.a.createElement("div",null,r.a.createElement("form",{method:"POST",onSubmit:this.handleSubmit},r.a.createElement(ie.a,{id:"outlined-textarea",label:"Fill your name",placeholder:"username",error:!0,className:t.textField,margin:"normal",variant:"outlined",value:this.state.name,onChange:this.handleChange}),r.a.createElement("div",null,0===e.length?r.a.createElement(P.a,{variant:"contained",color:"inherit",type:"submit",value:"submit",className:ue()(t.button),size:"large",disabled:!0},"Ready for Quiz??"):r.a.createElement(P.a,{variant:"contained",color:"inherit",type:"submit",value:"submit",className:ue()(t.button),size:"large"},"Ready for Quiz??"))))}}]),t}(n.Component),he=ne()(Object(B.withStyles)(function(e){return{container:{flexWrap:"wrap"},textField:{marginLeft:e.spacing.unit,marginRight:e.spacing.unit,color:"#fff"},button:{color:e.palette.getContrastText(de.a[500]),backgroundColor:de.a[700],"&:hover":{backgroundColor:de.a[500]}}}}),Object(q.b)(function(e){return{username:e.data.username}},{addUsername:function(e){return function(t){t({type:E,username:e})}}}),z.d)(me),fe=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("header",{className:"App-header"},r.a.createElement(se,null),r.a.createElement("br",null),r.a.createElement("p",null,"Welcome to Nusantara Quiz"),r.a.createElement(he,null)))}}]),t}(n.Component);function be(){return r.a.createElement("header",{className:"App-header"},r.a.createElement("h1",null,"About Nusantara Quiz"),r.a.createElement("p",null,"The quiz consists of Indonesia insights "),r.a.createElement("h2",null,"Feel free to give feedback : ")," ",r.a.createElement("code",null,"rima.augustine@gmail.com "))}var ge=a(38),Ee=a.n(ge),ve=a(73),Oe=a.n(ve),ye=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onHover=function(e){e.preventDefault(),a.setState({hover:!0})},a.onLeave=function(e){e.preventDefault(),a.setState({hover:!1})},a.state={hover:!1,userAnswered:a.props.isanswered},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.isanswered;return r.a.createElement("div",null,"false"===e?r.a.createElement(Ee.a,Object.assign({},this.props,{onMouseOver:this.onHover,onMouseOut:this.onLeave,className:this.state.hover?this.props.paperclasshov:this.props.paperclass}),this.props.children):r.a.createElement(Ee.a,Object.assign({},this.props,{onMouseOver:this.onHover,onMouseOut:this.onLeave,className:this.props.paperclass}),this.props.children))}}]),t}(n.Component),je=ne()(Object(B.withStyles)(function(){return{root:{flexGrow:1}}}),Object(q.b)(function(e){return{isanswered:e.data.isAnswered.toString()}},{}))(ye),we=a(188);function Ce(){var e=Object(we.a)(["\n    width: 50%;\n    height: 'auto';\n@media (min-width: 700px) {\n    max-width: 20%;\n    height: 'auto';\n  }\n\n"]);return Ce=function(){return e},e}var Se=a(189).a.img(Ce()),Qe={textAlign:"left",fontSize:12,fontStyle:"italic"},ke=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(l.a)(this,Object(u.a)(t).call(this,e))).onHandleAnswer=function(e){if(!a.props.isAnswered){var t=e.currentTarget.id;a.setState({userAnswer:e.currentTarget.id}),t===a.props.answer?(a.props.addScore(10),a.props.answerStatus()):(a.props.addScore(0),a.props.answerStatus())}},a.state={userAnswer:""},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.classes,n=t.choices,o=t.question,s=t.imageTitle,c=t.imageUrl,i=t.counter,l=t.isAnswered,u=t.answer;return r.a.createElement("div",{className:a.root},r.a.createElement(Oe.a,{container:!0,spacing:24},r.a.createElement(Oe.a,{item:!0,xs:12},r.a.createElement(Ee.a,{className:a.paper},r.a.createElement("p",{style:Qe},"Question #",i+1,"/10"),r.a.createElement("h2",null,o),r.a.createElement(Se,{src:c,alt:s}))),n?n.map(function(t,n){var o;return o=l?t===u?a.answeredColorCorr:t===e.state.userAnswer?a.answeredColorWrong:a.answeredColor:a.paper,r.a.createElement(Oe.a,{key:n,item:!0,xs:12,sm:6},r.a.createElement(je,{onClick:e.onHandleAnswer,paperclass:o,paperclasshov:a.paperHov,id:t},t))}):[]),r.a.createElement("br",null))}}]),t}(n.Component),Ne=ne()(Object(B.withStyles)(function(e){return{root:{flexGrow:1},paper:{padding:2*e.spacing.unit,textAlign:"center",color:e.palette.text.primary,backgroundColor:"#fff"},paperHov:{padding:2*e.spacing.unit,textAlign:"center",color:e.palette.text.primary,backgroundColor:"#b0bec5"},answeredColor:{padding:2*e.spacing.unit,textAlign:"center",color:e.palette.text.primary,backgroundColor:"#b0bec5"},answeredColorCorr:{padding:2*e.spacing.unit,textAlign:"center",color:e.palette.text.primary,backgroundColor:"#558b2f"},answeredColorWrong:{padding:2*e.spacing.unit,textAlign:"center",color:"#fff",backgroundColor:"#b71c1c"}}}),Object(q.b)(function(e){return{questionEntries:e.data.questionEntries,currentQuestion:e.data.currentQuestion,prevQuestions:e.data.prevQuestions,counter:e.data.counter,isAnswered:e.data.isAnswered}},{addScore:function(e){return function(t){t({type:v,score:e})}},answerStatus:function(){return function(e){e({type:Q})}}}))(ke),Ae=a(109),xe=a.n(Ae),Te=a(108),qe=a.n(Te),Fe=a(192),ze=a.n(Fe),Be=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).compare=function(){var e,t=a.props,n=t.questionEntries,r=t.prevQuestions,o=t.currentQuestion,s=r.map(function(e){return e.sys.id}),c=o.sys.id;return 0!==n.length&&(e=n.filter(function(e){return!s.includes(e.sys.id)&&e.sys.id!==c})),e},a.handleOnClick=function(){a.props.getNextQuestion(a.compare())},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.username,n=e.score,o=e.isAnswered;return r.a.createElement("div",null,r.a.createElement(M.a,{position:"fixed",color:"primary",className:t.appBar},r.a.createElement(_.a,{className:t.toolbar},r.a.createElement(L.a,{color:"inherit","aria-label":"Open drawer"},r.a.createElement(ze.a,null),r.a.createElement(R.a,{variant:"h6",color:"inherit"},a," -"),r.a.createElement(R.a,{variant:"h6",color:"inherit",style:{marginLeft:5}},"score: ",n)),o?r.a.createElement(qe.a,{color:"primary","aria-label":"Add",className:t.fabButton,onClick:this.handleOnClick},r.a.createElement(xe.a,null)):r.a.createElement(qe.a,{color:"primary",disabled:!0,"aria-label":"Add",className:t.fabButton,onClick:this.handleOnClick},r.a.createElement(xe.a,null)))))}}]),t}(n.Component),De=ne()(Object(B.withStyles)(function(e){return{text:{paddingTop:2*e.spacing.unit,paddingLeft:2*e.spacing.unit,paddingRight:2*e.spacing.unit},paper:{paddingBottom:50},list:{marginBottom:2*e.spacing.unit},subHeader:{backgroundColor:e.palette.background.paper},appBar:{top:"auto",bottom:0,backgroundColor:"#b53d2a"},toolbar:{alignItems:"center",justifyContent:"space-between"},fabButton:{position:"absolute",zIndex:1,top:-30,right:0,margin:"0 auto",backgroundColor:"#4e0000"}}}),Object(q.b)(function(e){return{username:e.data.username,score:e.data.score,counter:e.data.counter,questionEntries:e.data.questionEntries,prevQuestions:e.data.prevQuestions,currentQuestion:e.data.currentQuestion,isAnswered:e.data.isAnswered}},{getNextQuestion:N}))(Be),Me=a(74),Ue=a.n(Me),_e=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e,t=this,a=this.props,n=a.classes,o=a.score;e=o<50?"bad":o>=50?"good":"best";var s={bad:r.a.createElement("h1",null,r.a.createElement(Ue.a,{text:"\ud83d\ude22 Sorry! your score is not good"})),good:r.a.createElement("h1",null,r.a.createElement(Ue.a,{text:"Very good \ud83d\ude0e! "})),best:r.a.createElement("h1",null,r.a.createElement(Ue.a,{text:"Bravo!! Best scores ever \ud83e\udd29"}))};return r.a.createElement("div",null,r.a.createElement("header",{className:"App-header"},s[e],r.a.createElement("code",null,"you got the ",o," scores"),r.a.createElement("br",null),r.a.createElement(P.a,{variant:"contained",color:"secondary",className:ue()(n.button),size:"large",component:F.b,to:"/",onClick:function(){return t.props.resetScore()}},"Try again?")))}}]),t}(n.Component),He=ne()(Object(B.withStyles)({root:{flexGrow:1}}),Object(q.b)(function(e){return{score:e.data.score}},{resetScore:k}))(_e),Re=a(193),Ie=a.n(Re);var Le=Object(B.withStyles)(function(e){return{progress:{margin:2*e.spacing.unit}}})(function(e){var t=e.classes;return r.a.createElement("header",{className:"App-header"},r.a.createElement(Ie.a,{className:t.progress,color:"secondary"}))}),We=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).shuffle=function(e){for(var t,a,n=e.length;0!==n;)a=Math.floor(Math.random()*n),t=e[n-=1],e[n]=e[a],e[a]=t;return e},a.oldQuestionsArray=function(){var e=a.props.currentQuestion;a.props.getPrevQuestions(e)},a}return Object(p.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){this.props.fetchQuiz()}},{key:"render",value:function(){var e,t,a,n,o,s=this.props,c=s.isFetching,i=s.currentQuestion,l=s.counter;return i.fields?(e=i.fields.question,a=i.fields.answer,t=this.shuffle(i.fields.choices),n=i.fields.imageQuestion.fields.file.url,o=i.fields.imageQuestion.fields.file.title,r.a.createElement("div",null,c?r.a.createElement(Le,null):r.a.createElement(r.a.Fragment,null,l<=9?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:{margin:20}},r.a.createElement(Ne,{question:e,choices:t,answer:a,imageTitle:o,imageUrl:n})),r.a.createElement(De,null)):r.a.createElement(He,null)))):r.a.createElement(Le,null)}}]),t}(n.Component),Ge=Object(q.b)(function(e){return{isFetching:e.data.isFetching,currentQuestion:e.data.currentQuestion,counter:e.data.counter}},{fetchQuiz:function(){return function(e){return e({type:w}),g.getEntries().then(function(t){var a=t.items,n=a[Math.floor(Math.random()*a.length)],r=n.sys.id,o=a.filter(function(e){return e.sys.id!==r});e({type:C,payload:o,payload1:n})}).catch(function(t){e({type:S,payload:t}),console.error("error fetch the content",t)})}},getPrevQuestions:function(e){return function(t){t({type:j,payload:e})}},getNextQuestion:N})(We),Ye=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(q.a,{store:T},r.a.createElement(F.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(oe,null),r.a.createElement(z.a,{path:"/",exact:!0,component:fe}),r.a.createElement(z.a,{path:"/about/",component:be}),r.a.createElement(z.a,{path:"/quiz/",component:Ge}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(Ye,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},56:function(e,t,a){}},[[196,1,2]]]);
//# sourceMappingURL=main.e5366b71.chunk.js.map