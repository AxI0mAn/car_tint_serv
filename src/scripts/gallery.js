export default function gallery() {
  const btn_left = document.querySelector('.left');
  const btn_right = document.querySelector('.right');
  const view_line = document.querySelector('.gallery_img');
  const step = 10;
  let counter = 0;

  btn_left.addEventListener('click', () => {
    --counter;
    if (counter <= 0) {
      counter = 0;
      view_line.style.transform = `translateX(0)`;
    } else {
      view_line.style.transform = `translateX(-${step * counter}%)`;
    }
  });
  btn_right.addEventListener('click', () => {
    ++counter;
    if (step * counter > 90) {
      counter = 0;
      view_line.style.transform = `translateX(0)`;
    } else {
      view_line.style.transform = `translateX(-${step * counter}%)`;
    }
  });
}
