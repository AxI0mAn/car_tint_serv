export default function modal() {
  const modal = document.querySelector('.modal');
  const btns = document.querySelectorAll('.book_now');
  for (let btn of btns) {
    btn.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  }
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
}
