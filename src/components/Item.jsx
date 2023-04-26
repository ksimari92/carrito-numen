import React from 'react';

const Item = (props) => {
    const { id, nombre, precio, cantidad } = props.data;
    const deleteFromCart = props.deleteFromCart;

    return (
        <div className='col-md-12 d-flex flex-row justify-content-between'>
            <h4>{nombre}</h4>
            <h5>$ {precio} x {cantidad}u</h5>
            <h5>$ {precio * cantidad}</h5>
            <button onClick={() => deleteFromCart(id, false)} className='btn btn-danger btn-sm'>Eliminar uno</button>
            <button onClick={() => deleteFromCart(id, true)} className='btn btn-danger btn-sm'>Eliminar todos</button>
        </div>
    );
}

export default Item;