(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{218:function(e,t,a){e.exports=a(415)},223:function(e,t,a){},224:function(e,t,a){},415:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(211),l=a.n(c),i=(a(223),a(21)),s=a(22),o=a(24),m=a(23),u=a(25),h=a(6),b=a(33),p=(a(224),a(18),a(8)),d=Object(p.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement("div",{className:"dtc b v-mid tracked w-25 tr"},r.a.createElement(h.c,{to:"/create",className:"link ba white pa2 ph3 b--light-green bw1  br3 dim  grow f6 f5-ns dib mr3 mr4-ns"},"New Project"),r.a.createElement("a",{onClick:e.signOut,className:"link ba white pa2 ph3 b--light-green bw1  br3 dim  grow f6 f5-ns dib mr3 mr4-ns"},"Log Out"),r.a.createElement(h.c,{to:"/",className:"link ba light-yellow br-100 pa2 ph3 b--light-yellow bw2  br3 dim  grow f6 f5-ns dib mr3 mr4-ns"},e.profile.initials))}),f=function(){return r.a.createElement("div",{className:"dtc  b v-mid tracked w-30 tr"},r.a.createElement(h.c,{to:"/signup",className:"link ba white pa2 ph3 b--light-green bw1  br3 dim  grow f6 f5-ns dib mr3 mr4-ns"},"Signup"),r.a.createElement(h.c,{to:"/signin",className:"link ba white pa2 ph3 b--light-green bw1  br3 dim  grow f6 f5-ns dib mr3 mr4-ns"},"Login"))},g=Object(p.b)(function(e){return{auth:e.firebase.auth,profile:e.firebase.profile}})(function(e){var t=e.auth,a=e.profile,n=t.uid?r.a.createElement(d,{profile:a}):r.a.createElement(f,null);return r.a.createElement("nav",{className:"dt dt--fixed  border-box pa3 bg-navy ph5-ns"},r.a.createElement("p",{className:"dtc v-mid baskerville link w-25 light-green tl "},r.a.createElement(h.b,{to:"/",className:"link f2  light-green hover-white "},"Makevents ")),n)}),E=a(47),w=a.n(E),N=function(e){var t=e.notifications;return r.a.createElement("div",{className:"br2 ba white b--light-green bw0 bg-white-10  mv2 mr3 mw7 w-40 fr "},r.a.createElement("h2",{className:"tc"},"Notifications "),r.a.createElement("div",{className:"pa2 dtc light-green ph3-ns pb3-ns dt w-80 mt2 "},t&&t.map(function(e){return r.a.createElement("li",{className:"tl",key:e.id},r.a.createElement("span",{className:"f4  yellow"},e.user,"  "),r.a.createElement("span",{className:"f4 mh4"}," ",e.content," "),r.a.createElement("span",{className:"white b "},w()(e.time.toDate()).fromNow()))})))},v=function(e){var t=e.project;return r.a.createElement("div",{className:"br2 bg-white-10 bt bb white b--light-green bw1 mv4 w-60 mw7 "},r.a.createElement("div",{className:"pa2 dtc tc light-green ph3-ns pb3-ns dt  mt1"},r.a.createElement("h1",{className:"f3 f3-ns mv0"},t.title)),r.a.createElement("div",{className:"ph3  tr"},r.a.createElement("h2",{className:"f5 mv0"},"postedby: ",t.authorFirstName," ",t.authorLastName)),r.a.createElement("div",null,r.a.createElement("p",{className:"f4 ph4 lh-copy measure mt2 tl yellow"},w()(t.createdAt.toDate()).calendar())))},j=function(e){var t=e.projects;return r.a.createElement("div",null,t&&t.map(function(e){return r.a.createElement(h.b,{to:"/project/"+e.id,key:e.id,className:"link"},r.a.createElement(v,{project:e}))}))},O=a(27),y=a(15),C=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projects,a=e.auth,n=e.notifications;return a.uid?r.a.createElement("div",{className:"dash"},r.a.createElement(N,{notifications:n}),r.a.createElement(j,{projects:t})):r.a.createElement(b.a,{to:"/signin"})}}]),t}(n.Component),S=Object(y.d)(Object(p.b)(function(e){return{projects:e.firestore.ordered.projects,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}}),Object(O.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"notifications",limit:3,orderBy:["time","desc"]}]))(C),k=Object(y.d)(Object(p.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,auth:e.firebase.auth}}),Object(O.firestoreConnect)([{collection:"projects"}]))(function(e){var t=e.project;return e.auth.uid?t?r.a.createElement("div",{className:"br2 ba white b--light-green bw2 mv5  mw7 w-90 w-80-m center  "},r.a.createElement("div",{className:"pa2 dtc light-green ph3-ns pb3-ns dt w-80 mt2 "},r.a.createElement("h1",{className:"f3 f3-ns mv0 tl"},t.title)),r.a.createElement("div",{className:" ph2 "},r.a.createElement("h2",{className:"f5 mv0 tr"},t.authorFirstName," ",t.authorLastName)),r.a.createElement("div",null,r.a.createElement("p",{className:"f4 ph3  lh-copy measure tc mt2  yellow"},t.content),r.a.createElement("p",{className:"f5 ph4 lh-copy measure mt2 white tl"},w()(t.createdAt.toDate()).calendar()))):r.a.createElement("h2",{className:"white"},"Loading content "):r.a.createElement(b.a,{to:"/signin"})}),R=a(32),F=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={email:" ",password:" "},a.handleChange=function(e){a.setState(Object(R.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signIn(a.state)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError;return e.auth.uid?r.a.createElement(b.a,{to:"/"}):r.a.createElement("form",{className:"center w-70 mt0 pa4  bg-white-10",onSubmit:this.handleSubmit},r.a.createElement("h1",{className:" b green"},"SignIn "),r.a.createElement("br",null),r.a.createElement("label",{className:"b f5",htmlFor:"name"},"Email:"),r.a.createElement("input",{className:"b pa2 br3 ml3 input-reset ba bg-transparent hover-bg-black hover-white w-25",type:"text",id:"email",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",{className:"b f5",htmlFor:"name"},"Password:"),r.a.createElement("input",{className:"b pa2 ml2 mt3 br3 input-reset ba bg-transparent hover-bg-black hover-white w-25",type:"password",id:"password",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("button",{className:"bw0 dim br3 bg-green mt3 pa3 white fw1 tc ttu tracked "},"Login"),r.a.createElement("div",{className:"red b tc"},t?r.a.createElement("p",null,t):null))}}]),t}(n.Component),I=Object(p.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}));var a}}})(F),A=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={firstName:"",lastName:"",email:" ",password:" "},a.handleChange=function(e){a.setState(Object(R.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.signUp(a.state)},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.auth,a=e.authError;return t.uid?r.a.createElement(b.a,{to:"/"}):r.a.createElement("form",{className:"center w-70 mt0 pa4  bg-white-10",onSubmit:this.handleSubmit},r.a.createElement("h1",{className:" b green"},"SignUp "),r.a.createElement("br",null),r.a.createElement("label",{className:"b f5",htmlFor:"FirstName"},"FirstName:"),r.a.createElement("input",{className:"b pa2 br3 ml3 input-reset ba bg-transparent hover-bg-black hover-white w-25",type:"text",id:"firstName",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",{className:"b f5",htmlFor:"LastName"},"LastName:"),r.a.createElement("input",{className:"b pa2 ml2 mt3 br3 input-reset ba bg-transparent hover-bg-black hover-white w-25",type:"text",id:"lastName",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",{className:"b f5",htmlFor:"Email"},"Email:"),r.a.createElement("input",{className:"b pa2 br3 ml2 mt3 input-reset ba bg-transparent hover-bg-black hover-white w-25",type:"text",id:"email",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",{className:"b f5",htmlFor:"Password"},"Password:"),r.a.createElement("input",{className:"b pa2 br3 ml2 mt3 input-reset ba bg-transparent hover-bg-black hover-white w-25",type:"password",id:"password",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("button",{className:"bw0 br3 dim  bg-green mt3 pa3 white fw1 tc ttu tracked"},"Sign up"),r.a.createElement("div",{className:"red b tc"},a?r.a.createElement("p",null,a):null))}}]),t}(n.Component),P=Object(p.b)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signUp:function(t){return e(function(e){return function(t,a,n){var r=n.getFirebase,c=n.getFirestore,l=r(),i=c();l.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(t){return i.collection("users").doc(t.user.uid).set({firstName:e.firstName,lastName:e.lastName,initials:e.firstName[0]+e.lastName[0]})}).then(function(){t({type:"SIGNUP_SUCCESS"})}).catch(function(e){t({type:"SIGNUP_ERROR",err:e})})}}(t))}}})(A),U=a(41),_=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={title:" ",content:" "},a.handleChange=function(e){a.setState(Object(R.a)({},e.target.id,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),a.props.createProject(a.state),a.props.history.push("/")},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return this.props.auth.uid?r.a.createElement("form",{className:"center w-70 mt0 pa4  bg-white-10",onSubmit:this.handleSubmit},r.a.createElement("h1",{className:" b green pb4"},"Create New Project "),r.a.createElement("br",null),r.a.createElement("label",{htmlFor:"Title"},"Title:"),r.a.createElement("input",{className:"pa2 br3 mb5 ml3 input-reset ba bg-transparent hover-bg-black hover-white w-25",type:"text",id:"title",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("label",{className:"green b f4 ",htmlFor:"Content"},"Content"),r.a.createElement("br",null),r.a.createElement("textarea",{className:"pa2 w-33 ml2 mt2 br3 input-reset ba bg-transparent b--black hover-bg-black hover-white",type:"text",id:"content",onChange:this.handleChange}),r.a.createElement("br",null),r.a.createElement("button",{className:"bw0 dim br3 bg-green mt3 pa3 white fw1 tc ttu tracked "},"Create")):r.a.createElement(b.a,{to:"/signin"})}}]),t}(n.Component),x=Object(p.b)(function(e){return{auth:e.firebase.auth}},function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,l=a().firebase.auth.uid;r.collection("projects").add(Object(U.a)({},e,{authorFirstName:c.firstName,authorLastName:c.lastName,authorId:l,createdAt:new Date})).then(function(){t({type:"CREATE_PROJECT",project:e})}).catch(function(e){t({type:"CREATE_PROJECT_ERROR",err:e})})}}(t))}}})(_),L=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(g,null),r.a.createElement(b.d,null,r.a.createElement(b.b,{exact:!0,path:"/",component:S}),r.a.createElement(b.b,{path:"/project/:id",component:k}),r.a.createElement(b.b,{path:"/signin",component:I}),r.a.createElement(b.b,{path:"/signup",component:P}),r.a.createElement(b.b,{path:"/create",component:x}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var T={authError:null},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_ERROR":return console.log("login error"),Object(U.a)({},e,{authError:"The makevents email or password do not match. Please try again"});case"LOGIN_SUCCESS":return console.log("login success"),Object(U.a)({},e,{authError:null});case"SIGNOUT_SUCCESS":return e;case"SIGNUP_SUCCESS":return Object(U.a)({},e,{authError:null});case"SIGNUP_ERROR":return Object(U.a)({},e,{authError:t.err.message});default:return e}},D={projects:[{id:"1",title:"help me find peach",content:"blah blah blah"},{id:"2",title:"collect al the stars",content:"blah blah blah"},{id:"3",title:"egg hunt with yoshi",content:"blah blah blah"}]},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("created project",t.project),e;case"CREATE_PROJECT_ERROR":return console.log("created project error",t.err),e;default:return e}},B=a(63),W=Object(y.c)({auth:G,project:J,firestore:B.firestoreReducer,firebase:O.firebaseReducer}),z=a(217),q=a(90),K=a.n(q);a(409),a(413);K.a.initializeApp({apiKey:"AIzaSyAumt8qD6a0iUv5n8-LFN1xignU4TjdSko",authDomain:"makevents-82d22.firebaseapp.com",databaseURL:"https://makevents-82d22.firebaseio.com",projectId:"makevents-82d22",storageBucket:"makevents-82d22.appspot.com",messagingSenderId:"914068508921",appId:"1:914068508921:web:d402adf5855fcad0"}),K.a.firestore().settings({timestampsInSnapshots:!0});var M=K.a,$=Object(y.e)(W,Object(y.d)(Object(y.a)(z.a.withExtraArgument({getFirebase:O.getFirebase,getFirestore:B.getFirestore})),Object(B.reduxFirestore)(M),Object(O.reactReduxFirebase)(M,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));$.firebaseAuthIsReady.then(function(){l.a.render(r.a.createElement(p.a,{store:$},r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})})}},[[218,1,2]]]);
//# sourceMappingURL=main.376b23b8.chunk.js.map