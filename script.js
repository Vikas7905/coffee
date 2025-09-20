const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.getElementById("menu-open-button");
const menuCloseButton = document.getElementById("menu-close-button");
menuOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
})
menuCloseButton.addEventListener("click", () => {
  menuOpenButton.click();
})
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    menuOpenButton.click();
  })
})

let coolDown = false;
let clickSound = ()=>{
  if(coolDown) return;
  const sound = new Audio('./images/click-sound-effect-hd_Zw60kwUZ.mp3');
  sound.play();
  coolDown = true;

  setTimeout(()=>{
    coolDown = false;
  },150)
}
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    clickSound();
  })
})

let form = document.querySelectorAll(".form-input");

form.forEach(type =>{
  type.addEventListener("keydown", clickSound)
})

const swiper = new Swiper('.slider-wrapper', {
  // Optional parameters

  loop: true,
  grabCursor: true,
  spaceBetween: 25,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  //   scrollbar: {
  //     el: '.swiper-scrollbar',
  //   },


  // Responsive breakpoints 

  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});
