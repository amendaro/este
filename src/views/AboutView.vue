<template>
    <div>
        <button type="button" class="btn btn-primary" @click="addToCart">
            Añadir al carrito
            <i class="fa fa-shopping-bag"></i>
            {{ cartSize }}
        </button>
        <div class="cart">
            <h4>Mi carrito</h4>
            <ul>
                <li v-for="(product, index) in cartProducts" :key="index">
                    {{ product.name }} - {{ product.price }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import { ref, onMounted } from 'vue';

    export default {
        data() {
            const cartSize = ref(0);
            const cartProducts = ref([]);

            function addToCart() {
                // Aquí está la lógica para añadir un producto al carrito
                const newProduct = {
                    name: 'Nuevo producto',
                    price: 19.99,
                };
                cartProducts.value.push(newProduct);
                cartSize.value += 1;
            }

            onMounted(() => {
                // Al montar la componente, podemos hacer algo como agregar un evento de clic personalizado
                // para el botón de añadir al carrito
                document.querySelector('.btn-primary').addEventListener('click', addToCart);
            });

            return { cartSize, cartProducts };
        },
    };
</script>