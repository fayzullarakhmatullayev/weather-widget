<template>
  <div class="card">
    <div class="card-city">{{ city?.name }}, {{ city?.sys.country }}</div>
    <div class="card-temp">
      <div class="card-temp__img">
        <img :src="`http://openweathermap.org/img/wn/${city?.weather[0].icon}@2x.png`" alt="img" />
      </div>
      <h2>{{ Math.ceil(city?.main.temp || 0) }}<span>&deg;C</span></h2>
    </div>
    <div class="card-feels">
      <p>
        Feels like {{ Math.ceil(city?.main.feels_like || 0) }}&deg;C. {{ city?.weather[0].main }},
        {{ city?.weather[0].description }}
      </p>
    </div>
    <div class="card-nav">
      <span>
        <img
          :style="{ transform: `rotate(${city?.wind.deg}deg)` }"
          src="@/assets/svg/navigate.svg"
          alt="navigate"
        />
        {{ city?.wind.speed }}m/s {{ windDirection(city?.wind.deg || 0).direction }}
      </span>
      <span>
        <img src="@/assets/svg/compass.svg" alt="compass" />
        {{ city?.wind.deg }}hPa
      </span>
    </div>
    <div class="card-nav">
      <span>Humidity: {{ city?.main.humidity }}%</span>
      <span>Visibility: {{ (city?.visibility ? city?.visibility / 1000 : 0).toFixed(1) }}km</span>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { PropType, defineProps } from 'vue'
import { windDirection } from '@/services/windDirections'
import { IWeatherType } from '@/types/weatherDataTypes'

defineProps({
  city: {
    type: Object as PropType<IWeatherType>,
  },
})
</script>
