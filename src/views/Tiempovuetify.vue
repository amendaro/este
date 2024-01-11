<template>
    <VueToolbar> </VueToolbar>
    <v-card
            class="mx-auto"
            max-width="368"
    >
        <v-card-item title="La Habana">
            <template v-slot:subtitle>
                <v-icon
                        icon="mdi-alert"
                        size="25"
                        color="error"
                        class="me-1 pb-1"
                ></v-icon>

                Estado del tiempo
            </template>
        </v-card-item>

        <v-card-text class="py-0">
            <v-row align="center" no-gutters>
                <v-col
                        class="text-h2"
                        cols="12"
                >
                    {{ weatherData.temperature }}°C
                </v-col>

                <v-col cols="12" class="text-right">
                    <v-icon
                            color="error"
                            icon="mdi-weather-hurricane"
                            size="88"
                    ></v-icon>
                </v-col>
            </v-row>
        </v-card-text>

        <div class="d-flex py-3 justify-space-between">
            <v-list-item
                    density="compact"
                    prepend-icon="mdi-weather-windy"
            >
                <v-list-item-subtitle>{{ weatherData.windSpeed }} m/s</v-list-item-subtitle>
            </v-list-item>

            <v-list-item
                    density="compact"
                    prepend-icon="mdi-weather-pouring"
            >
                <v-list-item-subtitle>{{ weatherData.humidity }}%</v-list-item-subtitle>
            </v-list-item>
        </div>

        <v-expand-transition>
            <div v-if="expand">
                <div class="py-2">
                    <v-slider
                            v-model="time"
                            :max="6"
                            :step="1"
                            :ticks="labels"
                            class="mx-4"
                            color="primary"
                            density="compact"
                            hide-details
                            show-ticks="always"
                            thumb-size="10"
                    ></v-slider>
                </div>

                <v-list class="bg-transparent">
                    <v-list-item
                            v-for="item in forecast"
                            :key="item.day"
                            :title="item.day"
                            :append-icon="item.icon"
                            :subtitle="item.temp"
                    >
                    </v-list-item>
                </v-list>
            </div>
        </v-expand-transition>

        <v-divider></v-divider>

        <v-card-actions>
            <v-btn @click="expand = !expand">
                {{ !expand ? 'Full Report' : 'Hide Report' }}
            </v-btn>
        </v-card-actions>
    </v-card>
</template>
<script>
    import { ref } from 'vue'
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

            labels = {0: 'SU', 1: 'MO', 2: 'TU', 3: 'WED', 4: 'TH', 5: 'FR', 6: 'SA'}
            forecast = [
                {day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\u00B0/12\u00B0'},
                {day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\u00B0/14\u00B0'},
                {day: 'Thursday', icon: 'mdi-cloud', temp: '25\u00B0/15\u00B0'},
            ]
            expand = ref(false)
            time = ref(0)
        },
            mounted()
            {
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
                            center: {lat: data.coord.lat, lng: data.coord.lon},
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
                                day: new Date(data.list[i].dt * 1000).toLocaleDateString('es-ES', {weekday: 'long'}),
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


    }
</script>