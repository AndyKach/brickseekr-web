import { Link } from "react-router-dom";
import React from 'react';
import './TopSets.css';
import TopSets_peelybone from './peelybone.png';
import TopSets_danddmain from './danddmain.png';


function TopSets() {
  return (
    <>
            <div class="lego-container">
                <a href="set1_details.html" class="lego-link">
                    <div class="lego-box">
                        <img src={TopSets_peelybone} alt="Lego Set 1" class="lego-image" />
                        <p class="lego-name">LEGO 77072 Peely Bone</p>
                    </div>
                </a>
                <div class="lego-box">
                    <img src={TopSets_danddmain} alt="Lego Set 2" class="lego-image" />
                    <p class="lego-name">LEGO 21348 Ideas Dungeons & Dragons Red Dragon's Tale</p>
                </div>
                <div class="lego-box">
                    <img src="image/danddmain.png" alt="Lego Set 2" class="lego-image" />
                    <p class="lego-name">Lego Set 2</p>
                </div>
                <div class="lego-box">
                    <img src="image/peelybone.png" alt="Lego Set 1" class="lego-image" />
                    <p class="lego-name">Lego Set 1</p>
                </div>
                <div class="lego-box">
                    <img src="image/danddmain.png" alt="Lego Set 2" class="lego-image" />
                    <p class="lego-name">Lego Set 2</p>
                </div>
                <div class="lego-box">
                    <img src="image/danddmain.png" alt="Lego Set 2" class="lego-image" />
                    <p class="lego-name">Lego Set 2</p>
                </div>
                <div class="lego-box">
                    <img src="image/peelybone.png" alt="Lego Set 1" class="lego-image" />
                    <p class="lego-name">Lego Set 1</p>
                </div>
                <div class="lego-box">
                    <img src="image/danddmain.png" alt="Lego Set 2" class="lego-image" />
                    <p class="lego-name">Lego Set 2</p>
                </div>
                <div class="lego-box">
                    <img src="image/danddmain.png" alt="Lego Set 2" class="lego-image" />
                    <p class="lego-name">Lego Set 2</p>
                </div>
                <div class="lego-box">
                    <img src="image/peelybone.png" alt="Lego Set 1" class="lego-image" />
                    <p class="lego-name">Lego Set 1</p>
                </div>
                <div class="lego-box">
                    <img src="image/danddmain.png" alt="Lego Set 2" class="lego-image" />
                    <p class="lego-name">Lego Set 2</p>
                </div>
                <div class="lego-box">
                    <img src="image/danddmain.png" alt="Lego Set 2" class="lego-image" />
                    <p class="lego-name">Lego Set 2</p>
                </div>
                <div class="lego-box">
                    <img src="image/peelybone.png" alt="Lego Set 1" class="lego-image" />
                    <p class="lego-name">Lego Set 1</p>
                </div>
                <div class="lego-box">
                    <img src="image/danddmain.png" alt="Lego Set 2" class="lego-image" />
                    <p class="lego-name">Lego Set 2</p>
                </div>
                <div class="lego-box">
                    <img src="image/danddmain.png" alt="Lego Set 2" class="lego-image" />
                    <p class="lego-name">Lego Set 2</p>
                </div>
                <div class="lego-box">
                    <img src="image/peelybone.png" alt="Lego Set 1" class="lego-image" />
                    <p class="lego-name">Lego Set 1</p>
                </div>
                <div class="lego-box">
                    <img src="image/danddmain.png" alt="Lego Set 2" class="lego-image" />
                    <p class="lego-name">Lego Set 2</p>
                </div>
                <div class="lego-box">
                    <img src="image/danddmain.png" alt="Lego Set 2" class="lego-image" />
                    <p class="lego-name">Lego Set 2</p>
                </div>
                <div class="lego-box">
                    <img src="image/peelybone.png" alt="Lego Set 1" class="lego-image" />
                    <p class="lego-name">Lego Set 1</p>
                </div>
                <div class="lego-box">
                    <img src="image/danddmain.png" alt="Lego Set 2" class="lego-image" />
                    <p class="lego-name">Lego Set 2</p>
                </div>
            </div>
            <div class="pagination">
                <a href="page1.html" class="page-link active">1</a>
                <a href="page2.html" class="page-link">2</a>
                <a href="page3.html" class="page-link">3</a>
                <a href="page4.html" class="page-link">4</a>
                <a href="page5.html" class="page-link">5</a>
            </div>
</>
  )
}

export default TopSets;