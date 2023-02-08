<template>
  <Suspense>
    <weather-widget />
  </Suspense>
</template>

<script lang="ts" setup>
import weatherWidget from './components/weather-widget/weather-widget.vue'
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
</style>
