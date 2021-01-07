$.get('../json/navi.json', naviText);



function naviText(r) {
	for (var i = 0, html = ""; i < r.length; i++) {
		html += '<li>';
		html += '<a href="' + r[i].link + '">' + r[i].title + '<i class="' + r[i].icon + '"></i></a>';
		html += '<ul class="sub">';
		for (var j = 0; j < r[i].depth.length; j++) {
			html += '<li>';
			html += '<a href="' + r[i].depth[j].link + '">' + r[i].depth[j].title + ' ';
			if (r[i].depth[j].icon && r[i].depth[j].icon.length > 0) {
				html += '<i class="' + r[i].depth[j].icon + '"></i></a>';
				html += '<ul class="sub2">';
				for (var e = 0; e < r[i].depth[j].depth2.length; e++) {
					html += '<li><a href="' + r[i].depth[j].depth2[e].link + '">' + r[i].depth[j].depth2[e].title + '</a></li>';
				};
				html += '</ul>';
			} else {
				html += '</a>';
			}
			html += '</li>';
		};
		html += '</ul>';
		html += '</li>';
	};
	$(".navi-wrapper").find("ul.navi").append(html);
	naviOn();
}

function naviOn() {
	$('ul.navi >li>ul.sub>li').mouseenter(function () {
		$(this).find('ul.sub2').fadeIn();
	});
	$('ul.navi >li>ul.sub>li').mouseleave(function () {
		$(this).find('ul.sub2').fadeOut();
	});
	$('header nav ul.navi >li').mouseenter(function () {
		$(this).find('ul.sub').stop().fadeIn();
	});
	$('header nav ul.navi >li').mouseleave(function () {
		$(this).find('ul.sub').stop().fadeOut();
	});
};

function gallOn() {
	$('ul.prd> li >ul>li').mouseenter(function () {
		$(this).find(".img-bg").animate({
			"top": "100%"
		}, 400);
	})
	$('ul.prd> li >ul>li').mouseleave(function () {
		$(this).find(".img-bg").animate({
			"top": "0"
		}, 400);
	})
}
gallOn();

var mySwiper2 = new Swiper('.team-wrapper.swiper-container', {
	slidesPerView: 3,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
});


var nowIdx = 0;
var nextIdx = 0;
var menu = [];
var menuHeight = [];
var $prd = $('.prd-wrapper > .prd');
$(".menu > li").click(onMenuClick);

$('.prd-wrapper').imagesLoaded( function() {
	$('.prd-wrapper > .prd > li').each(function() {
		menu.push($(this).clone());
		menuHeight.push($(this).innerHeight());
	});
	$('.prd-wrapper > .prd > li').remove();
	$(".menu > li").eq(0).trigger('click');
});


function onMenuClick() {
	nowIdx = nextIdx;
	nextIdx = $(this).index();
	aniMenu();
}

function aniMenu() {
	console.log(nextIdx);
	// 사라지는 애니메이션
	$prd.children('li').removeClass('active');
	setTimeout(function(){
		// 나타나는 애니메이션
		$prd.empty();
		$prd.css('height', menuHeight[nextIdx]);
		var $mn = $(menu[nextIdx]).clone().appendTo($prd);
		setTimeout(function(){
			$mn.addClass('active');
		}, 50);
	}, 800);
}