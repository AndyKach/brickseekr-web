// PriceComparison.jsx
import React, { useState, useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchSetData } from "./FetchSetData/fetchSetData";
import Slider from "./Slider/Slider";
import Rating from "./Rating/Rating";
import ScrollButton from "./ScrollButton/ScrollButton.jsx";
import "./PriceComparison.css";
import nosetImage from "./noset.jpg";

// Import logo images
import brand_lego_logo from "./brand_lego.svg";
import capicap_logo from "./capicap.png";
import sparkys_logo from "./Sparkys.png";
import museum_of_bricks_logo from "./museum_of_bricks_logo.png";
import kostickyshop_logo from "./kostickyshop.png";

// Import additional images
import PriceComparison_bricks from "./bricks.jpg";
import PriceComparison_minifigure from "./minifigure.jpg";

function PriceComparison() {
  const [searchParams] = useSearchParams();
  const setId = searchParams.get("q");

  // "data" will contain { legoset, prices }
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [dataFetched, setDataFetched] = useState(true);
  const shopsContainerRef = useRef(null);

  useEffect(() => {
    if (!setId) {
      setError("No LEGO set ID provided.");
      setLoading(false);
      return;
    }

    const loadData = async () => {
      try {
        const result = await fetchSetData(setId);
        if (!result || !result.legoset || !result.prices)
          throw new Error("Set not found");
        setData(result);
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

  if (loading) return <p>Loading LEGO Set...</p>;

  if (!dataFetched || !data) {
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

  // Destructure the result returned from fetchSetData
  const { legoset, prices } = data;

  const description =
    legoset.description && legoset.description !== "-"
      ? legoset.description
      : null;

  const getThemeDisplay = () => {
    const theme = legoset.theme;
    const themeGroup = legoset.themeGroup;
    const categoryName = legoset.extendedData?.cz_category_name;
    if (!theme && !categoryName) return null;
    const displayTheme = theme || categoryName;
    return themeGroup ? `${displayTheme}, ${themeGroup}` : displayTheme;
  };

  const themeDisplay = getThemeDisplay();

  const getDimensions = () => {
    const dimensions = legoset.dimensions;
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

  const dimensionsDisplay = getDimensions();
  const year = legoset.year;
  const weight = legoset.weigh;
  const minAge = legoset.ages_range?.min;
  const pieces = legoset.pieces;
  const minifigures = legoset.minifigures_count;

  // Get the lowest price from the prices object
  const getLowestPrice = () => {
    if (!prices) return "N/A";
    const validPrices = Object.values(prices)
      .map((p) =>
        p.price
          .replace(/\s/g, "")
          .replace(",", ".")
          .replace(/[^\d.]/g, "")
      )
      .map((p) => parseFloat(p))
      .filter((p) => !isNaN(p))
      .map((p) => Math.floor(p));
    if (validPrices.length === 0) return "N/A";
    return `${Math.min(...validPrices)} Kč`;
  };

  const lowestPrice = getLowestPrice();

  const shopDetails = [
    {
      id: "1",
      logo: brand_lego_logo,
      name: "Lego",
      url: "https://www.lego.cz",
      rating: "★★★★★",
    },
    {
      id: "2",
      logo: capicap_logo,
      name: "CapiCap",
      url: "https://www.capi-cap.cz",
      rating: "★★★★★",
    },
    {
      id: "3",
      logo: sparkys_logo,
      name: "Sparkys",
      url: "https://www.sparkys.cz",
      rating: "★★★★★",
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

  const sortedShops = Object.keys(prices).map((key) => {
    const shopPriceStr = prices[key].price;
    return {
      shopIndex: key,
      price:
        shopPriceStr === "N/A"
          ? Infinity
          : parseFloat(
              shopPriceStr
                .replace(/\s/g, "")
                .replace(",", ".")
                .replace(/[^\d.]/g, "")
            ),
      isOutOfStock: shopPriceStr === "N/A" || shopPriceStr === undefined,
    };
  });

  sortedShops.sort((a, b) => a.price - b.price);
  const shopsWithPrice = sortedShops.filter((shop) => !shop.isOutOfStock);
  const shopsWithoutPrice = sortedShops.filter((shop) => shop.isOutOfStock);

  const renderShopBlock = (shopIndex, logo, shopName, shopUrl, rating) => {
    let shopPrice = prices[shopIndex]?.price;
    if (shopPrice) {
      shopPrice = shopPrice
        .replace(/\s/g, "")
        .replace(",", ".")
        .replace(/[^\d.]/g, "");
      shopPrice =
        shopPrice !== "" ? `${Math.floor(parseFloat(shopPrice))} Kč` : "N/A";
    }
    const priceExists = shopPrice && shopPrice !== "N/A";
    const isOutOfStock = shopPrice === "N/A" || shopPrice === undefined;

    return (
      <div className="shop_block" key={shopIndex}>
        <img src={logo} alt={`${shopName} Logo`} className="shop_logo" />
        <div className="shop_info">
          <div className="rating_info">
            <p>Rating: {rating}</p>
          </div>
        </div>
        {priceExists && <p className="shop_price">{shopPrice}</p>}
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
          <div className="h1">{`LEGO ${legoset.id} - ${legoset.name}`}</div>
          <div className="set_description_container">
            <div className="rating-section">
              <Rating value={legoset.rating} />
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
                <div className="year">{legoset.year}</div>
              </div>
            )}
            {weight && (
              <div className="short_desc">
                <strong>Weight:</strong>{" "}
                <div className="weight">{legoset.weigh} g</div>
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
                <strong>Ages:</strong>{" "}
                <div className="ages">{legoset.ages_range?.min}+</div>
              </div>
            )}
            {minifigures !== null && (
              <div className="short_desc">
                <strong>Minifigures:</strong>{" "}
                <div className="minifigures">{legoset.minifigures_count}</div>
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
                <p>{pieces}</p>
              </div>
              <div className="minifigs">
                <img
                  src={PriceComparison_minifigure}
                  alt="minifig image"
                  className="mnfg"
                />
                <p>{legoset.minifigures_count}</p>
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
