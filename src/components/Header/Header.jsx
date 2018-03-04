import React from "react";
import { NavLink } from "react-router-dom";
import reactLogo from "./../../img/logo.svg";
import styles from "./Header.scss";
import BotonesLogin from "../BotonesLogin/BotonesLogin";

const Header = (props) => (
  
  <header className={styles.header}>
    <span className={styles.login}>{props.user && props.user.displayName}</span>
    <span className={styles.login}>{(props.user && props.user.email) && props.user.email}</span>
    <img className={styles.logo} src={reactLogo} alt="react logo" />
    <h1 className={styles.title}>
      React & Suso <br /> OnlineSusoShop
    </h1>
    <BotonesLogin updateState={props.updateState} />
    <ul className={styles.nav}>
      <li className={styles.item}>
        <NavLink to="/" className={styles.link} exact activeStyle={{color:"cyan"}}>
          {" "}
          Home{" "}
        </NavLink>
      </li>
      {/* <li className={styles.item}>
        <NavLink to="/features" className={styles.link} activeStyle={{ color: "cyan" }}>
          {" "}
          Features{" "}
        </NavLink>
      </li> */}
    </ul>
  </header>
);

export default Header;
