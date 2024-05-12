window.onload = function() {
  var style = document.createElement('style');
  style.type = 'text/css';
  style.innerHTML = `
    .custom-scrollbar {
      width: 100vw; /* Ширина всей страницы */
      height: 100vh; /* Высота всей страницы */
      overflow-x: hidden; /* Предотвращаем горизонтальную прокрутку */
      overflow-y: auto; /* Добавляем вертикальную прокрутку */
    }

    .custom-scrollbar::-webkit-scrollbar {
      width: 12px; /* Ширина скроллбара для браузеров на основе WebKit, например, Chrome */
    }

    .custom::-webkit-scrollbar-track {
      background: #f1f1f1; /* Цвет фона трека */
    }

    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: #888; /* Цвет скроллбара */
    }
  `;
  document.head.appendChild(style);

  document.body.classList.add('custom-scrollbar');
}
