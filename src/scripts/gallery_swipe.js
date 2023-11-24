var ImageIndex = 0;

export default function gallery_swipe(event) {
  var touch = event.targetTouches[0];
  var midpoint = Math.floor(screen.width / 2);
  var px = touch.pageX;
  var items = document.querySelectorAll('.item_image');
  var itemActive = items[ImageIndex];
  if (px < midpoint) {
    itemActive.style.marginLeft = '-100%';
    itemActive.style.transition = '1s';
    if (ImageIndex < items.length - 1) {
      ImageIndex = ImageIndex + 1;
    } else {
      ImageIndex = 0;
    }
  } else {
    itemActive.style.marginLeft = '0px';
    itemActive.style.transition = '1s';
    if (ImageIndex >= 1) {
      ImageIndex = ImageIndex - 1;
    } else {
      ImageIndex = items.length - 1;
    }
  }
}
