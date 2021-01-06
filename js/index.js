$.get('../json/navi.json',naviText);



function naviText(r) {
	for(var i=0,html="";i<r.length;i++) {
		html += '<li>';
		html += '<a href="'+r[i].link+'">'+r[i].title+'<i class="'+r[i].icon+'"></i></a>';
		html += '<ul class="sub">';
		for(var j=0;j<r[i].depth.length;j++) {
			html += '<li>';
			html += '<a href="'+r[i].depth[j].link+'">'+r[i].depth[j].title+' ';
			if(r[i].depth[j].icon && r[i].depth[j].icon.length > 0){
				html += '<i class="'+r[i].depth[j].icon+'"></i></a>';
				html += '<ul class="sub2">';
				for(var e=0;e<r[i].depth[j].depth2.length;e++){
					html += '<li><a href="'+r[i].depth[j].depth2[e].link+'">'+r[i].depth[j].depth2[e].title+'</a></li>';
				};
				html += '</ul>';
			}else{
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
	$('ul.navi >li>ul.sub>li').mouseenter(function(){
		$(this).find('ul.sub2').fadeIn();
	});
	$('ul.navi >li>ul.sub>li').mouseleave(function(){
		$(this).find('ul.sub2').fadeOut();
	});
	$('header nav ul.navi >li').mouseenter(function(){
		$(this).find('ul.sub').stop().fadeIn();
	});
	$('header nav ul.navi >li').mouseleave(function(){
		$(this).find('ul.sub').stop().fadeOut();
	});
};

function gallOn() {
	$('ul.prd> li >ul>li').mouseenter(function(){
		$(this).find(".img-bg").animate({"top":"100%"},400);	
	})
	$('ul.prd> li >ul>li').mouseleave(function(){
		$(this).find(".img-bg").animate({"top":"0"},400);	
	})
}
gallOn();



var mySwiper = new Swiper('.gallery .swiper-container', {
	effect : 'coverflow', // 커버플로우 효과 사용

	// 커버플로우 설정
	coverflowEffect : {
		slideShadows : true, // 슬라이더 그림자 : 3D 효과를 강조하기 위한 회전시 흐릿한 효과
		rotate : 50, // 슬라이더 회전 각 : 클수록 슬라이딩시 회전이 커짐
		stretch : 0, // 슬라이더간 거리(픽셀) : 클수록 슬라이더가 서로 많이 겹침
		depth : 100, // 깊이 효과값 : 클수록 멀리있는 느낌이 강해짐
		modifier : 1, // 효과 배수 : 위 숫자값들에 이 값을 곱하기 처리하여 효과를 강하게 처리함
	},
	pagination : { // 페이징 설정
		el : '.pager-wrap',
		clickable : true, // 페이징을 클릭하면 해당 영역으로 이동, 필요시 지정해 줘야 기능 작동
	},
  });

  var mySwiper2 = new Swiper('.team-wrapper.swiper-container', {
	slidesPerView: 3,
	pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
  },
  });