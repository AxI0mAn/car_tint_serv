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

const swiper = new Swiper('.gallery_conteiner', {
  modules: [Navigation], // NOTE! configure Swiper to use modules
  speed: 400,
  loop: false,
  navigation: {
    nextEl: '.right',
    prevEl: '.left',
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    575: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
});
