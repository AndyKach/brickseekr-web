import { Link } from "react-router-dom";
import React, { useState } from 'react';
import './PriceComparison.css';
import img1 from './peelybone.png';
import img2 from './peelybone2.png';
import img3 from './peelybone3.png';
import PriceComparison_bricks from './bricks.jpg';
import PriceComparison_minifigure from './minifigure.jpg';
import alza_logo from './alza_cz.svg';
import amazon_de_logo from './amazon_de.png';
import brand_lego_logo from './brand_lego.svg';
import museum_of_bricks_logo_logo from './museum_of_bricks_logo.png';
import sparkys_logo from './Sparkys.png';

function PriceComparison() {
  const images = [
    { id: "slide-1", src: img1, alt: "img1" },
    { id: "slide-2", src: img2, alt: "img2" },
    { id: "slide-3", src: img3, alt: "img3" },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length); // Loop back to first slide
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length); // Loop back to last slide
  };

  return (
    <>
      <div className="main_PriceComparison">
        <div className="Set_image_block_main">
          <div className="slider">
            <div className="slider-images">
              {images.map((image, index) => (
                <img
                  key={image.id}
                  src={image.src}
                  alt={image.alt}
                  className={`Set_image ${index === currentSlide ? "active" : ""}`}
                />
              ))}
            </div>
            <button onClick={handlePrev} className="nav-button" id="prev">❮</button>
            <button onClick={handleNext} className="nav-button" id="next">❯</button>
          </div>
        </div>
        <div className="set_description">
          <div className="h1">
            LEGO 77072 Peely Bone
          </div>
          <div className="set_description_container">
            <div className="rating">
              <input type="radio" name="clr1" style={{ '--c': '#ff9933' }} />
              <label htmlFor="r1"></label>
              <input type="radio" name="clr2" style={{ '--c': '#ff9933' }} />
              <label htmlFor="r2"></label>
              <input type="radio" name="clr3" style={{ '--c': '#ff9933' }} />
              <label htmlFor="r3"></label>
              <input type="radio" name="clr4" style={{ '--c': '#ff9933' }} />
              <label htmlFor="r4"></label>
              <input type="radio" name="clr5" style={{ '--c': '#ff9933' }} />
              <label htmlFor="r5"></label>
            </div>
            <div className="clearfix"></div>
            <div className="desc_text">
              LEGO 77072 Peely Bone is a 1,414 piece Fortnite exclusive set released in 2024. It features a detailed, buildable model of Peely Bone from Fortnite, a half-banana, half-skeleton design with movable arms.
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
            <div className="short_desc">
              Items contains of:
              <div className="ico">
                <div className="bricks">
                  <img src={PriceComparison_bricks} alt="brick image" className="brk" />
                  <p>1414</p>
                </div>
                <div className="minifigs">
                  <img src={PriceComparison_minifigure} alt="minifig image" className="mnfg" />
                  <p>0</p>
                </div>
              </div>
              <div className="best_deal"> Best deal:
                <p className="bd">120€</p>
                <a href="index.html" className="bd_all"><p className="bd_all_txt">See all</p></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="shops_container">
        <h2>Offers</h2>
        <div className="shop_block">
          <img src={alza_logo} alt="Shop Logo" className="shop_logo" />
          <div className="shop_info">
            <p>Delivery: Free</p>
            <p>Rating: ★★★★☆</p>
          </div>
          <div className="shop_status in_stock">In Stock</div>
          <p className="shop_price">€120</p>
          <a href="https://shop1.example.com" className="shop_button" target="_blank">Visit Shop</a>
        </div>
        <div class="shop_block">
                <img src={amazon_de_logo} alt="Shop Logo" class="shop_logo" />
                <div class="shop_info">
                    <p>Delivery: €5</p>
                    <p>Rating: ★★★☆☆</p>
                </div>
                <div class="shop_status out_of_stock">Out of Stock</div>
                <p class="shop_price">€140</p>
                <a href="https://shop2.example.com" class="shop_button" target="_blank">Visit Shop</a>
            </div>
            <div class="shop_block">
                <img src={brand_lego_logo} alt="Shop Logo" class="shop_logo" />
                <div class="shop_info">
                    <p>Delivery: Free</p>
                    <p>Rating: ★★★★☆</p>
                </div>
                <div class="shop_status in_stock">In Stock</div>
                <p class="shop_price">€123</p>
                <a href="https://shop1.example.com" class="shop_button" target="_blank">Visit Shop</a>
            </div>
            <div class="shop_block">
                <img src={museum_of_bricks_logo_logo} alt="Shop Logo" class="shop_logo" />
                <div class="shop_info">
                    <p>Delivery: Free</p>
                    <p>Rating: ★★★★☆</p>
                </div>
                <div class="shop_status in_stock">In Stock</div>
                <p class="shop_price">€124</p>
                <a href="https://shop1.example.com" class="shop_button" target="_blank">Visit Shop</a>
            </div>
            <div class="shop_block">
                <img src={sparkys_logo} alt="Shop Logo" class="shop_logo" />
                <div class="shop_info">
                    <p>Delivery: €10</p>
                    <p>Rating: ★★★★☆</p>
                </div>
                <div class="shop_status in_stock">In Stock</div>
                <p class="shop_price">€128</p>
                <a href="https://shop1.example.com" class="shop_button" target="_blank">Visit Shop</a>
            </div>
      </div>
    </>
  );
}

export default PriceComparison;
