import React, { useEffect, useState } from "react";
import css from "./HomePage.module.css";
import ListingsList from "../components/Listings/ListingsList";
import { getFetchAuth } from "../helpers/fetchHelper";
import { useAuthCtx } from "../store/authContext";

const HomePage = () => {
  const [listings, setListings] = useState([]);
  const { authData, logout } = useAuthCtx();

  useEffect(() => {
    (async () => {
      const gotData = await getFetchAuth("/listings", authData.token);
      console.log(gotData);
      if (gotData.error === "token expired/invalid") {
        logout();
      }
      setListings(gotData?.data);
      // console.log(authData.token);
    })();

    return () => {
      setListings([]);
    };
  }, [authData.token, logout]);
  return (
    <div className={css.main}>
      <h2 className={`${css.title}`}>Welcome to our Page</h2>
      <ListingsList listings={listings} />
    </div>
  );
};

export default HomePage;
