import { getMenuItemsData } from './fetch.js';

async function getMenuData() {
    const data = await getMenuItemsData();
    const container = document.querySelector('.menu-items');
    const special = document.querySelector('.specials');

    if (!container) return;
    container.innerHTML = '';

    if (special) {
        special.innerHTML = '';
    }

    if (!data || data.length === 0) {
        const errorMsg = document.createElement('p');
        errorMsg.textContent = 'No dining data available. Please try again later.';
        errorMsg.style.color = 'red';
        errorMsg.style.fontSize = '40px';
        errorMsg.style.textAlign = 'center';
        container.appendChild(errorMsg);
        return;
    }

    data.forEach(item => {
        // Maak standaard kaart
        const card = document.createElement('article');
        card.classList.add('menu__product__card');
        card.innerHTML = `
            <figure>
                <img src="${item.image}" alt="Artisan Bread" loading="lazy" />
                <figcaption>${item.tags[1]}</figcaption>
                <div class="price-tag">&euro;${item.price.toFixed(2)}</div>
            </figure>
            <div class="text-container">
                <h2>${item.name}</h2>
                <p>${item.description}</p>
            </div>
        `;
        container.appendChild(card);

        
        if (item.tags.includes("special!") && special) {
            const specialCard = document.createElement('article');
            specialCard.classList.add('menu__product__card');
            specialCard.innerHTML = `
                <figure>
                    <img src="${item.image}" alt="Artisan Bread" loading="lazy" />
                    <figcaption>${item.tags[1]}</figcaption>
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
