import { getDiningData, getBakeryData } from './fetch.js';

export async function renderDiningData() {
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
        card.classList?.add?.('cards-2');

        // Image
        const img = document.createElement('img');
        img.loading = 'lazy';
        img.src = item?.image || '';
        img.alt = item?.name || 'Image';
        img.addEventListener('error', () => {
            img.style.display = 'none';
            if (!card.querySelector('.image-unavailable')) {
                const ph = document.createElement('p');
                ph.className = 'image-unavailable';
                ph.textContent = 'Image unavailable';
                card.appendChild(ph);
            }
        });

        // Title
        const h3 = document.createElement('h3');
        h3.textContent = item?.name || 'Untitled';

        card.appendChild(img);
        card.appendChild(h3);

        container?.appendChild?.(card);
    });
}

let bakeryData = [];

// Fetch bakery data using your function
export async function fetchBakeryData() {
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

// Renders the bakery cards
function renderBakeryCards() {
    const container = document.querySelector('.dine-cards'); // Ensure your HTML has `.dine-cards` container
    if (!container) return;

    console.log('Bakery cards rendered successfully.');
}

// Initialize the popup system
export async function initializeBistroPopup() {
    try {
        bakeryData = await fetchBakeryData();
        if (bakeryData.length === 0) {
            console.error('No bakery data found. Verify API or populate data.');
        } else {
            renderBakeryCards();
            setupCardClickHandlers();
            setupPopupCloseHandlers();
            console.log('Bistro popup system initialized successfully');
        }
    } catch (error) {
        console.error('Failed to initialize popup system:', error);
    }
}

// Setup click handlers for cards
export function setupCardClickHandlers() {
    const cards = document.querySelectorAll('.dine-cards .cards');
    cards?.forEach?.(card => {
        card?.addEventListener?.('click', function(e) {
            e?.preventDefault?.();
            const cardId = this?.getAttribute?.('data-id');
            console.log(`Card clicked with ID: ${cardId}`);
            openPopup(cardId);
        });
    });
}

// Open popup with loading state then content
export function openPopup(id) {
    const popup = document.querySelector('#bakery-popup');
    const popupInner = document.querySelector('.bakery-popup-inner');
    // Show loading state
    if (popupInner) {
        const loadingP = document.createElement('p');
        loadingP.style.color = '#666';
        loadingP.textContent = 'Loading...';
        popupInner.innerHTML = '';
        popupInner.appendChild(loadingP);
    }
    popup?.classList?.add?.('active');
    // Find the item data
    const item = bakeryData.find(item => String(item.id) === String(id));
    // Simulate loading delay and show content
    setTimeout(() => {
        if (item) {
            let imageSrc = item.image || '';
            if (imageSrc && !imageSrc?.startsWith?.('http') && !imageSrc?.startsWith?.('/')) {
                imageSrc = '/' + imageSrc;
            }
            if (popupInner) {
                // Clear loading
                popupInner.innerHTML = '';
                // Title
                const h2 = document.createElement('h2');
                h2.textContent = item.name || 'Untitled';
                popupInner.appendChild(h2);

                // Image (only add if we have a src)
                if (imageSrc) {
                    const img = document.createElement('img');
                    img.src = imageSrc;
                    img.alt = item.name || 'Image';
                    img.loading = 'lazy';
                    // On error hide the image and show a placeholder text
                    img.addEventListener('error', () => {
                        img.style.display = 'none';
                        if (!popupInner.querySelector('.image-unavailable')) {
                            const ph = document.createElement('p');
                            ph.className = 'image-unavailable';
                            ph.textContent = 'Image unavailable';
                            popupInner.insertBefore(ph, img.nextSibling);
                        }
                    });
                    popupInner.appendChild(img);
                } else {
                    const ph = document.createElement('p');
                    ph.className = 'image-unavailable';
                    ph.textContent = 'Image unavailable';
                    popupInner.appendChild(ph);
                }

                // Description
                const desc = document.createElement('p');
                desc.textContent = item.description || 'Experience our carefully crafted culinary creation, made with passion and attention to detail.';
                popupInner.appendChild(desc);
            }
        } else {
            if (popupInner) {
                popupInner.innerHTML = '';
                const h2 = document.createElement('h2');
                h2.textContent = 'Item Not Found';
                const p = document.createElement('p');
                p.className = 'bakery-no-data';
                p.textContent = "Sorry, we couldn't find information for this item.";
                popupInner.appendChild(h2);
                popupInner.appendChild(p);
            }
        }
    }, 300);
}

// Setup popup close handlers
export function setupPopupCloseHandlers() {
    const popup = document.querySelector('#bakery-popup');
    const closeBtn = document.querySelector('#bakery-popup-close');
    // Close button click
    closeBtn?.addEventListener?.('click', closePopup);
    // Click outside popup to close
    popup?.addEventListener?.('click', function(e) {
        if (e?.target === popup) {
            closePopup();
        }
    });
    // ESC key to close
    document.addEventListener('keydown', function(e) {
        if (e?.key === 'Escape' && popup?.classList?.contains?.('active')) {
            closePopup();
        }
    });
}

// Close popup function
export function closePopup() {
    const popup = document.querySelector('#bakery-popup');
    popup?.classList?.remove?.('active');
}

// Optionally, provide a setup function for consumers to call
export function setupDiningCardFeatures() {
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeBistroPopup);
    } else {
        initializeBistroPopup();
    }
    renderDiningData();
}
