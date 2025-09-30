// fetch.js

// Helper function to fetch from multiple base URLs
export async function fetchFromMultipleBases(endpoint) {
  const bases = await getBaseUrls();

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
export async function getBaseUrls() {
  // In Vite gebruik je import.meta.env in plaats van process.env
  if (import.meta.env.MODE === 'development') {
    return [
      'http://localhost:5206/api'
    ];
  } else {
    return [
      'https://production-server'
    ];
  }
}

// Convenience function: build a URL for one base
export async function getBaseUrl(endpoint) {
  const bases = await getBaseUrls();
  return `${bases[0]}/${endpoint}`;
}

// Extra helpers (optioneel)
export async function getData() {
  return fetchFromMultipleBases('favorites');
}

export async function getDiningData() {
  return fetchFromMultipleBases('dining');
}

export async function getBakeryData() {
  return fetchFromMultipleBases('bakeryGoods');
}

export async function getMenuItemsData() {
  return fetchFromMultipleBases('products');
}

export async function getExploreItemsData() {
  return fetchFromMultipleBases('exploreItems');
}
