<template>
  <div class="card">
    <div class="card-city">London, UK</div>
    <div class="card-temp">
      <div class="card-temp__img">
        <img src="http://openweathermap.org/img/wn/10d@2x.png" alt="img" />
      </div>
      <h2>7<span>℃</span></h2>
    </div>
    <div class="card-feels">
      <p>Feels like -3℃. Broken clouds. Light breeze</p>
    </div>
    <div class="card-nav">
      <span>
        <img src="@/assets/svg/navigate.svg" alt="navigate" />
        3.0m/s SSE
      </span>
      <span>
        <img src="@/assets/svg/compass.svg" alt="compass" />
        1021hPa
      </span>
    </div>
    <div class="card-nav">
      <span>Humidity: 97%</span>
      <span>Dew point: 0℃</span>
    </div>
    <div class="card-nav">
      <span>Visibility: 10.0km</span>
    </div>
  </div>
</template>

<script lang="ts">
export default {}
</script>
