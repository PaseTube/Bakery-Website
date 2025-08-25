// Custom cursor logic for all pages
export function setupCustomCursor() {
  const cursor = document.querySelector('#cursor');
  if (!cursor) return;

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  document.addEventListener('mousedown', () => cursor.classList.add('pressed'));
  document.addEventListener('mouseup', () => cursor.classList.remove('pressed'));
}
