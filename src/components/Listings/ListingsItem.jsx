import React from "react";
import css from "./ListingsItem.module.css";

const ListingsItem = ({ item }) => {
  return (
    <div className={css.card}>
      <img
        className={css.img}
        src={`${process.env.REACT_APP_URL_NEW}/images/${item.image}`}
        alt={""}
      />
      <div className={css.container}>
        <h4>
          <b>{item.title}</b>
        </h4>
        <p>{item.body}</p>
        <h3>${item.price.toFixed(2)}</h3>
      </div>
    </div>
  );
};

export default ListingsItem;
