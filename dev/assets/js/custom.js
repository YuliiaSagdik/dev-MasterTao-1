const swiperBanner = new Swiper('#banner-slider', {
  loop: true,
  spaceBetween: 12,
  speed: 2000,
  avtoplay: {
      delay:3000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    enabled: false,
  },
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


  const typeFile = document.querySelectorAll('.custom-file')
  typeFile.forEach(item =>{
    item.addEventListener('change', () => {
      const fileName = item.closest('.input-box').querySelector('.file-name')
      fileName.innerHTML = item.files[0].name;

    } )
   } );
   const advantagesSlideLength = document.querySelectorAll('#advantages .swiper-slide')
   const swiperAdvantages = new Swiper('#advantages',{ 
   loop: true, 
   simulateTouch: true,
   slidesPerview: 1,
   pagination: {
     el: '.swiper-pagination', 
     clickable: true, 
     enabled: true,
  },
   breakpoints: {
    1025: {
      spaceBetween: 0, 
      loop: false, 
      slidesPerGroup: advantagesSlideLength, 
      simulateTouch: false,
      pagination: {
        enabled: false, 
        el: '.swiper-pagination',
       
       },
    },
}
});

const swiperSliderTemplate = new Swiper('.slider-template', {
  speed: 400,
  loop: true,
  slidesPerView: 1,
  pagination: {
      el: '.swiper-pagination',
      clickable: true, 
      enabled: true,   
  },
  navigation: {
      enabled: false,
      nextEl: '.swiper-button-next-unique',
      prevEl: '.swiper-button-prev-unique'
  },

  breakpoints: {
     767: {
      slidesPerView: 1,
      navigation: {
          enabled: true,
          nextEl: '.swiper-button-next-unique',
          prevEl: '.swiper-button-prev-unique'
      },
     },
      861: {
          slidesPerView: 2,
          spaceBetween: 30,
          navigation: {
              enabled: true,
              nextEl: '.swiper-button-next-unique',
              prevEl: '.swiper-button-prev-unique'
          },
          pagination: {
            enabled: false,
        },
      },

      1252: {
          slidesPerView: 3,
          spaceBetween: 30,
          navigation: {
              enabled: true,
              nextEl: '.swiper-button-next-unique',
              prevEl: '.swiper-button-prev-unique'
          },
          pagination: {
            enabled: false,
        },
      },
  },
});