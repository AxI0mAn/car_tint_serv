export default function video_control(btn, vid) {
  const button_play = document.querySelector(btn);
  const video_element = document.getElementsByTagName('video')[vid];
  const wind_tint_btn = document.querySelector('.wind_tint_btn');

  function action(btn, vid) {
    if (btn == '.btn_video0' || +vid == 0) {
      wind_tint_btn.classList.toggle('display_none');
    }
    button_play.classList.toggle('display_none');
    if (video_element.paused) {
      video_element.play();
    } else {
      video_element.pause();
    }
  }
  button_play.addEventListener(
    'click',
    function () {
      action(btn, vid);
    },
    false
  );
  video_element.addEventListener(
    'click',
    function () {
      action(btn, vid);
    },
    false
  );
}
