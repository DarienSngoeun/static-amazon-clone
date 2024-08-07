const imgs = document.querySelectorAll(".header__slider ul img");
const prev__btn = document.querySelector(".control__prev");
const next__btn = document.querySelector(".control__next");

let n = 0;

function changeSlide() {
  for (let i = 0; i < imgs.length; i++) {
    imgs[i].style.display = "none";
  }
  imgs[n].style.display = "block";
}

changeSlide();

prev__btn.addEventListener("click", (e) => {
  if (n > 0) {
    n--;
  } else {
    n = imgs.length - 1;
  }
  changeSlide();
});

next__btn.addEventListener("click", (e) => {
  if (n < imgs.length - 1) {
    n++;
  } else {
    n = 0;
  }
  changeSlide();
});

const scrollContainer = document.querySelectorAll(".products");
for (const item of scrollContainer) {
  item.addEventListener("wheel", (e) => {
    e.preventDefault();
    item.scrollLeft += e.deltaY;
  });
}
