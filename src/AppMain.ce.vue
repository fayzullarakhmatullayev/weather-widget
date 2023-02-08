<template>
  <Suspense>
    <weather-widget />
  </Suspense>
</template>

<script lang="ts">
import weatherWidget from './components/weather-widget/weather-widget.vue'
export default {
  components: { weatherWidget },
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
