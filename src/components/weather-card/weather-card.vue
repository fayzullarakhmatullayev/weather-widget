<template>
  <div class="card">
    <div class="card-city">{{ weatherData.name }}, {{ weatherData.sys.country }}</div>
    <div class="card-temp">
      <div class="card-temp__img">
        <img
          :src="`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`"
          alt="img"
        />
      </div>
      <h2>{{ Math.ceil(weatherData.main.temp) }}<span>&deg;C</span></h2>
    </div>
    <div class="card-feels">
      <p>
        Feels like {{ Math.ceil(weatherData.main.feels_like) }}&deg;C.
        {{ weatherData.weather[0].main }},
        {{ weatherData.weather[0].description }}
      </p>
    </div>
    <div class="card-nav">
      <span>
        <img
          :style="{ transform: `rotate(${weatherData.wind.deg}deg)` }"
          src="@/assets/svg/navigate.svg"
          alt="navigate"
        />
        {{ weatherData.wind.speed }}m/s {{ windDirection(weatherData.wind.deg).direction }}
      </span>
      <span>
        <img src="@/assets/svg/compass.svg" alt="compass" />
        {{ weatherData.wind.deg }}hPa
      </span>
    </div>
    <div class="card-nav">
      <span>Humidity: {{ weatherData.main.humidity }}%</span>
      <span>Visibility: {{ (weatherData.visibility / 1000).toFixed(1) }}km</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ILocation from '@/types/locationTypes'
import { PropType, reactive, defineProps } from 'vue'
import { fetchWeatherData } from '@/services/getWeatherData'
import { windDirection } from '@/services/windDirections'
import { IWeatherType } from '@/types/weatherDataTypes'
const props = defineProps({
  city: {
    type: Object as PropType<ILocation>,
  },
})

const weatherData = reactive<IWeatherType>(
  await fetchWeatherData({
    lon: props.city?.longitude,
    lat: props.city?.longitude,
  })
)
</script>
