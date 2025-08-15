// JS
import { getExploreItemsData } from './fetch.js';

const heroExploreContainer = document.querySelector('#explore-container-hero');
const closeHeroContainer = document.querySelector('#close-hero-explore');
const popupDataContainer = document.querySelector('#explore-popup-data');

// Close all popups
function closeAllModals() {
    document.querySelectorAll('.explore-popup.open').forEach(modal => {
        modal.classList.remove('open');
    });
}

// Render a single explore item in the popup
function renderExploreItem(item) {
    if (!popupDataContainer) return;

    popupDataContainer.innerHTML = `
        <img src="${item.image}" alt="${item.name}" style="width:100%; max-height:300px; object-fit:cover;"/>
        <h2>${item.name}</h2>
        <p>${item.description}</p>
    `;
}

// Open popup for a specific ID
async function openExplorePopup(id) {
    closeAllModals();
    const data = await getExploreItemsData();
    
    // Make sure IDs match type (string/number)
    const item = data.find(el => String(el.id) === String(id));

    if (item) {
        renderExploreItem(item);
    } else {
        popupDataContainer.innerHTML = `<p>Item not found.</p>`;
    }
    
    heroExploreContainer.classList.add('open');
}

// Event listeners for any element with data-id (works for <a>, <button>, etc.)
document.querySelectorAll('[data-id]').forEach(el => {
    el.addEventListener('click', (e) => {
        e.preventDefault();
        const id = el.getAttribute('data-id');
        openExplorePopup(id);
    });
});

// Close button
closeHeroContainer?.addEventListener('click', () => {
    heroExploreContainer.classList.remove('open');
});
