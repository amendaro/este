
<template>

<v-container>
    <include src="../components/VueToolbar.vue"/>
    <v-row>
        <v-col xs="12" sm="6" v-for="(results, index) in result" :key="index">
          <v-card >
             <v-img v-bind:src="results.country_logo">


             </v-img>

                 <v-card-title>
                 <h2>{{results.country_name}}</h2>
                 </v-card-title>

                     <v-card-text>
                         <p>25 abr 2023 — Hay debate entorno a este extremo que juegue por la izquierda y esto aún puede dar muchas vueltas. Por ahora, el Barça escucha a la espera de ... </p>
                     </v-card-text>
                         <v-card-actions>
                             <v-btn color="info" flat="" @click="dialog= true">Leer mas</v-btn>

                         </v-card-actions>



          </v-card>
        </v-col>

    </v-row>
    <!-- Dialog -->

<v-dialog v-model="dialog" width="500" persistent="">
<v-card>
    <v-card-title>Que bola</v-card-title>
    <v-card-text> Lorem ipsum</v-card-text>
    <v-divider></v-divider>
    <v-card-actions>
        <v-btn @click="dialog=false">Cerrar</v-btn>
    </v-card-actions>
</v-card>
</v-dialog>

    <!-- Fin Dialog -->
</v-container>
</template>

<script>
    import axios from "axios";
    import VueToolbar from "../components/VueToolbar";
    export default {
        components:{
            VueToolbar
        },
        data: () => ({
            dialog: false,
            results: '',
            error: false,
            loadingData: false,

            success: 1,
            result: [
                {
                    "country_key": "10",
                    "country_name": "Albania",
                    "country_iso2": null,
                    "country_logo": "https://apiv2.allsportsapi.com/logo/logo_country/10_albania.png"
                },
                {
                    "country_key": "11",
                    "country_name": "Algeria",
                    "country_iso2": null,
                    "country_logo": "https://apiv2.allsportsapi.com/logo/logo_country/11_algeria.png"
                },
                {
                    "country_key": "12",
                    "country_name": "Andorra",
                    "country_iso2": null,
                    "country_logo": "https://apiv2.allsportsapi.com/logo/logo_country/12_andorra.png"
                },
                {
                    "country_key": "13",
                    "country_name": "Angola",
                    "country_iso2": null,
                    "country_logo": "https://apiv2.allsportsapi.com/logo/logo_country/13_angola.png"
                },

            ]



        }),
        methods: {
            async getAll() {
                try {
                    this.loadingData = true;
                    let response = await axios.get(
                        "https://apiv2.allsportsapi.com/football/?met=Countries&APIkey=149c43fbaea931ebda3a1b8e1e8eecf728974b381f8dea063d2c8f1d237674ee"
                    );
                    this.results = response.data;
                } catch (error) {
                    console.log(error);
                    this.error = true;
                } finally {
                    this.loadingData = false;
                }
            },
        },
        created() {
            this.getAll();
        },
    };
</script>

<style scoped lang="scss"></style>
