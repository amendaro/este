<template>
    <div>
        <v-card v-for="producto in productos" :key="producto.id">
            <v-card-title>{{ producto.nombre }}</v-card-title>
            <v-card-text>{{ producto.descripcion }}</v-card-text>
            <v-btn @click="eliminarDelCarrito(producto.id)">Eliminar</v-btn>
        </v-card>

        <v-badge :content="cantidadProductosEnCarrito">
            <v-btn @click="agregarAlCarrito">Agregar al carrito</v-btn>
        </v-badge>

        <lista-productos :productos="carrito" @eliminarProducto="eliminarDelCarrito"></lista-productos>
    </div>
</template>

<script>
    import { mapState, mapActions, mapGetters } from 'vuex';
    import ListaProductos from '../components/ListaProductos.vue';

    export default {
        components: {
            ListaProductos
        },
        computed: {
            ...mapState(['productos', 'carrito']),
            ...mapGetters(['cantidadProductosEnCarrito'])
        },
        methods: {
            ...mapActions(['agregarAlCarrito', 'eliminarDelCarrito'])
        }
    };
</script>
