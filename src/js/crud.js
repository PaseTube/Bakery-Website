// Check if authorized
if (sessionStorage.getItem("auth") !== "granted") {
  alert("Unauthorized access!");
  window.location.href = "login.html";
}

import { getMenuItemsData, getApiUrl } from './fetch.js';

// Helper functions
function highlightError(inputEl) {
  inputEl.style.borderColor = "red";
  inputEl.focus();
}

function clearErrors(inputs) {
  inputs.forEach(i => i.style.borderColor = "#ccc");
}

// Fetch and render products
async function fetchProducts() {
  const products = await getMenuItemsData();
  const list = document.querySelector('.product-list');
  list.innerHTML = "";

  products.forEach(p => {
    const li = document.createElement("li");
    li.innerHTML = `
      <h3>${p.name}</h3>
      <p>Price: &euro;${p.price.toFixed(2)}</p>
      ${p.image ? `<img src="${p.image}" alt="${p.name}">` : ""}
      ${p.description ? `<p>${p.description}</p>` : ""}
      ${p.tags ? `<p class="tags">${Array.isArray(p.tags) ? p.tags.join(", ") : p.tags}</p>` : ""}
      <button class="btn delete-btn" data-id="${p.id}">Delete</button>
      <button class="btn edit-btn" 
        data-id="${p.id}" 
        data-name="${p.name}" 
        data-price="${p.price}" 
        data-image="${p.image}" 
        data-description="${p.description}" 
        data-tags="${p.tags}">
        Edit
      </button>
    `;
    list.appendChild(li);
  });

  // Attach delete handlers with confirmation
  document.querySelectorAll(".delete-btn").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      const id = e.target.dataset.id;
      const confirmed = confirm("Are you sure you want to delete this product?");
      if (!confirmed) return;

      await fetch(`${getApiUrl('products')}/${id}`, { method: "DELETE" });
      fetchProducts();
    });
  });

  // Attach edit handlers
  document.querySelectorAll(".edit-btn").forEach(btn => {
    btn.addEventListener("click", async (e) => {
      const { id, name, price, image, description, tags } = e.target.dataset;
      const updatedProduct = {
        name: prompt("Name:", name),
        price: parseFloat(prompt("Price:", price)),
        image: prompt("Image URL:", image),
        description: prompt("Description:", description),
        tags: prompt("Tags (comma separated):", tags).split(",").map(t => t.trim())
      };

      if (!updatedProduct.name) return alert("Name is required!");
      if (isNaN(updatedProduct.price) || updatedProduct.price <= 0) return alert("Price must be positive!");

      await fetch(`${getApiUrl('products')}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct)
      });
      fetchProducts();
    });
  });
}

// Handle Add Product Form
document.querySelector(".add-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nameInput = document.querySelector(".name");
  const priceInput = document.querySelector(".price");
  const imageInput = document.querySelector(".image");
  const descInput = document.querySelector(".description");
  const tagsInput = document.querySelector(".tags");

  clearErrors([nameInput, priceInput]);

  if (!nameInput.value.trim()) return highlightError(nameInput);
  if (!priceInput.value || parseFloat(priceInput.value) <= 0) return highlightError(priceInput);

  const newProduct = {
    name: nameInput.value.trim(),
    price: parseFloat(priceInput.value),
    image: imageInput.value.trim(),
    description: descInput.value.trim(),
    tags: tagsInput.value ? tagsInput.value.split(",").map(t => t.trim()) : []
  };

  try {
    await fetch(getApiUrl('products'), {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct)
    });

    // Clear form
    nameInput.value = "";
    priceInput.value = "";
    imageInput.value = "";
    descInput.value = "";
    tagsInput.value = "";

    alert("Product added successfully!");
    fetchProducts();
  } catch (err) {
    console.error(err);
    alert("Failed to add product.");
  }
});

// Initial load
fetchProducts();
