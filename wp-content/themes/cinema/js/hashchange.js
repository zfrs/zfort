if(location.href.indexOf('#/')>0){url=location.href.split('#');url=baseurl+url[1];location.href=url}
var current_page=location.href;
(function($,window,undefined){'$:nomunge';var str_hashchange='hashchange',doc=document,fake_onhashchange,special=$.event.special,doc_mode=doc.documentMode,supports_onhashchange='on'+str_hashchange in window&&(doc_mode===undefined||doc_mode>7);function get_fragment(url){url=url||location.href;return'#'+url.replace(/^[^#]*#?(.*)$/,'$1')};$.fn[str_hashchange]=function(fn){return fn?this.bind(str_hashchange,fn):this.trigger(str_hashchange)};$.fn[str_hashchange].delay=50;special[str_hashchange]=$.extend(special[str_hashchange],{setup:function(){if(supports_onhashchange){return false}$(fake_onhashchange.start)},teardown:function(){if(supports_onhashchange){return false}$(fake_onhashchange.stop)}});fake_onhashchange=(function(){var self={},timeout_id,last_hash=get_fragment(),fn_retval=function(val){return val},history_set=fn_retval,history_get=fn_retval;self.start=function(){timeout_id||poll()};self.stop=function(){timeout_id&&clearTimeout(timeout_id);timeout_id=undefined};function poll(){var hash=get_fragment(),history_hash=history_get(last_hash);if(hash!==last_hash){history_set(last_hash=hash,history_hash);$(window).trigger(str_hashchange)}else if(history_hash!==last_hash){location.href=location.href.replace(/#.*/,'')+history_hash}timeout_id=setTimeout(poll,$.fn[str_hashchange].delay)};$.browser.msie&&!supports_onhashchange&&(function(){var iframe,iframe_src;self.start=function(){if(!iframe){iframe_src=$.fn[str_hashchange].src;iframe_src=iframe_src&&iframe_src+get_fragment();iframe=$('<iframe tabindex="-1" title="empty"/>').hide().one('load',function(){iframe_src||history_set(get_fragment());poll()}).attr('src',iframe_src||'javascript:0').insertAfter('body')[0].contentWindow;doc.onpropertychange=function(){try{if(event.propertyName==='title'){iframe.document.title=doc.title}}catch(e){}}}};self.stop=fn_retval;history_get=function(){return get_fragment(iframe.location.href)};history_set=function(hash,history_hash){var iframe_doc=iframe.document,domain=$.fn[str_hashchange].domain;if(hash!==history_hash){iframe_doc.title=doc.title;iframe_doc.open();domain&&iframe_doc.write('<script>document.domain="'+domain+'"</script>');iframe_doc.close();iframe.location.hash=hash}}})();return self})()})(jQuery,this);
jQuery(window).hashchange(function(){var link=window.location.hash.replace("#","");get_page_by_hash(link)});
function get_page_by_hash(link){if(typeof(link)!="undefined"){if(link!=""){var alink=link;if(getNameBrouser()=='msie')alink=baseurl+link;var params='smt_layout='+jQuery('body').attr('layout');
jQuery.ajax({type:"POST",cache:false,async:false,data:params,url:alink,dataType:'json',success:function(data){if(data!=""){jQuery('body').attr('layout',data['layout']);document.title=data['title'];jQuery('body').removeClass('content-n content-l content-r content-l2 content-r2 content-lr').addClass(data['sidebars_type']);jQuery(data['div']).html(data['content'])}},error:function(jqXHR,textStatus,errorThrown){location.href=alink;}})}
if(getNameBrouser()=='msie'){if(current_page.indexOf('#')>0){current_page=current_page.split('#');current_page=current_page[0];}current_page=current_page+'#'+link;} else {current_page=link;}}}
function second_passed() { if(current_page!=location.href){get_page_by_hash(location.href);}setTimeout(second_passed,1000);}
second_passed();
jQuery("a").live('click',function(){if((typeof jQuery(this).attr('rel')!='undefined'&&jQuery(this).attr('rel')!=''&&jQuery(this).attr('rel')!='bookmark')||jQuery(this).attr('href')=='#')return true;var scrl='';var load=true;
if(jQuery(this).attr("href").indexOf('#')>=0){var p=jQuery(this).attr("href").split('#');var link=window.location.href.split('#');if(p[0]==link[0]||'http://'+location.host+p[0]==link[0]) load=false;var scrl='#'+p[1];}
if(load){if(getNameBrouser()=="gecko"){window.history.pushState("","",jQuery(this).attr("href"));window.history.replaceState("","",jQuery(this).attr("href"));get_page_by_hash(jQuery(this).attr("href"));} else {url=jQuery(this).attr("href").replace(baseurl,'');window.location.hash=url;}}
if(scrl!='')jQuery('body').scrollTo(jQuery(scrl),800); else jQuery('body').scrollTo(jQuery('#content'),800);
if(load) busy=false; return false;});
function getNameBrouser(){var userAgent=navigator.userAgent.toLowerCase();if(userAgent.indexOf("msie")!=-1&&userAgent.indexOf("opera")==-1&&userAgent.indexOf("webtv")==-1){return"msie"}if(userAgent.indexOf("opera")!=-1){return"gecko"}if(userAgent.indexOf("gecko")!=-1){return"gecko"}if(userAgent.indexOf("safari")!=-1){return"safari"}if(userAgent.indexOf("konqueror")!=-1){return"konqueror"}return"unknown"}