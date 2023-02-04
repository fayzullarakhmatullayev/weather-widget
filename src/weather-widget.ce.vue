<template>
  <div class="wrapper">
    <img class="setting" src="@/assets/svg/gear.svg" alt="gear" />
    <weather-card />
    <weather-card />
    <weather-card />
  </div>
</template>

<script lang="ts">
import { onMounted, ref } from 'vue'
import { getCurrentLocation } from '@/use/currentLocation'

import WeatherCard from '@/components/weather-card/WeatherCard.vue'
import axios from 'axios'

export default {
  components: { WeatherCard },
  setup() {
    const stringQuery = ref('')
    const iconUrl = ref(`http://openweathermap.org/img/wn/`)
    async function fetchWeatherData(): Promise<any> {
      const { location, locationError } = getCurrentLocation()
      if (Object.keys(location).length > 0) {
        const url = `https://api.openweathermap.org/data/2.5/weather`
        const { data } = await axios.get(url, {
          params: {
            units: 'metric',
            // lat: location.latitude,
            // lon: location.longitude,
            appid: process.env.VUE_APP_API_KEY,
            q: 'New York',
          },
        })
        iconUrl.value = `${iconUrl.value}${data.weather[0].icon}.png`
        console.log(data)
      }
    }

    onMounted(async () => {
      await fetchWeatherData()
    })

    return {
      iconUrl,
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
