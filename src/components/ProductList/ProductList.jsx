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
        this.props.promise(this.props.category).then(data=>{
            this.update(data);
        },reject);
        this.state = {
            productos:[{name:''}]
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
    promise: PropTypes.func.isRequired,
    category: PropTypes.string.isRequired
}
export default ProductList;