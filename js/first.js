let block = document.querySelector('.head')
window.onscroll = function() {
  if (window.pageYOffset > 70){
    block.style.background = "rgba(0, 0, 0, 0.7)";
  }
  else if (window.scrollY < 70){
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


var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 50,
  slidesPerView: 1,
  centeredSlides: true,
  thumbs: {
    swiper: swiper
  }
});