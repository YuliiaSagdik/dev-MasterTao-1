const swiper = new Swiper('.swiper', {
    // Optional parameters
    loop: true,
    speed: 2000,
    avtoplay: {
        delay:3000,
    },
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      enabled: false,
    },
  
    // And if we need scrollbar
    breakpoints: {
      // when window width is >= 992px
      992: {
        navigation: {
          enabled: true,
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      },
    }
  }); 
  