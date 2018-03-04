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
        const newList = this.props.cpu(lista);
        this.setState({
            productos:newList
        })
    }
    render(){
        let x = 0;
        return(
            <div className={styles.container}>
                {
                    this.state.productos.map(e => <Product key={x++} 
                        price={!e.price ? "temporal" : e.price.actual}
                        name={e.name === undefined ? "temporal" : e.name} 
                        img={e.img === undefined ? "temporal" : e.img}
                        description={e.description === undefined ? "temporal" : e.description} 
                        x={e.name === undefined ? 'temporal':''}/>)
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