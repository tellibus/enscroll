/* MIT license http://enscrollplugin.com/license.html - tellibus fork for RTL support http://tellibus.com */
 (function(e,t){if(!e.browser){var n={},r=navigator.userAgent.toLowerCase(),i=/(chrome)[ \/]([\w.]+)/.exec(r)||/(webkit)[ \/]([\w.]+)/.exec(r)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(r)||/(msie) ([\w.]+)/.exec(r)||r.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(r)||[],s={browser:i[1]||"",version:i[2]||0};if(s.browser){n[s.browser]=true;n.version=s.version}if(n.chrome){n.webkit=true}else if(n.webkit){n.safari=true}e.browser=n}})(jQuery);(function(e,t,n){var r={getEvent:function(e){return e||t.event},preventDefault:function(e){if(e.preventDefault){e.preventDefault()}else{e.returnValue=false}}},i=t.requestAnimationFrame||t.mozRequestAnimationFrame||t.webkitRequestAnimationFrame||t.oRequestAnimationFrame||t.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)},s=function(t){var n=e(this).data("enscroll"),r=this,i=n.settings,s=function(){var t=e(this).data("enscroll"),n=t.settings;if(t&&n.showOnHover){if(n.verticalScrolling&&e(t.verticalTrackWrapper).css("display")!=="none"){e(t.verticalTrackWrapper).stop().fadeTo("fast",0)}if(n.horizontalScrolling&&e(t.horizontalTrackWrapper).css("display")!=="none"){e(t.horizontalTrackWrapper).stop().fadeTo("fast",0)}t._fadeTimer=null}};if(n&&i.showOnHover){if(n._fadeTimer){clearTimeout(n._fadeTimer)}else{if(i.verticalScrolling&&e(n.verticalTrackWrapper).css("display")!=="none"){e(n.verticalTrackWrapper).stop().fadeTo("fast",1)}if(i.horizontalScrolling&&e(n.horizontalTrackWrapper).css("display")!=="none"){e(n.horizontalTrackWrapper).stop().fadeTo("fast",1)}}if(t!==false){n._fadeTimer=setTimeout(function(){s.call(r)},1500)}}},o=function(t,n){var r=e(t),i=r.data("enscroll"),o=r.scrollTop();if(i&&i.settings.verticalScrolling){r.scrollTop(o+n);if(i.settings.showOnHover){s.call(t)}}},u=function(t,n){var r=e(t),i=r.data("enscroll"),o=r.scrollLeft();if(i&&i.settings.horizontalScrolling){r.scrollLeft(o+n);if(i.settings.showOnHover){s.call(t)}}},a=function(t){if(t.which!==1){return}var r=t.data.pane,o=e(r).data("enscroll"),u=true,a,f,l,c,h,p,d,v,m,g=function(){if(u){if(l!==c){e(r).scrollTop(l*m/v);c=l}i(g);s.call(r)}},y=function(e){if(u){l=e.clientY-p-h;l=Math.min(l<0?0:l,v)}return false},b=function(t){u=false;n.body.style.cursor=d;this.style.cursor="";e(a).removeClass("dragging");e(n.body).off("mousemove.enscroll.vertical").off("mouseup.enscroll.vertical");return false};a=e(o.verticalTrackWrapper).find(".enscroll-track").addClass("dragging").get(0);f=a.firstChild;l=parseInt(f.style.top,10);m=r.scrollHeight-e(r).innerHeight();h=t.clientY-e(f).offset().top;v=e(a).height()-e(f).outerHeight();p=e(a).offset().top;e(n.body).on({"mousemove.enscroll.vertical":y,"mouseup.enscroll.vertical":function(e){b.call(f,e)}});d=e(n.body).css("cursor");this.style.cursor=n.body.style.cursor="ns-resize";g();return false},f=function(t){if(t.which!==1){return}var r=t.data.pane,o=e(r).data("enscroll"),u=true,a,f,l,c,h,p,d,v,m,g=function(){if(u){if(l!==c){e(r).scrollLeft(l*h/m);c=l}i(g);s.call(r)}},y=function(e){if(u){l=e.clientX-d-p;l=Math.min(l<0?0:l,m);s.call(r)}return false},b=function(t){u=false;e(a).removeClass("dragging");n.body.style.cursor=v;this.style.cursor="";e(a).removeClass("dragging");e(n.body).off("mousemove.enscroll.horizontal").off("mouseup.enscroll.horizontal");return false};a=e(o.horizontalTrackWrapper).find(".enscroll-track").addClass("dragging").get(0);f=a.firstChild;l=parseInt(f.style.left,10);h=r.scrollWidth-e(r).innerWidth();p=t.clientX-e(f).offset().left;m=e(a).width()-e(f).outerWidth();d=e(a).offset().left;e(n.body).on({"mousemove.enscroll.horizontal":y,"mouseup.enscroll.horizontal":function(e){b.call(f,e)}});v=e("body").css("cursor");this.style.cursor=n.body.style.cursor="ew-resize";g();return false},l=function(e){var t=this.data("enscroll"),n,i,s,a;if(t){e=r.getEvent(e);s=e.detail?-e.detail:window.client&&window.client.engine.opera&&window.client.engine.opera<9.5?-e.wheelDelta:e.wheelDelta;a=t.settings.scrollIncrement;if(e.wheelDelta&&e.wheelDeltaX&&e.wheelDelta===e.wheelDeltaX||e.axis&&e.HORIZONTAL_AXIS&&e.axis===e.HORIZONTAL_AXIS){n=this.scrollLeft();u(this,s<0?a:-a);if(n!==this.scrollLeft()){r.preventDefault(e)}}else{i=this.scrollTop();o(this,s<0?a:-a);if(i!==this.scrollTop()){r.preventDefault(e)}}}},c=function(t){var n=e(this),r=n.data("enscroll"),i,s,o;if(r){if(r.settings.verticalScrolling){s=e(r.verticalTrackWrapper).find(".enscroll-track").get(0);i=s.firstChild;o=n.scrollTop()/(this.scrollHeight-n.innerHeight());o=isNaN(o)?0:o;i.style.top=o*(e(s).height()-e(i).outerHeight())+"px"}if(r.settings.horizontalScrolling){s=e(r.horizontalTrackWrapper).find(".enscroll-track").get(0);i=s.firstChild;o=n.scrollLeft()/(this.scrollWidth-n.innerWidth());o=isNaN(o)?0:o;i.style.left=o*(e(s).width()-e(i).innerWidth())+"px"}}},h=function(t){var n=e(this),r=this,i=n.data("enscroll"),s;if(t.target===this&&i){s=i.settings.scrollIncrement;switch(t.keyCode){case 32:case 34:o(this,n.height());return false;case 33:o(this,-n.height());return false;case 35:o(this,this.scrollHeight);return false;case 36:o(this,-this.scrollHeight);return false;case 37:u(this,-s);return false;case 38:o(this,-s);return false;case 39:u(this,s);return false;case 40:o(this,s);return false}return true}},p=function(t){var n,r,i=null,s=function(t){var s=e(this),a=n,f=r,l=s.scrollLeft(),c=s.scrollTop();n=t.touches[0].clientX;r=t.touches[0].clientY;if(i===null){i=Math.abs(f-r)>Math.abs(a-n)?"y":"x"}if(i==="y"){o(this,f-r)}else{u(this,a-n)}if(c!==s.scrollTop()||l!==s.scrollLeft()){t.preventDefault()}},a=function(){this.removeEventListener("touchmove",s,false);this.removeEventListener("touchend",a,false)};if(t.touches.length===1){n=t.touches[0].clientX;r=t.touches[0].clientY;this.addEventListener("touchmove",s,false);this.addEventListener("touchend",a,false)}},d={reposition:function(){return this.each(function(){var t=e(this),n=t.data("enscroll"),r=function(e,t,r){if(n.settings.RTLdirection){e.style.right=t+"px"}else{e.style.left=t+"px"}e.style.top=r+"px"},i=function(t,n){var r=e(t).css(n),i=/^-?\d+/.exec(r);return i?+i[0]:0},s,o,u,a,f;if(n){u=t.position();f=e.browser.msie&&/^6/.test(e.browser.version);if(f){a=t.offsetParent().get(0)}s=n.corner;if(n.settings.verticalScrolling){o=n.verticalTrackWrapper;r(o,u.left+t.outerWidth()-e(o).width()-i(this,"border-right-width")-(f?i(a,"padding-left"):0),u.top+i(this,"border-top-width")+(f?i(a,"border-top-width"):0))}if(n.settings.horizontalScrolling){o=n.horizontalTrackWrapper;r(o,u.left+i(this,"border-left-width")-(f?i(a,"padding-left"):0),u.top+t.outerHeight()-e(o).height()-i(this,"border-bottom-width")+(f?i(a,"border-bottom-width"):0))}if(s){r(s,u.left+t.outerWidth()-e(s).outerWidth()-i(this,"border-right-width")-(f?i(a,"padding-left"):0),u.top+t.outerHeight()-e(s).outerHeight()-i(this,"border-bottom-width")+(f?i(a,"border-bottom-width"):0))}}})},resize:function(){return this.each(function(){var t=e(this),n=t.data("enscroll"),r,i,s,o,u,a,f,l,c,h,p,d,v,m,g,y;if(t.is(":visible")&&n){r=n.settings;if(r.verticalScrolling){o=n.verticalTrackWrapper;i=t.innerHeight();u=i/this.scrollHeight;a=e(o).find(".enscroll-track").get(0);c=e(o).find("."+r.scrollUpButtonClass);h=e(o).find("."+r.scrollDownButtonClass);l=r.horizontalScrolling?i-e(n.horizontalTrackWrapper).find(".enscroll-track").outerHeight():i;l-=e(a).outerHeight()-e(a).height()+c.outerHeight()+h.outerHeight();v=a.firstChild;g=Math.max(u*l,r.minScrollbarLength);g-=e(v).outerHeight()-e(v).height();o.style.display="none";a.style.height=l+"px";v.style.height=g+"px";if(u<1){u=t.scrollTop()/(this.scrollHeight-t.height());v.style.top=u*(l-g)+"px";o.style.display="block"}}if(r.horizontalScrolling){o=n.horizontalTrackWrapper;s=t.innerWidth();u=s/this.scrollWidth;a=e(o).find(".enscroll-track").get(0);p=e(o).find("."+r.scrollLeftButtonClass);d=e(o).find("."+r.scrollRightButtonClass);f=r.verticalScrolling?s-e(n.verticalTrackWrapper).find(".enscroll-track").outerWidth():s;f-=e(a).outerWidth()-e(a).width()+p.outerWidth()+d.outerWidth();v=a.firstChild;m=Math.max(u*f,r.minScrollbarLength);m-=e(v).outerWidth()-e(v).width();o.style.display="none";a.style.width=f+"px";v.style.width=m+"px";if(u<1){u=(t.scrollLeft()+(r.verticalScrolling&&r.RTLdirection?e(n.verticalTrackWrapper).find(".enscroll-track").outerWidth():0))/(this.scrollWidth-t.width());v.style.left=u*(f-m)+"px";o.style.display="block"}if(n._prybar){y=n._prybar;this.removeChild(y);if(r.verticalScrolling){y.style.width=this.scrollWidth+e(n.verticalTrackWrapper).find(".enscroll-track").outerWidth()+"px";this.appendChild(y)}}}if(n.corner){n.corner.style.display=n.verticalTrackWrapper&&n.horizontalTrackWrapper&&e(n.verticalTrackWrapper).is(":visible")&&e(n.horizontalTrackWrapper).is(":visible")?"block":"none"}}})},startPolling:function(){return this.each(function(){var t=e(this).data("enscroll"),n=this,r=e(n),i=-1,s=-1,o=-1,u=-1,a,f=function(){if(t.settings.pollChanges){var e=n.scrollWidth,l=n.scrollHeight,c=r.width(),h=r.height(),p=r.offset();if(t.settings.verticalScrolling&&(h!==s||l!==u)||t.settings.horizontalScrolling&&(c!==i||e!==o)){o=e;u=l;d.resize.call(r)}if(a.left!==p.left||a.top!==p.top||c!==i||h!==s){a=p;i=c;s=h;d.reposition.call(r)}setTimeout(f,350)}};if(t){t.settings.pollChanges=true;u=n.scrollHeight;o=n.scrollWidth;a=r.offset();f()}})},stopPolling:function(){return this.each(function(){var t=e(this).data("enscroll");if(t){t.settings.pollChanges=false}})},destroy:function(){return this.each(function(){var n=e(this),r=n.data("enscroll"),i,s;if(r){d.stopPolling.call(n);s=r._mouseScrollHandler;if(r.settings.verticalScrolling){i=r.verticalTrackWrapper;e(i).remove();i=null}if(r.settings.horizontalScrolling){i=r.horizontalTrackWrapper;e(i).remove();i=null}if(r._fadeTimer){clearTimeout(r._fadeTimer)}if(r.corner){e(r.corner).remove()}if(r._prybar&&r._prybar.parentNode&&r._prybar.parentNode===this){e(r._prybar).remove()}this.setAttribute("style",r._style||"");if(!r._hadTabIndex){n.removeAttr("tabindex")}n.off("scroll.enscroll.pane").off("keydown.enscroll.pane").off("mouseenter.enscroll.pane").data("enscroll",null);if(this.removeEventListener){this.removeEventListener("mousewheel",s,false);this.removeEventListener("DOMMouseScroll",s,false);this.removeEventListener("touchstart",p,false)}else if(this.detachEvent){this.detachEvent("onmousewheel",s)}e(t).off("resize.enscroll.window")}})}};e.fn.enscroll=function(r){if(d[r]){return d[r].call(this)}var i=e.extend({verticalScrolling:true,horizontalScrolling:false,showOnHover:false,scrollIncrement:20,minScrollbarLength:40,pollChanges:true,drawCorner:true,drawScrollButtons:false,clickTrackToScroll:true,verticalTrackClass:"vertical-track",horizontalTrackClass:"horizontal-track",horizontalHandleClass:"horizontal-handle",verticalHandleClass:"vertical-handle",scrollUpButtonClass:"scroll-up-btn",scrollDownButtonClass:"scroll-down-btn",scrollLeftButtonClass:"scroll-left-btn",scrollRightButtonClass:"scroll-right-btn",cornerClass:"scrollbar-corner",zIndex:1,horizontalHandleHTML:'<div class="left"></div><div class="right"></div>',verticalHandleHTML:'<div class="top"></div><div class="bottom"></div>',RTLdirection:false},r);return this.each(function(){if(!i.verticalScrolling&&!i.horizontalScrolling){return}var r=e(this),v=this,m=r.innerWidth(),g=r.innerHeight(),y=r.offset(),b=r.attr("style"),w=true,E=v.scrollWidth,S=v.scrollHeight,x,T,N,C,k,L,A,O,M,_,D,P,H,B,j,F,I,q={position:"absolute","z-index":i.zIndex,margin:0,padding:0},R=function(e){l.call(r,e)},U=function(t,n){if(typeof n==="string"){e(t).html(n)}else if(typeof n==="object"&&n!==null&&n.nodeType&&n.nodeType===1){t.appendChild(n)}};if(i.verticalScrolling){T=n.createElement("div");C=n.createElement("div");L=n.createElement("a");e(C).css("position","relative").addClass("enscroll-track").addClass(i.verticalTrackClass).appendTo(T);if(i.drawScrollButtons){A=n.createElement("a");O=n.createElement("a");e(A).css({display:"block","text-decoration":"none"}).attr("href","").html(" ").addClass(i.scrollUpButtonClass).on("click",function(){o(v,-i.scrollIncrement);return false}).insertBefore(C);e(O).css({display:"block","text-decoration":"none"}).attr("href","").html(" ").on("click",function(){o(v,i.scrollIncrement);return false}).addClass(i.scrollDownButtonClass).appendTo(T)}if(i.clickTrackToScroll){e(C).on("click",function(t){if(t.target===this){o(v,t.pageY>e(L).offset().top?r.height():-r.height())}})}e(L).css({position:"absolute","z-index":1}).attr("href","").addClass(i.verticalHandleClass).mousedown({pane:this},a).click(function(){return false}).appendTo(C);U(L,i.verticalHandleHTML);e(T).css(q).insertAfter(this);if(i.showOnHover){e(T).css("opacity",0).on("mouseover.enscroll.vertical",function(){s.call(v,false)}).on("mouseout.enscroll.vertical",function(){s.call(v)})}P=e(C).outerWidth();if(i.RTLdirection){r.css({width:r.width()-P+"px","padding-left":parseInt(r.css("padding-left"),10)+P+"px"})}else{r.css({width:r.width()-P+"px","padding-right":parseInt(r.css("padding-right"),10)+P+"px"})}try{F=parseInt(r.css("outline-width"),10);if((F===0||isNaN(F))&&r.css("outline-style")==="none"){r.css("outline","none")}}catch(z){r.css("outline","none")}}if(i.horizontalScrolling){x=n.createElement("div");N=n.createElement("div");k=n.createElement("a");e(N).css({position:"relative","z-index":1}).addClass("enscroll-track").addClass(i.horizontalTrackClass).appendTo(x);if(i.drawScrollButtons){M=n.createElement("a");_=n.createElement("a");e(M).css("display","block").attr("href","").on("click",function(){u(v,-i.scrollIncrement);return false}).addClass(i.scrollLeftButtonClass).insertBefore(N);e(_).css("display","block").attr("href","").on("click",function(){u(v,i.scrollIncrement);return false}).addClass(i.scrollRightButtonClass).appendTo(x)}if(i.clickTrackToScroll){e(N).on("click",function(t){if(t.target===this){u(v,t.pageX>e(k).offset().left?r.width():-r.width())}})}e(k).css({position:"absolute","z-index":1}).attr("href","").addClass(i.horizontalHandleClass).click(function(){return false}).mousedown({pane:this},f).appendTo(N);U(k,i.horizontalHandleHTML);e(x).css(q).insertAfter(this);if(i.showOnHover){e(x).css("opacity",0).on("mouseover.enscroll.horizontal",function(){s.call(v,false)}).on("mouseout.enscroll.horizontal",function(){s.call(v)})}D=e(N).outerHeight();r.css({height:r.height()-D+"px","padding-bottom":parseInt(r.css("padding-bottom"),10)+D+"px"});if(!e.browser.msie||e.browser.msie&&e.browser.version>7){I=document.createElement("div");e(I).css({width:"1px",height:"1px",visibility:"hidden",padding:0,margin:"-1px"}).appendTo(this)}}if(i.verticalScrolling&&i.horizontalScrolling&&i.drawCorner){H=n.createElement("div");e(H).addClass(i.cornerClass).css(q).insertAfter(this)}j=r.attr("tabindex");if(!j||j.length<1){r.attr("tabindex",0);w=false}try{B=r.css("outline");if(!B||B.length<1){r.css("outline","none")}}catch(z){r.css("outline","none")}r.on({"scroll.enscroll.pane":function(e){c.call(this,e)},"keydown.enscroll.pane":h}).css("overflow","hidden").data("enscroll",{settings:i,horizontalTrackWrapper:x,verticalTrackWrapper:T,corner:H,_prybar:I,_mouseScrollHandler:R,_hadTabIndex:w,_style:b});e(t).on("resize.enscroll.window",function(e){d.reposition.call(r)});if(i.showOnHover){r.on("mouseenter.enscroll.pane",function(){s.call(this)})}if(this.addEventListener){this.addEventListener("mousewheel",R,false);this.addEventListener("DOMMouseScroll",R,false);this.addEventListener("touchstart",p,false)}else if(this.attachEvent){this.attachEvent("onmousewheel",R)}if(i.pollChanges){d.startPolling.call(r)}else{d.resize.call(r);d.reposition.call(r)}e(C,N).removeClass(i.verticalTrackClass).addClass(i.verticalTrackClass)})}})(jQuery,window,document)