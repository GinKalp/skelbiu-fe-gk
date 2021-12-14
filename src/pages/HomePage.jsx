import React from "react";
import css from "./HomePage.module.css";
import ListingsList from "../components/Listings/ListingsList";

const HomePage = () => {
  return (
    <div>
      <h2 className={`container ${css.title}`}>Welcome to our Page</h2>
      <ListingsList />
    </div>
  );
};

export default HomePage;
