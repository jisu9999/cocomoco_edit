window.onload = function () {
  const swiper1 = new Swiper(".mainSlide", {
    loop: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    autoplay: {
      delay: 1900,
      disableOnInteraction: false,
    },
  });
  const swiper2 = new Swiper(".instaSlide", {
    loop: true,
    slidesPerView: 1.5,
    spaceBetween: 20,
    autoplay: {
      delay: 1800,
      disableOnInteraction: false,
    },
    breakpoints: {
      880: {
        slidesPerView: 2.5, //브라우저가 768보다 클 때
        spaceBetween: 20,
      },
      1050: {
        slidesPerView: 3.5, //브라우저가 1024보다 클 때
        spaceBetween: 20,
      },
    },
  });
  const swiper3 = new Swiper(".mbSlide", {
    loop: true,
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: true,
    },
    autoplay: {
      delay: 1900,
      disableOnInteraction: false,
    },
  });
  const swiper = new Swiper(".mbWinterSwiper", {
    slidesPerView: 1.5,
    spaceBetween: 20,
    centeredSlides: false,
    breakpoints: {
      530: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      761: {
        slidesPerView: 3.5,
        spaceBetween: 20,
      },
    },
  });
  // const headerScroll = document.querySelector("header");
  // window.addEventListener("scroll", function () {
  //   // navScroll.classList.add("scrolled")
  //   // console.log("스크롤 y 값 :", window.scrollY);
  //   if (window.scrollY > 750) {
  //     headerScroll.classList.add("scrolled");
  //   } else {
  //     headerScroll.classList.remove("scrolled");
  //   }
  // });
};
window.addEventListener('scroll', function(){
  if(window.scrollY > 750){
    document.querySelector(".header").classList.add("scrolled")
  }else{
    document.querySelector(".header").classList.remove("scrolled")
  }
})