(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,a,t){},101:function(e,a,t){},102:function(e,a,t){},103:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(25),r=t.n(c),o=(t(62),t(5)),s=t(6),m=t(9),i=t(7),u=t(8),p=t(11),d=t.n(p),f=(t(80),t(105)),h=t(106),E=t(107),b=t(108),g=t(51),v=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).state={data:null},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("http://dallenad.com/drupal/api/teensmart_header?_format=json").then(function(a){e.setState({apply:a.data})}).catch(function(e){console.log("an error occured"),console.log(e)})}},{key:"render",value:function(){var e=this.state.apply;return l.a.createElement("section",null,e&&e.apply.map(function(e,a){return l.a.createElement(f.a,{key:a,fluid:!0,className:"main-bg jumbotron p-3"},l.a.createElement("h2",{className:"App-title"},e.apply_title),l.a.createElement(h.a,{fluid:!0},l.a.createElement(E.a,null,l.a.createElement(b.a,{sm:6,className:"jumbotron-text"},l.a.createElement("p",null,e.apply_text)),l.a.createElement(b.a,{sm:6,className:"m-auto text-center"},l.a.createElement(g.a,{className:"applyNow-btn m-auto pt-3 text-center",href:e.apply_url},e.apply_button)))))}))}}]),a}(l.a.Component),y=t(115),N=t(109),j=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).state={data:null},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("http://dallenad.com/drupal/api/benefit?_format=json").then(function(a){e.setState({benefits:a.data})}).catch(function(e){console.log("an error occured"),console.log(e)})}},{key:"render",value:function(){var e=this.state.benefits;return l.a.createElement("section",{className:"pt-3 pl-3"},l.a.createElement("h2",{className:"App-title"},"What will I get as a volunteer?"),l.a.createElement(h.a,{fluid:!0},l.a.createElement(E.a,null,e&&e.map(function(e,a){return l.a.createElement(y.a,{key:a,className:"benefit"},l.a.createElement(N.a,{variant:"top",roundedCircle:!0,src:"http://dallenad.com/drupal"+e.field_benefiticon,className:"benefit-image"}),l.a.createElement(y.a.Body,null,l.a.createElement(y.a.Title,{className:"benefit-title"},e.field_benefitext)))}))))}}]),a}(l.a.Component),k=t(113),O=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).state={data:null},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("http://dallenad.com/drupal/api/faq?_format=json").then(function(a){e.setState({faqs:a.data})}).catch(function(e){console.log("an error occured"),console.log(e)})}},{key:"render",value:function(){var e=this.state.faqs;return l.a.createElement("section",{className:"pt-3 pl-3"},l.a.createElement("h2",{className:"App-title"},"Do you have any question?"),l.a.createElement("p",null,"If your question is not answered below, you can contact us at volunteer@teensmart.org"),l.a.createElement(k.a,{className:"faq",xs:12,sm:6},e&&e.map(function(e,a){return l.a.createElement(y.a,{key:a},l.a.createElement(y.a.Header,null,l.a.createElement(k.a.Toggle,{className:"question",as:g.a,variant:"link",eventKey:a},e.field_questions),l.a.createElement(k.a.Collapse,{eventKey:a},l.a.createElement(y.a.Body,null,e.field_answers))))})))}}]),a}(l.a.Component),_=t(29),w=t.n(_),x=t(30),S=t.n(x),C=t(31),T=t.n(C),D=t(32),I=t.n(D),W=t(33),q=t.n(W),M=function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.data;return l.a.createElement("footer",{className:"main-bg"},l.a.createElement(E.a,null,l.a.createElement(b.a,{sm:6,className:"logos"},e&&e.logos.map(function(e,a){return e.logo_secondary?l.a.createElement("div",{key:a},l.a.createElement("a",{href:"http://dallenad.com/drupal"},l.a.createElement(N.a,{className:"logo",src:"http://dallenad.com/drupal".concat(e.logo_primary),alt:"TeenSmart"})),l.a.createElement("a",{href:"http://dallenad.com/drupal"},l.a.createElement(N.a,{className:"logo",src:"http://dallenad.com/drupal".concat(e.logo_secondary),alt:"JovenSalud"}))):l.a.createElement("a",{href:"http://dallenad.com/drupal"},l.a.createElement(N.a,{className:"logo",src:"http://dallenad.com/drupal".concat(e.logo_primary),alt:"TeenSmart"}))}),l.a.createElement("p",{className:"contact-links"},l.a.createElement("a",{href:"#contact"},"Contact us")," | ",l.a.createElement("a",{href:"#volunteer"},"Volunteer")," | ",l.a.createElement("a",{href:"#involve"},"Get involved")),l.a.createElement("p",null,"\xa9 2019 TeenSmart")),l.a.createElement(b.a,{sm:6,className:"social col text-right"},l.a.createElement("p",null,"Keep in touch"),l.a.createElement("a",{href:"#facebook"},l.a.createElement(N.a,{className:"social-button",src:T.a,alt:"Facebook"})),l.a.createElement("a",{href:"#twitter"},l.a.createElement(N.a,{className:"social-button",src:I.a,alt:"Twitter"})),l.a.createElement("a",{href:"#youtube"},l.a.createElement(N.a,{className:"social-button",src:S.a,alt:"Youtube"})),l.a.createElement("a",{href:"#skype"},l.a.createElement(N.a,{className:"social-button",src:q.a,alt:"Skype"})),l.a.createElement("a",{href:"#mail"},l.a.createElement(N.a,{className:"social-button",src:w.a,alt:"e-mail"})))))}}]),a}(l.a.Component),A=t(110),B=t(116),F=t(52),J=(t(94),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.props.data;return l.a.createElement(h.a,{fluid:!0},l.a.createElement(E.a,null,l.a.createElement(b.a,{sm:4,md:6,lg:7,className:"logos"},e&&e.logos.map(function(e,a){return e.logo_secondary?l.a.createElement("div",{key:a},l.a.createElement(N.a,{className:"logo",src:"http://dallenad.com/drupal".concat(e.logo_primary),href:"#",alt:"TeenSmart"}),l.a.createElement(N.a,{className:"logo",src:"http://dallenad.com/drupal".concat(e.logo_secondary),href:"#",alt:"TeenSmart"})):l.a.createElement(N.a,{className:"logo",src:"http://dallenad.com/drupal".concat(e.logo_primary),href:"#",alt:"TeenSmart"})})),l.a.createElement(b.a,{sm:4,md:3,className:"social d-flex justify-content-around"},l.a.createElement(N.a,{className:"social-button float-right",src:q.a,alt:"Facebook"}),l.a.createElement(N.a,{className:"social-button float-right",src:w.a,alt:"Facebook"}),l.a.createElement(N.a,{className:"social-button float-right",src:S.a,alt:"Facebook"}),l.a.createElement(N.a,{className:"social-button float-right",src:I.a,alt:"Facebook"}),l.a.createElement(N.a,{className:"social-button float-right",src:T.a,alt:"Facebook"})),l.a.createElement(b.a,{sm:4,md:3,lg:2,className:"col"},l.a.createElement(A.a,{className:"float-right"},l.a.createElement(B.a,{className:"languageSelector",type:"radio",name:"options",defaultValue:1},l.a.createElement(F.a,{className:"button language",value:1},"English"),l.a.createElement(F.a,{className:"button language",value:2},"Espa\xf1ol"))))))}}]),a}(l.a.Component)),V=(t(95),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("section",null,l.a.createElement(f.a,{fluid:!0,className:"main-bg"},l.a.createElement(h.a,{fluid:!0,className:"pt-3"},l.a.createElement(E.a,{className:"pl-3"},l.a.createElement("h2",{className:"App-title"}," Our volunteer's impact")),l.a.createElement(E.a,{className:"pl-5"},l.a.createElement(b.a,{sm:6},l.a.createElement("br",null),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col"},l.a.createElement("strong",null,l.a.createElement("h1",null,"+50")),l.a.createElement("p",null," Weekly hours ",l.a.createElement("br",null),"counseling young ",l.a.createElement("br",null),"students")),l.a.createElement("div",{className:"col"},l.a.createElement("strong",null,l.a.createElement("h1",null,"+50")),l.a.createElement("p",null," Weekly hours ",l.a.createElement("br",null),"counseling young ",l.a.createElement("br",null),"students")),l.a.createElement("div",{className:"col"},l.a.createElement("strong",null,l.a.createElement("h1",null,"+50")),l.a.createElement("p",null," Weekly hours ",l.a.createElement("br",null),"counseling young ",l.a.createElement("br",null),"students")))),l.a.createElement(b.a,{sm:6,style:{padding:50}},l.a.createElement("div",null,l.a.createElement("h6",null,"Teensmart International is helping young men and women's nself-care and self-empowerment with the goal of reducing or preventing six risky health behaviors and promoting personal leadership. But this couldn't be done without our remarkable volunteers; since they are the ones that help us create a positive impact in so many young people.")),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",className:"Impact-applybutton"},"I want to be a volunteer"))))))}}]),a}(l.a.Component)),K=t(112),G=t(111),H=(t(96),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).state={data:null},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("http://dallenad.com/drupal/api/teensmart-navigation?_format=json").then(function(a){e.setState({navigation:a.data})}).catch(function(e){console.log("an error occured"),console.log(e)})}},{key:"render",value:function(){var e=this.state.navigation;return l.a.createElement(K.a,{className:"navbar sticky-top",variant:"light",expand:"sm"},l.a.createElement(K.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(K.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(G.a,{className:"mr-auto"},e&&e.teensmartNavigation.map(function(e,a){return l.a.createElement(G.a.Link,{key:a,className:"nav-link text-center",href:e.link},e.title)})),l.a.createElement(g.a,{className:"button d-block float-sm-right mr-md-3",href:"#"},"Donate now >")))}}]),a}(l.a.Component)),L=t(19),Y=(t(99),l.a.Component,t(100),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).state={data:null},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("http://dallenad.com/drupal/api/step?_format=json").then(function(a){e.setState({steps:a.data})}).catch(function(e){console.log("an error occured"),console.log(e)})}},{key:"render",value:function(){var e=this.state.steps;return l.a.createElement("section",{className:"Steps"},l.a.createElement("h2",{className:"App-title"},"Want to involve yourself as volunteer with us?"),l.a.createElement(h.a,null,l.a.createElement(E.a,null,e&&e.map(function(e,a){return 0===a?l.a.createElement(b.a,{key:a,md:{span:2,offset:1}},l.a.createElement("span",{className:"Steps-circle hidden-xs"},a+1),l.a.createElement("span",{className:"Steps-circle show-xs"},a+1),l.a.createElement("p",{className:"Steps-item"},e.field_steptext_1),l.a.createElement("p",{className:"Steps-item"},l.a.createElement("a",{href:e.field_steplinkurl},e.field_steplinktext))):a%2>0?l.a.createElement(b.a,{key:a,md:{span:2}},l.a.createElement("p",{className:"Steps-item"},e.field_steptext_1),l.a.createElement("p",{className:"Steps-item"},l.a.createElement("a",{href:e.field_steplinkurl},e.field_steplinktext)),l.a.createElement("span",{className:"Steps-circle hidden-xs"},a+1),l.a.createElement("span",{className:"Steps-circle show-xs"},a+1)):l.a.createElement(b.a,{key:a,md:{span:2}},l.a.createElement("span",{className:"Steps-circle hidden-xs"},a+1),l.a.createElement("p",{className:"Steps-item"},e.field_steptext_1),l.a.createElement("p",{className:"Steps-item"},l.a.createElement("a",{href:e.field_steplinkurl},e.field_steplinktext)),l.a.createElement("span",{className:"Steps-circle show-xs"},a+1))}))))}}]),a}(l.a.Component)),$=t(114),z=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).state={data:null},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("http://dallenad.com/drupal/api/volunteertypes?_format=json").then(function(a){e.setState({types:a.data}),console.log(a.data)}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state.types;return l.a.createElement("section",{className:"main-bg pt-3 pl-3"},l.a.createElement("h2",{className:"App-title"},"What kind of volunteer work can you do with us?"),l.a.createElement($.a,{className:"carousel d-block d-sm-none",prevIcon:l.a.createElement("span",{className:"carousel-icon"},"<"),nextIcon:l.a.createElement("span",{className:"carousel-icon"},">")},e&&e.map(function(e,a){return l.a.createElement($.a.Item,{key:a},l.a.createElement("h3",null,e.field_title),l.a.createElement("p",null,e.field_details))})),l.a.createElement(h.a,{fluid:!0,className:"d-none d-sm-block"},l.a.createElement(E.a,{className:"types-desktop"},e&&e.map(function(e,a){return l.a.createElement(y.a,{key:a,className:"volunteer-type"},l.a.createElement(y.a.Body,{className:"volunteer-body"},l.a.createElement(y.a.Title,null,l.a.createElement("h3",null,e.field_title)),l.a.createElement(y.a.Text,null,e.field_details)))}))))}}]),a}(l.a.Component),P=(t(101),function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).state={hero:null},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("http://dallenad.com/drupal/api/hero?_format=json").then(function(a){e.setState({hero:a.data})}).catch(function(e){console.log("an error occured"),console.log(e)})}},{key:"render",value:function(){var e=this.state.hero;return l.a.createElement(f.a,{fluid:!0,className:"main-bg jumbotron p-0"},l.a.createElement(h.a,{className:"mt-4 hero"},e&&e.map(function(e,a){return l.a.createElement(E.a,{key:a},l.a.createElement(b.a,{sm:6,className:"jumbotron-text m-auto pt-3 pb-1"},l.a.createElement("p",null,e.field_testimonial),l.a.createElement("p",{className:"text-right font-weight-bold"},l.a.createElement("a",{href:e.field_herolink},"Vinicio, featured volunteer"))),l.a.createElement(b.a,{sm:6,className:"jumbotron-photo m-auto"},l.a.createElement("img",{src:"http://dallenad.com/drupal"+e.field_heroimage,alt:"Jumbotron",style:{maxWidth:"100%"}})))})))}}]),a}(l.a.Component)),Q=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(m.a)(this,Object(i.a)(a).call(this,e))).state={data:null},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.a.get("http://dallenad.com/drupal/api/teensmart_header?_format=json").then(function(a){e.setState({blocks:a.data})}).catch(function(e){console.log("an error occured"),console.log(e)})}},{key:"render",value:function(){var e=this.state.blocks;return l.a.createElement("div",{id:"Volunteer"},l.a.createElement(J,{data:e}),l.a.createElement(H,null),l.a.createElement(P,null),l.a.createElement(z,null),l.a.createElement(v,null),l.a.createElement(Y,null),l.a.createElement(j,null),l.a.createElement(V,null),l.a.createElement(O,null),l.a.createElement(M,{data:e}))}}]),a}(l.a.Component),R=(t(102),function(e){function a(){return Object(o.a)(this,a),Object(m.a)(this,Object(i.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(Q,null))}}]),a}(l.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(R,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},29:function(e,a,t){e.exports=t.p+"static/media/icon-mail.59fb1fc4.png"},30:function(e,a,t){e.exports=t.p+"static/media/icon-youtube.063ecaa8.png"},31:function(e,a,t){e.exports=t.p+"static/media/icon-facebook.dc5c6da1.png"},32:function(e,a,t){e.exports=t.p+"static/media/icon-twitter.8cdbcd61.png"},33:function(e,a,t){e.exports=t.p+"static/media/icon-skype.2f8404b0.png"},56:function(e,a,t){e.exports=t(103)},62:function(e,a,t){},80:function(e,a,t){},94:function(e,a,t){},95:function(e,a,t){},96:function(e,a,t){},99:function(e,a,t){}},[[56,1,2]]]);
//# sourceMappingURL=main.61ef36ab.chunk.js.map