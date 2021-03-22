const hamburger = document.getElementById('hamburger');
const navUL1 = document.getElementById('nav-ul-1');
const navUL2 = document.getElementById('nav-ul-2');


hamburger.addEventListener('click', () => {
  navUL1.classList.toggle('show');
  navUL2.classList.toggle('show');   
});


var swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  spaceBetween: 10,  
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    878: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1174: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1444: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    1500: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  }
});