import { Link } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
// import { fetchSetData } from "/components/API/apiService";
import Slider from "./Slider/Slider";
// import ImageDots from "./ImageDots/ImageDots";
import Rating from "./Rating/Rating";
import ScrollButton from "./ScrollButton/ScrollButton.jsx";
import { fetchSetData } from "./FetchSetData/fetchSetData.jsx";
import "./PriceComparison.css";
import PriceComparison_bricks from "./bricks.jpg";
import PriceComparison_minifigure from "./minifigure.jpg";
import alza_logo from "./alza_cz.svg";
import amazon_de_logo from "./amazon_de.png";
import brand_lego_logo from "./brand_lego.svg";
import museum_of_bricks_logo_logo from "./museum_of_bricks_logo.png";
import sparkys_logo from "./Sparkys.png";

function PriceComparison() {
  const [setData, setSetData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const shopsContainerRef = useRef(null);

  useEffect(() => {
    const loadSetData = async () => {
      try {
        const data = await fetchSetData("77072"); // Replace "77072" with desired LEGO set ID
        setSetData(data);
      } catch (err) {
        setError("Failed to load data");
      } finally {
        setLoading(false);
      }
    };

    loadSetData();
  }, []);

  if (loading) return <p>Loading LEGO Set...</p>;
  if (error) return <p>Error: {error}</p>;
  return (
    <>
      <div className="main_PriceComparison">
        <div className="Set_image_block_main">
          <Slider />
        </div>
        <div className="dots"></div>
        <div className="set_description">
          <div className="h1">LEGO 77072 Peely Bone</div>
          <div className="set_description_container">
            <div className="rating-section">
              <Rating />
            </div>
            <div className="clearfix"></div>
            <div className="desc_text">
              LEGO 77072 Peely Bone is a 1,414 piece Fortnite exclusive set
              released in 2024. It features a detailed, buildable model of Peely
              Bone from Fortnite, a half-banana, half-skeleton design with
              movable arms.
            </div>
            <div className="short_desc">
              Year released: <div className="yr">2024</div>
            </div>
            <div className="short_desc">
              Weight:<div className="weight">1688 g</div>
            </div>
            <div className="short_desc">
              Item dimensions:<div className="itemd">28 x 45.6 x 8.7 cm</div>
            </div>
            <div className="short_desc">
              Ages:<div className="ages">18+</div>
            </div>
            <div className="short_desc">Items contains of:</div>
            <div className="ico">
              <div className="bricks">
                <img
                  src={PriceComparison_bricks}
                  alt="brick image"
                  className="brk"
                />
                <p>1414</p>
              </div>
              <div className="minifigs">
                <img
                  src={PriceComparison_minifigure}
                  alt="minifig image"
                  className="mnfg"
                />
                <p>0</p>
              </div>
            </div>
            <div className="best_deal">
              {" "}
              Best deal:
              <p className="bd">120€</p>
              <ScrollButton targetRef={shopsContainerRef} />
            </div>
          </div>
        </div>
      </div>
      <div className="shops_container" ref={shopsContainerRef}>
        <h2>Offers</h2>
        <div className="shop_block">
          <img src={alza_logo} alt="Shop Logo" className="shop_logo" />
          <div className="shop_info">
            <p>Delivery: Free</p>
            <p>Rating: ★★★★☆</p>
          </div>
          <div className="shop_status in_stock">In Stock</div>
          <p className="shop_price">€120</p>
          <a
            href="https://shop1.example.com"
            className="shop_button"
            target="_blank"
          >
            Visit Shop
          </a>
        </div>
        <div className="shop_block">
          <img src={amazon_de_logo} alt="Shop Logo" className="shop_logo" />
          <div className="shop_info">
            <p>Delivery: €5</p>
            <p>Rating: ★★★☆☆</p>
          </div>
          <div className="shop_status out_of_stock">Out of Stock</div>
          <p className="shop_price">€140</p>
          <a
            href="https://shop2.example.com"
            className="shop_button"
            target="_blank"
          >
            Visit Shop
          </a>
        </div>
        <div class="shop_block">
          <img src={brand_lego_logo} alt="Shop Logo" className="shop_logo" />
          <div className="shop_info">
            <p>Delivery: Free</p>
            <p>Rating: ★★★★☆</p>
          </div>
          <div className="shop_status in_stock">In Stock</div>
          <p className="shop_price">€123</p>
          <a
            href="https://shop1.example.com"
            className="shop_button"
            target="_blank"
          >
            Visit Shop
          </a>
        </div>
        <div className="shop_block">
          <img
            src={museum_of_bricks_logo_logo}
            alt="Shop Logo"
            className="shop_logo"
          />
          <div className="shop_info">
            <p>Delivery: Free</p>
            <p>Rating: ★★★★☆</p>
          </div>
          <div className="shop_status in_stock">In Stock</div>
          <p className="shop_price">€124</p>
          <a
            href="https://shop1.example.com"
            className="shop_button"
            target="_blank"
          >
            Visit Shop
          </a>
        </div>
        <div className="shop_block">
          <img src={sparkys_logo} alt="Shop Logo" className="shop_logo" />
          <div className="shop_info">
            <p>Delivery: €10</p>
            <p>Rating: ★★★★☆</p>
          </div>
          <div className="shop_status in_stock">In Stock</div>
          <p className="shop_price">€128</p>
          <a
            href="https://shop1.example.com"
            className="shop_button"
            target="_blank"
          >
            Visit Shop
          </a>
        </div>
      </div>
    </>
  );
}

export default PriceComparison;
