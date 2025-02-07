import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSetData } from "./FetchSetData/fetchSetData";
import { fetchPricesData } from "./FetchSetData/fetchPricesData";
import Slider from "./Slider/Slider";
import Rating from "./Rating/Rating";
import ScrollButton from "./ScrollButton/ScrollButton.jsx";
import "./PriceComparison.css";
import nosetImage from "./noset.jpg"; // Make sure to import the image

// Import new logo images
import PriceComparison_bricks from "./bricks.jpg"; // Import the bricks image
import PriceComparison_minifigure from "./minifigure.jpg"; // Import the minifigure image
import brand_lego_logo from "./brand_lego.svg"; // Updated import
import capicap_logo from "./capicap.png"; // Updated import
import sparkys_logo from "./Sparkys.png"; // Updated import
import museum_of_bricks_logo from "./museum_of_bricks_logo.png"; // Updated import
import kostickyshop_logo from "./kostickyshop.png"; // Updated import

function PriceComparison() {
  const [searchParams] = useSearchParams();
  const setId = searchParams.get("q");

  const [setData, setSetData] = useState(null);
  const [priceData, setPriceData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataFetched, setDataFetched] = useState(true); // Add state to track data availability
  const shopsContainerRef = useRef(null);

  useEffect(() => {
    if (!setId) {
      setError("No LEGO set ID provided.");
      setLoading(false);
      return;
    }

    const loadData = async () => {
      try {
        const [setDataResponse, priceDataResponse] = await Promise.all([
          fetchSetData(setId),
          fetchPricesData(setId),
        ]);

        if (!setDataResponse || !priceDataResponse)
          throw new Error("Set not found");

        setSetData(setDataResponse);
        setPriceData(priceDataResponse);
        setDataFetched(true);
      } catch (err) {
        setError("Sorry, we couldn't find the set.");
        setDataFetched(false);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, [setId]);

  // Fetch LEGO set data
  useEffect(() => {
    const loadSetData = async () => {
      try {
        const data = await fetchSetData(setId);
        if (!data) throw new Error("Set not found");
        setSetData(data);
        setDataFetched(true);
      } catch (err) {
        setError("Sorry, we couldn't find your set.");
        setDataFetched(false); // Set the flag to false if data is not fetched
      } finally {
        setLoading(false);
      }
    };

    loadSetData();
  }, [setId]);

  // Fetch price data
  useEffect(() => {
    const loadPriceData = async () => {
      try {
        const prices = await fetchPricesData(setId);
        if (!prices) throw new Error("Prices not found");
        setPriceData(prices);
      } catch (err) {
        setError("Sorry, we couldn't find prices for your set.");
        setDataFetched(false); // Set the flag to false if data is not fetched
      }
    };

    loadPriceData();
  }, [setId]);

  if (loading) return <p>Loading LEGO Set...</p>;

  // If data is not found, show fallback image and error message
  if (!dataFetched) {
    return (
      <div className="main_PriceComparison">
        <section
          className="set-not-found-hero"
          style={{ backgroundImage: `url(${nosetImage})` }}
        >
          <div className="set-not-found-hero-content">
            <h1>Sorry, we couldn't find your set</h1>
            <p>
              It seems like this set is not available right now. Please try
              again later!
            </p>
          </div>
        </section>
      </div>
    );
  }

  // Helper functions to extract data safely
  const getThemeDisplay = () => {
    const theme = setData?.theme;
    const themeGroup = setData?.themeGroup;
    const categoryName = setData?.extendedData?.cz_category_name;

    if (!theme && !categoryName) return null;
    const displayTheme = theme || categoryName;
    return themeGroup ? `${displayTheme}, ${themeGroup}` : displayTheme;
  };

  const getDimensions = () => {
    const dimensions = setData?.dimensions;
    if (!dimensions) return null;

    if (
      "height" in dimensions &&
      "width" in dimensions &&
      "depth" in dimensions
    ) {
      return `${dimensions.height} x ${dimensions.width} x ${dimensions.depth} cm`;
    }

    if (
      "dim_x" in dimensions &&
      "dim_y" in dimensions &&
      "dim_z" in dimensions
    ) {
      return `${dimensions.dim_x} x ${dimensions.dim_y} x ${dimensions.dim_z} cm`;
    }

    return null;
  };

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

  const lowestPrice = getLowestPrice();

  // Extract values safely
  const description =
    setData?.description && setData.description !== "-"
      ? setData.description
      : null;
  const themeDisplay = getThemeDisplay();
  const dimensionsDisplay = getDimensions();
  const weight = setData?.weigh || null;
  const year = setData?.year || null;
  const minAge = setData?.ages_range?.min || null;
  const pieces = setData?.pieces || null;
  const minifigures = setData?.minifigures_count || null;

  // Continue with normal page content rendering if data is fetched
  const shopDetails = [
    {
      id: "1",
      logo: brand_lego_logo,
      name: "Lego",
      url: "https://www.lego.cz",
      rating: "★★★★☆",
    },
    {
      id: "2",
      logo: capicap_logo,
      name: "CapiCap",
      url: "https://www.capi-cap.cz",
      rating: "★★★★☆",
    },
    {
      id: "3",
      logo: sparkys_logo,
      name: "Sparkys",
      url: "https://www.sparkys.cz",
      rating: "★★★★☆",
    },
    {
      id: "4",
      logo: museum_of_bricks_logo,
      name: "MuseumOfBricks",
      url: "https://eshop.museumofbricks.cz",
      rating: "★★★★☆",
    },
    {
      id: "5",
      logo: kostickyshop_logo,
      name: "KostickyShop",
      url: "https://www.kostickyshop.cz",
      rating: "★★★★☆",
    },
  ];

  const sortedShops = Object.keys(priceData?.result?.prices || {}).map(
    (key) => {
      const price = priceData?.result?.prices[key];
      return {
        shopIndex: key,
        price: price === "N/A" ? Infinity : parseFloat(price),
        isOutOfStock: price === "N/A" || price === undefined,
      };
    }
  );

  sortedShops.sort((a, b) => a.price - b.price);
  const shopsWithPrice = sortedShops.filter((shop) => !shop.isOutOfStock);
  const shopsWithoutPrice = sortedShops.filter((shop) => shop.isOutOfStock);

  const renderShopBlock = (shopIndex, logo, shopName, shopUrl, rating) => {
    let price = priceData?.result?.prices?.[shopIndex];

    // Clean up price formatting
    if (price) {
      price = price
        .replace(/\s/g, "")
        .replace(",", ".")
        .replace(/[^\d.]/g, ""); // Remove spaces, fix decimals
      price = price !== "" ? `${Math.floor(parseFloat(price))} Kč` : "N/A"; // Convert to integer and add "Kč"
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

  return (
    <>
      <div className="main_PriceComparison">
        <div className="Set_image_block_main">
          <Slider setId={setId} />
        </div>
        <div className="set_description">
          <div className="h1">
            LEGO {setData.id} - {setData.name}
          </div>
          <div className="set_description_container">
            <div className="rating-section">
              <Rating />
            </div>
            <div className="clearfix"></div>
            {description && (
              <div className="desc_text">
                <strong>Description:</strong>{" "}
                <div className="description">{description}</div>
              </div>
            )}
            {themeDisplay && (
              <div className="short_desc">
                <strong>Theme:</strong>{" "}
                <div className="theme">{themeDisplay}</div>
              </div>
            )}
            {year && (
              <div className="short_desc">
                <strong>Year Released:</strong>{" "}
                <div className="year">{year}</div>
              </div>
            )}

            {weight && (
              <div className="short_desc">
                <strong>Weight:</strong>{" "}
                <div className="weight">{weight} g</div>
              </div>
            )}

            {dimensionsDisplay && (
              <div className="short_desc">
                <strong>Dimensions:</strong>{" "}
                <div className="dimensions">{dimensionsDisplay}</div>
              </div>
            )}

            {minAge && (
              <div className="short_desc">
                <strong>Ages:</strong> <div className="ages">{minAge}+</div>
              </div>
            )}

            {minifigures && (
              <div className="short_desc">
                <strong>Minifigures:</strong>{" "}
                <div className="minifigures">{minifigures}</div>
              </div>
            )}

            <div className="short_desc">Items contains of:</div>
            <div className="ico">
              <div className="bricks">
                <img
                  src={PriceComparison_bricks}
                  alt="brick image"
                  className="brk"
                />
                <p>{setData.pieces}</p>
              </div>
              <div className="minifigs">
                <img
                  src={PriceComparison_minifigure}
                  alt="minifig image"
                  className="mnfg"
                />
                <p>{setData.minifigures_count}</p>
              </div>
            </div>
            <div className="best_deal">
              Best deal:
              <p className="bd">{lowestPrice}</p>
              <ScrollButton targetRef={shopsContainerRef} />
            </div>
          </div>
        </div>
      </div>

      <div className="shops_container" ref={shopsContainerRef}>
        <h2>Offers</h2>
        {shopsWithPrice.map((shop) => {
          const shopInfo = shopDetails.find((s) => s.id === shop.shopIndex);
          return renderShopBlock(
            shop.shopIndex,
            shopInfo.logo,
            shopInfo.name,
            shopInfo.url,
            shopInfo.rating
          );
        })}
        {shopsWithoutPrice.map((shop) => {
          const shopInfo = shopDetails.find((s) => s.id === shop.shopIndex);
          return renderShopBlock(
            shop.shopIndex,
            shopInfo.logo,
            shopInfo.name,
            shopInfo.url,
            shopInfo.rating
          );
        })}
      </div>
    </>
  );
}

export default PriceComparison;
