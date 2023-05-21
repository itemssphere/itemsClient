import React, { useEffect, useState } from "react";
import styles from "./Categories.module.css";
import arrow from "../../images/icons/arrow.svg";
import axios from "axios";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [categorySteps, setCategorySteps] = useState({
    showStepOne: false,
    showStepTwo: false,
    showStepThree: false,
  });
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_BASIC_URL}/categories`)
      .then((response) => {
        const data = response.data.data;
        setCategories(data)
      })
      .catch((err) => {

      })
  }, [])

  const getStepTwoCategories = () => {

  }

  return (
    <div className={styles["categories-boxes"]}>
      <div className={styles["categories-container"]}>
        <p className={styles["category-title"]}>Categories</p>
        <ul className={styles["categories-list"]}>
          {
            categories.map((category, k) => {
              return(
                category.children.length > 0 ? (
                  <li onClick={getStepTwoCategories} key={k}>
                  {category.name}
                  <img src={arrow} alt="right" />
                </li>
                ) : (
                  <li key={categories.id}>
                  {category.name}
                </li>
                )
              )
            })
          }
        </ul>
      </div>
      {categorySteps.showStepTwo && (
        <div
          className={`${styles["categories-step-two"]} ${styles["categories-container"]}`}
        >
          <ul className={styles["categories-list"]}>
            <li>
              <p>item1</p> <img src={arrow} alt="right" />
            </li>
            <li>
              <p>item2</p> <img src={arrow} alt="right" />
            </li>
            <li>
              <p>item3</p> <img src={arrow} alt="right" />
            </li>
            <li>
              <p>item4</p> <img src={arrow} alt="right" />
            </li>
            <li>
              <p>item5</p> <img src={arrow} alt="right" />
            </li>
            <li>
              <p>item6</p> <img src={arrow} alt="right" />
            </li>
            <li>
              <p>item7</p> <img src={arrow} alt="right" />
            </li>
            <li>
              <p>item8</p> <img src={arrow} alt="right" />
            </li>
          </ul>
        </div>
      )}
      <div className={styles["vategories-step-three"]}></div>
    </div>
  );
};

export default Categories;
