const swiper = new Swiper('#banner-slider', {
    loop: true,
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
   } )
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
       
       }
    }
}
});
