
let block = document.querySelector('.head')
window.onscroll = function () {
  if (window.pageYOffset > 70) {
    block.style.background = "rgba(0, 0, 0, 0.7)";
  }
  else if (window.scrollY < 70) {
    block.style.background = "rgba(0,0,0,0)";
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

const MySwiper = new Swiper('.swiper', {
  spaceBetween: 30,
  slidesPerView: 1,
  autoplay: {
    delay: 4000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    type: 'custom',
    bulletClass: 'swiper_pagination_img'
  },
});

let active = document.querySelectorAll('.items-block__point')
let hide = document.querySelectorAll('.hide')
active.forEach(function (entry) {
  entry.addEventListener('click', function () {
    entry.classList.toggle('active')
    hide.classList.toggle('hide')
  });
});

let herobtn = document.querySelector('.hero-block__btn')
let modal = document.querySelector('.modal')
let exit = document.querySelector('.modal-block__exit')

herobtn.addEventListener('click', function(){
  modal.classList.add('activity')
})
exit.addEventListener('click', function(){
  modal.classList.remove('activity')
})