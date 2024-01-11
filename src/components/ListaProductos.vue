<template>
    <div class="row">
        <div class="col-lg-8">
            <div class="cart-item" v-for="producto in productos" :key="producto.id">

                <v-row>

                    <v-col class="cart-item">
                        <v-card-title>

                            <h2>{{ producto.nombre }}</h2>

                        </v-card-title>
                        <v-card-text>

                            <p> {{ producto.descripcion }} </p>

                        </v-card-text>
                        <v-card-text>
                            <p> Precio: {{ producto.precio }} </p>
                        </v-card-text>
                        <v-btn class="mt-5 ml-5" color="error" @click="eliminarProducto(producto.id)">Eliminar</v-btn>


                    </v-col>

                </v-row>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            productos: {
                type: Array,
                required: true
            }
        },
        methods: {
            eliminarProducto(id) {
                this.$emit('eliminarProducto', id);
            }
        }
    };
</script>
