import React, { useEffect, useState } from "react";
import css from "./HomePage.module.css";
import ListingsList from "../components/Listings/ListingsList";
import { getFetch } from "../helpers/fetchHelper";

const url = process.env.REACT_APP_URL;

const HomePage = () => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    (async () => {
      const gotData = await getFetch(url + "/listings");
      // console.log(gotData);
      setListings(gotData.data);
    })();

    return () => {
      setListings([]);
    };
  }, []);
  return (
    <div>
      <h2 className={`container ${css.title}`}>Welcome to our Page</h2>
      <ListingsList listings={listings} />
    </div>
  );
};

export default HomePage;
