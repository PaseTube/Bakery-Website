// Fetches and creates element for the menu products (favorites)
export async function getData() {
  const url = '/favorites';
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;

  } catch (error) {
    console.error('Error fetching data:', error.message);
    return [];
  }
}

export async function getDiningData() {
  const url = '/dining';
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    return json;

  } catch (error) {
    console.error('Error fetching data:', error.message);
    return [];
  }
}
