import React, { useState } from "react";
import styles from "./SortProducts.module.css";

const SortProducts = ({setFormData, formData}) => {
  const [type, setType] = useState([
    {
      name: "All",
      Key: 140,
      value: "all",
      selected: true
    },
    {
      name: "New",
      key: 141,
      value: "new",
      selected: false
    },
    {
      name: "Used",
      key: 142,
      value: "used",
      selected: false
    }
  ])

  const seller = [
    {
      name: "All",
      Key: 143,
      value: "all",
      selected: true
    },
    {
      name: "Only Shops",
      key: 144,
      value: "shops",
      selected: false
    },
    {
      name: "Only Individuals",
      key: 145,
      value: "individuals",
      selected: false
    }
  ];

  const cause = [
    {
      name: "All",
      Key: 146,
      value: "all",
      selected: true
    },
    {
      name: "Free",
      key: 147,
      value: "free",
      selected: false
    },
    {
      name: "Donate",
      key: 148,
      value: "donate",
      selected: false
    }
  ];

  return (
    <div className={styles["market-items-sort"]}>
      <div className={styles["market-items-sort-contant"]}>
        <div
          className={styles["prodact-sortable-item"]}
          style={{ paddingLeft: "24px", minWidth: "210px" }}
        >
          <p>Sort by product type:</p>
          <ul className={styles["sort-by"]}>
            {
              type.map((el) => {
                return (
                  <li key={el.key} onClick={() => setFormData((prevState) => {return {...prevState, type: el.value}})} className={formData.type === el.value ? styles['active-sorted'] : ''}>{el.name}</li>
                )
              })
            }
          </ul>
        </div>
        <div
          className={styles["prodact-sortable-item"]}
          style={{ minWidth: "285px" }}
        >
          <p>Sort by Seller:</p>
          <ul className={styles["sort-by"]}>
          {
              seller.map((el) => {
                return (
                  <li key={el.key} onClick={() => setFormData((prevState) => {return {...prevState, seller: el.value}})} className={formData.seller === el.value ? styles['active-sorted'] : ''}>{el.name}</li>
                )
              })
            }
          </ul>
        </div>
        <div
          className={styles["prodact-sortable-item"]}
          style={{ minWidth: "185px" }}
        >
          <p>Sort by cause:</p>
          <ul className={styles["sort-by"]}>
          {
              cause.map((el) => {
                return (
                  <li key={el.key} onClick={() => setFormData((prevState) => {return {...prevState, cause: el.value}})} className={formData.cause === el.value ? styles['active-sorted'] : ''}>{el.name}</li>
                )
              })
            }
          </ul>
        </div>
        <div
          className={styles["prodact-sortable-item"]}
          style={{ minWidth: "170px" }}
        >
          <p>Sort by</p>
          <select
            className="select-form-control"
            style={{
              fontSize: "15px",
              width: "149px",
              height: "32px",
              color: "black",
            }}
          >
            <option value="1">Featured</option>
            <option value="2">A-Z</option>
            <option value="3">Z-A</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SortProducts;
