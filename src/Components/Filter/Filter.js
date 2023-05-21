import React from "react";
import styles from "./Filter.module.css";

const Filter = () => {
  return (
    <div className={styles["market-filter"]}>
      <div className={styles["filter-header"]}>
        <p>Filter</p>
        <div className={styles["clear-filter-button"]}>
          clear all
          <svg id="Component_89_1" data-name="Component 89 – 1" xmlns="http://www.w3.org/2000/svg" width="10" height="10.001" viewBox="0 0 10 10.001">
            <path id="Union_10" data-name="Union 10" d="M8.959,10.651,6,7.691,3.04,10.651A1.2,1.2,0,0,1,1.35,8.96L4.309,6,1.35,3.041A1.2,1.2,0,0,1,3.041,1.35L6,4.309,8.959,1.35a1.2,1.2,0,0,1,1.69,1.691L7.69,6,10.65,8.96a1.2,1.2,0,1,1-1.691,1.691Z" transhtmlform="translate(-1 -1)" fill="#B6B6B6"/>
          </svg>
        </div>
      </div>
      <hr className={styles["market-filter-hr"]} />
      <div className={styles["filter-review"]}>
        <div className={styles["filter-category-head"]}>
          <p>Reviews:</p>
          <div className={styles["clear-filter-button"]}>
            clear
            <svg id="Component_89_1" data-name="Component 89 – 1" xmlns="http://www.w3.org/2000/svg" width="10" height="10.001" viewBox="0 0 10 10.001">
                <path id="Union_10" data-name="Union 10" d="M8.959,10.651,6,7.691,3.04,10.651A1.2,1.2,0,0,1,1.35,8.96L4.309,6,1.35,3.041A1.2,1.2,0,0,1,3.041,1.35L6,4.309,8.959,1.35a1.2,1.2,0,0,1,1.69,1.691L7.69,6,10.65,8.96a1.2,1.2,0,1,1-1.691,1.691Z" transhtmlform="translate(-1 -1)" fill="#B6B6B6"/>
            </svg>
          </div>
        </div>
        <div className={styles["market-product-review"]}>
          <div className={styles["selected-review"]}></div>
          <div className={styles["selected-review"]}></div>
          <div className={styles["selected-review"]}></div>
          <div></div>
          <div></div>
        </div>
      </div>
      <hr className={styles["market-filter-hr"]} />
      <div className={styles["filter-review"]}>
        <div className={styles["filter-category-head"]}>
          <p>Price range:</p>
          <div className={styles["clear-filter-button"]}>
            clear
            <svg id="Component_89_1" data-name="Component 89 – 1" xmlns="http://www.w3.org/2000/svg" width="10" height="10.001" viewBox="0 0 10 10.001">
                <path id="Union_10" data-name="Union 10" d="M8.959,10.651,6,7.691,3.04,10.651A1.2,1.2,0,0,1,1.35,8.96L4.309,6,1.35,3.041A1.2,1.2,0,0,1,3.041,1.35L6,4.309,8.959,1.35a1.2,1.2,0,0,1,1.69,1.691L7.69,6,10.65,8.96a1.2,1.2,0,1,1-1.691,1.691Z" transhtmlform="translate(-1 -1)" fill="#B6B6B6"/>
            </svg>
          </div>
        </div>
        <div className={styles["market-product-price-range"]}>
          <div className={styles["price-range"]}>
            <input type="text" className={styles["min-price-filter"]} placeholder="Min..." />
            <input type="text" className={styles["max-price-filter"]} placeholder="Max..." />
            <button className={styles["set-rice-filter"]}>Ok</button>
          </div>
        </div>
      </div>
      <hr className={styles["market-filter-hr"]} />
      <div className={styles["filter-review"]}>
        <div className={styles["filter-category-head"]}>
          <p>Price off:</p>
          <div className={styles["clear-filter-button"]}>
            clear
            <svg id="Component_89_1" data-name="Component 89 – 1" xmlns="http://www.w3.org/2000/svg" width="10" height="10.001" viewBox="0 0 10 10.001">
                <path id="Union_10" data-name="Union 10" d="M8.959,10.651,6,7.691,3.04,10.651A1.2,1.2,0,0,1,1.35,8.96L4.309,6,1.35,3.041A1.2,1.2,0,0,1,3.041,1.35L6,4.309,8.959,1.35a1.2,1.2,0,0,1,1.69,1.691L7.69,6,10.65,8.96a1.2,1.2,0,1,1-1.691,1.691Z" transhtmlform="translate(-1 -1)" fill="#B6B6B6"/>
            </svg>
          </div>
        </div>
        <ul className={styles["market-product-price-off"]}>
          <li>5%</li>
          <li>15%</li>
          <li className={styles["selected-price-off"]}>25%</li>
          <li className={styles["selected-price-off"]}>50%</li>
        </ul>
      </div>
      <hr className={styles["market-filter-hr"]} />
      <div className={styles["filter-review"]}>
        <div className={styles["filter-category-head"]} style={{marginBottom: "10px"}}>
          <p>Choose shipping type:</p>
          <div className={styles["clear-filter-button"]}>
            clear
            <svg id="Component_89_1" data-name="Component 89 – 1" xmlns="http://www.w3.org/2000/svg" width="10" height="10.001" viewBox="0 0 10 10.001">
                <path id="Union_10" data-name="Union 10" d="M8.959,10.651,6,7.691,3.04,10.651A1.2,1.2,0,0,1,1.35,8.96L4.309,6,1.35,3.041A1.2,1.2,0,0,1,3.041,1.35L6,4.309,8.959,1.35a1.2,1.2,0,0,1,1.69,1.691L7.69,6,10.65,8.96a1.2,1.2,0,1,1-1.691,1.691Z" transhtmlform="translate(-1 -1)" fill="#B6B6B6"/>
            </svg>
          </div>
        </div>
        <div className={styles["filter-checkboxes"]}>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" id="geo-post" />
            <label htmlFor="geo-post">Georgian Post</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" id={styles["owners-delivery"]} />
            <label htmlFor={styles["owners-delivery"]}>Owners Delivery</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" id="pick-up" />
            <label htmlFor="pick-up">Pick Up</label>
          </div>
        </div>
      </div>
      <hr className={styles["market-filter-hr"]} />
      <div className={styles["filter-review"]}>
        <div className={styles["filter-category-head"]} style={{marginBottom: "10px"}}>
          <p>Location:</p>
          <div className={styles["clear-filter-button"]}>
            clear
            <svg id="Component_89_1" data-name="Component 89 – 1" xmlns="http://www.w3.org/2000/svg" width="10" height="10.001" viewBox="0 0 10 10.001">
                <path id="Union_10" data-name="Union 10" d="M8.959,10.651,6,7.691,3.04,10.651A1.2,1.2,0,0,1,1.35,8.96L4.309,6,1.35,3.041A1.2,1.2,0,0,1,3.041,1.35L6,4.309,8.959,1.35a1.2,1.2,0,0,1,1.69,1.691L7.69,6,10.65,8.96a1.2,1.2,0,1,1-1.691,1.691Z" transhtmlform="translate(-1 -1)" fill="#B6B6B6"/>
            </svg>
          </div>
        </div>
        <div className={styles["filter-checkboxes-location"]}>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" id="Tbilisi" />
            <label htmlFor="Tbilisi">Tbilisi</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" id="Batumi" />
            <label htmlFor="Batumi">Batumi</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" id="Borjomi" />
            <label htmlFor="Borjomi">Borjomi</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" id="Bakuriani" />
            <label htmlFor="Bakuriani">Bakuriani</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" className={styles["owners-delivery"]} />
            <label htmlFor={styles["owners-delivery"]}>city1</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor="pick-up">Pick Up</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor="geo-post">Georgian Post</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor={styles["owners-delivery"]}>Owners Delivery</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor="pick-up">Pick Up</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor="geo-post">Georgian Post</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor={styles["owners-delivery"]}>Owners Delivery</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor="pick-up">Pick Up</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor="geo-post">Georgian Post</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor={styles["owners-delivery"]}>Owners Delivery</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor="pick-up">Pick Up</label>
          </div>
        </div>
        <div className={styles["view-all-location"]}>
          <button className={styles["view-all-btn"]}>View more</button>
        </div>
      </div>
      <hr className={styles["market-filter-hr"]} />
      <div className={styles["filter-review"]}>
        <div className={styles["filter-category-head"]} style={{marginBottom: "10px"}}>
          <p>Brands:</p>
          <div className={styles["clear-filter-button"]}>
            clear
            <svg id="Component_89_1" data-name="Component 89 – 1" xmlns="http://www.w3.org/2000/svg" width="10" height="10.001" viewBox="0 0 10 10.001">
                <path id="Union_10" data-name="Union 10" d="M8.959,10.651,6,7.691,3.04,10.651A1.2,1.2,0,0,1,1.35,8.96L4.309,6,1.35,3.041A1.2,1.2,0,0,1,3.041,1.35L6,4.309,8.959,1.35a1.2,1.2,0,0,1,1.69,1.691L7.69,6,10.65,8.96a1.2,1.2,0,1,1-1.691,1.691Z" transhtmlform="translate(-1 -1)" fill="#B6B6B6"/>
            </svg>
          </div>
        </div>
        <div className={styles["search-in-market-filter"]}>
          <input type="text" className={styles["htmlForm-control-filter"]} placeholder="Search" />
          <button className={styles["market-filter-search-btn"]}>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <g id="search_black_24dp_4_" data-name="search_black_24dp (4)" opacity="0.5">
                <path id="Path_757" data-name="Path 757" d="M0,0H24V24H0Z" fill="none"/>
                <path id="Path_758" data-name="Path 758" d="M15.5,14h-.79l-.28-.27a6.51,6.51,0,1,0-.7.7l.27.28v.79l5,4.99L20.49,19Zm-6,0A4.5,4.5,0,1,1,14,9.5,4.494,4.494,0,0,1,9.5,14Z" fill="#707070"/>
            </g>
          </svg>
          </button>
        </div>
        <div className={styles["filter-checkboxes-brands"]}>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" id="Tbilisi" />
            <label htmlFor="Tbilisi">Tbilisi</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" id="Batumi" />
            <label htmlFor="Batumi">Batumi</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" id="Borjomi" />
            <label htmlFor="Borjomi">Borjomi</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" id="Bakuriani" />
            <label htmlFor="Bakuriani">Bakuriani</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" className={styles["owners-delivery"]} />
            <label htmlFor={styles["owners-delivery"]}>city1</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor="pick-up">Pick Up</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor="geo-post">Georgian Post</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor={styles["owners-delivery"]}>Owners Delivery</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor="pick-up">Pick Up</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor="geo-post">Georgian Post</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor={styles["owners-delivery"]}>Owners Delivery</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor="pick-up">Pick Up</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor="geo-post">Georgian Post</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor={styles["owners-delivery"]}>Owners Delivery</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor="pick-up">Pick Up</label>
          </div>
        </div>
        <div className={styles["view-all-brands"]}>
          <button className={styles["view-all-btn"]}>View more</button>
        </div>
      </div>
      <hr className={styles["market-filter-hr"]} />
      <div className={styles["filter-review"]}>
        <div className={styles["filter-category-head"]} style={{marginBottom: "10px"}}>
          <p>Shops:</p>
          <div className={styles["clear-filter-button"]}>
            clear
            <svg id="Component_89_1" data-name="Component 89 – 1" xmlns="http://www.w3.org/2000/svg" width="10" height="10.001" viewBox="0 0 10 10.001">
                <path id="Union_10" data-name="Union 10" d="M8.959,10.651,6,7.691,3.04,10.651A1.2,1.2,0,0,1,1.35,8.96L4.309,6,1.35,3.041A1.2,1.2,0,0,1,3.041,1.35L6,4.309,8.959,1.35a1.2,1.2,0,0,1,1.69,1.691L7.69,6,10.65,8.96a1.2,1.2,0,1,1-1.691,1.691Z" transhtmlform="translate(-1 -1)" fill="#B6B6B6"/>
            </svg>
          </div>
        </div>
        <div className={styles["filter-checkboxes-shops"]}>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" id="Tbilisi" />
            <label htmlFor="Tbilisi">
              Bibliusi <span>(7 Products)</span>
            </label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" id="Batumi" />
            <label htmlFor="Batumi">
              Mart <span>(3 Products)</span>
            </label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" id="Borjomi" />
            <label htmlFor="Borjomi">
              Name <span>(1 Products)</span>
            </label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" id="Bakuriani" />
            <label htmlFor="Bakuriani">
              Bakuriani <span>(8 Products)</span>
            </label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" className={styles["owners-delivery"]} />
            <label htmlFor={styles["owners-delivery"]}>city1</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor="pick-up">Pick Up</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor="geo-post">Georgian Post</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor={styles["owners-delivery"]}>Owners Delivery</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor="pick-up">Pick Up</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor="geo-post">Georgian Post</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor={styles["owners-delivery"]}>Owners Delivery</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor="pick-up">Pick Up</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor="geo-post">Georgian Post</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor={styles["owners-delivery"]}>Owners Delivery</label>
          </div>
          <div className={styles["checkbox-block"]}>
            <input type="checkbox" />
            <label htmlFor="pick-up">Pick Up</label>
          </div>
        </div>
        <div className={styles["view-all-shops"]}>
          <button className={styles["view-all-btn"]}>View more</button>
        </div>
      </div>
    </div>
  );
};

export default Filter;
