import React from "react";
import { formatShopPrice } from "./formatShopPrice";

export const renderShopBlock = (
  shopIndex,
  logo,
  shopName,
  shopUrl,
  rating,
  priceData
) => {
  let price = priceData?.result?.prices?.[shopIndex];

  if (price) {
    price = formatShopPrice(price);
  }

  const priceExists = price && price !== "N/A";
  const isOutOfStock = price === "N/A" || price === undefined;

  return (
    <div className="shop_block" key={shopIndex}>
      <img src={logo} alt={`${shopName} Logo`} className="shop_logo" />
      <div className="shop_info">
        <div className="delivery_info">
          <p>Delivery: Free</p>
        </div>
        <div className="rating_info">
          <p>Rating: {rating}</p>
        </div>
      </div>
      <div className="stock_status">
        {isOutOfStock ? (
          <div className="shop_status out_of_stock">Out Of Stock</div>
        ) : (
          <div className="shop_status in_stock">In Stock</div>
        )}
      </div>
      {priceExists && <p className="shop_price">{price}</p>}
      {!isOutOfStock && priceExists && (
        <a
          href={shopUrl}
          className="shop_button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit Shop
        </a>
      )}
      {(isOutOfStock || !priceExists) && (
        <div className="shop_button_placeholder"></div>
      )}
    </div>
  );
};
