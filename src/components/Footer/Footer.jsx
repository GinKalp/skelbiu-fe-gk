import React from "react";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={` ${css.footer}`}>
      <div className={css.footerContainer}>
        © Copyright 2021. Designed and Developed by Gintaras Kalpokas
      </div>
    </footer>
  );
};

export default Footer;
