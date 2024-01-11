<template>
    <VueToolbar> </VueToolbar>
    <v-container>
        <h1>Tiempo en La Habana</h1>
        <v-row>
            <v-col cols="6">
                <v-card>
                    <v-card-text>
                        <p>Temperatura: {{ weatherData.temperature }}°C</p>
                        <p>Descripción: {{ weatherData.description }}</p>
                        <p>Sensación térmica: {{ weatherData.feelsLike }}°C</p>
                        <p>Humedad: {{ weatherData.humidity }}%</p>
                        <p>Presión atmosférica: {{ weatherData.pressure }} hPa</p>
                        <p>Viento: {{ weatherData.windSpeed }} m/s, {{ weatherData.windDirection }}</p>
                        <p>Amanecer: {{ weatherData.sunrise }}</p>
                        <p>Atardecer: {{ weatherData.sunset }}</p>
                    </v-card-text>
                </v-card>
            </v-col>
            <v-col cols="6">
                <div id="map"></div>
            </v-col>
        </v-row>
        <v-row>
            <v-col v-for="(forecast, index) in weatherForecast" :key="index" cols="2">
                <v-card>
                    <v-card-title>{{ forecast.day }}</v-card-title>
                    <v-card-text>
                        <p>Mañana: {{ forecast.morningTemp }}°C</p>
                        <p>Noche: {{ forecast.nightTemp }}°C</p>
                    </v-card-text>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

    import VueToolbar from "../components/VueToolbar";
    export default {
        components: {VueToolbar},
        data() {
            return {
                weatherData: {
                    temperature: null,
                    description: null,
                    feelsLike: null,
                    humidity: null,
                    pressure: null,
                    windSpeed: null,
                    windDirection: null,
                    sunrise: null,
                    sunset: null
                },
                weatherForecast: []
            };
        },
        mounted() {
            fetch('https://api.openweathermap.org/data/2.5/weather?q=Havana&appid=a3d248eb8775c92ff42e1c5f7ede5362&units=metric')
                .then(response => response.json())
                .then(data => {
                    this.weatherData.temperature = data.main.temp;
                    this.weatherData.description = data.weather[0].description;
                    this.weatherData.feelsLike = data.main.feels_like;
                    this.weatherData.humidity = data.main.humidity;
                    this.weatherData.pressure = data.main.pressure;
                    this.weatherData.windSpeed = data.wind.speed;
                    this.weatherData.windDirection = data.wind.deg;
                    this.weatherData.sunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
                    this.weatherData.sunset = new Date(data.sys.sunset * 1000).toLocaleTimeString();

                    // Código para mostrar el mapa
                    const mapOptions = {
                        center: { lat: data.coord.lat, lng: data.coord.lon },
                        zoom: 8
                    };
                    const map = new google.maps.Map(document.getElementById('map'), mapOptions);
                })
                .catch(error => {
                    console.error('Error al obtener los datos del tiempo:', error);
                });

            fetch('https://api.openweathermap.org/data/2.5/forecast?q=Havana&appid=a3d248eb8775c92ff42e1c5f7ede5362&units=metric')
                .then(response => response.json())
                .then(data => {
                    for (let i = 0; i < data.list.length; i += 8) {
                        const forecast = {
                            day: new Date(data.list[i].dt * 1000).toLocaleDateString('es-ES', { weekday: 'long' }),
                            morningTemp: data.list[i].main.temp,
                            nightTemp: data.list[i + 4].main.temp
                        };
                        this.weatherForecast.push(forecast);
                    }
                })
                .catch(error => {
                    console.error('Error al obtener el pronóstico del tiempo:', error);
                });
        }
    };
</script>

<style scoped>
    #map {
        height: 400px;
    }
</style>
