export const formatShopPrice = (price) => {
  if (!price) return "N/A";

  price = price
    .replace(/\s/g, "")
    .replace(",", ".")
    .replace(/[^\d.]/g, ""); // Remove spaces, fix decimals
  return price !== "" ? `${Math.floor(parseFloat(price))} Kč` : "N/A"; // Convert to integer and add "Kč"
};
