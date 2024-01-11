<template>
    <v-app-bar color="#2196F3" >
        <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title >VUE</v-toolbar-title>
        <v-spacer></v-spacer>
        <div v-show="$route.path === '/prueba'">
        <v-btn  class="text-none" stacked>
            <v-badge  :content="cantidadProductosEnCarrito" color="error">



                <v-icon>mdi-store-outline</v-icon>
            </v-badge>

        </v-btn>
        </div>




    </v-app-bar>

    <v-navigation-drawer
            v-model="drawer"
            temporary=""

    >
        <v-list-item
                prepend-avatar="https://randomuser.me/api/portraits/men/85.jpg"

                nav
                class="justify-center"
        >
        </v-list-item>
        <v-list-item class="justify-center">
            <h3>Alejandro Mendaro</h3>
        </v-list-item>




        <v-row class="mt-5">
            <v-col>
                <v-btn color="success" block="" :to="{name: 'home'}">Home</v-btn>

            </v-col>
            <v-col>
                <v-btn color="success" block="" :to="{name: 'tareas-crud'}">Lista de Tareas</v-btn>
            </v-col>
            <v-col>
                <v-btn color="success" block="" :to="{name: 'tiempo'}">API Tiempo</v-btn>
            </v-col>
            <v-col>
                <v-btn color="success" block="" :to="{name: 'prueba'}">Prueba Carrito</v-btn>
            </v-col>
            <v-col>
                <v-btn color="success" block="" :to="{name: 'tiempovuetify'}">Api Tiempo Vuetify</v-btn>
            </v-col>
        </v-row>
    </v-navigation-drawer>

</template>

<script>

    import { mapState, mapActions, mapGetters } from 'vuex';


    export default {
        name: "VueToolbar",

        computed: {
            ...mapState(['productos', 'carrito']),
            ...mapGetters(['cantidadProductosEnCarrito'])
        },
        methods: {
            ...mapActions(['agregarAlCarrito', 'eliminarDelCarrito'])
        },



        data() {
            return {
                drawer: false
            }
        },


        methods: {
            ruta() {
                return this.$route.path === './views/prueba.vue';

            },




        }
    }


</script>




<style >

</style>