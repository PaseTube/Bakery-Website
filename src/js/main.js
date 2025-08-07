// Video Play Button Controller
document.addEventListener('DOMContentLoaded', function () {
    const video = document.querySelector('#heroVideo');
    const playButton = document.querySelector('#playButton');
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

(function () {
    const loaderOverlay = document.querySelector('#loader-overlay');
    const loaderText = document.querySelector('#loader-text');
    const word = "Bistro | Bakery";

    // Add bouncing letters with random delay
    for (let i = 0; i < word.length; i++) {
        const span = document.createElement("span");
        span.textContent = word[i];
        span.style.animationDelay = `${Math.random() * 0.5}s`;
        loaderText.appendChild(span);
    }

    // Step 1: Background to green
    setTimeout(() => {
        loaderOverlay.style.backgroundColor = '#243231';
        loaderText.style.color = "white";
    }, 500);

    // Step 2: End loading
    setTimeout(() => {
        loaderText.querySelectorAll("span").forEach(span => {
            span.style.animation = "none";
            span.style.transform = "translateY(0)";
        });
        loaderText.style.transform = "scale(4)";
        loaderText.style.opacity = "0";

        // Step 3: Fade out loader
        setTimeout(() => {
            loaderOverlay.style.opacity = "0";
            setTimeout(() => loaderOverlay.remove(), 1500);
        }, 1500);
    }, 3000);
})();

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


