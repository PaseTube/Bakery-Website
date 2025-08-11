export async function getData() {
  const baseUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000' 
    : '';

  const url = process.env.NODE_ENV === 'development' 
    ? `${baseUrl}/favorites`
    : `${baseUrl}/api/favorites`;

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
  const baseUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000' 
    : '';

  const url = process.env.NODE_ENV === 'development' 
    ? `${baseUrl}/dining`
    : `${baseUrl}/api/dining`;

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



export async function getBakeryData() {
  const baseUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000' 
    : '';

  const url = process.env.NODE_ENV === 'development' 
    ? `${baseUrl}/bakeryGoods`
    : `${baseUrl}/api/bakeryGoods`;

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


export async function getMenuItemsData() {
  const baseUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000' 
    : '';

  const url = process.env.NODE_ENV === 'development' 
    ? `${baseUrl}/menuItems`
    : `${baseUrl}/api/menuItems`;

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