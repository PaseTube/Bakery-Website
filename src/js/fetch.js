// Helper function to fetch from multiple base URLs
async function fetchFromMultipleBases(endpoint, bases) {
  for (const base of bases) {
    try {
      const response = await fetch(`${base}/${endpoint}`);
      if (response.ok) {
        return await response.json();
      }
    } catch (err) {
      console.warn(`Could not fetch from ${base}:`, err.message);
    }
  }
  // If none worked, return empty array
  return [];
}

// Determine the bases depending on environment
function getBaseUrls() {
  if (process.env.NODE_ENV === 'development') {
    return ['http://localhost:3000', 'http://localhost:5206/api'];
  } else {
    return ['https://production-server'];
  }
}

// Keep original function names
export async function getData() {
  const bases = getBaseUrls();
  return fetchFromMultipleBases('favorites', bases);
}

export async function getDiningData() {
  const bases = getBaseUrls();
  return fetchFromMultipleBases('dining', bases);
}

export async function getBakeryData() {
  const bases = getBaseUrls();
  return fetchFromMultipleBases('bakeryGoods', bases);
}

export async function getMenuItemsData() {
  const bases = getBaseUrls();
  return fetchFromMultipleBases('products', bases);
}

export async function getExploreItemsData() {
  const bases = getBaseUrls();
  return fetchFromMultipleBases('exploreItems', bases);
}

// Optional: you can remove your old getApiUrl function now
