import React from "react";
import Title from "../components/UI/Title/Title";
import { Link, Route, Switch } from "react-router-dom";
import Button from "../components/UI/Button/Button";
import NewListingForm from "../components/NewListingForm/NewListingForm";

const MyAccountPage = () => {
  return (
    <div className={"container"}>
      <Title title={"My Account Page"} />
      <Link to={"/my-account/add-new"}>
        <Button inverted>Add new item</Button>
      </Link>
      <Switch>
        <Route path={"/my-account/add-new"}>
          <NewListingForm />
        </Route>
      </Switch>
    </div>
  );
};

export default MyAccountPage;
