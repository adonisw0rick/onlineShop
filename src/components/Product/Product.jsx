import React from "react";
import PropTypes from 'prop-types';
import styles from "./Product.scss";

const Product = props =>(
    <div className={styles.product}>
        <img alt="" src={props.img}/><br/><br/>
        <span className={styles.productname}><a href={props.link}>{props.name},</a> <br/><b>{props.price}$</b><br/></span>
    </div>
)
Product.propTypes = {
    name: PropTypes.element.isRequired,
    price: PropTypes.element.isRequired,
    img: PropTypes.element.isRequired,
    link:PropTypes.element.isRequired
  };
export default Product;