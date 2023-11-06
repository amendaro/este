<template>
    <div id="weather">
        <img src="images/sunny.svg"> {{overcast}}
        <span class="temperature">{{currentTemp}}°</span><br>
        <span id="temp-values">Min {{minTemp}}° <br> Max {{maxTemp}}°</span>
    </div>
    <v-card
            class="mx-auto"
            max-width="368"
    >
        <v-card-item title="Florida">
            <template v-slot:subtitle>
                <v-icon
                        icon="mdi-alert"
                        size="18"
                        color="error"
                        class="me-1 pb-1"
                ></v-icon>

                Extreme Weather Alert
            </template>
        </v-card-item>

        <v-card-text class="py-0">
            <v-row align="center" no-gutters>
                <v-col
                        class="text-h2"
                        cols="6"
                >
                    64&deg;F
                </v-col>

                <v-col cols="6" class="text-right">
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
                <v-list-item-subtitle>123 km/h</v-list-item-subtitle>
            </v-list-item>

            <v-list-item
                    density="compact"
                    prepend-icon="mdi-weather-pouring"
            >
                <v-list-item-subtitle>{{currentTemp}}</v-list-item-subtitle>

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
    import axios from "axios";
    export default {
        data: () => ({
            labels: { 0: 'SU', 1: 'MO', 2: 'TU', 3: 'WED', 4: 'TH', 5: 'FR', 6: 'SA' },
            expand: false,
            time: 0,
            forecast: [
                { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24\xB0/12\xB0' },
                { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22\xB0/14\xB0' },
                { day: 'Thursday', icon: 'mdi-cloud', temp: '25\xB0/15\xB0' },
            ],
            currentTemp: '',
            minTemp: '',
            maxTemp:'',
            sunrise: '',
            sunset: '',
            pressure: '',
            humidity: '',
            wind: '',
            overcast: '',
            icon: '',

            methods: {
                getWeather() {
                    let url = "http://api.openweathermap.org/data/2.5/weather?q=London&units=metric&APPID=a3d248eb8775c92ff42e1c5f7ede5362";
                    axios
                        .get(url)
                        .then(response => {
                            this.currentTemp = response.data.main.temp;
                            this.minTemp = response.data.main.temp_min;
                            this.maxTemp = response.data.main.temp_max;
                            this.pressure = response.data.main.pressure;
                            this.humidity = response.data.main.humidity + '%';
                            this.wind = response.data.wind.speed + 'm/s';
                            this.overcast = response.data.weather[0].description;
                            this.icon = "images/" + response.data.weather[0].icon.slice(0, 2) + ".svg";
                            this.sunrise = new Date(response.data.sys.sunrise*1000).toLocaleTimeString("en-GB").slice(0,4);
                            this.sunset = new Date(response.data.sys.sunset*1000).toLocaleTimeString("en-GB").slice(0,4);
                        })
                        .catch(error => {
                            console.log(error);
                        });
                },
            },
            beforeMount() {
                this.getWeather();
            },
        }),

    }
</script>
