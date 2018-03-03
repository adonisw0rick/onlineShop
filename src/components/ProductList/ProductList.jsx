import React from 'react';
import PropTypes from 'prop-types';
/* import styles from './ProductList'; */
import Product from './../Product/Product';

const reject = reason =>{
    console.log(reason);
}
class ProductList extends React.Component{
    constructor(props){
        super(props);
        this.props.promise().then(data=>{
            this.update(data);
        },reject);
        this.state = {
            productos:[{name:''}]
        }
    }
    update(lista){
        this.setState({
            productos:this.props.cpu(lista)
        })
    }
    render(){
        let x = 0;
        return(
            <div>
                {
                    this.state.productos.map(e => <Product key={x++} name={e.name === undefined?"temporal":e.name} />)
                }
            </div>
        )
    }
}
ProductList.propTypes = {
    cpu: PropTypes.func.isRequired,
    promise: PropTypes.func.isRequired
}
export default ProductList;