// Back to top appear and disappear
const backToTop = document.querySelector(".back-to-top");
let isBackToTopRendered = false;

console.log(backToTop);
console.log(isBackToTopRendered);

let handleStyles = (isBackToTopRendered) => {
  backToTop.style.visibility = isBackToTopRendered ? "visible" : "hidden";
  backToTop.style.opacity = isBackToTopRendered ? 1 : 0;
  backToTop.style.transform = isBackToTopRendered ? "scale(1)" : "scale(0)";
};

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    isBackToTopRendered = true;
    handleStyles(isBackToTopRendered);
  } else {
    isBackToTopRendered = false;
    handleStyles(isBackToTopRendered);
  }
  // window.scrollY > 700
  //   ? (isBackToTopRendered = true && handleStyles(isBackToTopRendered))
  //   : (isBackToTopRendered = false && handleStyles(isBackToTopRendered));
});
