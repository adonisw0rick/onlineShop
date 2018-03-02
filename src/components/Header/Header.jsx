import React from "react";
import { NavLink } from "react-router-dom";
import reactLogo from "./../../img/logo.svg";
import styles from "./Header.scss";

const Header = () => (
  <header className={styles.header}>
    <img className={styles.logo} src={reactLogo} alt="react logo" />
    <h1 className={styles.title}>
      React & Redux <br /> Boilerplate
    </h1>
    <ul className={styles.nav}>
      <li className={styles.item}>
        <NavLink to="/" className={styles.link} exact activeStyle={{color:"cyan"}}>
          {" "}
          Home{" "}
        </NavLink>
      </li>
      <li className={styles.item}>
        <NavLink to="/features" className={styles.link} activeStyle={{ color: "cyan" }}>
          {" "}
          Features{" "}
        </NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
