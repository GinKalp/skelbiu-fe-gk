import React, { useEffect, useState } from "react";
import Title from "../components/UI/Title/Title";
import Button from "../components/UI/Button/Button";
import NewListingForm from "../components/NewListingForm/NewListingForm";
import css from "./MyAccountPage.module.css";
import ListingsList from "../components/Listings/ListingsList";
import { getFetchAuth } from "../helpers/fetchHelper";
import { useAuthCtx } from "../store/authContext";

const url = process.env.REACT_APP_URL;

const MyAccountPage = () => {
  const [listings, setListings] = useState([]);
  const [clicked, setClicked] = useState(false);

  const { authData } = useAuthCtx();

  useEffect(() => {
    (async () => {
      const gotData = await getFetchAuth(
        url + "/listings/by-user",
        authData.token
      );
      console.log(gotData);
      setListings(gotData.data);
    })();

    return () => {
      setListings([]);
    };
  }, [authData.token]);

  return (
    <div className={"container"}>
      <div className={css.dFlex}>
        <Title title={"My Account Page"} />
        <Button onClick={() => setClicked(!clicked)} inverted>
          {!clicked ? "Add new item" : "Back"}
        </Button>
      </div>
      {!clicked && <ListingsList listings={listings} />}
      {clicked && <NewListingForm />}
    </div>
  );
};

export default MyAccountPage;
