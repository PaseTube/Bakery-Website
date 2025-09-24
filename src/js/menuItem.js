import { getMenuItemsData } from './fetch.js';

let menuData = [];

export async function getMenuData() {
    menuData = await getMenuItemsData();
    const container = document.querySelector('.menu-items');

    if (!menuData || menuData.length === 0) {
        if (container) {
            const errorMsg = document.createElement('p');
            errorMsg.textContent = 'No dining data available. Please try again later.';
            errorMsg.style.color = 'red';
            errorMsg.style.fontSize = '40px';
            errorMsg.style.textAlign = 'center';
            container.appendChild(errorMsg);
        }
        return;
    }

    populateTagDropdown();
    renderMenuItems();
    renderSpecialItems();
}

export function populateTagDropdown() {
    const tagSelect = document.querySelector("#tagFilter");
    if (!tagSelect) return;

    // Get unique tags from all items
    const uniqueTags = new Set();
    menuData.forEach(item => {
        if (Array.isArray(item.tagArray)) {
            item.tagArray.forEach(tag => uniqueTags.add(tag));
        }
    });

    // Clear existing options except the first (placeholder)
    while (tagSelect.options.length > 1) {
        tagSelect.remove(1);
    }

    // Add unique tags as options
    uniqueTags.forEach(tag => {
        const opt = document.createElement('option');
        opt.value = tag;
        opt.textContent = tag;
        tagSelect.appendChild(opt);
    });

    // Listen for changes
    tagSelect.addEventListener('change', () => {
        renderMenuItems(tagSelect.value); // only updates main menu
    });
}

export function renderMenuItems(filterTag = '') {
    const container = document.querySelector('.menu-items');
    if (!container) return;

    // Remove existing children
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }

    menuData.forEach(item => {
        if (filterTag && !item.tagArray.includes(filterTag)) return;

        const card = createMenuCard(item);
        container.appendChild(card);
    });
}

export function renderSpecialItems() {
    const specialContainer = document.querySelector('.specials');
    if (!specialContainer) return;

    while (specialContainer.firstChild) {
        specialContainer.removeChild(specialContainer.firstChild);
    }

    menuData.forEach(item => {
        if (item.tagArray.includes("special!")) {
            const specialCard = createMenuCard(item);
            specialContainer.appendChild(specialCard);
        }
    });
}

// Helper function to create a menu card
function createMenuCard(item) {
    const card = document.createElement('article');
    card.classList.add('menu-product-card');

    const figure = document.createElement('figure');

    const img = document.createElement('img');
    img.src = item.image;
    img.alt = item.name;
    img.loading = 'lazy';

    const figcaption = document.createElement('figcaption');
    figcaption.textContent = item.tagArray[1] || '';

    const priceTag = document.createElement('div');
    priceTag.classList.add('price-tag');
    priceTag.textContent = `€${item.price.toFixed(2)}`;

    figure.appendChild(img);
    figure.appendChild(figcaption);
    figure.appendChild(priceTag);

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');

    const h2 = document.createElement('h2');
    h2.textContent = item.name;

    const p = document.createElement('p');
    p.textContent = item.description;

    textContainer.appendChild(h2);
    textContainer.appendChild(p);

    card.appendChild(figure);
    card.appendChild(textContainer);

    return card;
}

export function setupMenuItems() {
    getMenuData();
}
