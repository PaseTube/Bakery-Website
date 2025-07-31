export async function getData() {
  const baseUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000/favorites' 
    : '';

  const url = `${baseUrl}/api/favorites`;

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
    ? 'http://localhost:3000/dining' 
    : '';

  const url = `${baseUrl}/api/dining`;

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
