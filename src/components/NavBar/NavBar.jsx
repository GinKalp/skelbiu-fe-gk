import React, { useEffect, useState } from "react";
import { Link, NavLink, useHistory } from "react-router-dom";
import css from "./NavBar.module.css";
import { useAuthCtx } from "../../store/authContext";

const initArr = [
  { id: 1, name: "My Account", link: "/my-account", show: false },
  { id: 2, name: "Register", link: "/register", show: true },
  { id: 3, name: "Login", link: "/login", show: true },
  { id: 4, name: "Logout", link: "/", show: false },
];

const NavBar = () => {
  const { isLoggedIn, logout } = useAuthCtx();
  const [navArr, setNavArr] = useState(initArr);
  const history = useHistory();

  useEffect(() => {
    // setNavArr((s) => [
    //   s.map((item) => {
    //     return { ...item, show: !item.show };
    //   }),
    // ]);
    if (isLoggedIn) {
      setNavArr(
        navArr.map((item) => {
          return { ...item, show: !item.show };
        })
      );
    }
    if (!isLoggedIn) {
      setNavArr(
        navArr.map((item) => {
          return { ...item, show: !item.show };
        })
      );
    }
  }, [isLoggedIn]);

  console.log(navArr);
  return (
    <nav className={css.wrapper}>
      <div className={"container"}>
        <img onClick={() => history.push("/")} src="/img/logo.png" alt="" />
        <ul className={`container`}>
          {navArr.map((item) => (
            <>
              {item.show && (
                <li className={"nav-item"} key={item.id}>
                  <NavLink
                    onClick={item.name === "Logout" ? () => logout() : null}
                    activeClassName={"active"}
                    exact
                    to={item.link}
                  >
                    {item.name}
                  </NavLink>
                </li>
              )}
            </>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
