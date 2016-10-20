// 'use strict';

var lessons = [
	{
		"id": "oct23",
		"date": "10 月 23 日",
		"active": true,
		"chapters": [
			{
				"title": "一、甚麼是音響事奉？"
			},
			{
				"title": "二、聲音的基本知識"
			},
			{
				"title": "三、音響接線、接頭及配件"
			}
		]
	},
	{
		"id": "oct30",
		"date": "10 月 30 日",
		"even": true,
		"chapters": [
			{
				"title": "四、咪高峰"
			},
			{
				"title": "五、效果器"
			},
			{
				"title": "六、喇叭"
			}
		]
	},
	{
		"id": "nov6",
		"date": "11 月 6 日",
		"chapters": [
			{
				"title": "七、敬拜隊與音響員的團隊合作"
			},
			{
				"title": "八、音響設置流程"
			}
		]
	},
	{
		"id": "nov13",
		"date": "11 月 13 日",
		"even": true,
		"chapters": [
			{
				"title": "九、混音器"
			}
		]
	},
	{
		"id": "nov27",
		"date": "11 月 27 日",
		"chapters": [
			{
				"title": "九、混音器"
			},
			{
				"title": "實習"
			}
		]
	}
];

var source = $('#lesson-tmpl').html();
var template = Handlebars.compile(source);

for (var i = 0, l = lessons.length; i < l; i++) {
	$('#lessons').append(template(lessons[i]));
}
