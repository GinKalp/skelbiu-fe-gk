import React, { useEffect, useState } from "react";
import Title from "../components/UI/Title/Title";
import Button from "../components/UI/Button/Button";
import NewListingForm from "../components/NewListingForm/NewListingForm";
import css from "./MyAccountPage.module.css";
import ListingsList from "../components/Listings/ListingsList";
import { getFetchAuth } from "../helpers/fetchHelper";
import { useAuthCtx } from "../store/authContext";

const MyAccountPage = () => {
  const [listings, setListings] = useState([]);
  const [addNewShow, setAddNewShow] = useState(false);
  const [isModify, setIsModify] = useState(false);
  const [item, setItem] = useState({});

  const { authData, logout } = useAuthCtx();

  useEffect(() => {
    (async () => {
      const gotData = await getFetchAuth("/listings/by-user", authData.token);
      console.log(gotData);
      if (gotData.error === "token expired/invalid") {
        logout();
      }
      setListings(gotData?.data);
    })();

    return () => {
      setListings([]);
    };
  }, [authData.token, logout]);

  const onModify = (item) => {
    console.log(item);
    setItem(item);
    setIsModify(!isModify);
  };

  return (
    <div className={"container"}>
      <div className={css.dFlex}>
        <h2>My Account Page</h2>
        <Button onClick={() => setAddNewShow(!addNewShow)} inverted>
          {!addNewShow ? "Add new item" : "Back"}
        </Button>
      </div>
      {!addNewShow && !isModify && (
        <ListingsList onModify={onModify} listings={listings} />
      )}
      {addNewShow && !isModify && <NewListingForm />}
      {isModify && <NewListingForm item={item} />}
    </div>
  );
};

export default MyAccountPage;
