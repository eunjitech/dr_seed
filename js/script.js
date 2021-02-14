$(function(){
	// 모바일박스
	$('.top_inner_box .menu_bar a').click(function(){
		$('.mobile_bg').css("display","block");
		$('.mobile_list').css("right","0");
		return false;
	});
	$('.mobile_list .close_bar').click(function(){
		$('.mobile_bg').css("display","none");
		$('.mobile_list').css("right","-100%");
		return false;
	});
	//배너슬라이드
	var swiper = new Swiper('.banner_visual .swiper-container', {
		
		  effect: 'fade',
		  pagination: {
			el: '.banner_visual .swiper-pagination',
			clickable: true,
		  },
		   autoplay: {
			delay: 5000,
		  },
		  navigation: {
			nextEl: '.banner_visual .swiper-button-next',
			prevEl: '.banner_visual .swiper-button-prev',
		  },
		  
	});
	
	$('.gnb>li.dep1').hover(function(){  
       $('.top_inner_box').stop().toggleClass('on');  
       $(this).children(".box_open").stop().slideDown(200);  
	   $('.cate_wrap').toggleClass('on');
	}, function(){
		$(this).children(".box_open").stop().slideUp(200);
		$('.cate_wrap').toggleClass('on');
		$('.top_inner_box').stop().toggleClass('on'); 
	}); 

	 var swiper = new Swiper('.main_list_box .swiper-container2', {
      slidesPerView: 3,
      spaceBetween: 0,
      slidesPerGroup: 3,
      loop: true,
      loopFillGroupWithBlank: true,
		
		breakpoints: {
      
       // when window width is <= 834px
       834: {
			slidesPerView: 1,
			slidesPerGroup: 1,
       },
       // when window width is <= 1214px
       1214: {
			slidesPerView: 2,
			slidesPerGroup: 2,	
       }
     },
	
      navigation: {
        nextEl: '.best_seller_wrap .swiper-button-next',
        prevEl: '.best_seller_wrap .swiper-button-prev',
      },
    });
	
	//해더 고정
	$(window).on("scroll",function(){
		var scrollTop = $(this).scrollTop();
		var wwidth = $(window).width();
		if(scrollTop > 130){
			if (wwidth > 834){
				$('#header').css({"position":"fixed","background":"#fff","top":"-68px","border-bottom":"1px solid #ddd","margin-top":"-50px"});
			}else{
				$('#header').css({"position":"relative","background":"none","top":"0","border-bottom":"0","margin-top":"0"});
			}
		}else{
			$('#header').css({"position":"relative","background":"none","top":"0","border-bottom":"none","margin-top":"0px"});
		}
		
	});
	
	$('.review_box .viewmore').hover(function(){
		$(this).css({"color":"#fff"});
		$('.review_box a .viewmore').css({"backgroundColor":"#121212"});
	}, function(){
		$(this).css({"color":"#121212"});
		$('.review_box a .viewmore').css({"backgroundColor":"#fff"});
	});
	
	
	var swiper = new Swiper('.main_list_box .swiper-container3', {
      slidesPerView: 3,
      spaceBetween: 20,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
		
		breakpoints: {
      
       // when window width is <= 834px
       834: {
			slidesPerView: 1,
			slidesPerGroup: 1,
       },
       // when window width is <= 1214px
       1214: {
			slidesPerView: 2,
			slidesPerGroup: 1,	
       }
     },
	
      navigation: {
        nextEl: '.dr_seed_wrap .swiper-button-next',
        prevEl: '.dr_seed_wrap .swiper-button-prev',
      },
    });
});

