$(document).ready(function(){
      // js에 들어갈 효과
      //1. nav (top값으로 배경 하얗게/ 보더 바텀 1px #222 / 글씨 #222) 완
      //2. new(red rice) 메인 사진 스크롤에 따라 확대되는 효과
      //3. 이벤트 스와이퍼 -> 호버시 페이드인 완
      //4. serch 버튼 누르면 검색화면 뜨게
      //5. 스크롤 다운 누르면 밑 화면으로 이동 ( 스크롤탑값 ) 완
      //6. 푸터 플로터 버튼클릭시 -> 디테일 플로터 떠오르게 완

      // 스와이퍼
      var swiper = new Swiper(".mySwiper", {
            spaceBetween: 30,
            loop:true,
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },

            breakpoints: {
                  1600: { //브라우저가 1200보다 클 때
                        spaceBetween: 30,
                        slidesPerView: 3,
                  },
                  1450: {
                        spaceBetween: 16,
                        slidesPerView: 3,
                  },
                  1000:{
                        spaceBetween: 12,
                        slidesPerView: 3,
                  },
                  768:{
                        slidesPerView:2,
                        spaceBetween:8,
                  },
                  300:{
                        slidesPerView:1,
                        spaceBetween:4,
                  }

            }
      });

      // aos
      AOS.init({
            disable: function () {
                  var mobileSize = 769;
                  return window.innerWidth < mobileSize;
            }
      });
      

      // 스크롤 이벤트
      $(window).scroll(function(){
            const sct = $(window).scrollTop();
            // var scrollBottom = $('body').height() - $(window).height() - $(window).scrollTop();
            // console.log(sct);
            // console.log(scrollBottom);
            // var offsetTop = $('.footer-floater-wrap').offset().top;

            // nav
            if(sct >= 900){
                  $('.nav-wrap').addClass('on');
                  $('.logo').addClass('on');
                  $('.menu-wrap').addClass('on');
            }else{
                  $('.nav-wrap').removeClass('on');
                  $('.logo').removeClass('on');
                  $('.menu-wrap').removeClass('on');
            }

            // 푸터플로터
            if(sct >= 200 ){
                  $('.footer-floater-wrap').addClass('on');
            }else{
                  $('.footer-floater-wrap').removeClass('on');
            }

            // if(offsetTop ){
            //       $('.footer-floater-wrap').css({
            //             position: 'fixed',
            //       });
            // }


            // if(scrollBottom > 230 ){
            //       $('.footer-floater-wrap').css({
            //             position: 'fixed',
            //       });

            // }else{
            //       $('.footer-floater-wrap').css({
            //             position: 'static',
            //       });

            // }
            
            function sticky() {
                  var scrollTop = $(window).scrollTop();7
                  var windowHeight = $(window).height();
                  var containerHeight = $(".container").height() + $(".nav-wrap").height();
                  if (scrollTop >= parseInt(containerHeight - windowHeight + 70)) {
                  $(".footer-floater-wrap").addClass("sticky")
                  } else {
                  $(".footer-floater-wrap").removeClass("sticky")
                  }
            }
            $(window).on("scroll resize", function () {
                  sticky()
            })


            // let bgSize = 110 + (sct/80); 

            // $('.wide-banner-img').css({
            //       backgroundSize : `${bgSize}%`
            // })    

      });

      // function a() {
      //       var n = $(window).scrollTop();
      //       var p = $(window).height();
      //       var o = $(".container").height() + $("header").height();
      //       if (n >= parseInt(o - p + 60)) {
      //           $(".footer-floater-wrap").addClass("sticky")
      //       } else {
      //           $(".footer-floater-wrap").removeClass("sticky")
      //       }
      //   }

      //스크롤 스코프 안에 있으면 안먹힘. 뺴줘야 함 ( 클릭이니까 )

      //scroll down                                                                   
      const scd = $('.scroll-txt');
      scd.click(function(e){
            console.log(e.target);

            window.scrollTo({
                  top:1000,
                  behavior:"smooth"
            });
      });
      
      $('.floater-btn').click(function(){
            $(this).css({
                  opacity:0,
            })
            $('.float-detail-wrap').css({
                  opacity: 1,
            });
      });
      $('.arrow').click(function(){
            $('.floater-btn').css({
                  opacity:1,
            });
            $('.float-detail-wrap').css({
                  opacity: 0,
            });
      });


      $('.event-hover-txt').mouseenter(function(){
            $(this).css({
                  opacity: 1,
            });
      });
      $('.event-hover-txt').mouseleave(function(){
            $(this).css({
                  opacity: 0,
            });
      });

      // if(matchMedia("screen and (max-width: 768px)").matches){
            
      //     }else if(matchMedia("screen and (max-width: 1023px)").matches){;
      //     }
          
      //     window.onresize = function(){
      //       document.location.reload();
      //     };
      // });
      // $('.official-box').mouseenter(function(){
      //       $('.official-hover-txt').addClass('on'); 
      // });
      // $('.official-box').mouseleave(function(){
      //       $('.official-hover-txt').removeClass('on'); 
      // });

      // search박스
      $('.menu-search').click(function(){
            $('.search-background').fadeIn();
      });
      $('.search-mo').click(function(){
            $('.search-background').fadeIn();
      });

      $('.close-btn').click(function(){
            $('.search-background').fadeOut();
      });


      $('.menu-title').click(function(){
            $('.menu-wrap-mo').toggleClass('on');
      });

});