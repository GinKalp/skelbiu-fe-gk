import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import css from "./NavBar.module.css";
import { useAuthCtx } from "../../store/authContext";

const initArr = [
  { id: 1, name: "My Account", link: "/my-account", show: false },
  { id: 2, name: "Register", link: "/register", show: true },
  { id: 3, name: "Login", link: "/login", show: true },
  { id: 4, name: "Logout", link: "/logout", show: false },
  { id: 5, name: "Home", link: "/", show: true },
];

const NavBar = () => {
  const { isLoggedIn, logout, authData } = useAuthCtx();
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
    <div className={css.wrapper}>
      <div className={`${css.navContainer}`}>
        <div>
          <img onClick={() => history.push("/")} src="/img/logo.png" alt="" />
        </div>
        <div>
          <input
            type="checkbox"
            className={css.checkbox}
            id="burger-check"
            defaultChecked={true}
          />
          <label htmlFor="burger-check" className={css.burger}>
            <i className="fa fa-bars" />
          </label>
        </div>

        <nav className={css.links}>
          {/*{navArr.map((item) => (*/}
          {/*  <NavLink*/}
          {/*    className={css.navItem}*/}
          {/*    key={item.id}*/}
          {/*    onClick={item.name === "Logout" ? onLogout : null}*/}
          {/*    activeClassName={"active"}*/}
          {/*    exact*/}
          {/*    to={item.link}*/}
          {/*  >*/}
          {/*    {item.name}*/}
          {/*  </NavLink>*/}
          <NavLink to={"/"}>Homer</NavLink>
          {/*))}*/}
          {isLoggedIn && <li className={css.user}>{authData.username}</li>}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
