import React from "react";

const ItemCarrito = (props) => {
  const { data, deleteFromCart } = props;

  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <h4>{data.nombre}</h4>
      <h5>$ {data.precio}</h5>
      <h5>{data.cantidad} u</h5>
      <h5>Subtotal: $ {data.precio * data.cantidad}</h5>
      <button onClick={()=>deleteFromCart(data.id, false)}>Eliminar Uno</button>
      <button onClick={()=>deleteFromCart(data.id, true)}>Eliminar Todos</button>
    </div>
  );
};

export default ItemCarrito;