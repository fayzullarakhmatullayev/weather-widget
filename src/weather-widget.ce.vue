<template>
  <div class="counter_wrapper">
    <div class="counter_num">
      Counter: <span>{{ counter }}</span>
    </div>
    <div class="buttons">
      <button class="btn btn-blue" @click="increment">Increment</button>
      <button class="btn btn-green" @click="decrement">Decrement</button>
      <button class="btn btn-yellow" @click="reset">Reset</button>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";

export default {
  setup() {
    const counter = ref(0);

    const increment = (): number => counter.value++;
    const decrement = (): number => (counter.value > 0 ? counter.value-- : 0);
    const reset = (): number => (counter.value = 0);
    return {
      counter,
      increment,
      decrement,
      reset,
    };
  },
};
</script>

<style lang="scss">
@import "./assets/main.scss";
</style>
