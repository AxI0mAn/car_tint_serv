export default function modal() {
  const modal = document.querySelector('.modal');
  const btns = document.querySelectorAll('.book_now');
  const close = document.querySelector('.btn_close');
  for (let btn of btns) {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';
      history.pushState({}, '', '#modal');
    });
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
  close.addEventListener('click', () => {
    modal.style.display = 'none';
  });
  window.onpopstate = function (event) {
    modal.style.display = 'none';
  };
}
