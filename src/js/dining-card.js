import { getDiningData } from './fetch.js';
import { getBakeryData } from './fetch.js';

async function renderDiningData() {
    const data = await getDiningData();
    const container = document.querySelector('.cards-api');

    if (!container) return;

    // Clear previous content (optional)
    container.innerHTML = '';

    // If no data, show error message
    if (!data || data.length === 0) {
        const errorMsg = document.createElement('p');
        errorMsg.textContent = 'No dining data available. Please try again later.';
        errorMsg.style.color = 'red';
        errorMsg.style.fontSize = '40px';
        errorMsg.style.textAlign = 'center';
        container.appendChild(errorMsg);
        return;
    }

    // Render cards
    data.forEach(item => {
        const card = document.createElement('div');
        card.classList.add('cards-2');

        card.innerHTML = `
            <img loading="lazy" src="${item.image}" alt="${item.name}" />
            <h3>${item.name}</h3>
        `;

        container.appendChild(card);
    });
}

let bakeryData = [];

// Fetch bakery data using your function
async function fetchBakeryData() {
    try {
        console.log('Fetching bakery data...');
        const data = await getBakeryData();
        
        if (data && data.length > 0) {
            console.log('API data loaded successfully:', data);
            return data;
        } else {
            console.log('No data returned from API');
            return [];
        }
    } catch (error) {
        console.error('Error fetching bakery data:', error);
        return [];
    }
}

// Initialize the popup system
async function initializeBistroPopup() {
    try {
        bakeryData = await fetchBakeryData();
        setupCardClickHandlers();
        setupPopupCloseHandlers();
        console.log('Bistro popup system initialized successfully');
    } catch (error) {
        console.error('Failed to initialize popup system:', error);
    }
}

// Setup click handlers for cards
function setupCardClickHandlers() {
    const cards = document.querySelectorAll('.dine-cards .cards');
    
    cards.forEach(card => {
        card.addEventListener('click', function(e) {
            e.preventDefault();
            const cardId = this.getAttribute('data-id');
            console.log(`Card clicked with ID: ${cardId}`);
            openPopup(cardId);
        });
    });
}

// Open popup with loading state then content
function openPopup(id) {
    const popup = document.querySelector('#bakery-popup');
    const popupInner = document.querySelector('.bakery-popup-inner');
    
    // Show loading state
    popupInner.innerHTML = '<p style="color: #666;">Loading...</p>';
    popup.classList.add('active');
    
    // Find the item data
    const item = bakeryData.find(item => item.id === id || item.id === String(id));
    
    // Simulate loading delay and show content
    setTimeout(() => {
        if (item) {
            let imageSrc = item.image;
            
            // Handle relative image paths
            if (imageSrc && !imageSrc.startsWith('http') && !imageSrc.startsWith('/')) {
                imageSrc = '/' + imageSrc;
            }
            
            popupInner.innerHTML = `
                <h2>${item.name}</h2>
                <img src="${imageSrc}" 
                     alt="${item.name}" 
                     loading="lazy" 
                     onerror="this.src='https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop'" />
                <p>${item.description || 'Experience our carefully crafted culinary creation, made with passion and attention to detail.'}</p>
            `;
        } else {
            popupInner.innerHTML = `
                <h2>Item Not Found</h2>
                <p class="bakery-no-data">Sorry, we couldn't find information for this item.</p>
            `;
        }
    }, 300);
}

// Setup popup close handlers
function setupPopupCloseHandlers() {
    const popup = document.querySelector('#bakery-popup');
    const closeBtn = document.querySelector('#bakery-popup-close');
    
    // Close button click
    closeBtn.addEventListener('click', closePopup);
    
    // Click outside popup to close
    popup.addEventListener('click', function(e) {
        if (e.target === popup) {
            closePopup();
        }
    });
    
    // ESC key to close
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && popup.classList.contains('active')) {
            closePopup();
        }
    });
}

// Close popup function
function closePopup() {
    const popup = document.querySelector('#bakery-popup');
    popup.classList.remove('active');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeBistroPopup);
} else {
    initializeBistroPopup();
}
// Initial render
renderDiningData();