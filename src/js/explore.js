import { getExploreItemsData } from './fetch.js';

let heroExploreContainer;
let closeHeroContainer;
let popupDataContainer;

/**
 * Closes all open modals
 */
export function closeAllModals() {
    document.querySelectorAll('.explore-popup.open')?.forEach?.(modal => {
        modal?.classList?.remove?.('open');
    });
}

/**
 * Renders the explore item in the popup
 * @param {Object} item - The explore item data to display
 */
export function renderExploreItem(item) {
    if (!popupDataContainer) return;
    popupDataContainer.innerHTML = `
        <img src="${item?.image}" alt="${item?.name}" style="width:100%; max-height:300px; object-fit:cover;"/>
        <h2>${item?.name}</h2>
        <p>${item?.description}</p>
    `;
}

/**
 * Opens the explore popup using the item's ID
 * @param {string} id - ID of the explore item to display
 */
export async function openExplorePopup(id) {
    closeAllModals();
    const data = await getExploreItemsData();
    const item = data?.find?.(el => String(el?.id) === String(id));
    if (item) {
        renderExploreItem(item);
    } else {
        if (popupDataContainer) popupDataContainer.innerHTML = `<p>Item not found.</p>`;
    }
    heroExploreContainer?.classList?.add?.('open');
}

/**
 * Sets up the explore section logic and event listeners
 */
export function setupExploreSection() {
    // Cache DOM elements
    heroExploreContainer = document.querySelector('#explore-container-hero');
    closeHeroContainer = document.querySelector('#close-hero-explore');
    popupDataContainer = document.querySelector('#explore-popup-data');

    // Add click listeners to buttons, extracting ID from the "id" attribute
    document.querySelectorAll('.explore-button')?.forEach?.(el => {
        el?.addEventListener?.('click', (e) => {
            e?.preventDefault?.();
            // Extract the numeric ID from the button `id` (e.g., "explore-1")
            const id = el?.id?.split?.('-')?.pop?.(); // Gets "1" or "2"
            openExplorePopup(id); // Open popup for this ID
        });
    });

    // Add close functionality to the "close" button
    closeHeroContainer?.addEventListener?.('click', () => {
        heroExploreContainer?.classList?.remove?.('open');
    });
}
