import { getDiningData } from './fetch.js';

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

renderDiningData();
