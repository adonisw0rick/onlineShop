import React from "react";
import PropTypes from 'prop-types';
import styles from "./Product.scss";

const Product = props =>(
    <div className={styles.caja}>
        <h3 className={styles.title}>{props.name}</h3>
        <img className={styles.cam} src={props.img} alt={props.description} />
        <p className={styles.desc}>{props.description}</p>
        <p className={styles.price}>{props.price}</p>
        
    </div>
)
Product.propTypes = {
    name: PropTypes.string.isRequired
  };
export default Product;