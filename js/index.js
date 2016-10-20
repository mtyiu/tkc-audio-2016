"use strict";if(window.location.protocol=="http:")window.location.href="https:"+window.location.href.substring(window.location.protocol.length);$(function(){var lessons=[{id:"oct23",date:"10 月 23 日",image:"src/cables.jpg",active:true,chapters:[{title:"一、甚麼是音響事奉？"},{title:"二、聲音的基本知識"},{title:"三、音響接線、接頭及配件"}]},{id:"oct30",date:"10 月 30 日",image:"src/mic.jpg",even:true,chapters:[{title:"四、咪高峰"},{title:"五、效果器"},{title:"六、喇叭"}]},{id:"nov6",date:"11 月 6 日",image:"src/worship.jpg",chapters:[{title:"七、敬拜隊與音響員的團隊合作"},{title:"八、音響設置流程"}]},{id:"nov13",date:"11 月 13 日",image:"src/mixer.jpg",even:true,chapters:[{title:"九、混音器"}]},{id:"nov27",date:"11 月 27 日",image:"src/mixing-desk.jpg",chapters:[{title:"九、混音器"},{title:"實習"}]}];var menuTmpl=Handlebars.compile($("#menu-tmpl").html());var lessonTmpl=Handlebars.compile($("#lesson-tmpl").html());var $body=$("body");var $top=$("#top");var $nav=$("nav");var $menu=$("#menu > ul");var $lessons=$("#lessons");for(var i=0,l=lessons.length;i<l;i++){$menu.append(menuTmpl(lessons[i]));$lessons.append(lessonTmpl(lessons[i]))}$(window).scroll(function(){if($(this).scrollTop()>$top.height()){$nav.addClass("navbar-fixed-top");$nav.removeClass("navbar-static-top")}else{$nav.removeClass("navbar-fixed-top");$nav.addClass("navbar-static-top")}});$("#menu > ul > li > a.scrollTo").click(function(e){var target=$(this).attr("href");e.preventDefault();$body.animate({scrollTop:$(target).offset().top-50})});$("body").scrollspy({target:"#menu"})});