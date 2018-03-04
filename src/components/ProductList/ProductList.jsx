import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductList.scss';
import Product from './../Product/Product';

const reject = reason =>{
    console.log(reason);
}
class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.props.promise(this.props.category).then(data=>{
            this.update(data);
        },reject);
        this.state = {
            productos:[]
        }
    }
    update(lista){
        const moneyValue = localStorage.getItem('moneyValue')
        const newList = this.props.cpu(lista);
        newList.map(e=>{
            const aux = e;
            aux.price.original = (parseFloat(e.price.original)*moneyValue).toFixed(0)
            return aux; 
        })
        this.setState({
            productos:newList
        })
    }
    render(){
        let x = 0;
        return(
            <div className={styles.products}>
                {
                    this.state.productos.map(e => <Product key={x++} name={e.name === undefined?"temporal":e.name}
                    description={e.description === undefined?"no disponible": e.description}
                    price={!e.price ? "temporal" : e.price.original}
                    img = {e.img === undefined ? "no" : e.img}
                    />)
                }
            </div>
        )
    }
}
ProductList.propTypes = {
    cpu: PropTypes.func.isRequired,
    promise: PropTypes.func.isRequired,
    category: PropTypes.string.isRequired
}
export default ProductList;