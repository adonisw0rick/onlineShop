import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductList.scss';
import Product from './../Product/Product';
import spinner from './spinner.svg';

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
            productos:null 
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
        console.log(this.state.productos)
        return(
            <div className={styles.products}>
                {(!this.state.productos) ? (<div className={styles.spinner}><img alt="cargando..." src={spinner}/> </div>)
                 : this.state.productos.map(e => <Product key={x++} name={e.name === undefined ? "temporal" : e.name}
                    description={e.description === undefined ? "no disponible" : e.description}
                    price={!e.price ? "temporal" : e.price.original}
                    img={e.img === undefined ? "no" : e.img}
                    link={e.link === undefined ? "" : e.link}
                />)}
                {/* {
                    this.state.productos.map(e => <Product key={x++} name={e.name === undefined?"temporal":e.name}
                    description={e.description === undefined?"no disponible": e.description}
                    price={!e.price ? "temporal" : e.price.original}
                    img = {e.img === undefined ? "no" : e.img}
                    link = {e.link === undefined?"": e.link}
                    />)
                } */}
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