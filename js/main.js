// Мобильное меню:
let open_menu = document.querySelector(".burger--menu");
let menu = document.querySelector(".mobile--menu--full");
let close_menu = document.querySelector(".close--menu");

open_menu.onclick = function() {
  menu.classList.toggle("show--menu");
}

close_menu.onclick = function() {
  menu.classList.toggle("show--menu");
}

// Клик на каталог меню:

$(document).click( function(e){
  if ($(e.target).closest('.mob--catalog').length) {
      // клик внутри элемента
      $('.menu--catalog--mob').addClass('catalog--active'); 
      return;
  }
  // клик снаружи элемента 
  else if($(e.target).closest('.menu--catalog--mob').length){
      $('.menu--catalog--mob').addClass('catalog--active'); 
      return;
  }    
      $('.menu--catalog--mob').removeClass('catalog--active');
});

// Главный большой слайдер:

$('.center--slider').slick({
    infinite: true,
    dots: true,
    arrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay:true,
    autoplaySpeed:1800,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          prevArrow: "<img class='left__arrow' src='/hutor/img/left__arrow.png'>",
          nextArrow: "<img class='right__arrow' src='/hutor/img/right__arrow.png'>",
          dots: false
        }
      }
    ]
});

// Второй слайдер (чаще всего заказывают):

$('.product--slider--container').slick({
    infinite: true,
    dots: false,
    arrow: false,
    prevArrow:"<img class='left--arrow' src='/hutor/img/left-btn.png'>",
    nextArrow:"<img class='right--arrow' src='/hutor/img/right-btn.png'>",
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
          breakpoint: 1320,
          settings: {
            slidesToShow: 4,
          }
        },
        {
          breakpoint: 1094,
          settings: {
            slidesToShow: 3,
          }
        },
        {
            breakpoint: 767,
            settings: {
              slidesToShow: 2,
            }
          }
      ]
});

// Слайдер "Наши фермеры":

$('.fermers--slider').slick({
    infinite: true,
    dots: false,
    arrow: false,
    prevArrow: "<img class='left--arrow fermer--left' src='/hutor/img/left-btn.png'>",
    nextArrow: "<img class='right--arrow fermer--right' src='/hutor/img/right-btn.png'>",
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 4,
        }
      },
      {
        breakpoint: 1094,
        settings: {
          slidesToShow: 3,
        }
      },
      {
          breakpoint: 830,
          settings: {
            slidesToShow: 2,
          }
        }
    ]
});

// Скрывать картинки каталога товаров при скроле экран:

$(document).ready(function() {
    $(window).on('scroll', function() {
        $('.product--image').addClass('no--img');
        if ($(this).scrollTop() == 0) {
            $('.product--image').removeClass('no--img');
        }
    });
});