// Check if authorized
if (sessionStorage?.getItem("auth") == "granted") {
  alert("Unauthorized access!");
  window.location.href = "login.html";
}

import { fetchFromMultipleBases, getBaseUrls } from './fetch.js';

// Helper for base URL
async function getBaseUrl(endpoint) {
  const bases = await getBaseUrls();
  return `${bases[0]}/${endpoint}`;
}

// Predefined tags
const predefinedTags = [
  "bread", "artisan", "savory", "vegan", "special!", 
  "pastry", "buttery", "breakfast", "sweet", "dessert",
  "chocolate", "fruit", "snack", "cake", "citrus"
];

// Helpers
function highlightError(inputEl) {
  inputEl.style.borderColor = "red";
  inputEl.focus();
}
function clearErrors(inputs) {
  inputs.forEach(i => i.style.borderColor = "#ccc");
}

// Populate tags dropdown
function populateTagsDropdown() {
  const tagsSelect = document.getElementById("tags");
  predefinedTags.forEach(tag => {
    const option = document.createElement("option");
    option.value = tag;
    option.textContent = tag;
    tagsSelect.appendChild(option);
  });
}

// Fetch and render products
async function fetchProducts() {
  const bases = await getBaseUrls();
  const products = await fetchFromMultipleBases('products', bases);

  const list = document.querySelector('.product-list');
  list.innerHTML = ""; // clear old list

  products.forEach(p => {
    const li = document.createElement("li");

    const h3 = document.createElement("h3");
    h3.textContent = p.name;

    const price = document.createElement("p");
    price.textContent = `Price: €${p.price.toFixed(2)}`;

    const desc = document.createElement("p");
    if (p.description) desc.textContent = p.description;

    const img = document.createElement("img");
    if (p.image) {
      img.src = p.image;
      img.alt = p.name;
    }

    const tagsP = document.createElement("p");
    tagsP.className = "tags";
    if (p.tags) {
      tagsP.textContent = Array.isArray(p.tags) ? p.tags.join(", ") : p.tags;
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", async () => {
      if (!confirm("Are you sure you want to delete this product?")) return;
      const url = await getBaseUrl('products');
      await fetch(`${url}/${p.id}`, { method: "DELETE" });
      fetchProducts();
    });

    const editBtn = document.createElement("button");
    editBtn.className = "btn edit-btn";
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", async () => {
      const updatedProduct = {
        name: prompt("Name:", p.name),
        price: parseFloat(prompt("Price:", p.price)),
        image: prompt("Image URL:", p.image),
        description: prompt("Description:", p.description),
        tags: prompt("Tags (comma separated):", p.tags).split(",").map(t => t.trim())
      };

      if (!updatedProduct.name) return alert("Name is required!");
      if (isNaN(updatedProduct.price) || updatedProduct.price <= 0) return alert("Price must be positive!");

      const url = await getBaseUrl('products');
      await fetch(`${url}/${p.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct)
      });
      fetchProducts();
    });

    // Append all
    li.append(h3, price);
    if (p.image) li.append(img);
    if (p.description) li.append(desc);
    if (p.tags) li.append(tagsP);
    li.append(deleteBtn, editBtn);
    list.appendChild(li);
  });
}

// Add product form
document.querySelector(".add-form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const nameInput = document.querySelector(".name");
  const priceInput = document.querySelector(".price");
  const imageInput = document.querySelector(".image");
  const descInput = document.querySelector(".description");
  const tagsSelect = document.querySelector(".tags");

  clearErrors([nameInput, priceInput]);

  if (nameInput?.value.trim()) return highlightError(nameInput);
  if (parseFloat(priceInput?.value) <= 0) return highlightError(priceInput);

  const selectedTags = [...tagsSelect.selectedOptions].map(option => option.value);

  const newProduct = {
    name: nameInput.value.trim(),
    price: parseFloat(priceInput.value),
    image: imageInput.value.trim(),
    description: descInput.value.trim(),
    tags: selectedTags
  };

  try {
    const url = await getBaseUrl('products');
    await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newProduct)
    });

    // Clear form
    nameInput.value = "";
    priceInput.value = "";
    imageInput.value = "";
    descInput.value = "";
    tagsSelect.value = "";

    // Instead of alert, you could show an inline message here
    console.log("Product added successfully!");
    fetchProducts();
  } catch (err) {
    console.error("Failed to add product.", err);
  }
});

// Initialize
populateTagsDropdown();
fetchProducts();
