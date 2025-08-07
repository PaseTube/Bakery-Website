// Video Play Button Controller
document.addEventListener('DOMContentLoaded', function () {
    const video = document.getElementById('heroVideo');
    const playButton = document.getElementById('playButton');
    const videoWrapper = document.querySelector('.dine-video.video-wrapper');

    // Check if elements exist
    if (!video || !playButton) {
        console.error('Video or play button not found');
        return;
    }

    // Function to play/pause video
    function toggleVideo(e) {
        e.preventDefault();
        e.stopPropagation();

        try {
            if (video.paused) {
                const playPromise = video.play();
                if (playPromise !== undefined) {
                    playPromise
                        .then(() => {
                            playButton.classList.add('hidden');
                        })
                        .catch(error => {
                            console.error('Error playing video:', error);
                        });
                }
            } else {
                video.pause();
                playButton.classList.remove('hidden');
            }
        } catch (error) {
            console.error('Error toggling video:', error);
        }
    }

    // Play button click event
    playButton.addEventListener('click', toggleVideo);

    // Optional: Click on video to play/pause
    video.addEventListener('click', toggleVideo);

    // Show play button when video is paused
    video.addEventListener('pause', function () {
        playButton.classList.remove('hidden');
    });

    // Hide play button when video starts playing
    video.addEventListener('play', function () {
        playButton.classList.add('hidden');
    });

    // Show play button when video ends
    video.addEventListener('ended', function () {
        playButton.classList.remove('hidden');
        video.currentTime = 0; // Reset video to beginning
    });

    // Ensure play button is visible initially
    video.addEventListener('loadedmetadata', function () {
        playButton.classList.remove('hidden');
    });

    // Handle mobile touch events
    playButton.addEventListener('touchend', function (e) {
        e.preventDefault();
        toggleVideo(e);
    });
});


window.addEventListener('load', () => {
      const loader = document.getElementById('loader');
      const siteContent = document.getElementById('site-content');

      setTimeout(() => {
        loader.classList.add('zoomed');

        // Fade in site content after zoom and fade-out complete
        setTimeout(() => {
          siteContent.classList.add('visible');
        }, 2700);

        // Remove loader entirely after everything is done
        setTimeout(() => {
          loader.remove();
          document.body.style.overflow = 'auto';
        }, 1800);
      }, 1900); 
    });



// Custom Cursor Implementation
const cursor = document.querySelector('#cursor');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

document.addEventListener('mousedown', () => {
  cursor.classList.add('pressed');
});

document.addEventListener('mouseup', () => {
  cursor.classList.remove('pressed');
});


