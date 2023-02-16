<template>
  <div class="wrapper">
    <button class="setting">
      <img src="@/assets/svg/gear.svg" alt="gear" @click="isSettingsOpen = !isSettingsOpen" />
    </button>
    <div class="cities">
      <template v-if="cityLocations.length > 0">
        <weather-card v-for="city in cityLocations" :city="city" :key="city.id" />
      </template>

      <div class="no-location" v-else>Enter a city name</div>
    </div>
    <settings-board
      v-if="isSettingsOpen"
      @close="isSettingsOpen = false"
      @submit-handler="submitHandler"
      @deleteHandler="deleteHandler"
      :cityLocations="cityLocations"
    />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { getCurrentLocation } from '@/services/getUserLocation'
import { fetchWeatherData } from '@/services/getWeatherData'
import WeatherCard from '@/components/weather-card/weather-card.vue'
import SettingsBoard from '@/components/settings/settings-board.vue'
import IParams from '@/types/weatherParams'
import { IWeatherType } from '@/types/weatherDataTypes'

const cityLocations = ref<IWeatherType[]>(JSON.parse(localStorage.getItem('cityLocations') || '[]'))
const isSettingsOpen = ref(false)
const interval = ref(0)

const submitHandler = async (value: string): Promise<void> => {
  await getData({ q: value })
}

const deleteHandler = (id: number): void => {
  cityLocations.value = cityLocations.value.filter((city) => city.id !== id)
  addToLocalStorage()
}

const addToLocalStorage = (): void => {
  localStorage.setItem('cityLocations', JSON.stringify(cityLocations.value))
}

const updateData = (): void => {
  interval.value = setInterval(() => {
    cityLocations.value.forEach(async (city, idx) => {
      const data: IWeatherType = await fetchWeatherData({
        q: city.name,
      })
      cityLocations.value[idx] = data
      addToLocalStorage()
    })
  }, 6000 * 10 * 5) // updates the data every 5 minutes
}

updateData()

const getData = async (position: IParams): Promise<void> => {
  const data: IWeatherType = await fetchWeatherData({
    lon: position.lon,
    lat: position.lat,
    q: position.q,
  })

  cityLocations.value.push(data)
  addToLocalStorage()
}

onMounted(() => {
  if (!cityLocations.value.length) {
    getCurrentLocation()
    setTimeout(async () => {
      let userCityLocation = JSON.parse(localStorage.getItem('position') || '{}')
      if (Object.keys(userCityLocation).length > 0) {
        await getData(userCityLocation)
      }
    }, 300)
  }
})

onUnmounted(() => {
  clearInterval(interval.value)
})
</script>
