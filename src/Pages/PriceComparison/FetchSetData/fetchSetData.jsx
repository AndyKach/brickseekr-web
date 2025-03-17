// fetchSetData.jsx
export const fetchSetData = async (setId) => {
  const url = `https://ibex-smart-smoothly.ngrok-free.app/sets/${setId}/getData`; // New API endpoint returns both details and prices
  console.log(`Fetching data for set ID: ${setId}`);

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "ngrok-skip-browser-warning": "true",
      },
    });

    console.log("Response Status:", response.status);
    const data = await response.json();

    if (response.ok) {
      // Expect data.result to include both { legoset: {...}, prices: {...} }
      return data.result;
    } else {
      throw new Error(data.meta.message || "Error fetching data");
    }
  } catch (error) {
    console.error("API Error:", error);
    throw new Error(error.message || "Failed to fetch data");
  }
};
