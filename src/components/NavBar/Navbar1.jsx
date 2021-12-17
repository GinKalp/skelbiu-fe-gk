import React from "react";
import { Link, NavLink } from "react-router-dom";
// import { useAuthCtx } from "../../store/AuthContext";
import css from "./Navbar1.module.css";
import Button from "../UI/Button/Button";

function Navbar() {
  return (
    <div className={css.navContainer}>
      <div className={css.imageContainer}>
        <Link to="/">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freelogovectors.net%2Fwp-content%2Fuploads%2F2020%2F11%2Fworkato-logo.png&f=1&nofb=1"
            alt=""
          />
        </Link>
      </div>

      <input
        type="checkbox"
        className={css.checkbox}
        id="burger-check"
        defaultChecked={true}
      />
      <label htmlFor="burger-check" className={css.burger}>
        <i className="fa fa-bars" />
      </label>

      <nav className={css.links}>
        <NavLink activeClassName="active" exact to="/">
          Home
        </NavLink>
        {
          <NavLink activeClassName="active" to="/register">
            Register
          </NavLink>
        }
        {
          <NavLink activeClassName="active" to="/myAds">
            My Ads
          </NavLink>
        }
        {
          <NavLink activeClassName="active" to="/favorites">
            Favorites
          </NavLink>
        }
        {
          <NavLink activeClassName="inActive" to="/">
            Logout
          </NavLink>
        }
        {
          <Link to="/addItem">
            <Button>Post New Ad</Button>
          </Link>
        }
      </nav>
    </div>
  );
}

export default Navbar;
