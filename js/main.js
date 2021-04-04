
$(document).ready(function () {

  // Кнопка на вверх:
  $(window).scroll(function () {
    if ($(this).scrollTop() != 0) $("#toTop").fadeIn();
    else $("#toTop").fadeOut();
  });
  $("#toTop").click(function () {
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      800
    );
  });

  // Очистка корзину:
$(".korzina--delete").click(function () {
  $(this).parents().eq(3).css("display", "none");
});

  // Клик на каталог меню:
  $(".mob--catalog").on("click", function () {
    if ($(".page").hasClass("page--extra")) {
      $(".page").animate({ left: "100px" });
      $(".menu--catalog--mob").animate({ left: "0" });
      $(".page").removeClass("page--extra");
    } else {
      $(".page").animate({ left: "0" });
      $(".menu--catalog--mob").animate({ left: "-100px" });
      $(".page").addClass("page--extra");
    }
  });

  // Скрывать картинки каталога товаров при скроле экран:
    $(window).on("scroll", function () {
      $(".product--image").addClass("no--img");
      if ($(this).scrollTop() == 0) {
        $(".product--image").removeClass("no--img");
      }
    });

  // Главный большой слайдер:

  $(".center--slider").slick({
    infinite: true,
    dots: true,
    arrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 1800,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          prevArrow: "<img class='left__arrow' src='img/left__arrow.png'>",
          nextArrow: "<img class='right__arrow' src='img/right__arrow.png'>",
          dots: false,
        },
      },
    ],
  });

  // Слайдер "Карточка поставщика":

  $(".postavshik--slider").slick({
    infinite: true,
    dots: false,
    arrow: false,
    prevArrow: "<img class='left--arrow' src='img/left-btn.png'>",
    nextArrow: "<img class='right--arrow' src='img/right-btn.png'>",
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1094,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  // Второй слайдер (чаще всего заказывают):

  $(".product--slider--container").slick({
    infinite: true,
    dots: false,
    arrow: false,
    prevArrow: "<img class='left--arrow' src='img/left-btn.png'>",
    nextArrow: "<img class='right--arrow' src='img/right-btn.png'>",
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1094,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  // Слайдер "Наши фермеры":
  $(".fermers--slider").slick({
    infinite: true,
    dots: false,
    arrow: false,
    prevArrow:
      "<img class='left--arrow fermer--left' src='img/left-btn.png'>",
    nextArrow:
      "<img class='right--arrow fermer--right' src='img/right-btn.png'>",
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1094,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  // Слайдер для страницы "Карточка товара":

  $(".kartochka--slider--container").slick({
    infinite: true,
    dots: true,
    arrow: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 1800,
  });

  // Страница "Личный кабинет" слайдер
  $(".accordion--slider").slick({
    infinite: true,
    dots: false,
    arrow: false,
    prevArrow: "<img class='left--arrow' src='img/left-btn.png'>",
    nextArrow:
      "<img class='right--arrow accordionArrow' src='img/right-btn.png'>",
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1320,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 1094,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  });

  // Личный кабинет: Добавить адрес:

  $(".add--address").click(function () {
    $(".extra--address").addClass("third--address");
  });
  // Личный кабинет: Добавить телефон:
  $(".add--phone").click(function () {
    $(".extra--phone").addClass("third--phone");
  });

  // Страница "Личный кабинет". Функция для аккордион:

  $(".accordeon--item").click(function () {
    $(this).next().slideToggle();
    $(this).find(".icon--left").toggleClass("active--icon");
  });

  $(".sliderBtn").on("click", function () {
    $(this).next().slideToggle();
    $(this).find(".icon--left").toggleClass("active--icon");
    if ($(this).hasClass("ha")) {
      $(".accordionArrow").click();
    }
    $(this).removeClass("ha");
  });

  // Содержимое:
  $(".show--sod1").click(function () {
    $(".show--sod").removeClass("act");
    $(this).addClass("act");
    $(".kartochka--video--right").removeClass("soderjimoe--active");
    $(".soderjimoe1").addClass("soderjimoe--active");
  });

  $(".show--sod2").click(function () {
    $(".show--sod").removeClass("act");
    $(this).addClass("act");
    $(".kartochka--video--right").removeClass("soderjimoe--active");
    $(".soderjimoe2").addClass("soderjimoe--active");
  });

  $(".show--sod3").click(function () {
    $(".show--sod").removeClass("act");
    $(this).addClass("act");
    $(".kartochka--video--right").removeClass("soderjimoe--active");
    $(".soderjimoe3").addClass("soderjimoe--active");
  });
});


// Мобильное меню:
let open_menu = document.querySelector(".burger--menu");
let menu = document.querySelector(".mobile--menu--full");
let close_menu = document.querySelector(".close--menu");

open_menu.onclick = function () {
  menu.classList.toggle("show--menu");
};

close_menu.onclick = function () {
  menu.classList.toggle("show--menu");
};

// Страница "Корзина":
let plusBtn = document.querySelector(".plus__btn");
let minusBtn = document.querySelector(".minus__btn");
let count = document.querySelector(".count");
let index = 2;

plusBtn.onclick = function plusCount() {
  index++;
  count.innerHTML = index;
};

minusBtn.onclick = function minusCount() {
  if (index > 0) {
    index--;
  }
  count.innerHTML = index;
};

let plusBtn2 = document.querySelector(".plus__btn2");
let minusBtn2 = document.querySelector(".minus__btn2");
let count2 = document.querySelector(".count2");
let index2 = 4;

plusBtn2.onclick = function () {
  index2++;
  count2.innerHTML = index2;
};
minusBtn2.onclick = function () {
  if (index2 > 0) {
    index2--;
  }
  count2.innerHTML = index2;
};