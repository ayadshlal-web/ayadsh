herefunction showTime() {
  const el = document.getElementById('currentTime');
  if (!el) return;
  const now = new Date().toLocaleString('ar-IQ', { timeZone: 'Asia/Baghdad' });
  el.textContent = now;
}

setInterval(showTime, 1000);
showTime();
