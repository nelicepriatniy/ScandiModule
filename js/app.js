

function offsetPosition(element) {
  var offsetLeft = 0, offsetTop = 0;
  do {
      offsetLeft += element.offsetLeft;
      offsetTop += element.offsetTop;
  } while (element = element.offsetParent);
  return offsetTop;
}

let scrollBtn = document.querySelectorAll('.scrollbtn');  //класс кнопок для скролла
scrollBtn.forEach(el => {
  let elem = el;
  el.addEventListener('click', function () {
      let data = elem.getAttribute('data-b'); 
      let block = document.querySelector(data);
      let offset = offsetPosition(block);
      window.scrollTo({
          top: offset,
          behavior: 'smooth',
          
      });
      console.log(offset)
  })
});

const gallerySlider = new Swiper('.gallerySlider', {
  speed: 400,
  spaceBetween: 58,
  slidesPerView: 2.3,
});

$("#phone").mask("+7 (999) 999 99-99");