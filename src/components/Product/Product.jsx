import React from "react";
import PropTypes from 'prop-types';
/* import styles from "./Product.scss"; */
const Product = props =>(
    <div>
        <span>{props.name}</span>
    </div>
)
Product.propTypes = {
    name: PropTypes.element.isRequired
  };
export default Product;