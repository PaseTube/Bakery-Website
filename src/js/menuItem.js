import { getMenuItemsData } from './fetch.js';

async function getMenuData() {
    const data = await getMenuItemsData();
    const container = document.querySelector('.menu-items');

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
        const card = document.createElement('article');
        card.classList.add('menu__card');

        card.innerHTML = `
            <figure>
                            <img src="${item.image}""
                                alt="Artisan Bread" loading="lazy" />
                            <figcaption>${item.tags[1]}</figcaption>
                            <div class="price-tag">&euro;${item.price.toFixed(2)}</div>
                        </figure>
                        <div class="text-container">
                            <h2>${item.name}</h2>
                            <p>${item.description}</p>
                        </div>
        `;

        container.appendChild(card);

        if (item.tags.includes("special!")) {
            const special = document.querySelector('.specials');

            if (!special) return;

            special.innerHTML = '';

            // If no data, show error message
            if (!data || data.length === 0) {
                const errorMsg = document.createElement('p');
                errorMsg.textContent = 'No dining data available. Please try again later.';
                errorMsg.style.color = 'red';
                errorMsg.style.fontSize = '40px';
                errorMsg.style.textAlign = 'center';
                special.appendChild(errorMsg);
                return;
            }
            const card = document.createElement('article');
            card.classList.add('menu__card');

            card.innerHTML = `
            <figure>
                            <img src="${item.image}""
                                alt="Artisan Bread" loading="lazy" />
                            <figcaption>${item.tags[1]}</figcaption>
                            <div class="price-tag">&euro;${item.price.toFixed(2)}</div>
                        </figure>
                        <div class="text-container">
                            <h2>${item.name}</h2>
                            <p>${item.description}</p>
                        </div>
        `;
        special.appendChild(card);
        }

    });



}


getMenuData();