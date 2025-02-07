const getLowestPrice = () => {
  if (!priceData?.result?.prices) return "N/A";

  // Extract, clean, and convert prices to integers
  const validPrices = Object.values(priceData.result.prices)
    .map((price) =>
      price
        .replace(/\s/g, "")
        .replace(",", ".")
        .replace(/[^\d.]/g, "")
    ) // Remove spaces, fix decimal points
    .map((price) => parseFloat(price)) // Convert to float
    .filter((price) => !isNaN(price)) // Ensure it's a valid number
    .map((price) => Math.floor(price)); // Convert to an integer (remove decimals)

  if (validPrices.length === 0) return "N/A"; // No valid prices

  return `${Math.min(...validPrices)} Kč`; // Return the lowest integer price with "Kč"
};
