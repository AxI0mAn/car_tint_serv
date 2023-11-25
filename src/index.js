import './index.scss';
import './styles/base/adapt_media.scss';
import video_control from './scripts/video_control';
import modal from './scripts/modal';
// import gallery_swipe from './scripts/gallery_swipe';
import gallery from './scripts/gallery';

video_control('.btn_video0', 0);
video_control('.btn_video1', 1);
modal();
// gallery_swipe();
gallery();
