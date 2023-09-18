//navBar

const menu_bars = document.getElementById("menu-bars");
const menuclose = document.getElementById("menuclose");
const header__nav_list = document.querySelector(".header__nav-list ");

menu_bars.addEventListener("click", () => {
  header__nav_list.classList.remove("header__nav-list");
  header__nav_list.style.cssText =
    "background:#259be9fb;align-items:center;text-align: center;";
  menu_bars.style.cssText = "display:none";
  menuclose.style.cssText = "display:block";
});

menuclose.addEventListener("click", () => {
  header__nav_list.classList.add("header__nav-list");
  menu_bars.style.cssText = "display:block";
  menuclose.style.cssText = "display:none";
});

// FAQ PAGE

const faqMain = document.getElementsByClassName("content-container");

for (i = 0; i < faqMain.length; i++) {
  faqMain[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}

//HERO SLIDER

var aa = document.getElementById("aa");

var i = 1;

function fun1() {
  aa.src = "img-slides/hero" + i + ".jpg";
  i++;
  if (i > 3) {
    i = 1;
  }
  console.log(i);
}

setInterval(fun1, 3000);

//SINGLE PRODUCT PAGE
var bigImg = document.querySelector(".big__img");
var smallImg = document.querySelectorAll(".small__image");

smallImg[0].onclick = function () {
  bigImg.src = smallImg[0].src;
};

smallImg[1].onclick = function () {
  bigImg.src = smallImg[1].src;
};

smallImg[2].onclick = function () {
  bigImg.src = smallImg[2].src;
};

smallImg[3].onclick = function () {
  bigImg.src = smallImg[3].src;
};
