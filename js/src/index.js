'use strict';

if (window.location.protocol == 'http:' )
	window.location.href = 'https:' + window.location.href.substring( window.location.protocol.length );

$(function() {
	var lessons = [
		{
			"id": "oct23",
			"date": "10 月 23 日",
			"image": "cables.jpg",
			"active": true,
			"chapters": [
				{
					"title": "課程簡介",
					"pdf": "0_課程簡介.pdf",
					"youtube": "Wg9upy-ilPA"
				},
				{
					"title": "一、甚麼是音響事奉？",
					"pdf": "1_甚麼是音響事奉.pdf",
					"youtube": "Enu4KaUJpac"
				},
				{
					"title": "二、聲音的基本知識",
					"pdf": "2_聲音的基本知識.pdf",
					"youtube": "tcqXp6v44fU"
				},
				{
					"title": "三、音響接線、接頭及配件",
					"pdf": "3_接線、接頭及配件.pdf",
					"youtube": "9gBHgw3bcXA"
				}
			]
		},
		{
			"id": "oct30",
			"date": "10 月 30 日",
			"image": "mic.jpg",
			"even": true,
			"active": true,
			"chapters": [
				{
					"title": "四、咪高峰",
					"pdf": "4_咪高峰.pdf",
					"youtube": "u1NCpQ85a8o"
				},
				{
					"title": "五、效果器",
					"pdf": "5_效果器.pdf",
					"youtube": "f_X_ZrLYht8"
				},
				{
					"title": "六、喇叭",
					"pdf": "6_喇叭.pdf",
					"youtube": "rqbWSOhGnOw"
				}
			]
		},
		{
			"id": "nov13",
			"date": "11 月 13 日",
			"image": "worship.jpg",
			"active": true,
			"chapters": [
				{
					"title": "八、敬拜隊與音響員的團隊合作",
					"pdf": "8_敬拜隊與音響員的團隊合作.pdf",
					"youtube": "nMIQmqBuxLM"
				},
				{
					"title": "九、音響設置流程",
					"pdf": "9_音響設置流程.pdf",
					"youtube": "ht5CvUPqmZo"
				}
			]
		},
		{
			"id": "nov19",
			"date": "11 月 19 日",
			"image": "mixer.jpg",
			"even": true,
			"active": true,
			"chapters": [
				{
					"title": "七、混音器（上）",
					"pdf": "7_混音器（上）.pdf",
					"youtube": "GemGQfJilXw"
				}
			]
		},
		{
			"id": "nov27",
			"date": "11 月 27 日",
			"image": "mixing-desk.jpg",
			"active": true,
			"chapters": [
				{
					"title": "七、混音器（上）",
					"pdf": "7_混音器（上）.pdf",
					"youtube": "gOJKFxlJods"
				},
				{
					"title": "十、混音器（下）：Soundcraft GB2",
					"pdf": "10_混音器（下）- Soundcraft GB2.pdf",
					"youtube": "zFOT1JJ0iDg"
				},
				{
					"title": "十、混音器（下）：JamHub Bedroom",
					"pdf": "10_混音器（下）- JamHub Bedroom.pdf"
				},
				{
					"title": "九、音響設置流程",
					"pdf": "9_音響設置流程.pdf",
					"youtube": "TTq3DOPSgOo"
				}
			]
		}
	];

	var menuTmpl = Handlebars.compile($('#menu-tmpl').html());
	var lessonTmpl = Handlebars.compile($('#lesson-tmpl').html());
	var $body = $('body');
	var $top = $('#top');
	var $nav = $('nav');
	var $menu = $('#menu > ul');
	var $lessons = $('#lessons');

	for (var i = 0, l = lessons.length; i < l; i++) {
		$menu.append(menuTmpl(lessons[i]));
		$lessons.append(lessonTmpl(lessons[i]));
	}

	$(window).scroll(function() {
		if ($(this).scrollTop() > $top.height()) {
			$nav.addClass('navbar-fixed-top');
			$nav.removeClass('navbar-static-top');
		} else {
			$nav.removeClass('navbar-fixed-top');
			$nav.addClass('navbar-static-top');
		}
	}).scroll();

	$('#top').click(function() {
		$('#modal-url').modal();
	});

	$('#menu > ul > li > a.scrollTo').click(function(e) {
		var target = $(this).attr('href');
		e.preventDefault();
		$body.animate({
			scrollTop: $(target).offset().top - 50
		});
	});

	$('.download').click(function(e) {
		var $this = $(this);
		ga('send', 'event', 'Download', $this.data('date'), $this.data('title'));
	});

	$('.video').click(function(e) {
		var $this = $(this);
		ga('send', 'event', 'Video', $this.data('date'), $this.data('title'));
	});

	$('body').scrollspy({ target: '#menu' });
});
