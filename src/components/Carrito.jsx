import React, { useReducer,useEffect } from 'react';
import Producto from './Producto';
import Item from './Item';
import axios from 'axios' // npm i axios
import { carritoInitialState, carritoReducer } from './carritoReducer';
import { TYPES } from './actions';

const Carrito = () => {

    //hook useReducer: función reductora + estado inicial
    const [state, dispatch] = useReducer(carritoReducer, carritoInitialState);

    const { productos, carrito } = state;

    const updateState = async () => {
        const productsURL = "http://localhost:3000/productos";
        const cartURL = "http://localhost:3000/carrito";
        const resProducts = await axios.get(productsURL);
        const resCart = await axios.get(cartURL);
        const newProduct = await resProducts.data
        const newCartItem = await resCart.data

        dispatch({ type: TYPES.READ_STATE, payload: [newProduct, newCartItem] })
    }

    useEffect(() => {
        updateState()
    }, [])

    const addToCart = (id) => { dispatch({ type: TYPES.ADD_TO_CART, payload: id }) }

    const deleteFromCart = (id, removeAll) => {
        if (removeAll === true) {
            dispatch({ type: TYPES.REMOVE_ALL_ITEMS, payload: id })
        } else {
            dispatch({ type: TYPES.REMOVE_ITEM, payload: id })
        }
    }

    const clearCart = () => dispatch({ type: TYPES.CLEAR_CART })

    return (
        <div>
            <h1>Carrito de React</h1>
            <h2>Productos</h2>
            <div className='row'>
                {productos.map(producto => <Producto key={producto.id} data={producto} addToCart={addToCart} />)}
            </div>

            <h2>Carrito</h2>
            <div>
                { carrito.map(item => <Item key={item.id} data={item} deleteFromCart={deleteFromCart} />)}
            </div>

            <button onClick={() => clearCart()} className='btn btn-warning btn-sm'>Limpiar Carrito</button>

        </div>
    );

}

export default Carrito;