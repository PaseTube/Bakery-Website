

export async function getData() {
  const url = getApiUrl('favorites');

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;

  } catch (error) {
    console.error('Error fetching favorites data:', error.message);
    return [];
  }
}

export async function getDiningData() {
  const url = getApiUrl('dining');

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;

  } catch (error) {
    console.error('Error fetching dining data:', error.message);
    return [];
  }
}

export async function getBakeryData() {
  const url = getApiUrl('bakeryGoods');

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;

  } catch (error) {
    console.error('Error fetching bakery data:', error.message);
    return [];
  }
}

export async function getMenuItemsData() {
  const url = getApiUrl('products');

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;

  } catch (error) {
    console.error('Error fetching menu items data:', error.message);
    return [];
  }
}

export async function getExploreItemsData() {
  const url = getApiUrl('exploreItems');

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;

  } catch (error) {
    console.error('Error fetching explore items data:', error.message);
    return [];
  }
}

export function getApiUrl(endpoint) {
  const baseUrl =
    process.env.NODE_ENV === 'development'
      ? 'http://localhost:3000' && 'http://localhost:5206/api'
      : '';

  // Combineer baseUrl met het juiste endpoint
  return process.env.NODE_ENV === 'development'
    ? `${baseUrl}/${endpoint}`
    : `${baseUrl}/api/${endpoint}`;
}
