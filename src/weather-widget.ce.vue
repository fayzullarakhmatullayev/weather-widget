<template>
  <div class="wrapper">
    <button class="setting">
      <img src="@/assets/svg/gear.svg" alt="gear" @click="isSettingsOpen = !isSettingsOpen" />
    </button>
    <div class="cities">
      <template v-if="cityLocations.length > 0">
        <Suspense>
          <weather-card v-for="city in cityLocations" :city="city" :key="city.latitude" />
        </Suspense>
      </template>

      <div class="no-location" v-else>Provide your location</div>
    </div>
    <settings-board v-if="isSettingsOpen" />
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref } from 'vue'
import { getCurrentLocation } from '@/services/getUserLocation'
import WeatherCard from '@/components/weather-card/weather-card.vue'
import SettingsBoard from '@/components/settings-board/settings-board.vue'

const cityLocations = reactive<any>(JSON.parse(localStorage.getItem('cityLocations') || '[]'))
const isSettingsOpen = ref(false)

onMounted(() => {
  if (!cityLocations.length) {
    getCurrentLocation()
    setTimeout(() => {
      let userCityLocation = reactive<any>(JSON.parse(localStorage.getItem('position') || '{}'))
      if (Object.keys(userCityLocation).length > 0) {
        cityLocations.push(userCityLocation)
      }
    }, 300)
  }
})
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
