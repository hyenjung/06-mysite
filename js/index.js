$.get('../json/navi.json', naviText);
new WOW().init();

var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.bg-wrap').outerHeight();
var winHeight = $(window).height();

/******************** 스크롤 *******************************/
$(window).scroll(function(event){
    didScroll = true;
});

setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var scTop = $(this).scrollTop();
    
    // Make sure they scroll more than delta
    if(Math.abs(lastScrollTop - scTop) <= delta)
        return;
    
    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (scTop > lastScrollTop && scTop > navbarHeight){
        // Scroll Down
		$('.header-wrapper').addClass('active');
		$(".scroll-top").css("display","block");
		$('.logo-wrap').addClass('active').show();
    } else {
        // Scroll Up
        if(scTop < lastScrollTop && scTop < navbarHeight) {
			$('.header-wrapper').removeClass('active');
			$('.logo-wrap.active').hide();
			$('.logo-wrap.white').show();
			$(".scroll-top").css("display","none");
        }
    }
    
    lastScrollTop = scTop;
}

function scDown() {
	$(".scroll-top").click(function () {
		$("html,body").stop().animate({
            "scrollTop": 0
        }, 1400);
	});
}
scDown();

/******************** 네비 *******************************/

function naviText(r) {
	for (var i = 0, html = ""; i < r.length; i++) {
		html += '<li>';
		html += r[i].title + '<i class="' + r[i].icon + '"></i>';
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
	naviOut();
}

function naviOn() {
	$('.header-wrapper-mob ul.navi >li').click(function () {
	$(this).find('ul.sub').toggleClass('active');
	})
}

function naviOut() {
	$('.header-wrapper-mob ul.sub >li').click(function () {
		$(this).find('ul.sub2').toggleClass('active');
	})
}


function naviMob() {
	$("ul.bars").click(function() {
		$("ul.bars").toggleClass('active');
        $(".header-wrapper-mob nav").slideToggle(100);
	});
}
naviMob();


/******************** 슬라이드 *******************************/

var mySwiper2 = new Swiper('.team-wrapper.swiper-container', {
	slidesPerView: 1,
	spaceBetween: 10,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
	},
	breakpoints: {
		578: {
			slidesPerView: 2,
		},
		1199: {
			slidesPerView: 3,
		},
	},
});

var mySwiper3 = new Swiper('.review.swiper-container', {
	slidesPerView: 1,
	pagination: {
		el: '.review .swiper-pagination',
		type: 'bullets',
	},
	autoplay: true,
	loop: true,
});

var mySwiper4 = new Swiper('.link-wrapper.swiper-container', {
	slidesPerView: 1,
	autoplay: true,
	loop: true,
	breakpoints: {
		578: {
			slidesPerView: 3,
		},
		1199: {
			slidesPerView: 5,
		},
	},
});

/******************** 갤러리 *******************************/
/* var nowIdx = 0;
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
*/

/******************** 숫자카운트 *******************************/
function addCountPro() {
	var $output = $(".cnt h1.pro");
	var count = 500;
	setInterval(function(){
		if(count<696){
		count++;
		$output.text(count);
		}
	},30)
}


function addCountSat() {
	var $output = $(".cnt h1.sat");
	var count = 100;
	setInterval(function(){
		if(count<280){
		count++;
		$output.text(count);
		}
	},30)
}
function addCountAwards() {
	var $output = $(".cnt h1.awards");
	var count = 0;
	setInterval(function(){
		if(count<14){
		count++;
		$output.text(count);
		}
	},200)
}
function addCountEmp() {
	var $output = $(".cnt h1.emp");
	var count = 0;
	setInterval(function(){
		if(count<77){
		count++;
		$output.text(count);
		}
	},80)
}
addCountPro();
addCountSat();
addCountAwards();
addCountEmp();
 

/******************** 카카오지도 *******************************/
var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
	mapOption = { 
			center: new kakao.maps.LatLng(33.30592375107191, 126.28953679887339), // 지도의 중심좌표
			level: 3 // 지도의 확대 레벨
	};

var map = new kakao.maps.Map(mapContainer, mapOption); // 지도를 생성합니다

// 마커가 표시될 위치입니다 
var markerPosition  = new kakao.maps.LatLng(33.30592375107191, 126.28953679887339); 

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
		position: markerPosition
});

function setCenter() {            
	// 이동할 위도 경도 위치를 생성합니다 
	var moveLatLon = new kakao.maps.LatLng(33.30592375107191, 126.28953679887339);
	
	// 지도 중심을 이동 시킵니다
	map.setCenter(moveLatLon);
}

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
map.setZoomable(false);