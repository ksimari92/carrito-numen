import { TYPES } from "./actions";

export const carritoInitialState = {
    productos: [],
    carrito: [],
};

export function carritoReducer(state, action) {
    switch (action.type) {
        case TYPES.READ_STATE:{
                return {
                    ...state,
                    productos: action.payload[0],
                    carrito: action.payload[1]
                }            
        }
        case TYPES.ADD_TO_CART: {

            let nuevoItem = state.productos.find(producto => producto.id === action.payload)
            //console.log(nuevoItem)

            let itemEnCarrito = state.carrito.find(item => item.id === action.payload)

            return itemEnCarrito ? {
                ...state,
                carrito: state.carrito.map(item => item.id === nuevoItem.id ? { ...item, cantidad: item.cantidad + 1 } : item)
            } : {
                ...state,
                carrito: [...state.carrito, { ...nuevoItem, cantidad: 1 }]
            }
        }

        case TYPES.REMOVE_ITEM: {
            let itemAEliminar = state.carrito.find(item => item.id === action.payload);

            return itemAEliminar.cantidad > 1 ? {
                ...state,
                carrito: state.carrito.map(item => item.id === itemAEliminar.id ? { ...item, cantidad: item.cantidad - 1 } : item)
            } : {
                ...state,
                carrito: state.carrito.filter(item => item.id !== itemAEliminar.id)  //[1,2,3,4] = [1,3,4]
            }
        }

        case TYPES.REMOVE_ALL_ITEMS: { 
            let itemAEliminar = state.carrito.find(item => item.id === action.payload) // devuelve true o false

            return{
                ...state,
                carrito: state.carrito.filter(item => item.id !== itemAEliminar.id) // me va a filtrar todos los elementos del carrito que NO tengan ese id ---> me van a quedar todos los elementos menos el que quiero eliminar 
            }
        }

        case TYPES.CLEAR_CART: { 
            return {
                ...state,
                carrito: []
            };
        }

      

        default: return state;
    }
}