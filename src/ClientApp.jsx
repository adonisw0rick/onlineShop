import React from "react";
import { render } from "react-dom";
import $ from 'jquery';
import App from "./App";
import {moneyPromise} from './controllers/getProducts';

  $('head').append($('<script defer src="https://use.fontawesome.com/releases/v5.0.8/js/all.js"></script>'));
  $.ajax({
        url:'https://forex.1forge.com/1.0.3/quotes',
        data:{
            pairs:'USDEUR',
            api_key:'unRufelp0lEUJniwMvSVAqwb8bwzwYgj'
        },
        success:data=>{
          localStorage.setItem('moneyValue',data[0].price)
        },
        error:()=>{
          localStorage.setItem('moneyValue',0.8)
        }
    })

const renderApp = () => {
  render(<App />, document.getElementById("app"));
};
renderApp();

if (module.hot) {
  module.hot.accept("./App", () => {
    renderApp();
  });
}
