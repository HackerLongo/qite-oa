webpackJsonp([37],{76:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function l(e){return""+f+p.getDiagram+"?procDefId="+e.procDefId+"&procInstId="+e.procInstId}function r(e){return""+f+p.getDiagramByBusiness+"?busiId="+e.busiId+"&busiCode="+e.busiCode}Object.defineProperty(t,"__esModule",{value:!0}),t.getCommentListBybusiness=t.audit=t.getTaskInfo=t.getTaskFiledPage=t.getMyTaskDonePage=t.getMyTaskToDoPage=t.startProcess=t.getOrg=t.getDic=void 0;var u=a(34),d=n(u),i=a(62),s=n(i);t.getDic=function(){var e=(0,s.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)({url:_.getList,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.getOrg=function(){var e=(0,s.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)({url:m.query,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.startProcess=function(){var e=(0,s.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)({url:p.startProcess,method:"post",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.getMyTaskToDoPage=function(){var e=(0,s.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)({url:p.getMyTaskToDoPage,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.getMyTaskDonePage=function(){var e=(0,s.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)({url:p.getMyTaskDonePage,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.getTaskFiledPage=function(){var e=(0,s.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)({url:p.getTaskFiledPage,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.getTaskInfo=function(){var e=(0,s.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)({url:p.getTaskInfo,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.audit=function(){var e=(0,s.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)({url:p.audit,method:"post",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.getCommentListBybusiness=function(){var e=(0,s.default)(d.default.mark(function e(t){return d.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,o.request)({url:p.getCommentListBybusiness,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}();t.getDiagram=l,t.getDiagramByBusiness=r;var o=a(20),c=o.config.api,f=o.config.baseURL,p=c.workflow,_=(c.employee,c.dictionary),m=c.organizations},299:function(e,t,a){t=e.exports=a(15)(void 0),t.push([e.id,".content___3z5_5{line-height:2.4;font-size:13px}.content___3z5_5 .item___2fhgU{display:-webkit-box;display:-ms-flexbox;display:flex}.content___3z5_5 .item___2fhgU>div:first-child{width:100px}.q-detail___2uC4u .q-detail-conent___19kjZ,.q-detail___2uC4u .q-detail-html-conent___3ZBDB,.q-detail___2uC4u .q-detail-label___liCkl{padding-top:6px;padding-bottom:6px}.q-detail___2uC4u .q-detail-label___liCkl{text-align:right}.q-detail___2uC4u .q-detail-conent___19kjZ{text-align:left}.q-detail___2uC4u .q-detail-html-conent___3ZBDB{border:1px dashed #d9d9d9;border-radius:3px;padding:24px}",""]),t.locals={content:"content___3z5_5",item:"item___2fhgU","q-detail":"q-detail___2uC4u","q-detail-label":"q-detail-label___liCkl","q-detail-conent":"q-detail-conent___19kjZ","q-detail-html-conent":"q-detail-html-conent___3ZBDB"}},300:function(e,t,a){var n=a(299);"string"==typeof n&&(n=[[e.id,n,""]]);a(14)(n,{});n.locals&&(e.exports=n.locals)},301:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=(a(23),a(22)),r=n(l),u=(a(78),a(77)),d=n(u),i=(a(25),a(24)),s=n(i),o=(a(27),a(17)),c=n(o),f=a(29),p=n(f),_=a(5),m=n(_),q=a(6),x=n(q),y=a(8),h=n(y),g=a(7),v=n(g),b=a(2),k=n(b),w=a(3),E=(n(w),a(300)),N=n(E),L=a(9),I=(n(L),function(e){function t(){return(0,m.default)(this,t),(0,h.default)(this,(t.__proto__||(0,p.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,x.default)(t,[{key:"render",value:function(){var e=this.props.data,t=[{title:"\u5e8f\u53f7",dataIndex:"index",render:function(e,t,a){return a+1}},{title:"\u53d1\u9001\u73af\u8282",dataIndex:"nodeName",key:"nodeName"},{title:"\u529e\u7406\u4eba",dataIndex:"auditerName",key:"auditerName"},{title:"\u5ba1\u6279\u610f\u89c1",dataIndex:"approvalOpinion",key:"approvalOpinion"},{title:"\u63a5\u6536\u65f6\u95f4",dataIndex:"receiveTime",key:"receiveTime"},{title:"\u5b8c\u6210\u65f6\u95f4",dataIndex:"finishTime",key:"finishTime"},{title:"\u5b8c\u6210\u8017\u65f6",dataIndex:"duration",key:"duration",render:function(e){return e?(parseFloat(e)/36e5).toFixed(2):"0.00"}}];return k.default.createElement(r.default,{gutter:24,className:N.default["q-detail"]},k.default.createElement(s.default,{span:24,className:"qite-list-title"},k.default.createElement(c.default,{type:"credit-card"}),"\u5ba1\u6279\u4fe1\u606f"),k.default.createElement(s.default,{span:24},k.default.createElement(d.default,{pagination:!1,dataSource:e,bordered:!0,scroll:{x:767},columns:t,simple:!0,rowKey:function(e){return e.taskId}})))}}]),t}(k.default.Component));I.propTypes={},t.default=I,e.exports=t.default},346:function(e,t,a){t=e.exports=a(15)(void 0),t.push([e.id,".q-detail___kla6t .q-detail-conent___2eqcV,.q-detail___kla6t .q-detail-html-conent___1Q6o2,.q-detail___kla6t .q-detail-label___3xv-p{padding-top:6px;padding-bottom:6px}.q-detail___kla6t .q-detail-label___3xv-p{text-align:right}.q-detail___kla6t .q-detail-conent___2eqcV{text-align:left}.q-detail___kla6t .q-flow-container___34mq6{padding:5px}.q-detail___kla6t .q-flow-container___34mq6 img{width:100%}",""]),t.locals={"q-detail":"q-detail___kla6t","q-detail-label":"q-detail-label___3xv-p","q-detail-conent":"q-detail-conent___2eqcV","q-detail-html-conent":"q-detail-html-conent___1Q6o2","q-flow-container":"q-flow-container___34mq6"}},347:function(e,t,a){var n=a(346);"string"==typeof n&&(n=[[e.id,n,""]]);a(14)(n,{});n.locals&&(e.exports=n.locals)},348:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=(a(23),a(22)),r=n(l),u=(a(25),a(24)),d=n(u),i=(a(27),a(17)),s=n(i),o=a(29),c=n(o),f=a(5),p=n(f),_=a(6),m=n(_),q=a(8),x=n(q),y=a(7),h=n(y),g=a(2),v=n(g),b=a(3),k=(n(b),a(347)),w=n(k),E=function(e){function t(){return(0,p.default)(this,t),(0,x.default)(this,(t.__proto__||(0,c.default)(t)).apply(this,arguments))}return(0,h.default)(t,e),(0,m.default)(t,[{key:"render",value:function(){return v.default.createElement(r.default,{gutter:24,className:w.default["q-detail"]},v.default.createElement(d.default,{span:24,className:"qite-list-title"},v.default.createElement(s.default,{type:"fork"}),"\u5904\u7406\u6d41\u7a0b"),v.default.createElement(d.default,{span:24,className:w.default["q-flow-container"]},v.default.createElement("img",{src:this.props.path||"",alt:"\u5904\u7406\u6d41\u7a0b\u56fe"})))}}]),t}(v.default.Component);E.propTypes={},t.default=E,e.exports=t.default},461:function(e,t,a){t=e.exports=a(15)(void 0),t.push([e.id,".content___1YP9z{line-height:2.4;font-size:13px}.content___1YP9z .item___27XbQ{display:-webkit-box;display:-ms-flexbox;display:flex}.content___1YP9z .item___27XbQ>div:first-child{width:100px}.q-detail___30c3a .q-detail-conent___1Np1H,.q-detail___30c3a .q-detail-html-conent___1EEgE,.q-detail___30c3a .q-detail-label___2Iuqb{padding-top:6px;padding-bottom:6px}.q-detail___30c3a .q-detail-label___2Iuqb{text-align:right}.q-detail___30c3a .q-detail-conent___1Np1H{text-align:left}.q-detail___30c3a .q-detail-html-conent___1EEgE{border:1px dashed #d9d9d9;border-radius:3px;padding:24px}",""]),t.locals={content:"content___1YP9z",item:"item___27XbQ","q-detail":"q-detail___30c3a","q-detail-label":"q-detail-label___2Iuqb","q-detail-conent":"q-detail-conent___1Np1H","q-detail-html-conent":"q-detail-html-conent___1EEgE"}},478:function(e,t,a){var n=a(461);"string"==typeof n&&(n=[[e.id,n,""]]);a(14)(n,{});n.locals&&(e.exports=n.locals)},507:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=(a(23),a(22)),r=n(l),u=(a(25),a(24)),d=n(u),i=(a(27),a(17)),s=n(i),o=a(4),c=n(o),f=a(29),p=n(f),_=a(5),m=n(_),q=a(6),x=n(q),y=a(8),h=n(y),g=a(7),v=n(g),b=a(2),k=n(b),w=a(3),E=(n(w),a(478)),N=n(E),L=a(9),I=(n(L),a(73)),T=n(I),D=function(e){function t(){return(0,m.default)(this,t),(0,h.default)(this,(t.__proto__||(0,p.default)(t)).apply(this,arguments))}return(0,v.default)(t,e),(0,x.default)(t,[{key:"render",value:function(){var e=this.props,t=e.data,a=e.employeeList,n=e.dicList,l=[];t&&t.attachList&&t.attachList[0]&&(l=t.attachList.map(function(e){return(0,c.default)({},e,{uid:e.id,status:"done",url:e.attachUrl,name:e.attachName})}));var u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,a=n.filter(function(t){return String(t.dicValue)===String(e)});return a&&a[0]?t&&"\u5176\u4ed6"===a[0].dicName?t:a[0].dicName:""};return k.default.createElement("div",null,k.default.createElement(r.default,{gutter:24,className:N.default["q-detail"]},k.default.createElement(d.default,{span:24,className:"qite-list-title"},k.default.createElement(s.default,{type:"credit-card"}),"\u8bf7\u5047\u4fe1\u606f"),k.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px"},className:N.default["q-detail-label"]},"\u59d3\u540d\uff1a"),k.default.createElement(d.default,{xs:18,md:8,xl:6,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},a?a.realName:"\u65e0"),k.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px"},className:N.default["q-detail-label"]},"\u90e8\u95e8\uff1a"),k.default.createElement(d.default,{xs:18,md:8,xl:6,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},a.postList?a.postList[0].orgName||"\u65e0":"\u65e0"),k.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px"},className:N.default["q-detail-label"]},"\u5c97\u4f4d\uff1a"),k.default.createElement(d.default,{xs:18,md:8,xl:6,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},a.postList?a.postList[0].postName||"\u65e0":"\u65e0"),k.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px"},className:N.default["q-detail-label"]},"\u7533\u8bf7\u5355\u53f7\uff1a"),k.default.createElement(d.default,{xs:18,md:8,xl:6,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},t.code),k.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px"},className:N.default["q-detail-label"]},"\u7533\u8bf7\u65f6\u95f4\uff1a"),k.default.createElement(d.default,{xs:18,md:8,xl:6,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},t.createTime||t.createTimeStr),k.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px"},className:N.default["q-detail-label"]},"\u8bf7\u5047\u7c7b\u578b\uff1a"),k.default.createElement(d.default,{xs:18,md:8,xl:6,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},u(t.type,t.typeRemark))),k.default.createElement(r.default,{gutter:24,className:N.default["q-detail"]},k.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px"},className:N.default["q-detail-label"]},"\u8bf7\u5047\u65f6\u95f4\uff1a"),k.default.createElement(d.default,{xs:18,md:20,xl:22,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},t.leaveTimeStart||t.leaveTimeStartStr||"\u65e0"," \u81f3",t.leaveTimeEnd||t.leaveTimeEndStr||"\u65e0","\uff0c\u5171",t.leaveHours||"0"," \u5c0f\u65f6")),k.default.createElement(r.default,{gutter:24,className:N.default["q-detail"]},k.default.createElement(d.default,{xs:6,md:4,xl:2,style:{paddingRight:"0px"},className:N.default["q-detail-label"]},"\u8bf7\u5047\u539f\u56e0\uff1a"),k.default.createElement(d.default,{xs:18,md:20,xl:22,style:{paddingLeft:"0px"},className:N.default["q-detail-conent"]},t.remark)),l&&l[0]?k.default.createElement(r.default,{gutter:24,className:N.default["q-detail"]},k.default.createElement(d.default,{span:24,className:"qite-list-title"},k.default.createElement(s.default,{type:"paper-clip"}),"\u9644\u4ef6\u4fe1\u606f"),k.default.createElement(d.default,{span:24,style:{paddingLeft:"12px",paddingRight:"12px"}},k.default.createElement(T.default,{fileList:l,showRemoveIcon:!1}))):null)}}]),t}(k.default.Component);D.propTypes={},t.default=D,e.exports=t.default},782:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.queryEmployee=t.submit=t.deleteById=t.save=t.getDic=t.queryById=t.query=void 0;var l=a(34),r=n(l),u=a(62),d=n(u),i=(t.query=function(){var e=(0,d.default)(r.default.mark(function e(t){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)({url:o.query,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.queryById=function(){var e=(0,d.default)(r.default.mark(function e(t){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)({url:o.queryById,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.getDic=function(){var e=(0,d.default)(r.default.mark(function e(t){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)({url:f.getList,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.save=function(){var e=(0,d.default)(r.default.mark(function e(t){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)({url:o.save,method:"post",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.deleteById=function(){var e=(0,d.default)(r.default.mark(function e(t){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)({url:o.deleteById,method:"post",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.submit=function(){var e=(0,d.default)(r.default.mark(function e(t){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)({url:o.submit,method:"post",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),t.queryEmployee=function(){var e=(0,d.default)(r.default.mark(function e(t){return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(0,i.request)({url:c.query,method:"get",data:t}));case 1:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}(),a(20)),s=i.config.api,o=s.leave,c=s.employee,f=s.dictionary},1192:function(e,t,a){t=e.exports=a(15)(void 0),t.push([e.id,".content___2T_fP{line-height:2.4;font-size:13px}.content___2T_fP .item___3jMPt{display:-webkit-box;display:-ms-flexbox;display:flex}.content___2T_fP .item___3jMPt>div:first-child{width:100px}.q-detail___20s-C .q-detail-conent___2ahB5,.q-detail___20s-C .q-detail-html-conent___3oNnR,.q-detail___20s-C .q-detail-label___1SbBj{padding-top:6px;padding-bottom:6px}.q-detail___20s-C .q-detail-label___1SbBj{text-align:right}.q-detail___20s-C .q-detail-conent___2ahB5{text-align:left}.q-detail___20s-C .q-detail-html-conent___3oNnR{border:1px dashed #d9d9d9;border-radius:3px;padding:24px}",""]),t.locals={content:"content___2T_fP",item:"item___3jMPt","q-detail":"q-detail___20s-C","q-detail-label":"q-detail-label___1SbBj","q-detail-conent":"q-detail-conent___2ahB5","q-detail-html-conent":"q-detail-html-conent___3oNnR"}},1329:function(e,t,a){var n=a(1192);"string"==typeof n&&(n=[[e.id,n,""]]);a(14)(n,{});n.locals&&(e.exports=n.locals)},1972:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(34),r=n(l),u=a(4),d=n(u),i=a(39),s=n(i),o=a(394),c=n(o),f=a(782),p=a(76);t.default={namespace:"leaveDetail",state:{data:{},employeeList:[],dicList:[],commentList:[]},subscriptions:{setup:function(e){var t=e.dispatch,a=e.history;a.listen(function(){var e=(0,c.default)("/leave/:id").exec(location.pathname);e&&(t({type:"query",payload:{id:e[1]}}),t({type:"getDic",payload:{dicType:"leaveType_item"}}))})}},effects:{query:r.default.mark(function e(t,a){var n,l,u,i,o,c,_,m=t.payload,q=a.call,x=a.put;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,q(f.queryById,m);case 2:if(n=e.sent,l=n.success,u=n.message,i=n.status,o=(0,s.default)(n,["success","message","status"]),!l){e.next=19;break}return e.next=7,q(p.getCommentListBybusiness,{busiCode:o.data.code,busiId:o.data.id});case 7:if(c=e.sent,_=null,0===o.data.state){e.next=13;break}return e.next=12,q(p.getDiagramByBusiness,{busiCode:o.data.code,busiId:o.data.id});case 12:_=e.sent;case 13:return e.next=15,x({type:"queryEmployee",payload:o.data.userId});case 15:return e.next=17,x({type:"querySuccess",payload:{data:(0,d.default)({},o.data,{flowImgSrc:_}),commentList:c&&c.success?c.data:null}});case 17:e.next=20;break;case 19:throw n;case 20:case"end":return e.stop()}},e,this)}),getDic:r.default.mark(function e(t,a){var n,l=t.payload,u=a.call,d=a.put;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(f.getDic,l);case 2:if(n=e.sent,!n){e.next=6;break}return e.next=6,d({type:"getDicSuccess",payload:n.data});case 6:case"end":return e.stop()}},e,this)}),queryEmployee:r.default.mark(function e(t,a){var n,l=t.payload,u=a.call,d=a.put;return r.default.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,u(f.queryEmployee,{userId:l});case 2:if(n=e.sent,!n||!n.success){e.next=8;break}return e.next=6,d({type:"queryEmployeeSuccess",payload:{employeeList:n.data.rowsObject}});case 6:e.next=9;break;case 8:throw n;case 9:case"end":return e.stop()}},e,this)})},reducers:{querySuccess:function(e,t){var a=t.payload;return(0,d.default)({},e,a)},getDicSuccess:function(e,t){return(0,d.default)({},e,{dicList:t.payload})},queryEmployeeSuccess:function(e,t){var a=t.payload;return(0,d.default)({},e,{employeeList:a.employeeList[0]})}}},e.exports=t.default},2068:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var l=a(2),r=n(l),u=a(3),d=n(u),i=a(297),s=a(1329),o=(n(s),a(507)),c=n(o),f=a(301),p=n(f),_=a(348),m=n(_),q=function(e){var t=e.leaveDetail,a=t.data,n=t.employeeList,l=t.dicList,u=t.commentList;return r.default.createElement("div",{className:"content-inner"},r.default.createElement(c.default,{data:a,employeeList:n,dicList:l}),a&&a.flowImgSrc?r.default.createElement(m.default,{path:a.flowImgSrc}):null,u&&u[0]?r.default.createElement(p.default,{data:u}):null)};q.propTypes={leaveDetail:d.default.object,loading:d.default.bool},t.default=(0,i.connect)(function(e){var t=e.leaveDetail,a=e.loading;return{leaveDetail:t,loading:a.models.leaveDetail}})(q),e.exports=t.default}});