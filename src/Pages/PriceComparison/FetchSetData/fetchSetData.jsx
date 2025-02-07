export const fetchSetData = async (setId) => {
  const url = `https://ibex-smart-smoothly.ngrok-free.app/sets/${setId}/getData`; // API URL
  console.log(`Fetching data for set ID: ${setId}`);

  try {
    const response = await fetch(url, {
      method: "GET", // Default GET method, but explicitly mentioned here
      headers: {
        "ngrok-skip-browser-warning": "true", // Skip ngrok browser warning
      },
    });

    // Log the status and response for debugging purposes
    console.log("Response Status:", response.status);
    const data = await response.json(); // Parse the JSON response

    if (response.ok) {
      return data.result; // Return the relevant data if successful
    } else {
      throw new Error(data.meta.message || "Error fetching data");
    }
  } catch (error) {
    console.error("API Error:", error); // Log the error to the console
    throw new Error(error.message || "Failed to fetch data");
  }
};
