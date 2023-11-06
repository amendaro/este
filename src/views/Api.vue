<template>
    <v-container>
    <div>
        <h1>Tiempo</h1>
        <p>Temperatura: {{ temperature }}°C</p>
        <p>Descripción: {{ description }}</p>
        <p> Imagen: {{ imageUrl }}</p>
        <p> Ciudad: {{country}}</p>
    </div>
        </v-container>
</template>

<script>
    import axios from 'axios';
    export default {
        data() {
            return {

                temperature: null,
                description: null,
                imageUrl: null,
                country: '',
            };
        },
        mounted() {
            axios.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=a3d248eb8775c92ff42e1c5f7ede5362')
                .then(response => {
                    this.temperature = response.data.main.temp;
                    this.description = response.data.weather[0].description;
                    this.imageUrl = response.data.weather[0].icon;
                    this.country = response.data.sys.country;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    };
</script>