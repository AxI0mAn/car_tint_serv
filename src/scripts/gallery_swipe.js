export default function gallery_swipe() {
  const btn_left = document.querySelector('.left');
  const btn_right = document.querySelector('.right');
  const view_line = document.querySelector('.gallery_img');
  const step = 10;
  let counter = 0;

  let clientX;
  let current_X = 0;
  let style = getComputedStyle(view_line, true);
  let clientW = parseFloat(style.width);
  let clientOW = view_line.clientWidth;
  console.log("clientW", clientW);
  console.log("clientOW", clientOW);
  function slide_next() {
    ++counter;
    if (step * counter > 90) {
      counter = 0;
      view_line.style.transform = `translateX(0)`;
    } else {
      view_line.style.transform = `translateX(-${step * counter}%)`;
    }
  }

  function slide_prew() {
    --counter;
    if (counter <= 0) {
      counter = 0;
      view_line.style.transform = `translateX(0)`;
    } else {
      view_line.style.transform = `translateX(-${step * counter}%)`;
    }
  }

  btn_left.addEventListener('click', () => {
    slide_prew();
  });
  btn_right.addEventListener('click', () => {
    slide_next();
  });


  view_line.addEventListener(
    "touchstart",
    (e) => {
      clientX = e.touches[0].clientX;
      console.log("clientX", clientX);
    },
    false,
  );

  view_line.addEventListener(
    "touchend", //move
    (e) => {
      let deltaX;
      deltaX = e.changedTouches[0].clientX - clientX;
      current_X += deltaX;
      console.log("current_X", current_X);
      if (deltaX > 0) {
        // console.log("deltaX > 0 left -> right");
        // if (counter <= 0) {
        //   counter = 0;
        //   view_line.style.transform = `translateX(0)`;
        // } else
        view_line.style.transform = `translateX(${current_X}px)`;
      }
      else {
        // console.log("deltaX", deltaX);
        // if (Math.abs(current_X) >= clientW * 5) { //????????
        //   console.log("current_X >= clientW", Math.abs(current_X), clientW);
        //   counter = 0;
        //   view_line.style.transform = `translateX(0)`;
        // } else
        view_line.style.transition = '';
        view_line.style.transform = `translateX(${current_X}px)`;
      }
    },
    false,
  );
}
