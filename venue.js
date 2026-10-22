/* Почему Нет?: вопросы меняются по кнопке, шкала дня показывает «сейчас» по ульяновскому времени */
(function () {
  var data = JSON.parse((document.getElementById('qa') || {}).textContent || '[]'), i = -1;
  var q = document.querySelector('[data-q] .ln>span'), a = document.querySelector('[data-a]'), s = document.querySelector('[data-s]');
  var b = document.querySelector('[data-next]');
  if (b && q) b.addEventListener('click', function () {
    i = (i + 1) % data.length; var h = q.closest('h1'); h.classList.remove('in');
    setTimeout(function () { q.textContent = data[i][0]; a.textContent = /[.!?]$/.test(data[i][1]) ? data[i][1] : data[i][1] + '.'; s.textContent = data[i][2]; h.classList.add('in'); }, 350);
  });
  var f = document.querySelector('[data-fill]'), n = document.querySelector('[data-now2]'), t = document.querySelector('[data-t]'), say = document.querySelector('[data-linesay]');
  function tick() {
    if (!f) return;
    var d = new Date(Date.now() + 4 * 3600e3), h = d.getUTCHours(), m = d.getUTCMinutes(), x = Math.max(0, Math.min(1, (h + m / 60 - 7) / 15));
    f.style.width = n.style.left = x * 100 + '%';
    t.textContent = (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m;
    n.classList.toggle('off', h < 7 || h >= 22);
  }
  tick(); setInterval(tick, 30000);
})();
