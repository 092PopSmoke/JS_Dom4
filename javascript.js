const slides = document.querySelectorAll(".slide");
const translateAmount = 100;
let translate = 0;

slide = (direction) => {

  direction === "next" ? translate -= translateAmount : translate += translateAmount;

  slides.forEach(
    slides => (slides.style.transform = `translateX(${translate}%)`)
  );
}













