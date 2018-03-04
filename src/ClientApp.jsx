import React from "react";
import { render } from "react-dom";
import $ from 'jquery';
import App from "./App";

$('head').append($('<script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>'));

const renderApp = () => {
  render(<App />, document.getElementById("app"));
};
renderApp();

if (module.hot) {
  module.hot.accept("./App", () => {
    renderApp();
  });
}
