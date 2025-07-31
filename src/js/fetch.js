// Updated API functions for production/development
export async function getData() {
  // Use different URLs for development vs production
  const baseUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000' 
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
  // Use different URLs for development vs production
  const baseUrl = process.env.NODE_ENV === 'development' 
    ? 'http://localhost:3000' 
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