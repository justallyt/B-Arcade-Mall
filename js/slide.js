const swiper = new Swiper('.swiper', {
    autoplay:{
        delay: 5000,
        disableOnInteraction: false,
    },
    speed: 1500,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });