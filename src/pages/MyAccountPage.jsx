import React, { useEffect, useState } from "react";
import Button from "../components/UI/Button/Button";
import ListingForm from "../components/ListingForm/ListingForm";
import css from "./MyAccountPage.module.css";
import ListingsList from "../components/Listings/ListingsList";
import { deleteListingFetch, getFetchAuth } from "../helpers/fetchHelper";
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
      // console.log(gotData);
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
    // console.log(item);
    setItem(item);
    setIsModify(!isModify);
  };
  const onDelete = async (item) => {
    const filteredArr = listings.filter((listing) => listing !== item);
    setListings(filteredArr);
    await deleteListingFetch(`/listings/delete/${item.id}`, authData.token);
    // console.log(dbData);
  };

  return (
    <div className={"container"}>
      <div className={css.dFlex}>
        <h2>My Account Page</h2>
        {!isModify && (
          <Button onClick={() => setAddNewShow(!addNewShow)} inverted>
            {!addNewShow && "Add new item"}
            {addNewShow && "Back"}
          </Button>
        )}
        {isModify && (
          <Button onClick={() => setIsModify(!isModify)} inverted>
            Back
          </Button>
        )}
      </div>
      {!addNewShow && !isModify && (
        <ListingsList
          onDelete={onDelete}
          onModify={onModify}
          listings={listings}
        />
      )}

      {addNewShow && !isModify && <ListingForm />}
      {isModify && <ListingForm item={item} />}
    </div>
  );
};

export default MyAccountPage;
