import React from "react";
import css from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={` ${css.footer}`}>
      <div className={"container"}>
        © Copyright ClassiList 2021. Designed and Developed by RadiusTheme
      </div>
    </footer>
  );
};

export default Footer;
