<template>
    <div>
        <button @click="addProductToCart">Añadir al carrito</button>
        <span class="badge badge-pill badge-primary">{{ cartQuantity }}</span>
    </div>
</template>

<script>
    export default {
        name: "iconcarrito",

            data() {
                return {
                    cartQuantity: 0,
                    productsInCart: []
                }
            },
            methods: {
                addProductToCart() {
                    const newProduct = { id: 123, name: 'Producto X', price: 19.99 };
                    this.productsInCart.push(newProduct);
                    this.cartQuantity++;
                }
            }
        }

</script>

<style scoped>

</style>