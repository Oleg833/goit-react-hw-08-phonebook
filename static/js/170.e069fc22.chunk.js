(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[170],{9189:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var a,r=n(2007),s=n.n(r),o=n(168),c=n(4238).Z.p(a||(a=(0,o.Z)(["\n  font-size: 35px;\n  font-weight: 700;\n\n  text-align: center;\n  color: #dadada;\n  margin: 5px auto;\n"]))),i=n(3329),u=function(e){var t=e.text;return(0,i.jsx)(c,{textAlign:"center",children:t})},l=u;u.protoTypes={text:s().string.isRequired}},5170:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return R}});var a=n(8687),r=function(e){return e.contacts},s=n(2791),o=n(6052),c=n(9439),i=n(2007),u=n.n(i),l="ContactForm_form__dhl+T",m="ContactForm_label__-cVXI",p="ContactForm_input__Bl93P",d="ContactForm_btn__wll+u",h=n(3329),f=function(){var e=(0,s.useState)(""),t=(0,c.Z)(e,2),n=t[0],i=t[1],u=(0,s.useState)(""),f=(0,c.Z)(u,2),_=f[0],b=f[1],x=(0,a.useDispatch)(),g=(0,a.useSelector)(r),y=g.items,v=g.isLoading,C=function(e){var t=e.currentTarget,n=t.name,a=t.value;"name"===n?i(a):"number"===n&&b(a)},j=function(){i(""),b("")};return(0,h.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={name:n,number:_};y.some((function(e){return e.name.toLowerCase()===t.name.toLowerCase()||e.number===t.number}))?alert("".concat(n," is already in contacts")):x((0,o.uK)(t)),j()},className:l,children:[(0,h.jsxs)("label",{className:m,htmlFor:"",children:["Name",(0,h.jsx)("input",{className:p,type:"text",name:"name",value:n,onChange:C,placeholder:"Name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces.  For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0})]}),(0,h.jsxs)("label",{className:m,htmlFor:"",children:["Number",(0,h.jsx)("input",{className:p,type:"tel",name:"number",value:_,onChange:C,placeholder:"Number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0})]}),(0,h.jsx)("button",{type:"submit",className:d,disabled:v,children:"Add contact"})]})};f.prototypes={name:u().string.isRequired,number:u().number.isRequired,onSubmit:u().func.isRequired};var _=f,b=n(5861),x=n(4687),g=n.n(x),y="ContactList_contactsTitle__gHlpa",v="ContactList_contactList__UFVCg",C="ContactList_item__EZYHO",j="ContactList_value__cwfRG",N="ContactList_btn__6Piat",w=function(e){return e.filter.filter},F=function(e){var t=e.children,n=(0,a.useDispatch)(),i=(0,a.useSelector)(w),u=(0,a.useSelector)(r),l=u.items,m=u.isLoading,p=(0,s.useState)(null),d=(0,c.Z)(p,2),f=d[0],_=d[1],x=l.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())})),F=function(){var e=(0,b.Z)(g().mark((function e(t){return g().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return _(t),e.next=3,n((0,o.GK)(t));case 3:_(null);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h2",{className:y,children:"Contacts"}),t,(0,h.jsx)("ul",{className:v,children:x.map((function(e){var t=e.id,n=e.name,a=e.number;return(0,h.jsxs)("li",{className:C,children:[(0,h.jsxs)("p",{className:j,children:[n,": ",a]}),(0,h.jsx)("button",{type:"button",onClick:function(){return F(t)},className:N,disabled:m||f===t,children:f===t?"Deleting...":"Delete"})]},t)}))})]})},T="Filter_label__vEd1E",L="Filter_input__N7T3z",S=n(1634),k=function(){var e=(0,a.useDispatch)(),t=(0,a.useSelector)(w);return(0,h.jsxs)("label",{className:T,children:["Find Contact By Name",(0,h.jsx)("input",{className:L,type:"text",name:t,value:t,onChange:function(t){e((0,S.Tv)(t.target.value))},placeholder:"Find contacts by name"})]})},Z=n(9189),O=n(7642),R=function(){var e=(0,a.useDispatch)(),t=(0,a.useSelector)(r),n=t.items,c=t.isLoading,i=t.error;return(0,s.useEffect)((function(){e((0,o.yF)())}),[e]),(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(_,{}),0!==n.length||c||i?(0,h.jsx)(F,{children:(0,h.jsx)(k,{})}):(0,h.jsx)(Z.Z,{text:"You do not have any contacts in the phone book yet."}),c&&!i&&0===n.length&&(0,h.jsx)(O.Z,{})]})}},888:function(e,t,n){"use strict";var a=n(9047);function r(){}function s(){}s.resetWarningCache=r,e.exports=function(){function e(e,t,n,r,s,o){if(o!==a){var c=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:s,resetWarningCache:r};return n.PropTypes=n,n}},2007:function(e,t,n){e.exports=n(888)()},9047:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}}]);
//# sourceMappingURL=170.e069fc22.chunk.js.map