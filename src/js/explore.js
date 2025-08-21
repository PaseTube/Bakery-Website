
import { getExploreItemsData } from './fetch.js';

let heroExploreContainer;
let closeHeroContainer;
let popupDataContainer;

export function closeAllModals() {
    document.querySelectorAll('.explore-popup.open').forEach(modal => {
        modal.classList.remove('open');
    });
}

export function renderExploreItem(item) {
    if (!popupDataContainer) return;
    popupDataContainer.innerHTML = `
        <img src="${item.image}" alt="${item.name}" style="width:100%; max-height:300px; object-fit:cover;"/>
        <h2>${item.name}</h2>
        <p>${item.description}</p>
    `;
}

export async function openExplorePopup(id) {
    closeAllModals();
    const data = await getExploreItemsData();
    const item = data.find(el => String(el.id) === String(id));
    if (item) {
        renderExploreItem(item);
    } else {
        popupDataContainer.innerHTML = `<p>Item not found.</p>`;
    }
    heroExploreContainer.classList.add('open');
}

export function setupExploreSection() {
    heroExploreContainer = document.querySelector('#explore-container-hero');
    closeHeroContainer = document.querySelector('#close-hero-explore');
    popupDataContainer = document.querySelector('#explore-popup-data');

    document.querySelectorAll('[data-id]').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            const id = el.getAttribute('data-id');
            openExplorePopup(id);
        });
    });

    closeHeroContainer?.addEventListener('click', () => {
        heroExploreContainer.classList.remove('open');
    });
}
