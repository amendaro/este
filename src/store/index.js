import { createStore } from 'vuex'

export default createStore({
    state: {
        productos: [
            {id: 1, nombre: 'Producto 1', descripcion: 'Descripción del producto 1', precio: 10},
            {id: 2, nombre: 'Producto 2', descripcion: 'Descripción del producto 2', precio: 20},
            {id: 3, nombre: 'Producto 3', descripcion: 'Descripción del producto 3', precio: 30},
            {id: 4, nombre: 'Producto 4', descripcion: 'Descripción del producto 4', precio: 40},
        ],
        carrito: []
    },
    mutations: {
        agregarAlCarrito(state, producto) {
            state.carrito.push(producto);
        },
        eliminarDelCarrito(state, id) {
            state.carrito = state.carrito.filter(producto => producto.id !== id);
        }
    },
    actions: {
        agregarAlCarrito({ commit }, producto) {
            commit('agregarAlCarrito', producto);
        },
        eliminarDelCarrito({ commit }, id) {
            commit('eliminarDelCarrito', id);
        }
    },
    getters: {
        cantidadProductosEnCarrito: state => {
            return state.carrito.length;
        }
    }
});