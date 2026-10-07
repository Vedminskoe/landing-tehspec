// Яндекс Метрика для отдельных страниц (работы, отзывы, бонусы, контакты…).
// Запускается только если на главной уже дали согласие на статистику —
// выбор хранится в localStorage: 'cookieChoice' === 'all'.
// Тот же счётчик и те же настройки, что на главной и прайсах
(function () {
  var METRIKA_ID = 112421919;
  var ok = false;
  try { ok = localStorage.getItem('cookieChoice') === 'all'; } catch (e) {}
  if (!ok) return;
  (function (m, e, t, r, i, k, a) {
    m[i] = m[i] || function () { (m[i].a = m[i].a || []).push(arguments); };
    m[i].l = 1 * new Date();
    for (var j = 0; j < e.scripts.length; j++) { if (e.scripts[j].src === r) { return; } }
    k = e.createElement(t); a = e.getElementsByTagName(t)[0];
    k.async = 1; k.src = r; a.parentNode.insertBefore(k, a);
  })(window, document, 'script', 'https://mc.yandex.ru/metrika/tag.js?id=' + METRIKA_ID, 'ym');
  window.ym(METRIKA_ID, 'init', {
    ssr: true,
    webvisor: true,
    clickmap: true,
    referrer: document.referrer,
    url: location.href,
    accurateTrackBounce: true,
    trackLinks: true
  });
  // страница работы листается сменой адреса после # — каждую работу
  // отмечаем как отдельный просмотр
  window.addEventListener('hashchange', function () {
    window.ym(METRIKA_ID, 'hit', location.href, { referer: document.referrer });
  });
})();
