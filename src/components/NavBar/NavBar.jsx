import React, { useEffect, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import css from "./NavBar.module.css";
import { useAuthCtx } from "../../store/authContext";

const initArr = [
  { id: 5, name: "Home", link: "/", show: true },
  { id: 1, name: "My Account", link: "/my-account", show: false },
  { id: 3, name: "Login", link: "/login", show: true },
  { id: 2, name: "Register", link: "/register", show: true },
  { id: 4, name: "Logout", link: "/logout", show: false },
];

const NavBar = () => {
  const { isLoggedIn, logout, authData } = useAuthCtx();
  const [navArr, setNavArr] = useState(initArr);
  const history = useHistory();

  useEffect(() => {
    setNavArr(() =>
      initArr.filter((item) => {
        return item.name === "Home" || item.show === !isLoggedIn;
      })
    );
  }, [isLoggedIn]);
  const onLogout = (e) => {
    e.preventDefault();
    logout();
    history.push("/");
  };

  // console.log(navArr);
  return (
    <div className={css.wrapper}>
      <div className={`${css.navContainer}`}>
        <div>
          <Link to={"/"}>
            <img src="/img/logo.png" alt="" />
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
          {isLoggedIn && <span className={css.user}>{authData.username}</span>}

          {navArr.map((item) => (
            <NavLink
              key={item.id}
              onClick={item.name === "Logout" ? onLogout : null}
              activeClassName={"active"}
              exact
              to={item.link}
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
