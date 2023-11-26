import './index.scss';
import './styles/base/adapt_media.scss';
import video_control from './scripts/video_control';
import modal from './scripts/modal';
import Swiper from 'swiper';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

video_control('.btn_video0', 0);
video_control('.btn_video1', 1);
modal();

const swiper = new Swiper('.swiper', {
  modules: [Navigation], // NOTE! configure Swiper to use modules
  navigation: {
    nextEl: '.right',
    prevEl: '.left',
  },
  speed: 800,
  loop: true,
  slideToClickedSlide: true,
  // centeredSlides: true,
  centeredSlidesBounds: true,
  breakpointsBase: 'window',
  slidesPerGroup: 1,
  spaceBetween: 10,
  longSwipes: false,
  // slidesPerView: 2.2,
  // autoHeight: true,
  freeMode: {
    enabled: true,
    sticky: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3.2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 4.2,
      spaceBetween: 20,
    },
  },
});
