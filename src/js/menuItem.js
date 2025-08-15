import { getMenuItemsData } from './fetch.js';

let menuData = []; // store all menu items globally

async function getMenuData() {
    menuData = await getMenuItemsData();
    if (!menuData || menuData.length === 0) {
        const container = document.querySelector('.menu-items');
        const errorMsg = document.createElement('p');
        errorMsg.textContent = 'No dining data available. Please try again later.';
        errorMsg.style.color = 'red';
        errorMsg.style.fontSize = '40px';
        errorMsg.style.textAlign = 'center';
        container.appendChild(errorMsg);
        return;
    }

    populateTagDropdown();
    renderMenuItems();
    renderSpecialItems();
}

function populateTagDropdown() {
    const tagSelect = document.querySelector("#tagFilter")
    if (!tagSelect) return;

    // Get unique tags from all items
    const uniqueTags = new Set();
    menuData.forEach(item => {
        if (Array.isArray(item.tags)) {
            item.tags.forEach(tag => uniqueTags.add(tag));
        }
    });

    // Add tags as options
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

function renderMenuItems(filterTag = '') {
    const container = document.querySelector('.menu-items');
    container.innerHTML = '';

    menuData.forEach(item => {
        if (filterTag && !item.tags.includes(filterTag)) return;

        const card = document.createElement('article');
        card.classList.add('menu__product__card');
        card.innerHTML = `
            <figure>
                <img src="${item.image}" alt="${item.name}" loading="lazy" />
                <figcaption>${item.tags[1] || ''}</figcaption>
                <div class="price-tag">&euro;${item.price.toFixed(2)}</div>
            </figure>
            <div class="text-container">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
            </div>
        `;
        container.appendChild(card);
    });
}

function renderSpecialItems() {
    const special = document.querySelector('.specials');
    if (!special) return;
    special.innerHTML = '';

    menuData.forEach(item => {
        if (item.tags.includes("special!")) {
            const specialCard = document.createElement('article');
            specialCard.classList.add('menu__product__card');
            specialCard.innerHTML = `
                <figure>
                    <img src="${item.image}" alt="${item.name}" loading="lazy" />
                    <figcaption>${item.tags[1] || ''}</figcaption>
                    <div class="price-tag">&euro;${item.price.toFixed(2)}</div>
                </figure>
                <div class="text-container">
                    <h2>${item.name}</h2>
                    <p>${item.description}</p>
                </div>
            `;
            special.appendChild(specialCard);
        }
    });
}

getMenuData();
