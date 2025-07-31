import { getDiningData } from './fetch.js';


async function renderDiningData() {
    const data = await getDiningData();
    const container = document.querySelector('.Test-json')


    if(!container) return;

    data.forEach(item => {
        const div = document.createElement('div');
        div.innerHTML = `
        <img loading="lazy" src=${item.image} alt="Rustic artisan bread loaf on wooden board"/>
        <h3>${item.name}</h3>
        `
        container.appendChild(div);
    });

}

renderDiningData();