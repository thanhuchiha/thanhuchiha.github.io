(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{390:function(e,a,t){"use strict";var n=t(3),r=t.n(n),l=t(856),c=t(841),o=t(839),s=t(840),i=t(430);a.a=function(e){var a=e.size,t=e.isShowModal,n=e.toggleModal,u=e.children,m=e.title,d=e.okText,g=e.cancelText,f=e.clickOK,p=e.showCancel,h=void 0===p||p,b=e.clickCancel,C=(e.extraInfoLabel,e.hiddenFooter);return r.a.createElement(l.a,{isOpen:t,toggle:n,size:a},r.a.createElement(c.a,null,m),r.a.createElement(o.a,null,u),!C&&r.a.createElement(s.a,{className:"justify-content-center"},r.a.createElement(i.a,{color:"danger",onClick:f||n},d||"X\xe1c nh\u1eadn")," ",h&&r.a.createElement(i.a,{color:"secondary",onClick:b||n},g||"H\u1ee7y b\u1ecf")))}},391:function(e,a,t){"use strict";t.d(a,"a",function(){return d});var n=t(9),r=t(10),l=t(71),c=t(70),o=t(72),s=t(3),i=t.n(s),u=t(408),m=t.n(u),d=(t(392),function(e){function a(){return Object(n.a)(this,a),Object(l.a)(this,Object(c.a)(a).apply(this,arguments))}return Object(o.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this.props,a=e.totalPages,t=e.initialPage,n=e.forcePage,r=e.pageRangeDisplayed,l=e.onPageChange;return a>0&&i.a.createElement(m.a,{disableInitialCallback:!0,initialPage:t,forcePage:n,previousLabel:i.a.createElement("i",{className:"fa fa-chevron-left","aria-hidden":"true"}),nextLabel:i.a.createElement("i",{className:"fa fa-chevron-right","aria-hidden":"true"}),breakLabel:"...",pageClassName:"page-item",pageLinkClassName:"page-link",previousClassName:"page-item",previousLinkClassName:"page-link",nextClassName:"page-item",nextLinkClassName:"page-link",pageCount:a,marginPagesDisplayed:2,pageRangeDisplayed:r||1,onPageChange:l,containerClassName:"pagination",activeLinkClassName:"active",activeClassName:"active"})}}]),a}(s.Component))},392:function(e,a,t){},393:function(e,a,t){"use strict";t.d(a,"a",function(){return n});var n={defaultTake:10,initialPage:1}},396:function(e,a,t){"use strict";var n=t(3),r=t.n(n),l=t(856),c=t(839),o=t(840),s=t(430);a.a=function(e){var a=e.title,t=e.isShowModal,n=e.clickOk,i=e.toggleModal;return r.a.createElement("div",null,r.a.createElement(l.a,{isOpen:t,toggle:i},r.a.createElement(c.a,null,a||"B\u1ea1n c\xf3 ch\u1eafc ch\u1eafn mu\u1ed1n xo\xe1 tr\u01b0\u1eddng d\u1eef li\u1ec7u n\xe0y?"),r.a.createElement(o.a,null,r.a.createElement(s.a,{color:"danger",onClick:n},"X\xe1c nh\u1eadn")," ",r.a.createElement(s.a,{color:"secondary",onClick:i},"Hu\u1ef7 b\u1ecf"))))}},401:function(e,a,t){"use strict";var n=t(3),r=t.n(n),l=t(574),c=t(573),o=t(431),s=t.n(o),i=t(432),u=function(e){if(Object(i.isEmpty)(e))return r.a.createElement("small",{className:"form-text text-danger"},"This field is required!")},m=function(e){var a=e.disabled,t=e.inputClass,n=e.title,o=e.type,i=e.name,m=e.max,d=e.placeholder,g=e.value,f=e.onChange,p=e.required,h=e.validations,b=e.accept;return h||(h=[]),p&&h.unshift(u),r.a.createElement(l.a,null,r.a.createElement(c.a,{className:"label-input",for:i},r.a.createElement("strong",null,n," ")," ",p&&r.a.createElement("span",{className:"text-danger"},"*")),r.a.createElement(s.a,{disabled:a,id:i,name:i,max:m,value:""+g,onChange:f,type:o,placeholder:d,className:"form-control ".concat(t),validations:h,accept:b}))};m.defaultProps={title:"",type:"text",name:"",placeholder:""},a.a=m},838:function(e,a,t){"use strict";t.r(a);var n=t(2),r=t.n(n),l=t(61),c=t(73),o=t(9),s=t(10),i=t(71),u=t(70),m=t(72),d=t(3),g=t.n(d),f=t(152),p=t(430),h=t(428),b=t(429),C=t(842),y=t(405),v=t.n(y),E=t(396),k=t(391),w=t(390),N=t(401),x=t(86),M=t(409),O=t.n(M),j=t(22),S=t(68),L=t(393),I=function(e){function a(e){var t;return Object(o.a)(this,a),(t=Object(i.a)(this,Object(u.a)(a).call(this,e))).toggleDeleteModal=function(){t.setState(function(e){return{isShowDeleteModal:!e.isShowDeleteModal}})},t.toggleModalInfo=function(e,a){t.setState(function(t){return{isShowInfoModal:!t.isShowInfoModal,item:e||{},formTitle:a}})},t.showConfirmDelete=function(e){t.setState({itemId:e},function(){return t.toggleDeleteModal()})},t.showAddNew=function(){t.toggleModalInfo({name:""},"Create Job Category")},t.showUpdateModal=function(e){t.toggleModalInfo(e,"Update Job Category")},t.onModelChange=function(e){var a=e.target.name,n=e.target.value,r=Object.assign({},t.state.item);r[a]=n,t.setState({item:r})},t.search=function(e){t.setState({params:Object(c.a)({},t.state.params,{skip:1}),query:e.target.value},function(){t.getCategoryList()})},t.onSearchChange=function(e){e.persist(),t.delayedCallback(e)},t.handlePageClick=function(e){t.setState({params:Object(c.a)({},t.state.params,{skip:e.selected+1})},function(){return t.getCategoryList()})},t.getCategoryList=function(){var e=Object.assign({},t.state.params,{query:t.state.query});t.props.getCategoryList(e)},t.addCategory=Object(l.a)(r.a.mark(function e(){var a,n;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.item.name,n={name:a},e.prev=2,e.next=5,S.a.addCategory(n);case 5:t.toggleModalInfo(),t.getCategoryList(),Object(x.b)("The job category has been created successfully"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),Object(x.a)(e.t0);case 13:case"end":return e.stop()}},e,null,[[2,10]])})),t.updateCategory=Object(l.a)(r.a.mark(function e(){var a,n,l,c;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.state.item,n=a.id,l=a.name,c={id:n,name:l},e.prev=2,e.next=5,S.a.updateCategory(c);case 5:t.toggleModalInfo(),t.getCategoryList(),Object(x.b)("The job category has been updated successfully"),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),Object(x.a)(e.t0);case 13:case"end":return e.stop()}},e,null,[[2,10]])})),t.deleteCategory=Object(l.a)(r.a.mark(function e(){return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S.a.deleteCategory(t.state.itemId);case 3:t.toggleDeleteModal(),t.getCategoryList(),Object(x.b)("The job category has been deleted successfully"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),Object(x.a)(e.t0);case 11:case"end":return e.stop()}},e,null,[[0,8]])})),t.saveCategory=function(){t.state.item.id?t.updateCategory():t.addCategory()},t.state={isShowDeleteModal:!1,isShowInfoModal:!1,item:{},itemId:null,params:{skip:L.a.initialPage,take:L.a.defaultTake},query:""},t.delayedCallback=O.a.debounce(t.search,1e3),t}return Object(m.a)(a,e),Object(s.a)(a,[{key:"onSubmit",value:function(e){e.preventDefault(),this.form.validateAll(),this.saveCategory()}},{key:"componentDidMount",value:function(){this.getCategoryList()}},{key:"render",value:function(){var e=this,a=this.state,t=a.isShowDeleteModal,n=a.isShowInfoModal,r=a.item,l=this.props.categoryList.categoryList,c=l.sources,o=l.pageIndex,s=l.totalPages,i=l.sources&&l.sources.length>0;return g.a.createElement("div",{className:"animated fadeIn"},g.a.createElement(E.a,{clickOk:this.deleteCategory,isShowModal:t,toggleModal:this.toggleDeleteModal}),g.a.createElement(w.a,{size:"lg",title:this.state.formTitle,isShowModal:n,hiddenFooter:!0},g.a.createElement("div",{className:"modal-wrapper"},g.a.createElement("div",{className:"form-wrapper"},g.a.createElement(v.a,{onSubmit:function(a){return e.onSubmit(a)},ref:function(a){e.form=a}},g.a.createElement(N.a,{name:"name",title:"Name",type:"text",required:!0,value:r.name,onChange:this.onModelChange}),g.a.createElement("div",{className:"text-center"},g.a.createElement(p.a,{className:" btn-primary",type:"submit"},"Confirm")," ",g.a.createElement(p.a,{className:"btn-danger",onClick:this.toggleModalInfo},"Cancel")))))),g.a.createElement("div",{className:"animated fadeIn"},g.a.createElement(h.a,{className:"flex-container header-table"},g.a.createElement(b.a,{xs:"5",sm:"5",md:"5",lg:"5"},g.a.createElement(p.a,{onClick:this.showAddNew,className:"btn btn-success btn-sm"}," Create ")),g.a.createElement(b.a,{xs:"5",sm:"5",md:"5",lg:"5"},g.a.createElement("input",{onChange:this.onSearchChange,className:"form-control form-control-sm custom_search",placeholder:"Searching..."}))),g.a.createElement(C.a,{responsive:!0,bordered:!0,className:"react-bs-table react-bs-table-bordered data-table"},g.a.createElement("thead",null,g.a.createElement("tr",{className:"table-header"},g.a.createElement("th",null,"STT"),g.a.createElement("th",null,"Name"),g.a.createElement("th",{className:"custom_action"},"Action"))),g.a.createElement("tbody",null,i&&c.map(function(a,t){return g.a.createElement("tr",{className:"table-row",key:t},g.a.createElement("td",null," ",0!==l.pageIndex?l.pageIndex*l.pageSize-l.pageSize+ ++t:++t),g.a.createElement("td",null,a.name),g.a.createElement("td",null,g.a.createElement(p.a,{className:"btn btn-primary fa fa-pencil",onClick:function(){return e.showUpdateModal(a)}}),g.a.createElement(p.a,{className:"btn btn-danger fa fa-trash",onClick:function(){return e.showConfirmDelete(a.id)}})))}))),i&&s>1&&g.a.createElement(k.a,{initialPage:0,totalPages:s,forcePage:o-1,pageRangeDisplayed:2,onPageChange:this.handlePageClick})))}}]),a}(d.Component);a.default=Object(f.b)(function(e){return{categoryList:e.categoryList}},{getCategoryList:j.f})(I)}}]);
//# sourceMappingURL=25.324f007a.chunk.js.map