(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{436:function(e,a,t){"use strict";t.d(a,"a",function(){return l});var s=t(3),l=t.n(s).a.createContext({})},441:function(e,a,t){"use strict";function s(e,a){if(null==e)return{};var t,s,l=function(e,a){if(null==e)return{};var t,s,l={},c=Object.keys(e);for(s=0;s<c.length;s++)t=c[s],a.indexOf(t)>=0||(l[t]=e[t]);return l}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(s=0;s<c.length;s++)t=c[s],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}t.d(a,"a",function(){return s})},501:function(e,a,t){"use strict";var s=t(18),l=t(69),c=t(3),r=t.n(c),m=t(5),n=t.n(m),i=t(116),o=t.n(i),u=t(384),d={tabs:n.a.bool,pills:n.a.bool,vertical:n.a.oneOfType([n.a.bool,n.a.string]),horizontal:n.a.string,justified:n.a.bool,fill:n.a.bool,navbar:n.a.bool,card:n.a.bool,tag:u.l,className:n.a.string,cssModule:n.a.object},v=function(e){var a=e.className,t=e.cssModule,c=e.tabs,m=e.pills,n=e.vertical,i=e.horizontal,d=e.justified,v=e.fill,p=e.navbar,g=e.card,b=e.tag,E=Object(l.a)(e,["className","cssModule","tabs","pills","vertical","horizontal","justified","fill","navbar","card","tag"]),N=Object(u.h)(o()(a,p?"navbar-nav":"nav",!!i&&"justify-content-"+i,function(e){return!1!==e&&(!0===e||"xs"===e?"flex-column":"flex-"+e+"-column")}(n),{"nav-tabs":c,"card-header-tabs":g&&c,"nav-pills":m,"card-header-pills":g&&m,"nav-justified":d,"nav-fill":v}),t);return r.a.createElement(b,Object(s.a)({},E,{className:N}))};v.propTypes=d,v.defaultProps={tag:"ul",vertical:!1},a.a=v},502:function(e,a,t){"use strict";var s=t(18),l=t(69),c=t(3),r=t.n(c),m=t(5),n=t.n(m),i=t(116),o=t.n(i),u=t(384),d={tag:u.l,active:n.a.bool,className:n.a.string,cssModule:n.a.object},v=function(e){var a=e.className,t=e.cssModule,c=e.active,m=e.tag,n=Object(l.a)(e,["className","cssModule","active","tag"]),i=Object(u.h)(o()(a,"nav-item",!!c&&"active"),t);return r.a.createElement(m,Object(s.a)({},n,{className:i}))};v.propTypes=d,v.defaultProps={tag:"li"},a.a=v},503:function(e,a,t){"use strict";var s=t(18),l=t(69),c=t(117),r=t(98),m=t(3),n=t.n(m),i=t(5),o=t.n(i),u=t(116),d=t.n(u),v=t(384),p={tag:v.l,innerRef:o.a.oneOfType([o.a.object,o.a.func,o.a.string]),disabled:o.a.bool,active:o.a.bool,className:o.a.string,cssModule:o.a.object,onClick:o.a.func,href:o.a.any},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).onClick=t.onClick.bind(Object(c.a)(t)),t}Object(r.a)(a,e);var t=a.prototype;return t.onClick=function(e){this.props.disabled?e.preventDefault():("#"===this.props.href&&e.preventDefault(),this.props.onClick&&this.props.onClick(e))},t.render=function(){var e=this.props,a=e.className,t=e.cssModule,c=e.active,r=e.tag,m=e.innerRef,i=Object(l.a)(e,["className","cssModule","active","tag","innerRef"]),o=Object(v.h)(d()(a,"nav-link",{disabled:i.disabled,active:c}),t);return n.a.createElement(r,Object(s.a)({},i,{ref:m,onClick:this.onClick,className:o}))},a}(n.a.Component);g.propTypes=p,g.defaultProps={tag:"a"},a.a=g},558:function(e,a,t){"use strict";var s=t(18),l=t(98),c=t(3),r=t.n(c),m=t(154),n=t(5),i=t.n(n),o=t(116),u=t.n(o),d=t(436),v=t(384),p={tag:v.l,activeTab:i.a.any,className:i.a.string,cssModule:i.a.object},g=function(e){function a(a){var t;return(t=e.call(this,a)||this).state={activeTab:t.props.activeTab},t}return Object(l.a)(a,e),a.getDerivedStateFromProps=function(e,a){return a.activeTab!==e.activeTab?{activeTab:e.activeTab}:null},a.prototype.render=function(){var e=this.props,a=e.className,t=e.cssModule,l=e.tag,c=Object(v.i)(this.props,Object.keys(p)),m=Object(v.h)(u()("tab-content",a),t);return r.a.createElement(d.a.Provider,{value:{activeTabId:this.state.activeTab}},r.a.createElement(l,Object(s.a)({},c,{className:m})))},a}(c.Component);Object(m.polyfill)(g),a.a=g,g.propTypes=p,g.defaultProps={tag:"div"}},559:function(e,a,t){"use strict";t.d(a,"a",function(){return p});var s=t(18),l=t(69),c=t(3),r=t.n(c),m=t(5),n=t.n(m),i=t(116),o=t.n(i),u=t(436),d=t(384),v={tag:d.l,className:n.a.string,cssModule:n.a.object,tabId:n.a.any};function p(e){var a=e.className,t=e.cssModule,c=e.tabId,m=e.tag,n=Object(l.a)(e,["className","cssModule","tabId","tag"]),i=function(e){return Object(d.h)(o()("tab-pane",a,{active:c===e}),t)};return r.a.createElement(u.a.Consumer,null,function(e){var a=e.activeTabId;return r.a.createElement(m,Object(s.a)({},n,{className:i(a)}))})}p.propTypes=v,p.defaultProps={tag:"div"}},560:function(e,a){var t=NaN,s="[object Symbol]",l=/^\s+|\s+$/g,c=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,m=/^0o[0-7]+$/i,n=parseInt,i=Object.prototype.toString;function o(e){var a=typeof e;return!!e&&("object"==a||"function"==a)}e.exports=function(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&i.call(e)==s}(e))return t;if(o(e)){var a="function"==typeof e.valueOf?e.valueOf():e;e=o(a)?a+"":a}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(l,"");var u=r.test(e);return u||m.test(e)?n(e.slice(2),u?2:8):c.test(e)?t:+e}},850:function(e,a,t){"use strict";t.r(a);var s=t(441),l=t(9),c=t(10),r=t(71),m=t(70),n=t(72),i=t(153),o=t(3),u=t.n(o),d=t(501),v=t(502),p=t(503),g=t(558),b=t(559),E=t(18),N=t(69),f=t(5),h=t.n(f),j=t(116),x=t.n(j),O=t(384),y={tag:O.l,flush:h.a.bool,className:h.a.string,cssModule:h.a.object},k=function(e){var a=e.className,t=e.cssModule,s=e.tag,l=e.flush,c=Object(N.a)(e,["className","cssModule","tag","flush"]),r=Object(O.h)(x()(a,"list-group",!!l&&"list-group-flush"),t);return u.a.createElement(s,Object(E.a)({},c,{className:r}))};k.propTypes=y,k.defaultProps={tag:"ul"};var M=k,T={tag:O.l,active:h.a.bool,disabled:h.a.bool,color:h.a.string,action:h.a.bool,className:h.a.any,cssModule:h.a.object},C=function(e){e.preventDefault()},w=function(e){var a=e.className,t=e.cssModule,s=e.tag,l=e.active,c=e.disabled,r=e.action,m=e.color,n=Object(N.a)(e,["className","cssModule","tag","active","disabled","action","color"]),i=Object(O.h)(x()(a,!!l&&"active",!!c&&"disabled",!!r&&"list-group-item-action",!!m&&"list-group-item-"+m,"list-group-item"),t);return c&&(n.onClick=C),u.a.createElement(s,Object(E.a)({},n,{className:i}))};w.propTypes=T,w.defaultProps={tag:"li"};var P=w,L=t(560),z=t.n(L),S={children:h.a.node,bar:h.a.bool,multi:h.a.bool,tag:O.l,value:h.a.oneOfType([h.a.string,h.a.number]),max:h.a.oneOfType([h.a.string,h.a.number]),animated:h.a.bool,striped:h.a.bool,color:h.a.string,className:h.a.string,barClassName:h.a.string,cssModule:h.a.object},I=function(e){var a=e.children,t=e.className,s=e.barClassName,l=e.cssModule,c=e.value,r=e.max,m=e.animated,n=e.striped,i=e.color,o=e.bar,d=e.multi,v=e.tag,p=Object(N.a)(e,["children","className","barClassName","cssModule","value","max","animated","striped","color","bar","multi","tag"]),g=z()(c)/z()(r)*100,b=Object(O.h)(x()(t,"progress"),l),f=Object(O.h)(x()("progress-bar",o&&t||s,m?"progress-bar-animated":null,i?"bg-"+i:null,n||m?"progress-bar-striped":null),l),h=d?a:u.a.createElement("div",{className:f,style:{width:g+"%"},role:"progressbar","aria-valuenow":c,"aria-valuemin":"0","aria-valuemax":r,children:a});return o?h:u.a.createElement(v,Object(E.a)({},p,{className:b,children:h}))};I.propTypes=S,I.defaultProps={tag:"div",value:0,max:100};var H=I,U=t(493),B=function(e){function a(e){var t;return Object(l.a)(this,a),(t=Object(r.a)(this,Object(m.a)(a).call(this,e))).toggle=t.toggle.bind(Object(i.a)(Object(i.a)(t))),t.state={activeTab:"1"},t}return Object(n.a)(a,e),Object(c.a)(a,[{key:"toggle",value:function(e){this.state.activeTab!==e&&this.setState({activeTab:e})}},{key:"render",value:function(){var e=this,a=this.props;a.children,Object(s.a)(a,["children"]);return u.a.createElement(u.a.Fragment,null,u.a.createElement(d.a,{tabs:!0},u.a.createElement(v.a,null,u.a.createElement(p.a,{className:x()({active:"1"===this.state.activeTab}),onClick:function(){e.toggle("1")}},u.a.createElement("i",{className:"icon-list"}))),u.a.createElement(v.a,null,u.a.createElement(p.a,{className:x()({active:"2"===this.state.activeTab}),onClick:function(){e.toggle("2")}},u.a.createElement("i",{className:"icon-speech"}))),u.a.createElement(v.a,null,u.a.createElement(p.a,{className:x()({active:"3"===this.state.activeTab}),onClick:function(){e.toggle("3")}},u.a.createElement("i",{className:"icon-settings"})))),u.a.createElement(g.a,{activeTab:this.state.activeTab},u.a.createElement(b.a,{tabId:"1"},u.a.createElement(M,{className:"list-group-accent",tag:"div"},u.a.createElement(P,{className:"list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"},"Today"),u.a.createElement(P,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-warning list-group-item-divider"},u.a.createElement("div",{className:"avatar float-right"},u.a.createElement("img",{className:"img-avatar",src:"assets/img/avatars/7.jpg",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",null,"Meeting with ",u.a.createElement("strong",null,"Lucas")," "),u.a.createElement("small",{className:"text-muted mr-3"},u.a.createElement("i",{className:"icon-calendar"}),"\xa0 1 - 3pm"),u.a.createElement("small",{className:"text-muted"},u.a.createElement("i",{className:"icon-location-pin"})," Palo Alto, CA")),u.a.createElement(P,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-info list-group-item-divider"},u.a.createElement("div",{className:"avatar float-right"},u.a.createElement("img",{className:"img-avatar",src:"assets/img/avatars/4.jpg",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",null,"Skype with ",u.a.createElement("strong",null,"Megan")),u.a.createElement("small",{className:"text-muted mr-3"},u.a.createElement("i",{className:"icon-calendar"}),"\xa0 4 - 5pm"),u.a.createElement("small",{className:"text-muted"},u.a.createElement("i",{className:"icon-social-skype"})," On-line")),u.a.createElement(P,{className:"list-group-item-accent-secondary bg-light text-center font-weight-bold text-muted text-uppercase small"},"Tomorrow"),u.a.createElement(P,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-danger list-group-item-divider"},u.a.createElement("div",null,"New UI Project - ",u.a.createElement("strong",null,"deadline")),u.a.createElement("small",{className:"text-muted mr-3"},u.a.createElement("i",{className:"icon-calendar"}),"\xa0 10 - 11pm"),u.a.createElement("small",{className:"text-muted"},u.a.createElement("i",{className:"icon-home"}),"\xa0 creativeLabs HQ"),u.a.createElement("div",{className:"avatars-stack mt-2"},u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/2.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/3.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/4.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/5.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/6.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})))),u.a.createElement(P,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-success list-group-item-divider"},u.a.createElement("div",null,u.a.createElement("strong",null,"#10 Startups.Garden")," Meetup"),u.a.createElement("small",{className:"text-muted mr-3"},u.a.createElement("i",{className:"icon-calendar"}),"\xa0 1 - 3pm"),u.a.createElement("small",{className:"text-muted"},u.a.createElement("i",{className:"icon-location-pin"}),"\xa0 Palo Alto, CA")),u.a.createElement(P,{action:!0,tag:"a",href:"#",className:"list-group-item-accent-primary list-group-item-divider"},u.a.createElement("div",null,u.a.createElement("strong",null,"Team meeting")),u.a.createElement("small",{className:"text-muted mr-3"},u.a.createElement("i",{className:"icon-calendar"}),"\xa0 4 - 6pm"),u.a.createElement("small",{className:"text-muted"},u.a.createElement("i",{className:"icon-home"}),"\xa0 creativeLabs HQ"),u.a.createElement("div",{className:"avatars-stack mt-2"},u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/2.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/3.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/4.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/5.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/6.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})),u.a.createElement("div",{className:"avatar avatar-xs"},u.a.createElement("img",{src:"assets/img/avatars/8.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"})))))),u.a.createElement(b.a,{tabId:"2",className:"p-3"},u.a.createElement("div",{className:"message"},u.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},u.a.createElement("div",{className:"avatar"},u.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),u.a.createElement("span",{className:"avatar-status badge-success"}))),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),u.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),u.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")),u.a.createElement("hr",null),u.a.createElement("div",{className:"message"},u.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},u.a.createElement("div",{className:"avatar"},u.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),u.a.createElement("span",{className:"avatar-status badge-success"}))),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),u.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),u.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")),u.a.createElement("hr",null),u.a.createElement("div",{className:"message"},u.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},u.a.createElement("div",{className:"avatar"},u.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),u.a.createElement("span",{className:"avatar-status badge-success"}))),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),u.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),u.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")),u.a.createElement("hr",null),u.a.createElement("div",{className:"message"},u.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},u.a.createElement("div",{className:"avatar"},u.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),u.a.createElement("span",{className:"avatar-status badge-success"}))),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),u.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),u.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt...")),u.a.createElement("hr",null),u.a.createElement("div",{className:"message"},u.a.createElement("div",{className:"py-3 pb-5 mr-3 float-left"},u.a.createElement("div",{className:"avatar"},u.a.createElement("img",{src:"assets/img/avatars/7.jpg",className:"img-avatar",alt:"admin@bootstrapmaster.com"}),u.a.createElement("span",{className:"avatar-status badge-success"}))),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lukasz Holeczek"),u.a.createElement("small",{className:"text-muted float-right mt-1"},"1:52 PM")),u.a.createElement("div",{className:"text-truncate font-weight-bold"},"Lorem ipsum dolor sit amet"),u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt..."))),u.a.createElement(b.a,{tabId:"3",className:"p-3"},u.a.createElement("h6",null,"Settings"),u.a.createElement("div",{className:"aside-options"},u.a.createElement("div",{className:"clearfix mt-4"},u.a.createElement("small",null,u.a.createElement("b",null,"Option 1")),u.a.createElement(U.n,{className:"float-right",variant:"pill",label:!0,color:"success",defaultChecked:!0,size:"sm"})),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),u.a.createElement("div",{className:"aside-options"},u.a.createElement("div",{className:"clearfix mt-3"},u.a.createElement("small",null,u.a.createElement("b",null,"Option 2")),u.a.createElement(U.n,{className:"float-right",variant:"pill",label:!0,color:"success",size:"sm"})),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."))),u.a.createElement("div",{className:"aside-options"},u.a.createElement("div",{className:"clearfix mt-3"},u.a.createElement("small",null,u.a.createElement("b",null,"Option 3")),u.a.createElement(U.n,{className:"float-right",variant:"pill",label:!0,color:"success",defaultChecked:!0,size:"sm",disabled:!0}),u.a.createElement("div",null,u.a.createElement("small",{className:"text-muted"},"Option disabled.")))),u.a.createElement("div",{className:"aside-options"},u.a.createElement("div",{className:"clearfix mt-3"},u.a.createElement("small",null,u.a.createElement("b",null,"Option 4")),u.a.createElement(U.n,{className:"float-right",variant:"pill",label:!0,color:"success",defaultChecked:!0,size:"sm"}))),u.a.createElement("hr",null),u.a.createElement("h6",null,"System Utilization"),u.a.createElement("div",{className:"text-uppercase mb-1 mt-4"},u.a.createElement("small",null,u.a.createElement("b",null,"CPU Usage"))),u.a.createElement(H,{className:"progress-xs",color:"info",value:"25"}),u.a.createElement("small",{className:"text-muted"},"348 Processes. 1/4 Cores."),u.a.createElement("div",{className:"text-uppercase mb-1 mt-2"},u.a.createElement("small",null,u.a.createElement("b",null,"Memory Usage"))),u.a.createElement(H,{className:"progress-xs",color:"warning",value:"70"}),u.a.createElement("small",{className:"text-muted"},"11444GB/16384MB"),u.a.createElement("div",{className:"text-uppercase mb-1 mt-2"},u.a.createElement("small",null,u.a.createElement("b",null,"SSD 1 Usage"))),u.a.createElement(H,{className:"progress-xs",color:"danger",value:"95"}),u.a.createElement("small",{className:"text-muted"},"243GB/256GB"),u.a.createElement("div",{className:"text-uppercase mb-1 mt-2"},u.a.createElement("small",null,u.a.createElement("b",null,"SSD 2 Usage"))),u.a.createElement(H,{className:"progress-xs",color:"success",value:"10"}),u.a.createElement("small",{className:"text-muted"},"25GB/256GB"))))}}]),a}(o.Component);B.defaultProps={};a.default=B}}]);
//# sourceMappingURL=24.78d45bcd.chunk.js.map