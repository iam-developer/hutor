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

$('.mob--catalog').on('click', function() {
  
    if($('.page').hasClass('page--extra')) {
      $('.page').animate({left: '100px'});
      $('.menu--catalog--mob').animate({left: '0'});
      $('.page').removeClass('page--extra');
    }
    else {
      $('.page').animate({left: '0'});
      $('.menu--catalog--mob').animate({left: '-100px'});
      $('.page').addClass('page--extra');
    }
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

// Слайдер для страницы "Карточка товара":

$('.kartochka--slider--container').slick({
  infinite: true,
  dots: true,
  arrow: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  adaptiveHeight: true,
  autoplay:true,
  autoplaySpeed:1800
});

// Страница "Личный кабинет" слайдер
$('.accordion--slider').slick({
  infinite: true,
  dots: false,
  arrow: false,
  prevArrow:"<img class='left--arrow' src='/hutor/img/left-btn.png'>",
  nextArrow:"<img class='right--arrow accordionArrow' src='/hutor/img/right-btn.png'>",
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


// Страница "Личный кабинет". Функция для аккордион:

$('.accordeon--item').click(function() {
  $(this).next().slideToggle();
  $(this).find('.icon--left').toggleClass('active--icon');
});

$('.sliderBtn').on('click', function() {
  $(this).next().slideToggle();
  $(this).find('.icon--left').toggleClass('active--icon');
  if($(this).hasClass('ha')) {
    $('.accordionArrow').click();
  }
  $(this).removeClass('ha');
});

// Содержимое:

$('.show--sod1').click(function() {
  $('.show--sod').removeClass('act');
  $(this).addClass('act');
  $('.kartochka--video--right').removeClass('soderjimoe--active');
  $('.soderjimoe1').addClass('soderjimoe--active');
});

$('.show--sod2').click(function() {
  $('.show--sod').removeClass('act');
  $(this).addClass('act');
  $('.kartochka--video--right').removeClass('soderjimoe--active');
  $('.soderjimoe2').addClass('soderjimoe--active');
});

$('.show--sod3').click(function() {
  $('.show--sod').removeClass('act');
  $(this).addClass('act');
  $('.kartochka--video--right').removeClass('soderjimoe--active');
  $('.soderjimoe3').addClass('soderjimoe--active');
});


