(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{"0mN4":function(e,t,a){"use strict";a("OGtf")("fixed",(function(e){return function(){return e(this,"tt","","")}}))},"9eSz":function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("XfO3"),a("EK0E"),a("INYr"),a("0mN4");var n=a("TqRt");t.__esModule=!0,t.default=void 0;var i,r=n(a("PJYZ")),o=n(a("VbXa")),s=n(a("8OQS")),c=n(a("pVnL")),l=n(a("q1tI")),d=n(a("17x9")),u=function(e){var t=(0,c.default)({},e),a=t.resolutions,n=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),n&&(t.fluid=n,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=y([].concat(t.fluid))),t.fixed&&(t.fixed=y([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(A&&!!window.matchMedia(t).matches)},m=function(e){var t=e.fluid,a=e.fixed;return p(t||a).src},p=function(e){if(A&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},g=Object.create({}),h=function(e){var t=u(e),a=m(t);return g[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,A="undefined"!=typeof window,v=A&&window.IntersectionObserver,E=new WeakMap;function w(e){return e.map((function(e){var t=e.src,a=e.srcSet,n=e.srcSetWebp,i=e.media,r=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},n&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:n,sizes:r}),l.default.createElement("source",{media:i,srcSet:a,sizes:r}))}))}function y(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function S(e){return e.map((function(e){var t=e.src,a=e.media,n=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:n})}))}function C(e){return e.map((function(e){var t=e.src,a=e.media,n=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:n})}))}function I(e,t){var a=e.srcSet,n=e.srcSetWebp,i=e.media,r=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?n:a)+'" '+(r?'sizes="'+r+'" ':"")+"/>"}var k=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(E.has(e.target)){var t=E.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),E.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),E.set(e,t)),function(){a.unobserve(e),E.delete(e)}},N=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",r=e.alt?'alt="'+e.alt+'" ':'alt="" ',o=e.width?'width="'+e.width+'" ':"",s=e.height?'height="'+e.height+'" ':"",c=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",d=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?I(e,!0):"")+I(e)})).join("")+"<img "+l+o+s+a+n+t+r+i+c+d+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},O=l.default.forwardRef((function(e,t){var a=e.src,n=e.imageVariants,i=e.generateSources,r=e.spreadProps,o=e.ariaHidden,s=l.default.createElement(L,(0,c.default)({ref:t,src:a},r,{ariaHidden:o}));return n.length>1?l.default.createElement("picture",null,i(n),s):s})),L=l.default.forwardRef((function(e,t){var a=e.sizes,n=e.srcSet,i=e.src,r=e.style,o=e.onLoad,d=e.onError,u=e.loading,f=e.draggable,m=e.ariaHidden,p=(0,s.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,c.default)({"aria-hidden":m,sizes:a,srcSet:n,src:i},p,{onLoad:o,onError:d,ref:t,loading:u,draggable:f,style:(0,c.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},r)}))}));L.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var x=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=A&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&v&&!a.isCritical&&!a.seenBefore;var n=a.isCritical||A&&(b||!a.useIOSupport);return a.state={isVisible:n,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,r.default)(a)),a.handleRef=a.handleRef.bind((0,r.default)(a)),a}(0,o.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=k(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=m(t),g[a]=!0,this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,i=e.style,r=void 0===i?{}:i,o=e.imgStyle,s=void 0===o?{}:o,d=e.placeholderStyle,f=void 0===d?{}:d,m=e.placeholderClassName,g=e.fluid,h=e.fixed,b=e.backgroundColor,A=e.durationFadeIn,v=e.Tag,E=e.itemProp,y=e.loading,I=e.draggable,k=!1===this.state.fadeIn||this.state.imgLoaded,x=!0===this.state.fadeIn&&!this.state.imgCached,R=(0,c.default)({opacity:k?1:0,transition:x?"opacity "+A+"ms":"none"},s),U="boolean"==typeof b?"lightgray":b,V={transitionDelay:A+"ms"},M=(0,c.default)({opacity:this.state.imgLoaded?0:1},x&&V,s,f),Q={title:t,alt:this.state.isVisible?"":a,style:M,className:m,itemProp:E};if(g){var G=g,F=p(g);return l.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:(0,c.default)({position:"relative",overflow:"hidden",maxWidth:F.maxWidth?F.maxWidth+"px":null,maxHeight:F.maxHeight?F.maxHeight+"px":null},r),ref:this.handleRef,key:"fluid-"+JSON.stringify(F.srcSet)},l.default.createElement(v,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/F.aspectRatio+"%"}}),U&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:U,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},x&&V)}),F.base64&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:F.base64,spreadProps:Q,imageVariants:G,generateSources:C}),F.tracedSVG&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:F.tracedSVG,spreadProps:Q,imageVariants:G,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,w(G),l.default.createElement(L,{alt:a,title:t,sizes:F.sizes,src:F.src,crossOrigin:this.props.crossOrigin,srcSet:F.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:y,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,c.default)({alt:a,title:t,loading:y},F,{imageVariants:G}))}}))}if(h){var D=h,Y=p(h),q=(0,c.default)({position:"relative",overflow:"hidden",display:"inline-block",width:Y.width,height:Y.height},r);return"inherit"===r.display&&delete q.display,l.default.createElement(v,{className:(n||"")+" gatsby-image-wrapper",style:q,ref:this.handleRef,key:"fixed-"+JSON.stringify(Y.srcSet)},U&&l.default.createElement(v,{"aria-hidden":!0,title:t,style:(0,c.default)({backgroundColor:U,width:Y.width,opacity:this.state.imgLoaded?0:1,height:Y.height},x&&V)}),Y.base64&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:Y.base64,spreadProps:Q,imageVariants:D,generateSources:C}),Y.tracedSVG&&l.default.createElement(O,{ariaHidden:!0,ref:this.placeholderRef,src:Y.tracedSVG,spreadProps:Q,imageVariants:D,generateSources:S}),this.state.isVisible&&l.default.createElement("picture",null,w(D),l.default.createElement(L,{alt:a,title:t,width:Y.width,height:Y.height,sizes:Y.sizes,src:Y.src,crossOrigin:this.props.crossOrigin,srcSet:Y.srcSet,style:R,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:E,loading:y,draggable:I})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:N((0,c.default)({alt:a,title:t,loading:y},Y,{imageVariants:D}))}}))}return null},t}(l.default.Component);x.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var R=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string}),U=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string,media:d.default.string,maxWidth:d.default.number,maxHeight:d.default.number});x.propTypes={resolutions:R,sizes:U,fixed:d.default.oneOfType([R,d.default.arrayOf(R)]),fluid:d.default.oneOfType([U,d.default.arrayOf(U)]),fadeIn:d.default.bool,durationFadeIn:d.default.number,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,crossOrigin:d.default.oneOfType([d.default.string,d.default.bool]),style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string,itemProp:d.default.string,loading:d.default.oneOf(["auto","lazy","eager"]),draggable:d.default.bool};var V=x;t.default=V},"9j6q":function(e){e.exports=JSON.parse('{"data":{"phone":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABiUlEQVQ4y5WUv0oDQRDG96KWNtrYWSlCegtFU9hb+Ach2qS31UabvIOFNna+gU9gI4KChYVdOpsgiKJg1tv1W5lNvpussLfwcXvJzG9mZ2bPGCzv/QL0BL1B2/LbBBS2xjlnshecmlDfV9e+hsZnDnAW6gloQNC2/N/IhonDMfQqEAf9EHRXjtyoA/wQ55JAEfoJLYpdkQt8IKBLZLpSK0s4XImjJdgfGJCLmF2dphwSkGFnZFNk1xCOTTperGOo61wcnVpjI9AbaoaVDC//m8XwlHEq6H0UFM4HqWNjbYnDFMO4QQFMe8MR7wkaj/4FrYrNpHJegubHhp9q1FJd5lncVI08laDv0I4uDUO76gryrTmHpqEjP77azIl10XM5kEx54Ps0r6UKuFcpJIBFYthLapQlZ5e4pj5++ngcGNolQyuO+nrGoN+y73GXh5lSgA3oUWUW4BZ2pco6rGfuHNeRGxVGogPd+fQKAW9l39I3pnLFhl0bvS9DJ9A1bMNX6gVag2ag9WDzC9rehN/orP8YAAAAAElFTkSuQmCC","aspectRatio":1,"src":"/static/9405f45c030e201247f89cb2d1b2465e/630fb/phone.png","srcSet":"/static/9405f45c030e201247f89cb2d1b2465e/5db04/phone.png 75w,\\n/static/9405f45c030e201247f89cb2d1b2465e/6d161/phone.png 150w,\\n/static/9405f45c030e201247f89cb2d1b2465e/630fb/phone.png 300w,\\n/static/9405f45c030e201247f89cb2d1b2465e/62b1f/phone.png 450w,\\n/static/9405f45c030e201247f89cb2d1b2465e/bc59e/phone.png 512w","sizes":"(max-width: 300px) 100vw, 300px"}}},"contact":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACa0lEQVQ4y5WVW4iNURTHP5d5MCEPGpcnIyJqZiJO0pAnSjNRkuaglAfJAzEPagbngYwHaRSlkLlILmNOTSiFF5coGV5GiMIUoZlB5vp9fuv479Pq1Ihdv9a311577bXXXnt/UZIkEYwX42A/fIrjuAfZC9/FD8k+6W38A2yJ1PgeG/mGk2KUn5M/LU7+rZldLcwMXifi6DAyC6ehShFYG9GEYRgSQRfre0S2vfipMId1UnRDJyyHj9INjRLVsFvQ2lGlotkc7oEuRbsQHsho0Dm4Cy1wC346p8HxRngKbWHblVAE5fDGObrPNuYhU7AelsF8uKbxAcmt2l2bOZsB5+EF3JRzO82XMEl57YALstkNU2wxt/BmeMbiOYcNUt6DK7BKW1kDRzA6B1P5Xq3d1CpnawsdwvVInYcyXqyy+aqt3YEJyqG1EpyfUj+Vr5s4DhG2h/orQ1EKZTqU59r6cZilef0wHdu3yL2wwUeI3iJsj+TkkR07yi7kCngMFXDJ6tSSbSepXeyC2Sqzwi3nHJ6Q8iRkoFp9y9E2yyFyEeyDdSr8Y5Zf+CXbtI/Qkt+h1VOumN/DHI03wxO4obs+DRpdhGlFmA11uEA1tgTOOEMr4oPK51ItuElF7G9SWnWYNWcr4YsGrP5ShP9ulEeg8PqFm1JjDpmXc9ioE9ypit/uHoFBjQ24B8L3+1U2NfkI6ZRDi8qnKvn/1sO8ucjXdiVDDoskd8joG1zF0A6jVQ+Dx/RNYEVeqrnd2F+2jzH2aks5GV7J6Vk9bRkMD+lwAvVwQLKO8SbNqY/0C8g/3yqV2+6p/xt9Tl6E4t9Y8m+VJAJfWQAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/381a8e1ec38ad8a7e93e042267690b82/630fb/contact.png","srcSet":"/static/381a8e1ec38ad8a7e93e042267690b82/5db04/contact.png 75w,\\n/static/381a8e1ec38ad8a7e93e042267690b82/6d161/contact.png 150w,\\n/static/381a8e1ec38ad8a7e93e042267690b82/630fb/contact.png 300w,\\n/static/381a8e1ec38ad8a7e93e042267690b82/62b1f/contact.png 450w,\\n/static/381a8e1ec38ad8a7e93e042267690b82/bc59e/contact.png 512w","sizes":"(max-width: 300px) 100vw, 300px"}}},"info":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABr0lEQVQ4y42UQStEURTH74xmJcXOno9gpSwkFnbUyII02SjZWbDwASwkYsoslAXZycInUGqQpJgVEyIr2fLeu8//1j2vf6f7mnfrP+e8d8/87jn33ndMmqbGDWehLuMH/HGoDt1D39AP1IKOoGmo4uPKzGBYyfsj1tpm2nk4+BQlUGJY2fsr9IcYiryyd1gs8nMyNglqsjJhlylIIIm3X9Cz961XTOAtneWwyoztLdTvFoYO1VxC/qyhVK9UZi6DP++vUtwQAa2Ct7Ed3QY/o7SaDQQ2EdPrgLANBbScCOZrLmibXnIQQ3/91UnVvDxLZedcbqyC5UBaWPQY9gS6VNUIUGIfHfBdnZ4M2cMd2sOqqkYDX13QRw5QyqgTcL4I8DpQRhCI0uc6AJ8ccC/nUAS4TxnmASX2wgVNBK6CLViyXnxJAm/yLjbK3CXgTCBDuVqfUJ8EjgX2Q+CngA7CDsCuKQhXsigw6TTrdDiRurjSCJJAN3KjkTUH1Qs31ClH6pNMAi3tINgTUY5AJ92NL9Bg36CFICzQaCtYoOo/tzvoBc9t2AfoDKpBPQKiCs0/qhMsFltmQrMAAAAASUVORK5CYII=","aspectRatio":1,"src":"/static/e3bf81ee89c24ddd247e1dc8b430c60a/630fb/info.png","srcSet":"/static/e3bf81ee89c24ddd247e1dc8b430c60a/5db04/info.png 75w,\\n/static/e3bf81ee89c24ddd247e1dc8b430c60a/6d161/info.png 150w,\\n/static/e3bf81ee89c24ddd247e1dc8b430c60a/630fb/info.png 300w,\\n/static/e3bf81ee89c24ddd247e1dc8b430c60a/62b1f/info.png 450w,\\n/static/e3bf81ee89c24ddd247e1dc8b430c60a/bc59e/info.png 512w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},EK0E:function(e,t,a){"use strict";var n,i=a("dyZX"),r=a("CkkT")(0),o=a("KroJ"),s=a("Z6vF"),c=a("czNK"),l=a("ZD67"),d=a("0/R4"),u=a("s5qY"),f=a("s5qY"),m=!i.ActiveXObject&&"ActiveXObject"in i,p=s.getWeak,g=Object.isExtensible,h=l.ufstore,b=function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},A={get:function(e){if(d(e)){var t=p(e);return!0===t?h(u(this,"WeakMap")).get(e):t?t[this._i]:void 0}},set:function(e,t){return l.def(u(this,"WeakMap"),e,t)}},v=e.exports=a("4LiD")("WeakMap",b,A,l,!0,!0);f&&m&&(c((n=l.getConstructor(b,"WeakMap")).prototype,A),s.NEED=!0,r(["delete","has","get","set"],(function(e){var t=v.prototype,a=t[e];o(t,e,(function(t,i){if(d(t)&&!g(t)){this._f||(this._f=new n);var r=this._f[e](t,i);return"set"==e?this:r}return a.call(this,t,i)}))})))},"Gq/u":function(e){e.exports=JSON.parse('{"data":{"githublogo":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAACQ0lEQVQ4y42VX2iPURjHzzZiflPC5JYLVxp3LtQUmrkyFhdjbVe7sotfy5VYu1EkSS4Mc6G4oFy4QMqSmpZCbe1vItYWkj/LNLa9r8/D9/w8Xu+FU5/O85znz3nOe/68IUmSYC1NU6MiqCHvwnaVfiL9097CTdgXffEpt9iYwycrk1wLA0owD4+gRzyAGdleQ4MroCwvWYd5MusXusOwMmQaYwVocpWfcrYQXOlFOdyFSue02LGotKzftkuKOZOtcqsM96QvhzpLEnIakxf0aWyCbsXu9zM9g2lYJb1dTg9hLxyB01CU3i97s/xf2IYxUaUp22VsdxO0pP/XmlXxHuktplyUUu0SNmjsB8zlMC/7NiVcivwO7lvwOANPlKhcfa87NolInTwn/bor4jZMBp0rb1gH3xSw4JL5tqD+A8VUKe4cfDbhK9yCFbYpsFNLTTKkObrFbtKRukzyj7+WDKMo9dCIfADeKOC7qyZx1c1KHgTbkN3w1G5P0JWyttbfY/fh00yFsdlt2uxi7Ob0mlAft5wKl9E3ymEjXGFs1CWz6oYYs8O83iWrk09bHBi2DwxL9HGPO+fzco7LLGYfBPrn8MluWDTskPM16f16qiZzdvg9Fa5xSc+WDnXm7B2NSWE11BDYpcpf6s5O2dGADe6o2OvUXapYz1dM3qmkEzhtoW/V2DE4KPkknIDHSnbBPRp/vYlRtk165ZZo1dnG9Ol6TcdDDYf+eWAzv4C4/Ap7juAGjGip9k3H4I4qL8REbnPCT+bXgsOXWlsrAAAAAElFTkSuQmCC","aspectRatio":1,"src":"/static/bbedc41f556bbf801c3c11f71f80d603/630fb/githublogo.png","srcSet":"/static/bbedc41f556bbf801c3c11f71f80d603/5db04/githublogo.png 75w,\\n/static/bbedc41f556bbf801c3c11f71f80d603/6d161/githublogo.png 150w,\\n/static/bbedc41f556bbf801c3c11f71f80d603/630fb/githublogo.png 300w,\\n/static/bbedc41f556bbf801c3c11f71f80d603/62b1f/githublogo.png 450w,\\n/static/bbedc41f556bbf801c3c11f71f80d603/bc59e/githublogo.png 512w","sizes":"(max-width: 300px) 100vw, 300px"}}},"linkedinlogo":{"childImageSharp":{"fluid":{"base64":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAACXBIWXMAAA7EAAAOxAGVKw4bAAABz0lEQVQ4y6WVyS5EQRSGLxGEvY6wEpG0WcSOxIIHsfECYu8VPIGVhUQitCmRSFi0IRbGhQTd19jGiHm87T/yF78bY5zkS9U5dervqjpVtz0Plk6nS0AvSIJdsA8OQIocOoIgcP0U83wwAKIexUrBcfr/dgVqTbCfgdtQQvAH7jhn1OPync2CdtAXEv3K3Pgz/Q0TPKFjbcSjoR9n/OmHrarglk08p3MGCkVwjvF78EjhgP0Htm71TjBpEy/l19ZBF5j6ZjVhexZBXwXtFxfADK7GNLD4EdoY2kGLM28EdCM+wDl6LB8ErcplsuU1ExK/ArR5YvCb5Mg+FawMCQ6xnyXxQpDhYmg7fyu4CmLsZwJre5jbIXlROdsPRbHLWSWJKzinYfHL3yoTBLMSL5ZHkfR4+J8KWgGcj7xa2VpctmyC17rCC7lvNSK4/PqU3v260ItygkV8x2+Crkp2WetEYAmMi18vgvMgW1bodpmwwKkI6pYXwZj41SHBDMYLZJebFjiSi90MckE+qzwJ8kAOx5wt4kwjHIuK4OvHYUKKkuIHc5v+Dfs+x/RztcP4nlR52gQb5C3+11rclWgEU/wLSBAfMV/8JFfk0Hgcua2m9QKffSiOzZ6wKgAAAABJRU5ErkJggg==","aspectRatio":1,"src":"/static/e0a3ddeed1fd4e65c2810cf888ec2403/630fb/linkedinlogo.png","srcSet":"/static/e0a3ddeed1fd4e65c2810cf888ec2403/5db04/linkedinlogo.png 75w,\\n/static/e0a3ddeed1fd4e65c2810cf888ec2403/6d161/linkedinlogo.png 150w,\\n/static/e0a3ddeed1fd4e65c2810cf888ec2403/630fb/linkedinlogo.png 300w,\\n/static/e0a3ddeed1fd4e65c2810cf888ec2403/62b1f/linkedinlogo.png 450w,\\n/static/e0a3ddeed1fd4e65c2810cf888ec2403/bc59e/linkedinlogo.png 512w","sizes":"(max-width: 300px) 100vw, 300px"}}}}}')},INYr:function(e,t,a){"use strict";var n=a("XKFU"),i=a("CkkT")(6),r="findIndex",o=!0;r in[]&&Array(1)[r]((function(){o=!1})),n(n.P+n.F*o,"Array",{findIndex:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),a("nGyu")(r)},OGtf:function(e,t,a){var n=a("XKFU"),i=a("eeVq"),r=a("vhPU"),o=/"/g,s=function(e,t,a,n){var i=String(r(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(n).replace(o,"&quot;")+'"'),s+">"+i+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),n(n.P+n.F*i((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},PGGC:function(e,t,a){},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),r=a("Wbzz"),o=function(){return i.a.createElement("header",null,i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"inner-header"},i.a.createElement("div",{className:"logo"},i.a.createElement(r.Link,{to:"/#home"},"zindagi زندگی")),i.a.createElement("div",{className:"navigation"},i.a.createElement("nav",null,i.a.createElement(r.Link,{to:"/#aboutlink"},"About"),i.a.createElement(r.Link,{to:"/#contribute"},"Contribute"),i.a.createElement(r.Link,{to:"/#download"},"Download"))))))},s=(a("PGGC"),a("edhK"),a("9eSz")),c=a.n(s),l=a("Gq/u"),d=function(){var e=l.data;return i.a.createElement("div",{id:"home",className:"banner"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"row"},i.a.createElement("div",{className:"main-text"},"زندگی"),i.a.createElement("div",{className:"desc"},i.a.createElement("p",null,"Become a part of ",i.a.createElement("b",null,"suicide prevention")," and"," ",i.a.createElement("b",null,"mental health awareness")," in ",i.a.createElement("b",null,"Pakistan")," with"," ",i.a.createElement("b",null,"Zindagi"),"."),i.a.createElement("div",{className:"bannerlinks"},i.a.createElement("div",{className:"github"},i.a.createElement(r.Link,{to:"https://github.com/zindagi-app"},i.a.createElement(c.a,{fluid:e.githublogo.childImageSharp.fluid}))),i.a.createElement("div",{className:"linkedin"},i.a.createElement(r.Link,{to:"https://www.linkedin.com/company/zindagi-pak"},i.a.createElement(c.a,{fluid:e.linkedinlogo.childImageSharp.fluid}))))))))},u=a("9j6q"),f=function(){var e=u.data;return i.a.createElement("div",{class:"container"},i.a.createElement("div",{id:"aboutlink",class:"aboutpg"},i.a.createElement("div",{class:"title"},"About زندگی"),i.a.createElement("div",{class:"englishdesc"},"With the increasing accessibility of smartphones, to all classes of the Pakistani society- we believe it is essential for there to be an application that compensates for the attention that is lacking towards individuals in the Pakistani society that cannot express themselves and their feelings in fear of being judged, punished or simply not taken seriously. This app aims to link the user to helplines, websites, emergency contacts, information, advice pages etc. in order to maximise user well-being."),i.a.createElement("div",{className:"engfeatures"},i.a.createElement("div",{className:"featurestitle"},"Prospective Features"),i.a.createElement("div",{className:"helpline"},i.a.createElement("div",{className:"helplineimg"},i.a.createElement(c.a,{fluid:e.phone.childImageSharp.fluid})),i.a.createElement("div",{className:"helplinetitle"},"Helpline"),i.a.createElement("div",{className:"helplinedesc"},"Connect to a free emergency helpline immediately.")),i.a.createElement("div",{className:"contact"},i.a.createElement("div",{className:"contactimg"},i.a.createElement(c.a,{fluid:e.contact.childImageSharp.fluid})),i.a.createElement("div",{className:"contacttitle"},"Emergency Contacts"),i.a.createElement("div",{className:"contactdesc"},"Have a list of emergency contacts available at all times.")),i.a.createElement("div",{className:"info"},i.a.createElement("div",{className:"infoimg"},i.a.createElement(c.a,{fluid:e.info.childImageSharp.fluid})),i.a.createElement("div",{className:"infotitle"},"Info and Advice"),i.a.createElement("div",{className:"infodesc"},"Learn more, seek advice, raise awareness and self-diagnose."))),i.a.createElement("div",{className:"urdufirst"},i.a.createElement("b",null,"Urdu-first")," UI. Available cross-platform using"," ",i.a.createElement("b",null,"React Native. ")),i.a.createElement("div",{className:"teambtn"},i.a.createElement(r.Link,{to:"/#contribute"},i.a.createElement("div",{className:"contributebtn"},"Contribute to our Team")),i.a.createElement(r.Link,{to:"/#contribute"},i.a.createElement("div",{className:"updatedbtn"},"Stay Updated and Reach Out")),i.a.createElement(r.Link,{to:"https://github.com/zindagi-app "},i.a.createElement("div",{className:"opensrcbtn"},"Join our Open-Source")))))},m=function(){return i.a.createElement("div",{class:"container"},i.a.createElement("div",{id:"contribute",class:"contributepg"},i.a.createElement("div",{class:"title"},"Contribute to زندگی"),i.a.createElement("div",{class:"englishdesc"},"We're looking for all types of contributions! If you have coding experience and wish to play a part in building this app, reach out to us! Donate to this project as well!"),i.a.createElement("div",{class:"urdufirst"},"Whatsapp or Text ",i.a.createElement("b",null,"(312)885-6087"),"."),i.a.createElement("div",{class:"urdusecond"},"Email ",i.a.createElement("b",null,"zindagistartup@gmail.com")),i.a.createElement(r.Link,{to:"https://github.com/zindagi-app"}," ",i.a.createElement("div",{className:"opensrcbtn"},"See our Code"))))},p=function(){return i.a.createElement("div",{id:"download",className:"downloadpg"},i.a.createElement("div",{className:"comingsoongrp"},i.a.createElement("div",{className:"comingsoon"},"Coming soon for ",i.a.createElement("b",null,"Android")," and ",i.a.createElement("b",null,"iOS"),i.a.createElement("div",{className:"checkback"},"Keep checking back with us."))))};"undefined"!=typeof window&&a("SR+s")('a[href*="#"]');t.default=function(){return i.a.createElement("div",null,i.a.createElement(o,null),i.a.createElement(d,null),i.a.createElement(f,null),i.a.createElement(m,null),i.a.createElement(p,null))}},"SR+s":function(e,t,a){(function(n){var i,r;a("hEkN"),a("a1Th"),a("h7Nl"),a("Btvt"),a("8+KV"),window.Element&&!Element.prototype.closest&&(Element.prototype.closest=function(e){var t,a=(this.document||this.ownerDocument).querySelectorAll(e),n=this;do{for(t=a.length;0<=--t&&a.item(t)!==n;);}while(t<0&&(n=n.parentElement));return n}),function(){function e(e,t){t=t||{bubbles:!1,cancelable:!1,detail:void 0};var a=document.createEvent("CustomEvent");return a.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),a}"function"!=typeof window.CustomEvent&&(e.prototype=window.Event.prototype,window.CustomEvent=e)}(),function(){for(var e=0,t=["ms","moz","webkit","o"],a=0;a<t.length&&!window.requestAnimationFrame;++a)window.requestAnimationFrame=window[t[a]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[t[a]+"CancelAnimationFrame"]||window[t[a]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(t,a){var n=(new Date).getTime(),i=Math.max(0,16-(n-e)),r=window.setTimeout((function(){t(n+i)}),i);return e=n+i,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)})}(),r=void 0!==n?n:"undefined"!=typeof window?window:this,void 0===(i=function(){return function(e){"use strict";var t={ignore:"[data-scroll-ignore]",header:null,topOnEmptyHash:!0,speed:500,speedAsDuration:!1,durationMax:null,durationMin:null,clip:!0,offset:0,easing:"easeInOutCubic",customEasing:null,updateURL:!0,popstate:!0,emitEvents:!0},a=function(){var e={};return Array.prototype.forEach.call(arguments,(function(t){for(var a in t){if(!t.hasOwnProperty(a))return;e[a]=t[a]}})),e},n=function(e){"#"===e.charAt(0)&&(e=e.substr(1));for(var t,a=String(e),n=a.length,i=-1,r="",o=a.charCodeAt(0);++i<n;){if(0===(t=a.charCodeAt(i)))throw new InvalidCharacterError("Invalid character: the input contains U+0000.");r+=1<=t&&t<=31||127==t||0===i&&48<=t&&t<=57||1===i&&48<=t&&t<=57&&45===o?"\\"+t.toString(16)+" ":128<=t||45===t||95===t||48<=t&&t<=57||65<=t&&t<=90||97<=t&&t<=122?a.charAt(i):"\\"+a.charAt(i)}return"#"+r},i=function(){return Math.max(document.body.scrollHeight,document.documentElement.scrollHeight,document.body.offsetHeight,document.documentElement.offsetHeight,document.body.clientHeight,document.documentElement.clientHeight)},r=function(t,a,n){0===t&&document.body.focus(),n||(t.focus(),document.activeElement!==t&&(t.setAttribute("tabindex","-1"),t.focus(),t.style.outline="none"),e.scrollTo(0,a))},o=function(t,a,n,i){if(a.emitEvents&&"function"==typeof e.CustomEvent){var r=new CustomEvent(t,{bubbles:!0,detail:{anchor:n,toggle:i}});document.dispatchEvent(r)}};return function(s,c){var l,d,u,f,m={cancelScroll:function(e){cancelAnimationFrame(f),f=null,e||o("scrollCancel",l)},animateScroll:function(n,s,c){m.cancelScroll();var d=a(l||t,c||{}),p="[object Number]"===Object.prototype.toString.call(n),g=p||!n.tagName?null:n;if(p||g){var h=e.pageYOffset;d.header&&!u&&(u=document.querySelector(d.header));var b,A,v,E,w,y,S,C,I=function(t){return t?(a=t,parseInt(e.getComputedStyle(a).height,10)+t.offsetTop):0;var a}(u),k=p?n:function(t,a,n,r){var o=0;if(t.offsetParent)for(;o+=t.offsetTop,t=t.offsetParent;);return o=Math.max(o-a-n,0),r&&(o=Math.min(o,i()-e.innerHeight)),o}(g,I,parseInt("function"==typeof d.offset?d.offset(n,s):d.offset,10),d.clip),N=k-h,O=i(),L=0,x=(b=N,v=(A=d).speedAsDuration?A.speed:Math.abs(b/1e3*A.speed),A.durationMax&&v>A.durationMax?A.durationMax:A.durationMin&&v<A.durationMin?A.durationMin:parseInt(v,10));0===e.pageYOffset&&e.scrollTo(0,0),S=n,C=d,p||history.pushState&&C.updateURL&&history.pushState({smoothScroll:JSON.stringify(C),anchor:S.id},document.title,S===document.documentElement?"#top":"#"+S.id),"matchMedia"in e&&e.matchMedia("(prefers-reduced-motion)").matches?r(n,Math.floor(k),!1):(o("scrollStart",d,n,s),m.cancelScroll(!0),e.requestAnimationFrame((function t(a){var i,c,l;E||(E=a),L+=a-E,y=h+N*(c=w=1<(w=0===x?0:L/x)?1:w,"easeInQuad"===(i=d).easing&&(l=c*c),"easeOutQuad"===i.easing&&(l=c*(2-c)),"easeInOutQuad"===i.easing&&(l=c<.5?2*c*c:(4-2*c)*c-1),"easeInCubic"===i.easing&&(l=c*c*c),"easeOutCubic"===i.easing&&(l=--c*c*c+1),"easeInOutCubic"===i.easing&&(l=c<.5?4*c*c*c:(c-1)*(2*c-2)*(2*c-2)+1),"easeInQuart"===i.easing&&(l=c*c*c*c),"easeOutQuart"===i.easing&&(l=1- --c*c*c*c),"easeInOutQuart"===i.easing&&(l=c<.5?8*c*c*c*c:1-8*--c*c*c*c),"easeInQuint"===i.easing&&(l=c*c*c*c*c),"easeOutQuint"===i.easing&&(l=1+--c*c*c*c*c),"easeInOutQuint"===i.easing&&(l=c<.5?16*c*c*c*c*c:1+16*--c*c*c*c*c),i.customEasing&&(l=i.customEasing(c)),l||c),e.scrollTo(0,Math.floor(y)),function(t,a){var i=e.pageYOffset;if(t==a||i==a||(h<a&&e.innerHeight+i)>=O)return m.cancelScroll(!0),r(n,a,p),o("scrollStop",d,n,s),!(f=E=null)}(y,k)||(f=e.requestAnimationFrame(t),E=a)})))}}},p=function(t){if(!t.defaultPrevented&&!(0!==t.button||t.metaKey||t.ctrlKey||t.shiftKey)&&"closest"in t.target&&(d=t.target.closest(s))&&"a"===d.tagName.toLowerCase()&&!t.target.closest(l.ignore)&&d.hostname===e.location.hostname&&d.pathname===e.location.pathname&&/#/.test(d.href)){var a,i;try{a=n(decodeURIComponent(d.hash))}catch(t){a=n(d.hash)}if("#"===a){if(!l.topOnEmptyHash)return;i=document.documentElement}else i=document.querySelector(a);(i=i||"#top"!==a?i:document.documentElement)&&(t.preventDefault(),function(t){if(history.replaceState&&t.updateURL&&!history.state){var a=e.location.hash;a=a||"",history.replaceState({smoothScroll:JSON.stringify(t),anchor:a||e.pageYOffset},document.title,a||e.location.href)}}(l),m.animateScroll(i,d))}},g=function(e){if(null!==history.state&&history.state.smoothScroll&&history.state.smoothScroll===JSON.stringify(l)){var t=history.state.anchor;"string"==typeof t&&t&&!(t=document.querySelector(n(history.state.anchor)))||m.animateScroll(t,null,{updateURL:!1})}};return m.destroy=function(){l&&(document.removeEventListener("click",p,!1),e.removeEventListener("popstate",g,!1),m.cancelScroll(),f=u=d=l=null)},function(){if(!("querySelector"in document&&"addEventListener"in e&&"requestAnimationFrame"in e&&"closest"in e.Element.prototype))throw"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.";m.destroy(),l=a(t,c||{}),u=l.header?document.querySelector(l.header):null,document.addEventListener("click",p,!1),l.updateURL&&l.popstate&&e.addEventListener("popstate",g,!1)}(),m}}(r)}.apply(t,[]))||(e.exports=i)}).call(this,a("yLpj"))},ZD67:function(e,t,a){"use strict";var n=a("3Lyj"),i=a("Z6vF").getWeak,r=a("y3w9"),o=a("0/R4"),s=a("9gX7"),c=a("SlkY"),l=a("CkkT"),d=a("aagx"),u=a("s5qY"),f=l(5),m=l(6),p=0,g=function(e){return e._l||(e._l=new h)},h=function(){this.a=[]},b=function(e,t){return f(e.a,(function(e){return e[0]===t}))};h.prototype={get:function(e){var t=b(this,e);if(t)return t[1]},has:function(e){return!!b(this,e)},set:function(e,t){var a=b(this,e);a?a[1]=t:this.a.push([e,t])},delete:function(e){var t=m(this.a,(function(t){return t[0]===e}));return~t&&this.a.splice(t,1),!!~t}},e.exports={getConstructor:function(e,t,a,r){var l=e((function(e,n){s(e,l,t,"_i"),e._t=t,e._i=p++,e._l=void 0,null!=n&&c(n,a,e[r],e)}));return n(l.prototype,{delete:function(e){if(!o(e))return!1;var a=i(e);return!0===a?g(u(this,t)).delete(e):a&&d(a,this._i)&&delete a[this._i]},has:function(e){if(!o(e))return!1;var a=i(e);return!0===a?g(u(this,t)).has(e):a&&d(a,this._i)}}),l},def:function(e,t,a){var n=i(r(t),!0);return!0===n?g(e).set(t,a):n[e._i]=a,e},ufstore:g}},edhK:function(e){e.exports=JSON.parse('{"data":{"placeholderImage":null}}')},h7Nl:function(e,t,a){var n=Date.prototype,i=n.toString,r=n.getTime;new Date(NaN)+""!="Invalid Date"&&a("KroJ")(n,"toString",(function(){var e=r.call(this);return e==e?i.call(this):"Invalid Date"}))},hEkN:function(e,t,a){"use strict";a("OGtf")("anchor",(function(e){return function(t){return e(this,"a","name",t)}}))},yLpj:function(e,t){var a;a=function(){return this}();try{a=a||new Function("return this")()}catch(n){"object"==typeof window&&(a=window)}e.exports=a}}]);
//# sourceMappingURL=component---src-pages-index-js-06aecef31b98ba43aa45.js.map