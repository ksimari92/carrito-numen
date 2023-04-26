import React from 'react';

const Producto = (props) => {
    const {id, nombre, precio, src} = props.data;
    const addToCart = props.addToCart;

    return (
        <div className='col-sm-6 col-md-4'>
            <h4>{nombre}</h4>
            <img width={100} src={src} />
            <h5>$ {precio}</h5>
            <button onClick={()=>addToCart(id)} className='btn btn-success btn-sm'>Agregar</button>
        </div>
    );
}

export default Producto;