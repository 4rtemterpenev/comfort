
let header = document.querySelector('.head')
window.onscroll = function () {
  if (window.pageYOffset > 70) {
    header.style.background = "rgba(0, 0, 0, 0.7)";
  }
  else if (window.scrollY < 70) {
    header.style.background = "rgba(0,0,0,0)";
  }
}


if (document.querySelector('#swiper-recall')) {
  let profileSlideOffset = (window.innerWidth - document.querySelector('#wrap').clientWidth) / 2
  const profileSlider = new Swiper('#swiper-recall', {
    speed: 400,
    direction: 'horizontal',
    slidesPerView: "auto",
    slidesOffsetBefore: profileSlideOffset,
    slidesOffsetAfter: profileSlideOffset,
    spaceBetween: 30,
  })
};

if (document.querySelector('.swiper')) {
  const MySwiper = new Swiper('.swiper', {
    spaceBetween: 30,
    slidesPerView: 1,
    speed: 600,
    effect: 'fade',
    loop: true,
    autoplay: {
      delay: 4000,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      // renderBullet: function (index, className) {
      //   const bullet = document.createElement('div')
      //   const bulletImg = document.createElement('img')
      //   bulletImg.setAttribute('src', src)
      //   bullet.append(bulletImg)
      //   bullet.className = className
      //   return bullet
      // }
    },
  });
}
let active = document.querySelectorAll('.items-block__point')
let hide = document.querySelectorAll('.hide')
if (active)
  active.forEach(function (entry) {
    entry.addEventListener('click', function () {
      entry.classList.toggle('active')
      hide.classList.toggle('hide')
    });
  });

let herobtn = document.querySelector('.hero-block__btn')
let modal = document.querySelector('.modal')
let exit = document.querySelector('.modal-block__exit')

if (herobtn) {
  herobtn.addEventListener('click', function () {
    modal.classList.add('activity')
    document.body.style.overflow = "hidden"
  })
}
if (exit) {
  exit.addEventListener('click', function () {
    modal.classList.remove('activity')
    document.body.style.overflow = "visible"
  })
}


let recallmodal = document.querySelector('.recallmodal')
let exitmodal = document.querySelector('.recallmodal-block__exit')
let openmodal = document.querySelectorAll('.recall-block__readmore')


if (openmodal)
  openmodal.forEach(function (entrys) {
    entrys.addEventListener('click', function () {
      recallmodal.classList.add('show')
      document.body.style.overflow = "hidden"
    });
  });

if (exitmodal) {
  exitmodal.addEventListener('click', function () {
    recallmodal.classList.remove('show')
    document.body.style.overflow = "visible"
  })
}

let menuBtn = document.querySelector('.burger-menu');
let menu = document.querySelector('.menu')
let menublock = document.querySelector('.menu-block')

if (menuBtn) {
  menuBtn.addEventListener('click', function () {
    menu.classList.add('burgershow')
  })
}

if (menu) {
  menu.addEventListener('click', function () {
    menu.classList.remove('burgershow')
  })
}

const faqItem = document.querySelectorAll('.point-block__item')

if (faqItem)
  faqItem.forEach(function (open) {
    let faqHead = open.querySelector('.point-block__title')
    let faqBody = open.querySelector('.point-block__info')
    faqHead.addEventListener('click', function () {
      faqBody.classList.toggle('active')
    });
  });