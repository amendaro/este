<template>
        <VueToolbar> </VueToolbar>



    <v-container >


        <v-row xs="12" sm="6" >



                <v-card
                        :loading="loading"

                        max-width="374"
                        v-for="producto in productos" :key="producto.id"
                        class="cart-item1"

                >
                    <template v-slot:loader="{ isActive }">
                        <v-progress-linear
                                :active="isActive"
                                color="deep-purple"
                                height="4"
                                indeterminate
                        ></v-progress-linear>
                    </template>

                    <v-img
                            cover
                            height="175"
                            src="https://cdn.vuetifyjs.com/images/cards/cooking.png"
                    ></v-img>

                    <v-card-item>
                        <v-card-title>{{producto.nombre}}</v-card-title>

                        <v-card-subtitle>
                            <span class="me-1">Local Favorite</span>

                            <v-icon
                                    color="error"
                                    icon="mdi-fire-circle"
                                    size="small"
                            ></v-icon>
                        </v-card-subtitle>
                    </v-card-item>

                    <v-card-text>
                        <v-row
                                align="center"
                                class="mx-0"
                        >
                            <v-rating
                                    :model-value="4.5"
                                    color="amber"
                                    density="compact"
                                    half-increments
                                    readonly
                                    size="small"
                            ></v-rating>

                            <div class="text-grey ms-4">
                                4.5 (413)
                            </div>
                        </v-row>

                        <div class="my-4 text-subtitle-1">
                            {{producto.precio}}
                        </div>

                        <div>{{producto.descripcion}}</div>
                    </v-card-text>

                    <v-divider class="mx-4 mb-1"></v-divider>


                    <v-card-actions>
                        <v-btn
                                color="deep-purple-lighten-2"
                                variant="text"
                                @click="agregarAlCarrito(producto)"
                        >
                            Agregar al carrito
                        </v-btn>
                    </v-card-actions>
                    <!--v-card-actions>
                        <v-btn
                                color="deep-purple-lighten-2"
                                variant="text"
                                @click="agregarAlCarrito(producto)"
                        >
                            Agregar a lista
                        </v-btn>
                    </v-card-actions!-->
                </v-card>


            <!--v-col  class="cart-item1"   v-for="producto in productos" :key="producto.id" >




                    <v-card-title>

                        <h2>{{ producto.nombre }}</h2>

                    </v-card-title>
                        <v-card-text>

                            <p> {{ producto.descripcion }} </p>

                        </v-card-text>
                    <v-card-text>
                        <p> Precio: {{ producto.precio }} </p>
                    </v-card-text>

                    <v-btn @click="agregarAlCarrito(producto)"  color="success" type="submit" class="btn btn-primary">Agregar al carrito</v-btn>



            </v-col !-->

        </v-row>









<div>

        <h1 v-if="carrito.length" class="my-4"> Lista de Productos </h1>
        <h1 v-else class="my-4"> No hay productos Agregados</h1>
    <lista-productos :productos="carrito" @eliminarProducto="eliminarDelCarrito"></lista-productos>

</div>


    </v-container>











</template>

<script>
    import { mapState, mapActions, mapGetters } from 'vuex';
    import VueToolbar from "../components/VueToolbar";
    import ListaProductos from '../components/ListaProductos.vue';





    export default {
        components: {VueToolbar, ListaProductos},
        computed: {
            ...mapState(['productos', 'carrito']),
        },
        methods: {
            ...mapActions(['agregarAlCarrito', 'eliminarDelCarrito'])
        },
    }




</script>

<style>
    .container {
        margin-top: 50px;
    }
         /* Estilos personalizados */
     body {
         background-color: #f8f9fa;
         font-family: 'Roboto', sans-serif;
         margin: 0;
         padding: 0;
     }
    .navbar {
        background-color: #333;
    }
    .navbar-brand {
        display: flex;
        align-items: center;
    }
    .logo-img-rounded {
        height: 30px;
        border-radius: 50%;
        margin-right: 10px;
    }
    .navbar-brand-text {
        font-size: 24px;
        color: #ff9900;
    }
    .navbar-brand-text-red {
        font-size: 24px;
        color: red;
    }
    .navbar-toggler-icon {
        background-color: #ff9900;
    }
    .navbar-toggler {
        border: none;
    }
    .navbar-collapse {
        justify-content: flex-end;
    }
    .navbar-nav {
        align-items: center;
    }
    .nav-item {
        margin: 0 10px;
    }

    .product-card {
        background-color: #fff;
        border: 1px solid #e5e5e5;
        border-radius: 15px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s, box-shadow 0.2s;
        margin: 10px;
    }
    .product-card:hover {
        transform: scale(1.05);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    }
    .btn-login {
        background-color: #ff9900;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
    }
    h1, h2, h3, h4, h5, h6 {
        font-size: 24px;
        line-height: 1.5;
        letter-spacing: 0.5px;
        color: #333;
    }
    p {
        font-size: 18px;
        color: #555;
        line-height: 1.6;
        letter-spacing: 0.3px;
    }
    .btn-add-to-cart {
        background-color: #ff9900;
        color: white;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
    }
    .cart-item {
        background-color: #fff;
        border: 1px solid rgba(19, 168, 229, 0.52);
        border-radius: 15px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s, box-shadow 0.2s;
        margin: 10px;
    }

    .cart-item1 {
        background-color: #f8f9fa;
        border: 1px solid rgba(19, 168, 229, 0.52);
        border-radius: 15px;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.2s, box-shadow 0.2s;
        margin: 15px;
    }


    .cart-item:hover {
        transform: scale(1.1);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    }

    .cart-item1:hover {
        transform: scale(1.1);
        box-shadow: 0 8px 12px rgba(0, 0, 0, 0.15);
    }
    .cart-item-title {
        font-size: 20px;
    }
    .cart-item-description {
        font-size: 16px;
        color: #777;
    }
    .cart-item-price {
        font-size: 18px;
        font-weight: bold;
        color: #333;
    }
    .cart-item-remove {
        color: #ff9900;
        font-size: 20px;
        cursor: pointer;
    }
    .cart-total {
        font-size: 24px;
        font-weight: bold;
        color: #333;
    }
    .footer {
        background-color: #333;
        color: white;
        padding: 20px 0;
        text-align: center;
        position: absolute;
        bottom: 0;
        width: 100%;
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
    .hide{
        display: none;
    }
</style>
