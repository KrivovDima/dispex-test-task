(this["webpackJsonpdispex-test-task"]=this["webpackJsonpdispex-test-task"]||[]).push([[0],{133:function(e,t,n){e.exports={wrapper:"SelectAddress_wrapper__I3I2y"}},158:function(e,t,n){},159:function(e,t,n){},256:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(33),s=n.n(r),i=(n(158),n(159),n(146)),o=n(262),l=n(6),u=o.a.Option,d=c.a.memo((function(e){return Object(l.jsx)("span",{children:Object(l.jsx)(o.a,{disabled:e.disabled,showSearch:!0,style:{width:200},placeholder:e.placeholder,optionFilterProp:"children",onChange:e.onChange,onBlur:e.onBlur,filterOption:function(e,t){return t.children.toLowerCase().indexOf(e.toLowerCase())>=0},children:e.list.map((function(e){return Object(l.jsx)(u,{value:e.id,children:e.name},e.id)}))})})})),b=n(133),p=n.n(b),j=n(26),h=n(31),O=n.n(h),f=n(43),m=n(12),v=n(135),x=n.n(v).a.create({baseURL:"https://dispex.org/api/vtest",headers:{Authorization:"Bearer krivovdima"}}),D=function(){return x.get("/Request/streets")},E=function(e){return x.get("/Request/houses/".concat(e))},C=function(e){return x.get("/Request/house_flats/".concat(e))},S=function(e){return x.get("/HousingStock/clients?addressId=".concat(e))},A=function(e){return x.delete("/HousingStock/bind_client/".concat(e))},g=function(e){return x.post("/HousingStock/client",Object(m.a)({},e))},T=function(e,t){return x.put("/HousingStock/bind_client",Object(m.a)({addressId:e},t))},y={streets:[],houses:[],houseFlats:[],selectedStreet:{},selectedHouse:{},selectedHouseFlat:{},currentFullAddress:"",status:"idle"},L=function(e){return{type:"CHANGE-ADDRESSES-STATUS",payload:{status:e}}},w=n(147),I={inputMode:"",editableClientData:{clientId:null,name:"",phone:"",email:""},clients:[]},k=function(e){return{type:"CHANGE-INPUT-MODE",payload:{inputMode:e}}},F=function(e){return{type:"DELETE-CLIENT",id:e}},N=function(e){return{type:"ADD-CLIENT",clientData:e}};var H=function(){var e=Object(j.b)(),t=Object(j.c)((function(e){return e.addresses})),n=t.streets,c=t.houses,r=t.houseFlats,s=t.status;Object(a.useEffect)((function(){e(function(){var e=Object(f.a)(O.a.mark((function e(t){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(L("loading")),e.next=4,D();case 4:n=e.sent,t(L("success")),t({type:"ADD-STREETS",payload:{streets:n.data}}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]);var i=Object(a.useCallback)((function(t){e(function(e){return{type:"ADD-SELECTED-STREET",id:e}}(t)),e(function(e){return function(){var t=Object(f.a)(O.a.mark((function t(n){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(L("loading")),t.next=4,E(e);case 4:a=t.sent,n(L("success")),n({type:"ADD-HOUSES",payload:{houses:a.data}}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[e]),o=Object(a.useCallback)((function(t){e(function(e){return{type:"ADD-SELECTED-HOUSE",id:e}}(t)),e(function(e){return function(){var t=Object(f.a)(O.a.mark((function t(n){var a;return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,n(L("loading")),t.next=4,C(e);case 4:a=t.sent,n(L("success")),n({type:"ADD-HOUSE-FLATS",payload:{houseFlats:a.data}}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}()}(t))}),[e]),u=Object(a.useCallback)((function(t){var n;e(function(e){return{type:"ADD-SELECTED-HOUSE-FLAT",id:e}}(t)),e({type:"ADD-CURRENT-FULL-ADDRESS"}),e((n=t,function(){var e=Object(f.a)(O.a.mark((function e(t){var a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,S(n);case 3:a=e.sent,t({type:"ADD-CURRENT-FULL-ADDRESS"}),t({type:"ADD-CLIENTS",payload:{clients:a.data}}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()))}),[e]);return Object(l.jsxs)("div",{className:p.a.wrapper,children:[Object(l.jsx)(d,{disabled:"loading"===s,onChange:i,list:n,placeholder:"\u0423\u043b\u0438\u0446\u0430"}),Object(l.jsx)(d,{disabled:"loading"===s,onChange:o,list:c,placeholder:"\u0414\u043e\u043c"}),Object(l.jsx)(d,{disabled:"loading"===s,onChange:u,list:r,placeholder:"\u041a\u0432./\u043e\u0444\u0438\u0441"})]})},_=n(99),R=n.n(_),U=n(259),P=n(69),B=n(261),M=n(264),G=n(265),q=n(70),W=n.n(q),Z=B.a.Meta;var J=function(e){var t=Object(j.b)(),n=function(e){t(function(e){return function(){var t=Object(f.a)(O.a.mark((function t(n){return O.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A(e);case 3:n(F(e)),t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}(e))},a=Object(j.c)((function(e){return e.addresses.currentFullAddress}));return e.list?Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h2",{className:W.a.address,children:a}),Object(l.jsx)("div",{className:W.a.inner,children:e.list.map((function(t){return Object(l.jsx)(B.a,{style:{width:350,marginBottom:20},actions:[Object(l.jsx)(M.a,{onClick:function(){e.editClient(t.id)}},"edit"),Object(l.jsx)(G.a,{onClick:function(){n(t.id)}},"delete")],children:Object(l.jsx)(Z,{title:"\u0424\u0418\u041e: ".concat(t.name),description:Object(l.jsxs)("div",{children:[Object(l.jsxs)("div",{children:["Phone:\xa0",t.phone]}),Object(l.jsxs)("div",{children:["Email:\xa0",t.email]})]})})},t.id)}))})]}):Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{className:W.a.address,children:a}),Object(l.jsx)("h3",{className:W.a.messageBox,children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0436\u0438\u043b\u044c\u0446\u043e\u0432 \u043f\u0443\u0441\u0442"})]})},V=n(151),z=n(260),K=n(263),X=n(141);var $=function(e){var t=Object(j.b)(),n=Object(j.c)((function(e){return e.clients})),a=n.inputMode,c=n.editableClientData,r=Object(j.c)((function(e){return e.addresses.currentFullAddress})),s=Object(j.c)((function(e){return e.addresses.selectedHouseFlat.id})),i=Object(l.jsx)(z.a.Item,{name:"prefix",noStyle:!0,children:"+7"}),o=Object(X.a)({initialValues:{phone:c.phone,name:c.name,email:c.email},validate:function(e){var t={};return e.phone?isFinite(Number(e.phone))?10!==e.phone.length?t.phone="Invalid length phone number":""===e.email||/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.email)||(t.email="Invalid email address"):t.phone="Invalid phone number":t.phone="Required",t},onSubmit:function(n){var r;t("addition"===a?(r=n,function(){var e=Object(f.a)(O.a.mark((function e(t){var n,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,g(r);case 3:n=e.sent,a=Object(m.a)({id:n.data.id},r),t(N(a)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}()):function(e,t){return function(){var n=Object(f.a)(O.a.mark((function n(a){return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,T(e,t);case 3:a({type:"UPDATE-CLIENT",newClientData:t}),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}()}(s,Object(m.a)({clientId:c.clientId},n))),o.resetForm(),e.onClickClientModal(!1)}});return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(V.a,{title:"addition"===a?"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0436\u0438\u043b\u044c\u0446\u0430":"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u0434\u0430\u043d\u043d\u044b\u0435",visible:e.visible,onCancel:function(){e.onClickClientModal(!1)},footer:null,children:[Object(l.jsxs)("p",{children:[r,",","editing"===a&&Object(l.jsxs)("span",{children:["Phone:\xa0",c.phone]})]}),Object(l.jsxs)("form",{onSubmit:o.handleSubmit,children:[Object(l.jsxs)(z.a.Item,{label:"\u0422\u0435\u043b\u0435\u0444\u043e\u043d",children:[Object(l.jsx)(K.a,Object(m.a)(Object(m.a)({},o.getFieldProps("phone")),{},{addonBefore:i,style:{width:"100%"}})),o.touched.phone&&o.errors.phone&&Object(l.jsx)("div",{style:{color:"tomato"},children:o.errors.phone})]}),Object(l.jsxs)(z.a.Item,{label:"\u0424\u0418\u041e",children:[Object(l.jsx)(K.a,Object(m.a)({},o.getFieldProps("name"))),o.touched.name&&o.errors.name&&Object(l.jsx)("div",{style:{color:"tomato"},children:o.errors.name})]}),Object(l.jsxs)(z.a.Item,{label:"Email",children:[Object(l.jsx)(K.a,Object(m.a)({},o.getFieldProps("email"))),o.touched.email&&o.errors.email&&Object(l.jsx)("div",{style:{color:"tomato"},children:o.errors.email})]}),Object(l.jsx)(P.a,{type:"primary",htmlType:"submit",children:"Submit"})]})]})})};var Q=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1],r=Object(j.b)(),s=Object(j.c)((function(e){return e.addresses.currentFullAddress})),o=Object(j.c)((function(e){return e.addresses.status})),u=Object(j.c)((function(e){return e.clients.clients})),d=Object(j.c)((function(e){return e.clients.editableClientData}));return Object(l.jsxs)("div",{className:R.a.wrapper,children:[Object(l.jsx)(H,{}),Object(l.jsx)("div",{className:R.a.spinWrapper,children:"loading"===o&&Object(l.jsx)(U.a,{})}),Object(l.jsx)("div",{className:R.a.btns,children:Object(l.jsx)(P.a,{onClick:function(){r(k("addition")),c(!0)},type:"primary",disabled:!s,children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0436\u0438\u043b\u044c\u0446\u0430"})}),Object(l.jsx)($,{visible:n,onClickClientModal:function(e){c(e)},editableClientData:d}),Object(l.jsx)(J,{list:u,editClient:function(e){r(k("editing")),r(function(e){return{type:"CHANGE-EDITABLE-CLIENT-DATA",id:e}}(e)),c(!0)}})]})};n(255);var Y=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)(Q,{})})},ee=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,266)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))},te=n(100),ne=n(140),ae=Object(te.b)({addresses:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD-STREETS":case"ADD-HOUSES":case"ADD-HOUSE-FLATS":return Object(m.a)(Object(m.a)({},e),t.payload);case"ADD-SELECTED-STREET":var n=e.streets.find((function(e){return e.id===t.id}));return Object(m.a)(Object(m.a)({},e),{},{selectedStreet:n});case"ADD-SELECTED-HOUSE":var a=e.houses.find((function(e){return e.id===t.id}));return Object(m.a)(Object(m.a)({},e),{},{selectedHouse:a});case"ADD-SELECTED-HOUSE-FLAT":var c=e.houseFlats.find((function(e){return e.id===t.id}));return Object(m.a)(Object(m.a)({},e),{},{selectedHouseFlat:c});case"ADD-CURRENT-FULL-ADDRESS":return Object(m.a)(Object(m.a)({},e),{},{currentFullAddress:"".concat(e.selectedStreet.name," ").concat(e.selectedHouse.name," \u043a\u0432. ").concat(e.selectedHouseFlat.name)});case"CHANGE-ADDRESSES-STATUS":return Object(m.a)(Object(m.a)({},e),t.payload);default:return e}},clients:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE-INPUT-MODE":case"ADD-CLIENTS":return Object(m.a)(Object(m.a)({},e),t.payload);case"DELETE-CLIENT":return Object(m.a)(Object(m.a)({},e),{},{clients:e.clients.filter((function(e){return e.id!==t.id}))});case"CHANGE-EDITABLE-CLIENT-DATA":if(null===t.id)return Object(m.a)(Object(m.a)({},e),{},{editableClientData:{clientId:null,name:"",phone:"",email:""}});var n=e.clients.find((function(e){return e.id===t.id}));return Object(m.a)(Object(m.a)({},e),{},{editableClientData:{clientId:n.id,name:n.name,phone:n.phone,email:n.email}});case"ADD-CLIENT":return Object(m.a)(Object(m.a)({},e),{},{clients:[t.clientData].concat(Object(w.a)(e.clients))});case"UPDATE-CLIENT":var a=t.newClientData,c=a.resultClientData;a.clientId;return c.id=t.newClientData.clientId,Object(m.a)(Object(m.a)({},e),{},{clients:e.clients.map((function(e){return e.id===t.newClientData.clientId?c:e}))});default:return e}}}),ce=Object(te.c)(ae,Object(te.a)(ne.a));window.store=ce,s.a.render(Object(l.jsx)(j.a,{store:ce,children:Object(l.jsx)(Y,{})}),document.getElementById("root")),ee()},70:function(e,t,n){e.exports={inner:"ClientsList_inner__1PRfR",messageBox:"ClientsList_messageBox__2S3Xt",address:"ClientsList_address__KaHM4"}},99:function(e,t,n){e.exports={wrapper:"Clients_wrapper__v96VE",btns:"Clients_btns__1TwP4",spinWrapper:"Clients_spinWrapper__3DGl8"}}},[[256,1,2]]]);
//# sourceMappingURL=main.3a36c3d2.chunk.js.map