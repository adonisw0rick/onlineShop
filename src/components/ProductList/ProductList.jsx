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
            this.update(data.findItemsByCategoryResponse[0].searchResult[0].item);
        },reject);
        this.state = {
            productos:[{name:''}]
        }
    }
    update(lista){
        const newList = [];
        lista.map(e =>
            newList.push(this.props.cpu(e))
        );
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
    cpu: PropTypes.element.isRequired,
    promise: PropTypes.element.isRequired
}
export default ProductList;