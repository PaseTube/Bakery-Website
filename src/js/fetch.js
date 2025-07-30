async function getData() {
  const url = 'http://localhost:3000/favorites';
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    const list = document.querySelector('#product-card');

    if (!list) {
      console.error('Element with ID "product-list" not found in the DOM.');
      return;
    }

    if (json.length === 0) {
      list.innerHTML = '<li>No favorite products found.</li>';
      return;
    }

    json.forEach(product => {
      const card = document.createElement('div');
      card.classList.add('product-card');

      const img = document.createElement('img');
      img.src = product.image;
      img.alt = product.name;

      const name = document.createElement('h3');
      name.textContent = product.name;

      const price = document.createElement('p');
      price.textContent = `€${product.price.toFixed(2).replace('.', ',')}`;
      price.classList.add('product-price');

      // Assemble the card
      card.appendChild(img);
      card.appendChild(name);
      card.appendChild(price);

      list.appendChild(card);
    });

  } catch (error) {
    console.error('Error fetching data:', error.message);
  }
}
getData();