import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import css from "./NavBar3.module.css";
import { useAuthCtx } from "../../store/authContext";

const initArr = [
  { id: 5, name: "Home", link: "/", show: true },
  { id: 3, name: "Login", link: "/login", show: true },
  { id: 2, name: "Register", link: "/register", show: true },
  { id: 1, name: "My Account", link: "/my-account", show: false },
  { id: 4, name: "Logout", link: "/logout", show: false },
];

const NavBar3 = () => {
  const { isLoggedIn, logout, authData } = useAuthCtx();
  const [showLinks, setShowLinks] = useState(false);
  const [navArr, setNavArr] = useState(initArr);
  const history = useHistory();

  useEffect(() => {
    // if (isLoggedIn) {
    setNavArr(() =>
      initArr.filter((item) => {
        // return { ...item, show: item.name === "Home" ? true : !item.show };
        return item.name === "Home" || item.show === !isLoggedIn;
      })
    );
    // }
    // if (!isLoggedIn) {
    //   const newArr = initArr;
    //   setNavArr(newArr);
    // }
  }, [isLoggedIn]);
  const onLogout = (e) => {
    e.preventDefault();
    logout();
    history.push("/");
  };

  // console.log(navArr);
  return (
    <>
      <nav className={css.navContainer}>
        <NavLink className={css.navLink} to="/">
          <img className={css.image} src="/img/logo.png" alt="logo" />
          {/*<h1>Logo</h1>*/}
        </NavLink>
        <div className={css.burger}>
          <i
            onClick={() => setShowLinks(!showLinks)}
            className="fa fa-bars"
            aria-hidden="true"
          />
        </div>
        <div
          className={`${css.navMenu}`}
          id={showLinks ? css.hidden : undefined}
        >
          {navArr.map((item) => (
            <NavLink
              className={`${css.navLink}`}
              key={item.id}
              onClick={item.name === "Logout" ? onLogout : null}
              activeClassName={"active"}
              exact
              to={item.link}
            >
              {item.name}
            </NavLink>
          ))}
          {/*{isLoggedIn && <li className={css.user}>{authData.username}</li>}*/}
        </div>
      </nav>
    </>
  );
};

export default NavBar3;
