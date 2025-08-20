


$(window).scroll(function() {    
  var scroll = $(window).scrollTop();
  if (scroll >= 1) {
      $(".c-sticky-header").addClass("headerBg");
  } else {
      $(".c-sticky-header").removeClass("headerBg");
  }



  var scrollhero = $(window).scrollTop();
  if (scrollhero >= 1) {
      $(".hero-header").addClass("hero-header-scroll");
  } else {
      $(".hero-header").removeClass("hero-header-scroll");
  }

});



$(document).ready(function(){

  var homePage = "Home";
  $('nav[aria-label="Breadcrumb"] ol.breadcrumb li:first-child .breadcrumb-text-truncate').text(homePage);


  // $(".countAnimate").each(function(){
  //   var t=$(this),n=t.attr("data-count");$({countNum:t.text()}).animate({countNum:n},{duration:1e3,easing:"swing",step:function(){t.text(Math.floor(this.countNum))},complete:function(){t.text(this.countNum)}})
  // });

    // $('.countAnimate').each(function () {
    //     $(this).prop('Counter',0).animate({
    //         Counter: $(this).text()
    //     }, {
    //         duration: 2000,
    //         easing: 'swing',
    //         step: function (now) {
    //             $(this).text(Math.ceil(now));
    //         }
    //     });
    // });
    
    
});




var heroslider = new Swiper(".heroBannerSlider .swiper", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 0,
  mousewheel: false,
  speed: 1000,
  lazy: true,
  pagination: {
    el: ".swiper-pagination-hero",
    clickable: true, 
  },
  autoplay: {
    delay: 4000,
    disableOnInteraction: false
  },
});



var ourventureSection = new Swiper(".ourventureSection .swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: true,
  navigation: {
    nextEl: ".ourventureSection .swiper-button-next",
    prevEl: ".ourventureSection .swiper-button-prev",
    clickable: true,
  },

  // Use slide or fade transition effect
  speed: 2000,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  }
});




var recentnewsslider = new Swiper(".recent-news-slider .swiper", {
  // centeredSlides: false,
  // slidesPerGroupSkip: 1,
  // slidesPerView: 1.5,
 // grabCursor: true,
  // keyboard: {
  //   enabled: true,
  // },
  spaceBetween: 220,
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true,
  // },
  navigation: true,
  navigation: {
    nextEl: ".recent-news-slider .swiper-button-next",
    prevEl: ".recent-news-slider .swiper-button-prev",
    clickable: true,
  },       
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  // breakpoints: {
  //   769: {
  //     slidesPerView: 2,
  //     slidesPerGroup: 2,
  //   },
  // },
 
 
});




var swiper1 = new Swiper(".mySwiperFreeZone", {
  loop: false,
  spaceBetween: 10,
  slidesPerView: 3,
  // freeMode: true,
  // watchSlidesProgress: true,
});
var swiper2 = new Swiper(".mySwiper2", {
  loop: false,
  spaceBetween: 0,
  navigation: true,
  navigation: {
    nextEl: ".freeZomeSection .swiper-button-next",
    prevEl: ".freeZomeSection .swiper-button-prev",
  },
  thumbs: {
    swiper: swiper1,
  },
});


$(document).ready(function(){
var profileslider = new Swiper('.profileslider .swiper-container', {
  slidesPerView: 7,
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.profile-slider-section .swiper-button-next',
    prevEl: '.profile-slider-section .swiper-button-prev',
  },
  breakpoints: {
  320: {
    slidesPerView: 3,  
  },
  768: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 5,
  },
  1600: {
    slidesPerView: 7,
  },
},
});
});


var ourJourenySlider = new Swiper(".our-joureny-slider .swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
   
  },
  navigation:true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
 
// Use slide or fade transition effect
speed: 2000,
effect: 'fade',
fadeEffect: {
crossFade: true,
 }
});

var DAFSlider = new Swiper(".dubai-airport-freezone .swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation:true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 2000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
});
var DSOSlider = new Swiper(".dubai-silicon-oasis .swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation:true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 2000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
});
var DCSlider = new Swiper(".dubai-commercity .swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation:true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  speed: 2000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
});

//recent news slider section start
// var rcnslider = new Swiper(".rcnslider .swiper", {
//   slidesPerView: 1,
//   keyboard: {
//     enabled: true,
//   },
//   spaceBetween: 15,
//   navigation: true,
//   navigation: {
//     nextEl: ".rcn-slider-wrap .swiper-button-next",
//     prevEl: ".rcn-slider-wrap .swiper-button-prev",
//     clickable: true,
//   },
//   scrollbar: {
//     el: ".swiper-scrollbar",

//     hide: false,
//   },
//   breakpoints: {
//     768: {
//       slidesPerView: 1.5,
//       spaceBetween: 95,
//     },
//   },
  
// });

// Initialize Swiper for each slider separately
document.querySelectorAll('.rcn-slider-wrap').forEach(function (sliderWrap) {
  var slider = sliderWrap.querySelector('.rcnslider .swiper');
  new Swiper(slider, {
    slidesPerView: 1,
    keyboard: {
      enabled: true,
    },
    spaceBetween: 15,
    navigation: {
      nextEl: sliderWrap.querySelector('.swiper-button-next'),
      prevEl: sliderWrap.querySelector('.swiper-button-prev'),
      clickable: true,
    },
    scrollbar: {
      el: sliderWrap.querySelector('.swiper-scrollbar'),
      hide: false,
    },
      breakpoints: {
    768: {
      slidesPerView: 1.5,
      spaceBetween: 75,
    },
  },
  });
});

//recent news slider section end


var artfacilitiesSection = new Swiper(".artfacilitiesSection .swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: true,
  navigation: {
    nextEl: ".artfacilitiesSection .swiper-button-next",
    prevEl: ".artfacilitiesSection .swiper-button-prev",
    clickable: true,
  },

  // Use slide or fade transition effect
  speed: 2000,
  effect: "fade",
  fadeEffect: {
    crossFade: true,
  },
});

// var zoneinvestmentslider = new Swiper(".zoneinvestmentslider .swiper", {
//   centeredSlides: false,
//   slidesPerGroupSkip: 1,
//   slidesPerView: 1.5,
  
//   keyboard: {
//     enabled: true,
//   },
//   spaceBetween: 140,
//   breakpoints: {
//     769: {
//       slidesPerView: 2,
//       slidesPerGroup: 2,
//     },
//   },
//   navigation: true,
//   navigation: {
//     nextEl: ".zone-investment-slider .swiper-button-next",
//     prevEl: ".zone-investment-slider .swiper-button-prev",
//     clickable: true,
//   },
  
// });

//Zone Investmentguide start
var zoneinvestmentslider = new Swiper(".zoneinvestmentslider .swiper", {
  centeredSlides: false,
  slidesPerGroupSkip: 1,
  slidesPerView: 1.5,
  
  keyboard: {
    enabled: true,
  },
  spaceBetween: 25,
  breakpoints: {
    769: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 140,
    },

  },
  navigation: true,
  navigation: {
    nextEl: ".zone-investment-slider .swiper-button-next",
    prevEl: ".zone-investment-slider .swiper-button-prev",
    clickable: true,
  },
  
});
//Zone Investmentguide end

//LATEST NEWS start
var LTNSection = new Swiper(".LTNSection .swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation:true,
  navigation: {
    nextEl: ".LTNSection .swiper-button-next",
    prevEl: ".LTNSection .swiper-button-prev",
  },
  speed: 2000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
});

var MGSection = new Swiper(".MGSection .swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation:true,
  navigation: {
    nextEl: ".MGSection .swiper-button-next",
    prevEl: ".MGSection .swiper-button-prev",
  },
  speed: 2000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
});

//LATEST NEWS end
// DELEGATIONS js start
var delegationsslider = new Swiper('.delegationsslider .swiper-container', {
  slidesPerView: 4,
  spaceBetween: 0,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  navigation: {
    nextEl: '.delegation-slider-wrap .swiper-button-next',
    prevEl: '.delegation-slider-wrap .swiper-button-prev',
  },
  breakpoints: {
  320: {
    slidesPerView: 1.4,
    centeredSlides: true,        
  },
  768: {
    slidesPerView: 3,
  },
  1024: {
    slidesPerView: 4,
  },
  1600: {
    slidesPerView: 4,
  },
},
});

// DELEGATIONS js end

//Media Gallery start

// $('[data-fancybox]').fancybox({
 
//   buttons : [
//     'close'
//   ],
//   wheel : false,
//   transitionEffect: "slide",
  
//   loop            : true,
//   keyboard        : true,
//   toolbar         : false,
 
//   clickContent    : false
// });




  var MGSection = new Swiper(".MGSection .swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation:true,
  navigation: {
    nextEl: ".MGSection .swiper-button-next",
    prevEl: ".MGSection .swiper-button-prev",
  },
  speed: 2000,
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
});
//Media Gallery end













// Strategic Ventures js start  Font size
$(document).ready(function() {
  autoAdjustFontSize();
});

$(window).resize(function() {
  autoAdjustFontSize();
});

function autoAdjustFontSize() {
  $('.responsivetextbox').each(function() {
    var box = $(this);
    var text = $(this).find('.responsivetext');

    var fontSize = 500;
    var maxWidth = box.width();

    // Adjust font size until both ends touch the edges
    text.css('font-size', fontSize + 'px');
    while (text.outerWidth() > maxWidth) {
      fontSize--;
      text.css('font-size', fontSize + 'px');
    }
  });
}
// Strategic Ventures js end Font size




// EXPLORE GALLEY js start 


$(window).on('load', function() {

  // var headerHeight = $(".c-sticky-header").outerHeight(); 
  // $(".whitespace-c-sticky-header").css("height", headerHeight);

  setTimeout(function(){
    jQuery('div[data-field-reference="MobileNo"] > label + div > input.form-control[placeholder]').attr("placeholder", "Mobile");

    jQuery('div[data-field-reference="MobileNo"] > label + div[title]').attr("title", "Mobile");

}, 2000);


   
  $('[data-fancybox]').fancybox({
    // Options will go here
    buttons : [
      'close'
    ],
    wheel : false,
    transitionEffect: "slide",
    // thumbs          : false,
    // hash            : false,
    loop            : true,
    keyboard        : true,
    toolbar         : false,
    // animationEffect : false,
    // arrows          : true,
    clickContent    : false
  });



  var mySwipersustainabilityGallery = new Swiper(".mySwipersustainabilityGallery", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 3,
  });
  var mySwipersustainabilityGallery2 = new Swiper(".mySwiper3", {
    loop: true,
    spaceBetween: 0,
    navigation: {
      nextEl: ".sustainabilityGallery .swiper-button-next",
      prevEl: ".sustainabilityGallery .swiper-button-prev",
    },
    thumbs: {
      swiper: mySwipersustainabilityGallery,
    },
  });


});

// EXPLORE GALLEY js end 


//menu js toggle start
$(document).ready(function(){
  // $(".burgurMenu").click(function(){
  //   $(".togglermenuwrap").toggle();
  //   $(".burgurMenu").toggleClass("burgurmenuopen");
  //   $("body").toggleClass("burgurmenubody");
  // });
  
  $(".togglermenu ul.submenu li a").click(function(){
    $(".togglermenuwrap").css("display", "none");
    $(".burgurMenu").removeClass("burgurmenuopen");
    $("body").removeClass("burgurmenubody");
  });

  $(".burgurMenu").click(function(){
    $(".togglermenuwrap").css("width", "400px");
    $("body").addClass("burgurmenubody");
    $("html").addClass("burgurmenubodywrap");
  });
  $(".burgurMenuClose").click(function(){
    $(".togglermenuwrap").css("width", "0");
    $("body").removeClass("burgurmenubody");
    $("html").removeClass("burgurmenubodywrap");
  });
  $(".offcanvas-backdrop").click(function(){
    $(".togglermenuwrap").css("width", "0");
    $("body").removeClass("burgurmenubody");
    $("html").removeClass("burgurmenubodywrap");
  });
  
  if ($(window).width() <= 767) {
    $( ".portlet-search-bar" ).appendTo( ".mobileSearch" ); // Search Bar
  }
  else {
    $( ".portlet-search-bar" ).appendTo( ".desktopSearch" ); // Search Bar
  } 

});
//menu js toggle end





								
    // Industry Specific Setup Guide js start     


    var ISSGSection = new Swiper(".ISSGSection .swiper", {
        
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: true,
      navigation: {
        nextEl: ".ISSGSection .swiper-button-next",
        prevEl: ".ISSGSection .swiper-button-prev",
        clickable: true,
      },

      speed: 2000,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },

    });

      // Industry Specific Setup Guide js end   





// custom counter js start
$(document).ready(function() {     
  var counted = 0;
  $(window).scroll(function() {
  
    var oTop = $('#counter').offset().top - window.innerHeight;
    if (counted == 0 && $(window).scrollTop() > oTop) {
      $('.count').each(function() {
        var $this = $(this),
          countTo = $this.attr('data-count');
        $({
          countNum: $this.text()
        }).animate({
            countNum: countTo
          },
  
          {
  
            duration: 2000,
            easing: 'swing',
            step: function() {
              $this.text(Math.floor(this.countNum));
            },
            complete: function() {
              $this.text(this.countNum);
             
            }
  
          });
      });
      counted = 1;
    }
  
  });
  
  });
  
  
  // custom counter js end
var rellax = new Rellax('.rellax', {
  callback: function (position) {
    console.log(position);
  },
  breakpoints: [576, 768, 1024]
});

$(window).on('load', function() {
  AOS.init({
		easing: 'ease-in-out-sine',
		disable: 'mobile'
	});

	AOS.init({
		disable: function () {
			var maxWidth = 1025;
			return window.innerWidth < maxWidth;
		}
	});

  $(".search-bar-keywords-input").attr("placeholder", "Search here");
});
    

// Search Page 

$(document).ready(function() {
  // Check if the current URL contains "/search"
  if(window.location.href.indexOf("/search") !== -1) {
      // Add class to the body element
      $("body").addClass("searchpage");
  }
});



// Background Image Scroll

$(window).scroll(function(e){
  parallaxnew();
});

function parallaxnew(){
    var scrolled = $(window).scrollTop();
    var windowHeight = $(window).height();
    var documentHeight = $(document).height();
    var scrollBottom = documentHeight - windowHeight - scrolled;

  if (scrolled) {
      $('.bodybg-top-left-bg').css('top', 1120 + (scrolled - 1120) / 5 + 'px');
      $('.bodybg-bottom-right-bg').css('top', 3700 + (scrolled - 3700) / 5 + 'px');
      $('.bodybg-top-right-bg').css('top', 0 + (scrolled - 0) / 5 + 'px');
      $('.bodybg-bottom-left-bg').css('bottom', (scrollBottom / 5) + 'px');
  }
}


// GO TO TOP

$(window).scroll(function(){ 
  if ($(this).scrollTop() > 500) { 
    $('#scroll').fadeIn(); 
  } else { 
    $('#scroll').fadeOut(); 
  } 
}); 

$('#scroll').click(function(){ 
  $("html, body").animate({ scrollTop: 0 }, 500); 
  return false; 
});



// Fixed Header 

$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $("header").addClass("fixedTop");
  } else {
    $("header").removeClass("fixedTop");
  }
});

//  Show Hide Video
function playVideo() {
    $(".videosection").hide();
    $(".pageembedvideo").removeClass("hiddenvideo");
    var iframe = document.getElementById('videoFrame');
    var src = iframe.src;
    src = src.replace('?mute=1', '?mute=1&autoplay=1');
    iframe.src = src;
}