import { fetchFromMultipleBases, getBaseUrls } from './fetch.js';

// ✅ Redirect to login if not authorized
if (sessionStorage?.getItem("auth") !== "granted") {
  alert("Unauthorized access!");
  window.location.href = "login.html";
}

// Helper for base URL
async function getBaseUrl(endpoint) {
  const bases = await getBaseUrls()?.catch(() => []);
  if (!bases?.length) {
    console.error("No base URLs found");
    return "";
  }

  const base = bases[0].replace(/\/+$/, ""); // remove trailing slash
  return `${base}/api/${endpoint}`;
}

// Predefined tags
const predefinedTags = [
  "bread", "artisan", "savory", "vegan", "special!",
  "pastry", "buttery", "breakfast", "sweet", "dessert",
  "chocolate", "fruit", "snack", "cake", "citrus"
];

// Helpers
function highlightError(inputEl) {
  if (!inputEl) return;
  if (inputEl?.style) inputEl.style.borderColor = "red";
  inputEl?.focus?.();
}

function clearErrors(inputs) {
  inputs?.forEach?.(i => i.style.borderColor = "#ccc");
}

// Populate tags dropdown
function populateTagsDropdown() {
  const tagsSelect = document.getElementById("tags");
  if (!tagsSelect) return;

  predefinedTags?.forEach?.(tag => {
    const option = document.createElement("option");
    option.value = tag;
    option.textContent = tag;
    tagsSelect.appendChild(option);
  });
}

// Fetch and render products
async function fetchProducts() {
  const bases = await getBaseUrls()?.catch(() => []);
  const products = await fetchFromMultipleBases?.('products', bases)?.catch(() => []);

  const list = document.querySelector('.product-list');
  if (!list) return;

  list.innerHTML = ""; // Clear old list

  products?.forEach?.(p => {
    const li = document.createElement("li");

    const h3 = document.createElement("h3");
    h3.textContent = p?.name ?? "Unnamed Product";

    const price = document.createElement("p");
    price.textContent = `Price: €${p?.price?.toFixed?.(2) ?? "N/A"}`;

    const desc = document.createElement("p");
    if (p?.description) desc.textContent = p.description;

    const img = document.createElement("img");
    if (p?.image) {
      img.src = p.image;
      img.alt = p?.name ?? "Product image";
    }

    const tagsP = document.createElement("p");
    tagsP.className = "tags";
    if (p?.tags) {
      tagsP.textContent = Array.isArray(p.tags) ? p.tags.join(", ") : p.tags;
    }

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", async () => {
      if (!confirm("Are you sure you want to delete this product?")) return;
      const url = await getBaseUrl('products');
      if (!url) return;
      await fetch(`${url}/${p?.id}`, { method: "DELETE" }).catch(console.error);
      fetchProducts();
    });

    // Edit button
    const editBtn = document.createElement("button");
    editBtn.className = "btn edit-btn";
    editBtn.textContent = "Edit";
    editBtn.addEventListener("click", async () => {
      const updatedTagsArray = prompt(
        "Tags (comma separated):",
        Array.isArray(p?.tags) ? p.tags.join(", ") : p?.tags ?? ""
      )
        ?.split(",")
        ?.map(t => t.trim())
        ?.filter(t => t);
      const updatedProduct = {
        name: prompt("Name:", p?.name ?? "")?.trim(),
        price: parseFloat(prompt("Price:", p?.price ?? "0")),
        image: prompt("Image URL:", p?.image ?? "")?.trim(),
        description: prompt("Description:", p?.description ?? "")?.trim(),
        tagArray: updatedTagsArray,
        tags: updatedTagsArray.join(',')
      };

      if (!updatedProduct?.name) return alert("Name is required!");
      if (isNaN(updatedProduct?.price) || updatedProduct?.price <= 0)
        return alert("Price must be positive!");

      const url = await getBaseUrl('products');
      if (!url) return;

      await fetch(`${url}/${p?.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedProduct)
      }).catch(console.error);

      fetchProducts();
    });

    li.append(h3, price);
    if (p?.image) li.append(img);
    if (p?.description) li.append(desc);
    if (p?.tags) li.append(tagsP);
    li.append(deleteBtn, editBtn);
    list.appendChild(li);
  });
}

// Add product form
const form = document.querySelector(".add-form");
form?.addEventListener("submit", async (e) => {
  e.preventDefault();

  const nameInput = document.querySelector(".name");
  const priceInput = document.querySelector(".price");
  const imageInput = document.querySelector(".image");
  const descInput = document.querySelector(".description");
  const tagsSelect = document.querySelector(".tags");

  if (!nameInput || !priceInput || !imageInput || !descInput || !tagsSelect) {
    console.error("Form element(s) missing.");
    return;
  }

  clearErrors([nameInput, priceInput]);

  if (!nameInput.value.trim()) return highlightError(nameInput);
  const priceValue = parseFloat(priceInput.value);
  if (isNaN(priceValue) || priceValue <= 0) return highlightError(priceInput);

  const selectedTags = [...(tagsSelect?.selectedOptions ?? [])].map(o => o.value);

  const newProduct = {
    name: nameInput.value.trim(),
    price: priceValue,
    image: imageInput.value.trim(),
    description: descInput.value.trim(),
    tagArray: selectedTags // <-- matches backend
  };

  try {
    const url = await getBaseUrl('products');
    if (!url) return;

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

    console.log("Product added successfully!");
    fetchProducts();
  } catch (err) {
    console.error("Failed to add product.", err);
  }
});

// Initialize
populateTagsDropdown();
fetchProducts();
