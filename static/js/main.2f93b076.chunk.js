(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,a){e.exports={Overlay:"Modal_Overlay__2AxMb",Modal:"Modal_Modal__2WBTT",ImageGalleryItemImage:"Modal_ImageGalleryItemImage__17isc"}},13:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3CvRl",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__2bkPr"}},16:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__DncjJ"}},17:function(e,t,a){e.exports={Button:"Button_Button__3R1xi"}},19:function(e,t,a){e.exports={Spiner:"Loader_Spiner__1ZwwU"}},24:function(e,t,a){},48:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),s=(a(24),a(14)),i=a(3),l=a(4),u=a(6),m=a(5),h=a(9),g=a(12),p=a.n(g),b=a(15),j="https://pixabay.com/api",d="20339411-4fff238fb2bd74b59a4d62dbe";function f(){return(f=Object(b.a)(p.a.mark((function e(t){var a,n,r,c,o;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.imageName,n=t.currentPage,r="?q=".concat(a,"&page=").concat(n,"&key=").concat(d,"&image_type=photo&orientation=horizontal&per_page=12"),e.prev=2,e.next=5,fetch("".concat(j,"/").concat(r));case 5:return c=e.sent,e.next=8,c.json();case 8:return o=e.sent,e.abrupt("return",o.hits);case 12:return e.prev=12,e.t0=e.catch(2),e.abrupt("return",e.t0("error in fetch"));case 15:case"end":return e.stop()}}),e,null,[[2,12]])})))).apply(this,arguments)}var y={fetchImagesAPI:function(e){return f.apply(this,arguments)}},O=(a(26),a(8)),v=a.n(O),I=a(1),S=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={imageName:""},e.handleChange=function(t){e.setState({imageName:t.currentTarget.value.toLowerCase()})},e.handleSubmit=function(t){t.preventDefault(),""!==e.state.imageName.trim()?(e.props.onSubmit(e.state.imageName),e.setState({imageName:""})):Object(h.b)("enter search query")},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(I.jsx)("header",{className:v.a.Searchbar,children:Object(I.jsxs)("form",{className:v.a.SearchForm,onSubmit:this.handleSubmit,children:[Object(I.jsx)("button",{type:"submit",className:v.a.SearchFormButton,children:Object(I.jsx)("span",{className:v.a.SearchFormButtonLabel,children:"Search"})}),Object(I.jsx)("input",{value:this.state.imageName,onChange:this.handleChange,className:v.a.SearchFormInput,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})}}]),a}(n.Component),_=a(13),x=a.n(_),w=a(10),N=a.n(w),k=document.querySelector("#modal-root"),C=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt;return Object(c.createPortal)(Object(I.jsx)("div",{className:N.a.Overlay,onClick:this.handleBackdropClick,children:Object(I.jsx)("div",{className:N.a.Modal,children:Object(I.jsx)("img",{src:t,alt:a,className:N.a.ImageGalleryItemImage})})}),k)}}]),a}(n.Component),F=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={showModal:!1},e.toggleModal=function(){e.setState((function(e){return{showModal:!e.showModal}}))},e}return Object(l.a)(a,[{key:"render",value:function(){var e=this.props,t=e.src,a=e.alt,n=e.largeImageUrl,r=this.state.showModal;return Object(I.jsxs)("li",{className:x.a.ImageGalleryItem,children:[Object(I.jsx)("img",{onClick:this.toggleModal,src:t,alt:a,className:x.a.ImageGalleryItemImage}),r&&Object(I.jsx)(C,{onClose:this.toggleModal,src:n,alt:a})]})}}]),a}(n.Component),B=a(16),M=a.n(B);function G(e){var t=e.images;return Object(I.jsx)("ul",{className:M.a.ImageGallery,children:t.map((function(e){return Object(I.jsx)(F,{src:e.webformatURL,largeImageUrl:e.largeImageURL,alt:e.tags},e.id)}))})}var L=a(17),P=a.n(L),U=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(I.jsx)("button",{onClick:this.props.fetchImages,className:P.a.Button,children:"Load more"})}}]),a}(n.Component),D=a(18),R=a.n(D),A=a(19),T=a.n(A),E=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(I.jsx)(R.a,{className:T.a.Spiner,type:"Oval",color:"#00BFFF",height:100,width:100,timeout:3e3})}}]),a}(n.Component),q=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={imageName:"",images:[],currentPage:1,isLoading:!1,error:null},n.onChangeQuery=function(e){n.setState({imageName:e,currentPage:1,images:[],error:null})},n.fetchImages=function(){var e=n.state,t={imageName:e.imageName,currentPage:e.currentPage};n.setState({isLoading:!0}),y.fetchImagesAPI(t).then((function(e){n.setState((function(t){return{images:[].concat(Object(s.a)(t.images),Object(s.a)(e)),currentPage:t.currentPage+1}}))})).catch((function(e){return n.setState({error:e})})).finally((function(){return n.setState({isLoading:!1})}))},n.listRef=r.a.createRef(),n}return Object(l.a)(a,[{key:"getSnapshotBeforeUpdate",value:function(e,t){if(t.images.length<this.state.images.length&&this.state.currentPage>2){var a=this.listRef.current+1;return a.scrollHeight-a.scrollTop}return null}},{key:"componentDidUpdate",value:function(e,t,a){t.imageName!==this.state.imageName&&this.fetchImages(),null!==a&&this.state.currentPage>2&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.error,r=t.length>0&&!a;return Object(I.jsxs)(I.Fragment,{children:[n&&Object(I.jsxs)("p",{children:["something went wrong: ",n.message]}),Object(I.jsx)(S,{onSubmit:this.onChangeQuery}),Object(I.jsx)(G,{images:this.state.images}),a&&Object(I.jsx)(E,{}),r&&Object(I.jsx)(U,{fetchImages:this.fetchImages}),Object(I.jsx)(h.a,{autoClose:3e3})]})}}]),a}(n.Component);o.a.render(Object(I.jsx)(r.a.StrictMode,{children:Object(I.jsx)(q,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__DjWH3",SearchForm:"Searchbar_SearchForm__1ac2l",SearchFormButton:"Searchbar_SearchFormButton__21S85",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__8f9cn",SearchFormInput:"Searchbar_SearchFormInput__VhsfU"}}},[[48,1,2]]]);
//# sourceMappingURL=main.2f93b076.chunk.js.map