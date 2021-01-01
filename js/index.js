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