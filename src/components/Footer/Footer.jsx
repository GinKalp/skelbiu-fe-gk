import React from "react";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={` ${css.footer}`}>
      <div className={css.footerContainer}>
        <span>© Copyright 2021.</span>{" "}
        <span>Designed and Developed by Gintaras Kalpokas</span>
      </div>
    </footer>
  );
};

export default Footer;
