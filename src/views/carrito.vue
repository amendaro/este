<template>

</template>

<script>
    export default {



        data() {
            return {
                productos: [
                    {id: 1, nombre: 'Producto 1', descripcion: 'Descripción del producto 1', precio: 10},
                    {id: 2, nombre: 'Producto 2', descripcion: 'Descripción del producto 2', precio: 20},
                    {id: 3, nombre: 'Producto 3', descripcion: 'Descripción del producto 3', precio: 30},
                    {id: 4, nombre: 'Producto 4', descripcion: 'Descripción del producto 4', precio: 40},
                ],
                carrito: [],
                cartItems: 0,
            };
        },
        methods: {
            AgregarAlCarrito(producto) {
                this.carrito.push(producto);
                this.cartItems++;
            },
            eliminardelcarrito(producto) {
                const index = this.carrito.findIndex(item => item.id === producto.id);
                if (index !== -1){
                    this.carrito.splice(index,1);

                }
            },
        }
    }
</script>

<style>
    .products {
        display: flex;
        flex-wrap: wrap;
    }

    .product-item {
        margin: 10px;
    }

    .cart {
        position: fixed;
        bottom: 20px;
        right: 20px;
        background-color: #f8f9fa;
        padding: 10px;
        border-radius: 50%;
        display: flex;
        align-items: center;
    }

    .cart-count {
        background-color: red;
        color: white;
        border-radius: 50%;
        padding: 5px;
        margin-left: 5px;
    }
</style>