import React from "react";
import css from "./ListingsList.module.css";
import ListingsItem from "./ListingsItem";

const ListingsList = ({ listings, onModify, onDelete }) => {
  return (
    <div className={`container ${css.list}`}>
      {listings.map((item) => (
        <ListingsItem
          onDelete={onDelete}
          onModify={onModify}
          key={item.id}
          item={item}
        />
      ))}
    </div>
  );
};

export default ListingsList;
