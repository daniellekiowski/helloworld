/*!
* jQuery wmuGallery v2.1
*
* Copyright (c) 2011 Brice Lechatellier
* http://brice.lechatellier.com/
*
* Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
*/
(function(a){a.fn.wmuGallery=function(b){var c={position:"before",animationDuration:600,touch:false,slide:"article",items:5};var b=a.extend(c,b);return this.each(function(){var i=a(this);var e=i.find(b.slide);var d;var h;var f;var g=function(k){var l=a(e[k]).find("img").attr("data-src-full");if(!h){h=a('<img src="'+l+'" />');d.append(h)}else{h.attr("src",l)}};var j=function(){d=a('<div class="wmuGalleryImage"></div>');if(b.position=="before"){i.prepend(d)}else{if(b.position=="after"){i.append(d)}}if(!a.isFunction(a.fn.wmuSlider)){a.ajax({url:"jquery.wmuSlider.min.js",async:false})}if(a.isFunction(a.fn.wmuSlider)){f=i.find(".wmuSlider");f.bind("hasLoaded",function(n){var m=f.find(".wmuSliderPrev");var l=f.find(".wmuSliderNext");var k=f.find(".wmuSliderPagination");d.append(m);d.append(l);d.append(k);e=i.find(b.slide);e.each(function(p){var o=a(this);o.click(function(q){q.preventDefault();f.trigger("loadSlide",parseInt(o.attr("data-index")))})})}).bind("slideLoaded",function(l,k){g(k)}).wmuSlider({touch:b.touch,animation:"slide",animationDuration:b.animationDuration,slide:b.slide,items:b.items})}};j()})}})(jQuery);