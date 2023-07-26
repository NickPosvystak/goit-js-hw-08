
import Player from '@vimeo/player';

const Vimeo = require('@vimeo/player');

// const iframe = document.getElementById('vimeo-player');


// const Vimeo = require('vimeo-player');
// const throttle = require('lodash.throttle');

// const iframe = document.getElementById('vimeo-player');

// // Ініціалізуємо плеєр для відео в iframe
// const player = new Vimeo.Player(iframe);

// // Функція для збереження часу відтворення у локальне сховище
// const saveCurrentTimeToStorage = throttle(function (currentTime) {
//   localStorage.setItem('videoplayer-current-time', currentTime.toString());
// }, 1000); // Збереження не частіше, ніж раз на секунду

// // Підключаємо обробник події timeupdate для відстеження часу відтворення
// player.on('timeupdate', function (data) {
//   const currentTime = data.seconds; // Поточний час відтворення у секундах
//   // Збережемо час відтворення у локальне сховище
//   saveCurrentTimeToStorage(currentTime);
// });

// // Зчитуємо час відтворення з локального сховища після перезавантаження сторінки
// window.onload = function () {
//   const savedTime = localStorage.getItem('videoplayer-current-time');

//   if (savedTime) {
//     // Встановлюємо час відтворення, якщо він був збережений
//     player.setCurrentTime(parseFloat(savedTime));
//   }
// };