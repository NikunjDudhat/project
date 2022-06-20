// ==================== Header jQuery  ==================== //
$(window).scroll(function() {
    if ($(window).scrollTop() >= 10) {
        $('header').addClass('fixed');
    } else {
        $('header').removeClass('fixed');
    }
});



// ==================== sidbar menu jQuery ==================== //
$('.sub-item-link').click(function(e) {
    e.preventDefault();
  $('.sub-item-link').removeClass('menu-active');
  $(this).addClass('menu-active');
    var $this = $(this);
  
    if ($this.next().hasClass('sub-menu-show')) {
        $this.next().removeClass('sub-menu-show');
        $this.next().slideUp(350);
     
    } else {
        $this.parent().parent().find('li .inner').removeClass('sub-menu-show');
        $this.parent().parent().find('li .inner').slideUp(350);
        $this.next().toggleClass('sub-menu-show');
        $this.next().slideToggle(350);

    }
});

$(document).on('click','#side-menu-parent ul li a',function(){
    $('.inner li a').removeClass("menu-active");
    $(this).addClass("menu-active");
});




// ==================== side menu open to main section move jQuery ==================== //
jQuery(document).ready(function(){
    $('.menu-bars').click(function() {
        $('#side-menu-parent').css({'width': '288px' });
        $('#main').css({'marginLeft': '288px', 'width': '100%'});
        $('#side-menu-parent').addClass('side-menu-parent');
        $('.over-black').addClass('overlay');
    });
    $('.menu-close').click(function() {
        $('#side-menu-parent').css({'width': '0px'});
        $('#main').css('marginLeft', '0px');
        $('#side-menu-parent').removeClass('side-menu-parent');
         $('.over-black').removeClass('overlay');
    });
});


// ==================== Video popup jQuery  ==================== //
   $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false,
            //  type: 'iframe',
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allow="autoplay"></iframe>' +
                    '</div>',
                patterns: {
                    youtube: {
                        index: 'youtube.com/',
                        id: 'v=',
                        src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                    }
                }
            }
    });



// ==================== Works slider jQuery ==================== //
jQuery(document).ready(function($) {
    $('.autoplay').slick({
        slidesToShow: 3,
        autoplay: true,
        arrows: false,
        // slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});


jQuery(document).ready(function($) {
    $('.autoplay1').slick({
        infinite: true,
        autoplay: true,
        arrows: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
});



// ====================== Got Questions jQuery ====================== //
jQuery(document).ready(function() {
    $(function() {
        var Accordion = function(el, multiple) {
            this.el = el || {};
            this.multiple = multiple || false;

            // Variables privadas
            var links = this.el.find('.link');
            // Evento
            links.on('click', { el: this.el, multiple: this.multiple }, this.dropdown)

        }

        Accordion.prototype.dropdown = function(e) {
            var $el = e.data.el;
            $this = $(this),
                $next = $this.next();

            $next.slideToggle();
            $this.parent().toggleClass('open');

            if (!e.data.multiple) {
                $el.find('.content').not($next).slideUp().parent().removeClass('open');
            };
        }

        var accordion = new Accordion($('.accordion'), false);
    });

});




// ===================== scroll to top jQuery ===================== //
var btn = $('.top');
$(document).ready(function(){

$(window).scroll(function() {
  if ($(window).scrollTop() > 500) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '500');
});
});

/*$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });
    $('.top').click(function() {
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});*/


// ==================== aos jQuery  ==================== //
$(document).ready(function() {
    AOS.init({

    });
});


// ==================== Body effect jQuery  ==================== //
jQuery(document).ready(function() {

    $(document).on('click', '.right-gif', function() {
        $('.left-gif').css('display', 'flex');
        $('.right-gif').css('display', 'none');
        $('.body-sidebar').toggleClass('site-nav-open', 500);
        $(this).toggleClass('open');
    });
    $(document).on('click', '.left-gif', function() {
        $('.right-gif').css('display', 'flex');
        $('.left-gif').css('display', 'none');
        $('.body-sidebar').toggleClass('site-nav-open', 500);
        $(this).toggleClass('close');
    });


    $(".body-color").click(function() {
        var color = $(this).attr("data-value");
        $(".bg-color-body").css("background-color", color);
        $('.left-gif').trigger('click')
    });
});


// ==================== Banner typing Effect  jQuery  ==================== //
jQuery(document).ready(function() {
    const typewriter = new Typewriter('#typewriter', {
        loop: true,
    });

    typewriter.typeString('Hello World!')
        .pauseFor(2500)
        .deleteAll()
        .typeString('I Am Web Designer.')
        .pauseFor(2500)
        .start();
});

    
jQuery(document).ready(function() {
   window.onbeforeunload = function () {
  window.scrollTo(0, 0);
}
});

// ==================== Cuesor jQuery  ==================== //
var cursor = $(".cursor"),
        follower = $(".cursor-follower");

var posX = 0,
        posY = 0;

var mouseX = 0,
        mouseY = 0;

TweenMax.to({}, 0.016, {
    repeat:-1,
    onRepeat:function(){
        posX += (mouseX - posX) / 9;
        posY += (mouseY - posY) / 9;
        
        TweenMax.set(follower, {
            css: {
                left: posX - 12,
                top: posY - 12
            }
        });
        TweenMax.set(cursor, {
            css: {
                left: mouseX,
                top: mouseY
            }
        });
    }   
});

$(document).on("mousemove",function(e){
    mouseX = e.pageX;
    mouseY = e.pageY;
});

$("a").on("mouseenter",function(){
    cursor.addClass("active");
    follower.addClass("active");
});

$("a").on("mouseleave",function(){
    cursor.removeClass("active");
    follower.removeClass("active");
});


// ==================== Vanilla Tilt mouse Move Effect  jQuery  ==================== //
jQuery(document).ready(function(){
    VanillaTilt.init(document.querySelectorAll(".about-card,.about-contenat-right"), {
        max: 25,
        speed: 400
    });
});



// ==================== banner slider jQuery ==================== //
// jQuery(document).ready(function(){
//   $('.single-item').slick();
// });

/*jQuery(document).ready(function(){

$('.single-item').owlCarousel({
  loop: true,
  nav: true,
  navText: [
    "<i class='fa fa-caret-left'></i>",
    "<i class='fa fa-caret-right'></i>"
  ],
  autoplay: true,
  autoplayHoverPause: true,
})
});
*/



// ==================== inspect close  jQuery  ==================== //
/*  jQuery(document).ready(function()
        { 
              jQuery(document).bind("contextmenu",function(e){
                  return false;
             });  
            document.onkeydown = function(e) {
              if(event.keyCode == 123) {
                 return false;
              }
              if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
                 return false;
              }
              if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
                 return false;
              }
              if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
                 return false;
              }
              if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
                 return false;
              }
            }
        }); */