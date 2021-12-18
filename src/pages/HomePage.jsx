import React, { useEffect, useState } from "react";
import css from "./HomePage.module.css";
import ListingsList from "../components/Listings/ListingsList";
import { getFetchAuth } from "../helpers/fetchHelper";
import { useAuthCtx } from "../store/authContext";
import Button from "../components/UI/Button/Button";

const HomePage = () => {
  const [listings, setListings] = useState([]);
  const { authData, logout, isLoggedIn } = useAuthCtx();
  const [isFilter, setIsFilter] = useState(false);

  useEffect(() => {
    (async () => {
      const gotData = await getFetchAuth("/listings", authData.token);
      console.log(gotData);
      if (gotData.error === "token expired/invalid") {
        return logout();
      }
      setListings(gotData?.data);
      // console.log(authData.token);
    })();

    return () => {
      setListings([]);
    };
  }, [authData.token, logout]);

  const onFilter = async () => {
    const gotData = await getFetchAuth("/listings", authData.token);
    // console.log(gotData);
    if (gotData.error === "token expired/invalid") {
      return logout();
    }

    if (!isFilter) {
      const filteredArr = gotData.data.filter((item) => item.fav_user);
      // console.log(filteredArr);
      setListings(filteredArr);
      setIsFilter(!isFilter);
    } else {
      setListings(gotData.data);
      setIsFilter(!isFilter);
    }
  };
  return (
    <div className={css.main}>
      <h2 className={`${css.title}`}>Welcome to our Page</h2>
      {isLoggedIn && (
        <Button onClick={onFilter}>
          {!isFilter ? "Show favorites" : "Show All"}
        </Button>
      )}
      <ListingsList listings={listings} />
    </div>
  );
};

export default HomePage;
