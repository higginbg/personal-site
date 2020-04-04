// JS Goes here - ES6 supported

import './css/main.css';

import AOS from 'aos';

window.addEventListener('load', () => {
  AOS.refresh();
});

AOS.init({
  startEvent: 'load',
  duration: 1000,
  once: true,
  easing: 'ease'
});
