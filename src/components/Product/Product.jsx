import React from "react";
import PropTypes from 'prop-types';
import styles from "./Product.scss";

const Product = props =>(
    <div className={styles.product}>
        <img alt="" src={props.img}/><br/><br/>
        <span className={styles.productname}>{props.name}, <br/><b>{props.price}€</b><br/></span>
    </div>
)
Product.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
  };
export default Product;