fetch('http://localhost:3000/favorites')
  .then(response => response.json())
  .then(data => {
    const list = document.getElementById('product-list');

    data.forEach(product => {
      const item = document.createElement('li');
      const price = product.price.toFixed(2).replace('.', ',');
      item.textContent = `${product.name} - €${price}`;
      list.appendChild(item);
    });
  }).catch(error => {
    console.error('Error fetching products:', error);
  });