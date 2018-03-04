import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductList.scss';
import Product from './../Product/Product';

const reject = reason =>{
    console.log(reason);
}
/**
 * Representa un conjunto de productos
 */
class ProductList extends React.Component{
    constructor(props){
        super(props);
        /**
         * se ejecuta la promesa recibida y actualiza el estado si procede
         * */        
        this.props.promise(this.props.category).then(data=>{
            this.update(data);
        },reject);
        this.state = {
            productos:[]
        }
    }
    /**
     * Actualiza el estado del componente
     * @param {object} lista 
     */
    update(lista){
        /** 
         * Se vueleven a procesar los datos y se actualiza el componente
        */
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

/**
 * Datos necesarios para su representacion(promesa, funcion de procesamiento y categoria)
 */
ProductList.propTypes = {
    cpu: PropTypes.func.isRequired,
    promise: PropTypes.func.isRequired,
    category: PropTypes.string.isRequired
}
export default ProductList;