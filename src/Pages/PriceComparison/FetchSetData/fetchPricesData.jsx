export const fetchPricesData = async (setId) => {
  try {
    const response = await fetch(
      `https://ibex-smart-smoothly.ngrok-free.app/sets/${setId}/getPrices`,
      {
        method: "GET",
        headers: {
          "ngrok-skip-browser-warning": "true", // Add this header to skip the browser warning
        },
      }
    );

    // Check if the response is OK (status code 200)
    if (!response.ok) {
      throw new Error(`Error: ${response.status} ${response.statusText}`);
    }

    // Attempt to parse JSON
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching prices data:", error);
    throw error; // Re-throw the error so that it can be handled elsewhere
  }
};
