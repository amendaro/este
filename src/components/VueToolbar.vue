<template>
    <v-toolbar color="#2196F3">
        <v-app-bar-nav-icon  @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title >VUE</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn v-if="ruta" class="text-none" stacked>
            <v-badge :content="0" color="error">

                <v-icon>mdi-store-outline</v-icon>
            </v-badge>
        </v-btn>




    </v-toolbar>

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
                <v-btn color="success" block="" :to="{name: 'about'}">About</v-btn>
            </v-col>
            <v-col>
                <v-btn color="success" block="" :to="{name: 'prueba'}">Prueba Carrito</v-btn>
            </v-col>
        </v-row>
    </v-navigation-drawer>

</template>

<script>

    export default {
        name: "VueToolbar",

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


<style scoped>

</style>