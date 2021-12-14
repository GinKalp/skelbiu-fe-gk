import React, { useEffect, useState } from "react";
import css from "./ListingsList.module.css";
import { getFetch } from "../../helpers/fetchHelper";
import ListingsItem from "./ListingsItem";

const url = process.env.REACT_APP_URL;

const ListingsList = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    (async () => {
      const gotData = await getFetch(url + "/listings");
      console.log(gotData);
      setListings(gotData.data);
      console.log(listings);
    })();

    return () => {
      setListings([]);
    };
  }, []);

  return (
    <div className={`container ${css.list}`}>
      {listings.map((item) => (
        <ListingsItem key={item.id} item={item} />
      ))}
    </div>
  );
};

export default ListingsList;
