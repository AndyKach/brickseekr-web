export const getSortedPrices = (priceData) => {
  if (!priceData?.result?.prices) return [];

  return Object.entries(priceData.result.prices)
    .map(([shopIndex, price]) => {
      // Clean and convert price to number
      const cleanedPrice = price
        .replace(/\s/g, "")
        .replace(",", ".")
        .replace(/[^\d.]/g, "");
      const numericPrice = parseFloat(cleanedPrice);

      return isNaN(numericPrice)
        ? null
        : { shopIndex, price: `${Math.floor(numericPrice)} Kč`, numericPrice };
    })
    .filter((item) => item !== null) // Remove invalid entries
    .sort((a, b) => a.numericPrice - b.numericPrice); // Sort prices from lowest to highest
};
