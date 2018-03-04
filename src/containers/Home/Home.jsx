// @flow
import React from 'react';
import styles from './About.scss';
import ProductList from '../../components/ProductList/ProductList';
import * as getProducts from '../../controllers/getProducts';


const Home = () => (
    <div className={styles.about}>
        <ProductList  promise={getProducts.ebayPromise} cpu={getProducts.processProductEbay} category="tablets"/>
        <ProductList  promise={getProducts.walmartPromise} cpu={getProducts.processProductWalmart} category="cameras"/>
    </div>
);

export default Home;