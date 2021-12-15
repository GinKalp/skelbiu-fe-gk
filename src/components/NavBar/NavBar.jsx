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
    if (isLoggedIn) {
      setNavArr((n) =>
        n.map((item) => {
          return { ...item, show: item.name === "Home" ? true : !item.show };
        })
      );
    }
    if (!isLoggedIn) {
      const newArr = initArr;
      setNavArr(newArr);
    }
  }, [isLoggedIn]);
  const onLogout = (e) => {
    e.preventDefault();
    logout();
    history.push("/");
  };

  console.log(navArr);
  return (
    <nav className={css.wrapper}>
      <div className={"container"}>
        <img onClick={() => history.push("/")} src="/img/logo.png" alt="" />
        <ul className={`container`}>
          {navArr.map((item) => (
            <li key={item.id} className={"nav-item"}>
              {item.show && (
                <NavLink
                  key={item.id}
                  onClick={item.name === "Logout" ? onLogout : null}
                  activeClassName={"active"}
                  exact
                  to={item.link}
                >
                  {item.name}
                </NavLink>
              )}
            </li>
          ))}
          {isLoggedIn && <li className={css.user}>{authData.username}</li>}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
