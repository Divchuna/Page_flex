function func() {
  document.getElementById('hero_btn').value  = 'Thank you!';
}

var swiper = new Swiper(".testi_swiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  
  breakpoints: {
      1200: {
          slidesPerView: 4,
          spaceBetween: 40
      },
      834: {
          slidesPerView: 3,
          spaceBetween: 24,
          
      },
      320: {
          slidesPerView: 2,
          spaceBetween: 16,
          slidesOffsetAfter: 32,
          //centeredSlides: true,
      }
  },
  
  

  navigation: {
      nextEl: ".swiper-button-next-unique",
      prevEl: ".swiper-button-prev-unique",
    },
});

