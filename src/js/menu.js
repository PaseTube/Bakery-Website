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
        this.popup = document.querySelector('#popup');
        this.popupContrainer = document.querySelector('#popup');
        this.popupContent = this.popupContrainer.querySelector('.popup-content');
        this.openBtn = document.querySelector('#openPopup');
        this.closeBtn = document.querySelector('#closePopup');
        this.slidesContainer = document.querySelector('#slidesContainer');
        this.dotsContainer = document.querySelector('#dotsContainer');
        this.prevBtn = document.querySelector('#prevBtn');
        this.nextBtn = document.querySelector('#nextBtn');
        this.currentSlideSpan = document.querySelector('#currentSlide');
        this.totalSlidesSpan = document.querySelector('#totalSlides');
    }

    bindEvents() {
        this.openBtn.addEventListener('click', () => this.openPopup());
        this.closeBtn.addEventListener('click', () => this.closePopup());
        this.popup.addEventListener('click', (e) => {
            if (e.target === this.popup) this.closePopup();
        });

        this.prevBtn.addEventListener('click', () => this.previousSlide());
        this.nextBtn.addEventListener('click', () => this.nextSlide());

        document.addEventListener('keydown', (e) => {
            if (!this.popup.classList.contains('show')) return;
            switch (e.key) {
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
                this.popupContent.style.background = `url('https://picsum.photos/200') center center / cover no-repeat`;
                this.popupContent.style.position = 'relative';

                const mask = document.createElement('div');
                mask.className = 'popup-mask';
                this.popupContent.appendChild(mask);

                this.slidesContainer.innerHTML = `<div class="slide active"><h3>No menu items found</h3></div>`;
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

        this.data.forEach((item) => {
            const slide = document.createElement('div');
            slide.className = 'slide';
            slide.innerHTML = `
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
        this.slides.forEach(slide => slide.classList.remove('active'));

        if (this.slides[index]) {
            this.slides[index].classList.add('active');
        }

        const currentItem = this.data[index];
        this.popupContent.style.background = `url('${currentItem.image}') center center / cover no-repeat`;
        this.popupContent.style.position = 'relative';
        this.popupContent.style.color = 'white';

        if (!this.popupContent.querySelector('.popup-mask')) {
            const mask = document.createElement('div');
            mask.className = 'popup-mask';
            this.popupContent.appendChild(mask);
        }

        const dots = this.dotsContainer.querySelectorAll('.dot');
        dots.forEach(dot => dot.classList.remove('active'));
        if (dots[index]) {
            dots[index].classList.add('active');
        }

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
        }, 5000);
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

document.addEventListener('DOMContentLoaded', () => {
    new MenuSlideshow();
});
