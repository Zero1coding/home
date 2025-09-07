// script.js - rotates text and provides controls
(() => {
  const texts = ["ZeroCoding", "Welcome", "Learn, Code, Hack!"];
  let index = 0;
  let paused = false;
  const el = document.getElementById('dynamicText');
  const pauseBtn = document.getElementById('pauseBtn');
  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');
  let interval = null;
  const DURATION = 2000; // ms between changes

  function show(i) {
    el.style.transition = 'transform 420ms cubic-bezier(.2,.9,.2,1), opacity 320ms';
    el.style.opacity = '0';
    el.style.transform = 'translateY(8px) scale(0.98)';
    setTimeout(() => {
      el.textContent = texts[i];
      el.style.opacity = '1';
      el.style.transform = 'translateY(0) scale(1)';
    }, 120);
  }

  function startAuto() {
    if (interval) clearInterval(interval);
    interval = setInterval(() => {
      if (!paused) {
        index = (index + 1) % texts.length;
        show(index);
      }
    }, DURATION);
  }

  pauseBtn.addEventListener('click', () => {
    paused = !paused;
    pauseBtn.textContent = paused ? 'Play' : 'Pause';
  });

  prevBtn.addEventListener('click', () => {
    index = (index - 1 + texts.length) % texts.length;
    show(index);
  });

  nextBtn.addEventListener('click', () => {
    index = (index + 1) % texts.length;
    show(index);
  });

  window.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') prevBtn.click();
    if (e.key === 'ArrowRight') nextBtn.click();
    if (e.code === 'Space') { e.preventDefault(); pauseBtn.click(); }
  });

  show(index);
  startAuto();
})();
