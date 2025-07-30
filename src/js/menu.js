import { getData } from './fetch.js';

// Menu Slideshow Class
class MenuSlideshow {
    constructor() {
        this.currentSlide = 0;
        this.slides = [];
        this.data = [];
        this.autoSlideInterval = null;
        
        this.initializeElements();
        this.bindEvents();
    }

    initializeElements() {
        // Get DOM elements
        this.popup = document.getElementById('popup');
        this.openBtn = document.getElementById('openPopup');
        this.closeBtn = document.getElementById('closePopup');
        this.slidesContainer = document.getElementById('slidesContainer');
        this.dotsContainer = document.getElementById('dotsContainer');
        this.prevBtn = document.getElementById('prevBtn');
        this.nextBtn = document.getElementById('nextBtn');
        this.currentSlideSpan = document.getElementById('currentSlide');
        this.totalSlidesSpan = document.getElementById('totalSlides');
    }

    bindEvents() {
        // Open popup event
        this.openBtn.addEventListener('click', () => this.openPopup());
        
        // Close popup events
        this.closeBtn.addEventListener('click', () => this.closePopup());
        this.popup.addEventListener('click', (e) => {
            if (e.target === this.popup) this.closePopup();
        });

        // Navigation events
        this.prevBtn.addEventListener('click', () => this.previousSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (!this.popup.classList.contains('show')) return;
            
            switch(e.key) {
                case 'ArrowLeft':
                    this.previousSlide();
                    break;
                case 'ArrowRight':
                    this.nextSlide();
                    break;
                case 'Escape':
                    this.closePopup();
                    break;
            }
        });
    }

    async openPopup() {
        this.popup.classList.remove('hidden');
        this.popup.classList.add('show');
        
        // Load data and create slideshow
        await this.loadSlideshow();
        this.startAutoSlide();
    }

    closePopup() {
        this.popup.classList.remove('show');
        setTimeout(() => {
            this.popup.classList.add('hidden');
        }, 300);
        this.stopAutoSlide();
    }

    async loadSlideshow() {
        try {
            this.data = await getData();
            
            if (this.data.length === 0) {
                this.slidesContainer.innerHTML = '<div class="slide active"><h3>No menu items found</h3></div>';
                return;
            }

            this.createSlides();
            this.createDots();
            this.updateSlideCounter();
            this.showSlide(0);
        } catch (error) {
            console.error('Error loading slideshow:', error);
            this.slidesContainer.innerHTML = '<div class="slide active"><h3>Error loading menu items</h3></div>';
        }
    }

    createSlides() {
        this.slidesContainer.innerHTML = '';
        
        this.data.forEach((item, index) => {
            const slide = document.createElement('div');
            slide.className = 'slide';
            slide.innerHTML = `
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <h3>${item.name}</h3>
                <div class="price">€${item.price.toFixed(2).replace('.', ',')}</div>
                <div class="description">${item.description || ''}</div>
            `;
            this.slidesContainer.appendChild(slide);
        });

        this.slides = this.slidesContainer.querySelectorAll('.slide');
    }

    createDots() {
        this.dotsContainer.innerHTML = '';
        
        this.data.forEach((_, index) => {
            const dot = document.createElement('span');
            dot.className = 'dot';
            dot.addEventListener('click', () => this.currentSlideIndex(index));
            this.dotsContainer.appendChild(dot);
        });
    }

    showSlide(index) {
        // Hide all slides
        this.slides.forEach(slide => slide.classList.remove('active'));
        
        // Show current slide
        if (this.slides[index]) {
            this.slides[index].classList.add('active');
        }

        // Update dots
        const dots = this.dotsContainer.querySelectorAll('.dot');
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) {
            dots[index].classList.add('active');
        }

        // Update counter
        this.currentSlideSpan.textContent = index + 1;
        this.updateSlideCounter();
    }

    nextSlide() {
        this.currentSlide = (this.currentSlide + 1) % this.data.length;
        this.showSlide(this.currentSlide);
        this.resetAutoSlide();
    }

    previousSlide() {
        this.currentSlide = (this.currentSlide - 1 + this.data.length) % this.data.length;
        this.showSlide(this.currentSlide);
        this.resetAutoSlide();
    }

    currentSlideIndex(index) {
        this.currentSlide = index;
        this.showSlide(this.currentSlide);
        this.resetAutoSlide();
    }

    updateSlideCounter() {
        this.totalSlidesSpan.textContent = this.data.length;
    }

    startAutoSlide() {
        this.autoSlideInterval = setInterval(() => {
            this.nextSlide();
        }, 5000); // Change slide every 5 seconds
    }

    stopAutoSlide() {
        if (this.autoSlideInterval) {
            clearInterval(this.autoSlideInterval);
            this.autoSlideInterval = null;
        }
    }

    resetAutoSlide() {
        this.stopAutoSlide();
        this.startAutoSlide();
    }
}

// Initialize the slideshow when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new MenuSlideshow();
});