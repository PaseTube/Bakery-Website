// fetch.js

// Helper function to fetch from multiple base URLs
export async function fetchFromMultipleBases(endpoint) {
  const bases = await getBaseUrls();

  for (const base of bases) {
    const url = `${base}/${endpoint}`;
    if (!url) {
      console.warn('No URL provided for fetch. Skipping.');
      continue;
    }
    try {
      const response = await fetch(url);
      if (response?.ok) {
        return await response?.json?.();
      }
    } catch (err) {
      console.warn(`Could not fetch from ${base}:`, err?.message);
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
  const url = `${bases?.[0]}/${endpoint}`;
  if (!url) {
    console.warn('No URL provided for getBaseUrl.');
    return '';
  }
  return url;
}

// Extra helpers (optioneel)
export async function getData() {
  return fetchFromMultipleBases('favorites');
}

export async function getDiningData() {
  return fetchFromMultipleBases('diningItems');
}

export async function getBakeryData() {
  return fetchFromMultipleBases('bakeryItems');
}

export async function getMenuItemsData() {
  return fetchFromMultipleBases('products');
}

export async function getExploreItemsData() {
  return fetchFromMultipleBases('exploreItems');
}
