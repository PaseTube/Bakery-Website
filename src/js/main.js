// ==============================
// Modular JS setup calls
// ==============================
import { setupNavMenu } from './nav-menu.js';
import { setupDiningCardFeatures } from './dining-card.js';
import { setupExploreSection } from './explore.js';
import { setupMenuSlideshow } from './menu.js';
import { setupMenuItems } from './menuItem.js';

// run modular setups
setupNavMenu();
setupDiningCardFeatures();
setupExploreSection();
setupMenuSlideshow();
setupMenuItems();

// ==============================
// Video Play Button Controller
// ==============================
const video = document.querySelector('#heroVideo');
const playButton = document.querySelector('#playButton');

if (video && playButton) {
  function toggleVideo(e) {
    e?.preventDefault?.();
    e?.stopPropagation?.();
    try {
      if (video?.paused) {
        const playPromise = video?.play?.();
        if (playPromise !== undefined) {
          playPromise.then(() => playButton?.classList?.add?.('hidden'))
                     .catch(err => console.error('Error playing video:', err));
        }
      } else {
        video?.pause?.();
        playButton?.classList?.remove?.('hidden');
      }
    } catch (err) {
      console.error('Error toggling video:', err);
    }
  }

  playButton?.addEventListener?.('click', toggleVideo);
  video?.addEventListener?.('click', toggleVideo);

  video?.addEventListener?.('pause', () => playButton?.classList?.remove?.('hidden'));
  video?.addEventListener?.('play', () => playButton?.classList?.add?.('hidden'));
  video?.addEventListener?.('ended', () => {
    playButton?.classList?.remove?.('hidden');
    video.currentTime = 0;
  });
  video?.addEventListener?.('loadedmetadata', () => playButton?.classList?.remove?.('hidden'));
  playButton?.addEventListener?.('touchend', (e) => {
    e?.preventDefault?.();
    toggleVideo(e);
  });
}

// ==============================
// Loader Animation
// ==============================
(function () {
  const loaderOverlay = document.querySelector('#loader-overlay');
  const loaderText = document.querySelector('#loader-text');
  const word = "Bistro | Bakery";

  if (!loaderOverlay || !loaderText) return;

  // add bouncing letters
  for (let i = 0; i < word.length; i++) {
    const span = document.createElement("span");
    span.textContent = word[i];
    span.style.animationDelay = `${Math.random()}s`;
    loaderText?.appendChild?.(span);
  }

  // change colors
  setTimeout(() => {
    loaderOverlay.style.backgroundColor = '#243231';
    loaderText.style.color = "white";
  }, 1000);

  // stop animation + scale
  setTimeout(() => {
    loaderText?.querySelectorAll?.("span")?.forEach?.(span => {
      span.style.animation = "none";
      span.style.transform = "translateY(0)";
    });
    loaderText.style.transform = "scale(4)";
    loaderText.style.opacity = "0";
  }, 4000);

  // fade out and remove
  setTimeout(() => {
    loaderOverlay.style.opacity = "0";
    setTimeout(() => loaderOverlay?.remove?.(), 1500);
  }, 5500);
})();

// ==============================
// Custom Cursor
// ==============================
const cursor = document.querySelector('#cursor');
if (cursor) {
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e?.clientX + 'px';
    cursor.style.top = e?.clientY + 'px';
  });
  document.addEventListener('mousedown', () => cursor.classList?.add?.('pressed'));
  document.addEventListener('mouseup', () => cursor.classList?.remove?.('pressed'));
}
