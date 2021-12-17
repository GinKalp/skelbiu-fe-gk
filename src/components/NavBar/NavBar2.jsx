import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import css from "./NavBar2.module.css";
import { useAuthCtx } from "../../store/authContext";
import { Bars, Nav, NavLinkS, NavMenu } from "./NavbarElements";

const initArr = [
  { id: 5, name: "Home", link: "/", show: true },
  { id: 3, name: "Login", link: "/login", show: true },
  { id: 2, name: "Register", link: "/register", show: true },
  { id: 1, name: "My Account", link: "/my-account", show: false },
  { id: 4, name: "Logout", link: "/logout", show: false },
];

const NavBar2 = () => {
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
      <Nav>
        <NavLinkS to="/">
          <img className={css.image} src="/img/logo.png" alt="logo" />
          {/*<h1>Logo</h1>*/}
        </NavLinkS>
        <Bars onClick={() => setShowLinks(!showLinks)} />
        <NavMenu id={showLinks && css.hidden}>
          {navArr.map((item) => (
            <NavLinkS
              className={`${css.navLink}`}
              key={item.id}
              onClick={item.name === "Logout" ? onLogout : null}
              exact
              to={item.link}
            >
              {item.name}
            </NavLinkS>
          ))}
          {/*{isLoggedIn && <li className={css.user}>{authData.username}</li>}*/}
        </NavMenu>
      </Nav>
    </>
  );
};

export default NavBar2;
