import React from "react";
import { Navbar, Nav, NavItem, MenuItem, NavDropdown } from 'react-bootstrap';
import styles from "./Features.scss";

import BotonesLogin from "../BotonesLogin/BotonesLogin"


// Caja de arena
const Features = (props) => (

      <div className={styles.features}>
        <Navbar className={styles.todo}>
      <BotonesLogin updateState={props.updateState} />
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#home">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">
              Link
    </NavItem>
            <NavItem eventKey={2} href="#">
              Link
    </NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else heree</MenuItem>
              <MenuItem divider />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
        <h3>Interested in this boilerplate Features?</h3>
        <ul>
          <li>React, ReactDOM, Redux, React-Redux, React-Router, Redux-Thunk</li>
          <li>Hot Module Replacement</li>
          <li>Flow type</li>
          <li>
            PostCSS configured to be used from ie10 and some legacy browser
            fallbacks supported
      </li>
          <li>
            Images loader with images-webpack-loader which load and optimize your
        images{" "}
          </li>
          <li>Font loader supported</li>
          <li>Webpack dev server configured on port 3000</li>
          <li>also support for node server.js with express on port 3000 too</li>
          <li>Mocha, chai, sinon and enzyme for testing your app</li>
          <li>
            Extract-Text-Plugin so you could separate your style.css from the
            bundle.js
      </li>
          <li>ESlint, Prettier and Stylelint correctly configured</li>
          <li>Yarn is here with some scripts</li>
          <li>And of course git too!</li>
        </ul>
        <BotonesLogin updateState={props.updateState}/>
        <p> {props.user && props.user.displayName}</p>
      </div>
    );
  


export default Features;
