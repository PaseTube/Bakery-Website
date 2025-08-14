const openBtn = document.querySelector('#openModal');
const closeBtn = document.querySelector('#closeModal');
const modal = document.querySelector('#modal');
const galleryImg = document.querySelector('#gallery-random');
const openChefBtn = document.querySelector('#openChefModal');
const chefModal = document.querySelector('#chef-modal');
const closeChefBtn = document.querySelector('#closeChefModal');
const contactOpen = document.querySelector('#contact-open');
const contactPopup = document.querySelector('#contact-modal');


document.addEventListener("DOMContentLoaded", function () {
  const topScrollBtn = document.querySelector("#backToTopBtn");

  window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      topScrollBtn.style.display = "block";
    } else {
      topScrollBtn.style.display = "none";
    }
  });

  window.topFunction = function () {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
});


// close all modals
function closeAllModals() {
  modal.classList.remove("open");
  chefModal.classList.remove("open");
  // if more add here!
}
// Open and close gallery
openBtn.addEventListener("click", (e) => {
  e.preventDefault();
  closeAllModals();
  modal.classList.add("open");
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("open");
});

// Open Chef modal
openChefBtn.addEventListener("click", (e) => {
  e.preventDefault();
  closeAllModals();
  chefModal.classList.add("open");
});

closeChefBtn.addEventListener("click", () => {
  chefModal.classList.remove("open");
}
);

// burger menu
document.addEventListener('DOMContentLoaded', () => {
  const burger = document.querySelector('#burger');
  const nav = document.querySelector('#main-nav');

  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
    burger.classList.toggle('open');
  });
});

// scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('#navbar');
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

// Open Contact Form modal
contactOpen.addEventListener('click', (e) => {
  e.preventDefault();
  closeAllModals();
  contactPopup.classList.add('open');
});

// Close Contact Form modal
const closeContactBtn = document.querySelector('#closeContactModal'); 
closeContactBtn.addEventListener('click', () => {
  contactPopup.classList.remove('open');
});
