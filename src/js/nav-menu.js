const openBtn = document.querySelector('#openModal');
const closeBtn = document.querySelector('#closeModal');
const modal = document.querySelector('#modal');
const galleryImg = document.querySelector('#gallery-random');

// Open and close gallery
openBtn.addEventListener("click", (e) => {
  e.preventDefault();
  modal.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open");
});

// burger menu
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.getElementById('burger');
  const nav = document.getElementById('main-nav');

  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
    burger.classList.toggle('open');
  });
});

// scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
});

// fadein effect
document.querySelectorAll('.fade-in-section').forEach(section => {
  observer.observe(section);
});


// gallery loader
const numberOfImages = 10;
for (let i = 0; i < numberOfImages; i++) {
  const img = document.createElement("img");

  // Use random images from Unsplash (change to any API or source)
  const randomId = Math.floor(Math.random() * 1000);
  img.src = `https://picsum.photos/300/200?random=${randomId}`;
  img.alt = "Random bakery image";
  img.loading = `lazy`;


  galleryImg.appendChild(img);
}