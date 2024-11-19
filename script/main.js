


// molalnoe okno

const btnModal = document.querySelectorAll(".land_button");
const modal  = document.querySelector(".modal");
const modalOver  = document.querySelector(".modal_overlay");
const close  = document.querySelector(".close");
const closeSlider  = document.querySelector(".close_slider");
const sliderModalBtn = document.querySelectorAll(".flora_slide__nav");
const modalOverSlider = document.querySelector(".slider_modal_overlay");
const btnModalfooter = document.querySelectorAll(".footer-button");


btnModalfooter.forEach((el) => {
  el.addEventListener('click' , (e) => {
    let click_btn = e.currentTarget.getAttribute('data-btnf');
    console.log("КНОПКА ФУТЕР");
  });
});


btnModal.forEach((el) => {
  el.addEventListener('click' , (e) => {
    let click_btn = e.currentTarget.getAttribute('data-btn');
    modal.classList.add('modal--visible');
    modalOver.classList.add('modal_overlay--visible');
    console.log("ТЫ ЗАХОДИ");
  });
});



close.addEventListener('click' , (e) => {
    let click_close = e.currentTarget.getAttribute('data-close');
    modal.classList.remove('modal--visible');
    modalOver.classList.remove('modal_overlay--visible');
     modalOverSlider.classList.remove('modal_overlay--visible');
     console.log("ТЫ ЗАХОДИ");
  });


modalOver.addEventListener('click' , (e) => {
      if (e.target == modalOver) {
      modal.classList.remove('modal--visible');
      modalOver.classList.remove('modal_overlay--visible');
    };
  });




sliderModalBtn.forEach((el) => {
  el.addEventListener('click' , (e) => {
    let click_btn = e.currentTarget.getAttribute('data_slider-btn');
    modalOverSlider.classList.add('modal_overlay--visible');
  });
});

closeSlider.addEventListener('click' , (e) => {
    let click_close = e.currentTarget.getAttribute('data-close');
    modalOverSlider.classList.remove('modal_overlay--visible');
     console.log("ЩАС СПОЮ");
  });

modalOverSlider.addEventListener('click' , (e) => {
      if (e.target == modalOverSlider) {
      modalOverSlider.classList.remove('modal_overlay--visible');
    };
  });

//sliders



    var designSlider = new Swiper(".designOptions_slider", {
      navigation: {
        nextEl: ".arrow_min__next",
        prevEl: ".arrow_min__prew",
      },

    });

    const mainSliders = document.querySelectorAll('.home_prise__main');
    const navSliders = document.querySelectorAll('.home_prise__nav');

    for (i = 0; i < mainSliders.length; i++) {
        navSliders[i].classList.add('home_prise__nav'+i)
        mainSliders[i].classList.add('home_prise__main'+i)
       
        let swiper = new Swiper('.home_prise__nav' + i, {
            loop: true,
            spaceBetween: 10,
            slidesPerView: 4,
            
            freeMode: true,
            watchSlidesProgress: true,
        });
        new Swiper('.home_prise__main'+i, {
            
            breakpoints: {
            320: {
                slidesPerView: 1.2,
                spaceBetween: 3,
            },

            480: {
                slidesPerView: 1.2,
                spaceBetween: 3,
            },
            575: {
                slidesPerView: 1,
                spaceBetween: 1,
            },
            },
            loop: true,
            navigation: {
                nextEl: ".arrow_min__next",
                prevEl: ".arrow_min__prew",
            },
            thumbs: {
                swiper: swiper,
            },
        });
        
    };
    let floraSwiperNav = new Swiper('.flora_nav', {
      spaceBetween: 11,         
      grid: {
        rows: 2,
        fill: "row",
      },
      slidesPerView: 3,
         breakpoints: {
            320: {
                slidesPerView: 2,
                spaceBetween: 3,
                grid: {
                      rows: 3,
                      fill: "row",
                      },
            },
            575: {
                slidesPerView: 3,
                spaceBetween: 3,
                grid: {
                      rows: 2,
                      fill: "row",
                      },
            },
        },

    });
        var floraSwiperMain = new Swiper('.flora_main', {
            slidesPerView: 1,
            spaceBetween: 11,
            navigation: {
                nextEl: ".arrow_min__next",
                prevEl: ".arrow_min__prew",
            },
            thumbs: {
                swiper: floraSwiperNav,
            },
        });





 var slides = document.querySelectorAll(".quiz-slide");
        var next = document.querySelector('.quiz-button-next');
        var prev = document.querySelector('.quiz-button-prev');
        var mainClick = document.querySelectorAll('.cheked_slide');
        var currentSlide = 0;
        var currentWindow = document.querySelector('.quiz-slide.active');
        var radios = document.querySelectorAll('.quiz-slide.active input');
        var mainClicknOslide = document.querySelectorAll('.cheked_let')
            
            for(i=0; i<mainClick.length; i++) {
                mainClick[i].addEventListener('click', function () {
                    this.parentNode.parentNode.parentNode.querySelector('.check_in_form input').click();
                    next.click();

                });
              }


               for(i=0; i<mainClicknOslide.length; i++) {
                mainClicknOslide[i].addEventListener('click', function () {
                   this.parentNode.querySelector('.check_in_form input').click();
                    next.click();
                });
              }

 var slides = document.querySelectorAll(".quiz-slide");
        var next = document.querySelector('.quiz-button-next');
        var prev = document.querySelector('.quiz-button-prev');

        var currentSlide = 0;

        var currentWindow = document.querySelector('.quiz-slide.active')
        var radios = document.querySelectorAll('.quiz-slide.active input')

        function changeSlide() {
            for(i=0; i<radios.length; i++) {
                radios[i].addEventListener('change', function() {
                    next.classList.add('active')
                    
                    for(i=0; i<slides.length; i++) {
                        if(slides[i].classList.contains('active')) {
                            currentSlide = i+1
                        }
                    }
                })
            }
        }
        changeSlide()
        
        next.addEventListener('click', function() {
            this.classList.remove('active')
                    
            for(i=0; i<slides.length; i++) {
                slides[i].classList.remove('active')
            }
            slides[currentSlide].classList.add('active')
            
            currentWindow = document.querySelector('.quiz-slide.active')
            radios = document.querySelectorAll('.quiz-slide.active input')
            changeSlide()
            prev.classList.add('active')
            slidesCount()
            
            if(currentSlide+1 == slides.length){
            document.querySelector(".quiz_Buttons").classList.add('none_button');
            document.querySelector(".quiz-pagination").classList.add('none_button');

            }
        })
        
        prev.addEventListener('click', function() {
            for(i=0; i<slides.length; i++) {
                slides[i].classList.remove('active')
            }
            currentSlide-=1
            slides[currentSlide].classList.add('active')
            
            if(currentSlide <= 0) {
                this.classList.remove('active')
            }
            slidesCount()
        })
        
        function slidesCount() {
            document.querySelector('.quiz-pagination-current').innerText = currentSlide+1
        }
        slidesCount()
        document.querySelector('.quiz-pagination-total').innerText = slides.length
        
