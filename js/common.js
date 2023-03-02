$(document).ready(function(){
	//상단팝업
	var banner_list = $('.toppopup');
	      banner_list.owlCarousel({	
		items: 2,
		loop: true,
		nav:true,
		smartSpeed:700,
		autoplay: true,
		autoplayTimeout: 8000,
		autoplayHoverPause: false,
		responsive:{
	        0:{
	            items:1
	        },
	        768:{
	            items:2
	        },
	        1000:{
	            items:2
	        },
	        1200:{
	            items:2
	        }
	    }
		
	});
	//메인비주얼
	var mainvisual = $('.main_visual');
	    mainvisual.owlCarousel({
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
		items: 1,
		loop: true,
		nav:true,
		dots: false,
		smartSpeed:500,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplayHoverPause: false


	});
	//투어코스
	var banner_list = $('.tour_course_slide');
	      banner_list.owlCarousel({	
		items: 5,
		loop: false,
		nav:true,
		smartSpeed:500,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: false,
		margin: 13,
		responsive:{
	        0:{
	            items:3
	        },
	        480:{
	            items:4
	        },
	        768:{
	            items:5
	        },
	        1000:{
	            items:5
	        },
	        1200:{
	            items:5
	        }
	    }
		
	});
	//셔틀버스존 슬라이드
	var mainvisual = $('.shuttle_slide');
	    mainvisual.owlCarousel({
		items: 1,
		loop: true,
		nav:true,
		smartSpeed:500,
		autoplay: true,
		autoplayTimeout: 6000,
		autoplayHoverPause: false,
		animateOut: 'fadeOut'

	});
	//공지사항
	var banner_list = $('.notice_slide');
	      banner_list.owlCarousel({	
		items: 1,
		loop: true,
		nav:true,
		smartSpeed:500,
		autoplay: true,
		autoplayTimeout: 3000,
		autoplayHoverPause: false,
		margin: 13,
		responsive:{
	        0:{
	            items:1
	        },

	        1000:{
	            items:2
	        },
	        1200:{
	            items:2
	        }
	    }
		
	});
	$('.notice_slide .owl-next').after("<a href='/cmd.do?opencode=pg_4101' class='owl-more' title='공지사항더보기'>더보기</a>");

	//포커스시 맨첫번째로 - 메인비주얼
	 $('.owl-carousel .owl-item a').on('focus', function() {		   
		   $('.owl-carousel .owl-play').css('display','inline-block');
		   $('.owl-carousel .owl-stop').css('display','none');
		   $(".owl-carousel .owl-controls .owl-dots div:first-child a").trigger('click');
		   $(".owl-carousel").trigger('stop.owl.autoplay');
	 });
	// cloned a태그 제거
	$('.cloned a').removeAttr('href');//탭이동시 링크잡히지 않게
	$('.cloned div a').attr('title','cloned');//타이틀등록

	// 공통 재생 멈춤 
	$('.owl-play').on('click', function() {
		$(this).parent().parent().parent().trigger('play.owl.autoplay', [3000])
		$(this).siblings('a').css('display','inline-block');
		$(this).css('display','none');		
	      });
	$('.owl-stop').on('click', function() {
		$(this).parent().parent().parent().trigger('stop.owl.autoplay');
		$(this).siblings('a').css('display','inline-block');
		$(this).css('display','none');
	});

// -------------------------- Gnb 열기/덛가 --------------------------
    $(".gnb_dep1").mouseenter(function(){
		$("#dimed").fadeIn(300);
		$(".gnb_dep2").stop().animate({height: 340}, 300);
		$(".tmnBg").stop().animate({height: 340}, 300);
		
	}).mouseleave(function(){
		$("#dimed").fadeOut(300);
		$(".gnb_dep2").stop().animate({height: 0}, 300);
		$(".tmnBg").stop().animate({height: 0}, 300);
	});
	
	/*gnb tabkey focusin/focusout*/
	$(".gnb_dep1 > li").focusin(function(){
		$("#dimed").css("display","block");
		$(".gnb_dep2").stop().animate({height: 340}, 300);
		$(".tmnBg").stop().animate({height: 340}, 300);
	}).focusout(function(){
		$("#dimed").css("display","none");
		$(".gnb_dep2").stop().animate({height: 0}, 300);
		$(".tmnBg").stop().animate({height: 0}, 300);
	});
// -------------------------- mGnb 열기 --------------------------
	$("#mMenu").click(function(){
		$("#mGnb").css("display","block");
		$("#mGnb").animate({right: 0}, 300);
		$("#dimed").fadeIn(300);
	});

// -------------------------- mGnb 메뉴 열기닫기  --------------------------
	$(".mDepth1 > li > a").click(function(){
		$(".mDepth1 > li > a").removeClass("active");
		$(".mDepth2 li").removeClass("active");
		var mDepth2 = $(this).siblings("ul").css("display");
		if( mDepth2 == "block" ) {
			$(this).siblings("ul").slideUp(300);
		} else {
			$(this).addClass("active");
			$(".mDepth2").slideUp(300);
			$(this).siblings("ul").slideDown(300);
		}
	});
	/*mGnb menu*/
	$(".mDepth2 > li > a").click(function(){
		$(".mDepth2 > li > a").removeClass("active");
		$(".mDepth3 li").removeClass("active");
		var mDepth3 = $(this).siblings("ul").css("display");
		if( mDepth3 == "block" ) {
			$(this).siblings("ul").slideUp(300);
		} else {
			$(this).addClass("active");
			$(".mDepth3").slideUp(300);
			$(this).siblings("ul").slideDown(300);
			$(this).siblings("ul").find("li").addClass("active");
		}
	});
//  -------------------------- 모바일 메뉴 토글 --------------------------
	$('html').click(function(e) {
        if($(e.target).hasClass("navAcrtive")) {
        }else{
			$("#nav .depth1 > li:last-child > a").removeClass("navActive");
			$("#nav .depth2").slideUp(300);
        }
    });

// -------------------------- gotop top --------------------------
	$(".top").click(function(){
		$("html, body").animate({scrollTop:0}, 500);
	});

// -------------------------- sub sns --------------------------

	$("#snsOpen").on("focusin click",function(){
		$(this).siblings('div').slideDown(500);
	});
	$("#snsClose").on("focusout click",function(){
		$("#snsOpen").siblings('div').slideUp(500);
	});

// -------------------------- 스킵네비 포커스잡아주기--------------------------
    $("#skipNavi > a").click(function(){
    $($(this).attr("href"))
      .attr("tabindex","0")
      .css("outline","0")
      .focus();
    });

// -------------------------- 관련사이트 --------------------------
		$(".footlink").click(function(){
		$(this).parent().toggleClass("cur");
		$(this).parent().children("ul").stop().slideToggle();
		$(this).parent().siblings().children("ul").stop().slideUp();
	});
// -------------------------- 예약하기 퀵 --------------------------
		$(".quick_link").click(function(){
		$(this).toggleClass("on");
		$(this).parent().children("ul").stop().slideToggle();
		$(this).parent().siblings().children("ul").stop().slideUp();
	});
// -------------------------- snb --------------------------
		$(".select_menu").click(function(){
		$(this).toggleClass("on");
		$(this).parent().children("ul").stop().slideToggle();
		$(this).parent().siblings().children("ul").stop().slideUp();
	});
// -------------------------- faq --------------------------
		$(".panel-heading-link").click(function(){
		$(this).toggleClass("on");
		$(this).siblings(".panel-collapse").stop().slideToggle();
		$(this).parent().siblings().children(".panel-collapse").stop().slideUp();
	});
// -------------------------- 예약좌석선택 --------------------------
	$("#seat_select").click("focusin click",function(){
		var selectCnt = $("#M_INWON1 option:selected").val();
		// alert(selectCnt);
		if(selectCnt == "" || selectCnt == 0){
			alert("탑승인원을 선택해주세요");
			return false;			
		}else{
			$(this).siblings('div').slideDown(500);
			$("#totalCnt").text(selectCnt);
		}
	});
	$("#seat_select_close").on("click",function(){
		$("#seat_select").siblings('div').stop().slideUp(500);

	});


	/* 팝업열기,닫기 */
	$('.t_pop_control .popup_close').click(function() {

	   if($('.toppopup_wrap').css('display')=='none') {
			$('.toppopup_wrap').stop().show().animate({marginTop:'0px', opacity:1},500); 
			$(this).removeClass('popup_open').addClass('popup_close').html('팝업닫기 <span class="arrow arrow01"></span>');
	   } else {
		   $('.toppopup_wrap').stop().animate({marginTop:'-150px', opacity:0},500,function() {
			  $(this).hide(); 
		   });
		   $(this).removeClass('popup_close').addClass('popup_open').html('팝업열기 <span class="arrow arrow01"></span>');
	   }
	});
	/* 쿠키 */

	if($.cookie('topLayer') == 'done') {
		var btn = $(".t_pop_control a");							
		   $('div#topLayer').hide(); 
		   btn.removeClass('popup_open').addClass('popup_close').html('팝업열기  <span class="arrow arrow01"></span>');
		   $('#onedayClose_chk').attr("checked","checked");
	}	

	if($.cookie('topLayer') != 'done') {
		$("#topLayer").show();
	}

	/* label */
	$('#onedayClose_chk').click(function() {					   
		if( $(this).is(':checked') ){
		   $('#topLayer').animate({marginTop:'-150px', opacity:0},500,function() {
			  $(this).hide(); 
			   if($(this).hide()){
				   $('.t_pop_control a').removeClass('popup_close').addClass('popup_open').html('팝업열기 <span class="arrow arrow01"></span>');
			   }
			   else{
				   $('.t_pop_control a').removeClass('popup_open').addClass('popup_close').html('팝업닫기 <span class="arrow arrow01"></span>');
			   }
		   });

			$.cookie('topLayer', 'done', {expires:1});	
		}else{
			$('#topLayer').stop().show().animate({marginTop:'0px', opacity:1},1000); 
			$('.t_pop_control a').removeClass('popup_open').addClass('popup_close').html('팝업닫기 <span class="arrow arrow01"></span>');
			$.cookie('topLayer', '', {expires:1});	

		}
	});


	
});
// -------------------------- mGnb close --------------------------
function mGnbClose() {
	$("#mGnb").animate({right: "-80%"}, 300);
	$("#mGnb").fadeOut(300);
	$("#dimed").fadeOut(300);
	$(".mDepth2 > li > a").removeClass("active");
	$(".mDepth3").slideUp(300);
}

//  -------------------------- mGnb display --------------------------
$( window ).resize(function() {
	var winWidth = $( window ).width();
	if(winWidth >= 1024) {
		mGnbClose();
		} else {
		mGnbClose();
		}
});


// -------------------------- 상단으로 나타나기 --------------------------
$( window ).scroll( function() {
	if ( $( this ).scrollTop() > 350 ) {
		$( '.top' ).fadeIn(500);
	} else {
		$( '.top' ).fadeOut(500);
	}
} );
// -------------------------- 스무스하게 이동 --------------------------
jQuery(document).ready(function($) { 
	$(".main_nav ul li a,.visual_link_box li a").click(function(event){ event.preventDefault(); 
	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 
		500); }); 
}); 



// -------------------------- 셔틀버스 시간표 --------------------------

$(function(){
	$('.tab_con_wrap > div').hide();
	$('.shuttle_tap_nav a').click(function () {
	  $('.tab_con_wrap > div').hide().filter(this.hash).fadeIn();
	  $('.shuttle_tap_nav a').removeClass('focusOn');
	  $(this).addClass('focusOn');
	  return false;
	}).filter(':eq(0)').click();
	});

