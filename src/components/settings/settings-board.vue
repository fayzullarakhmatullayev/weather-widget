<template>
  <div class="settings">
    <div class="settings-top">
      <p>Settings</p>
      <button @click="closeHandler" class="settings-close">
        <img src="@/assets/svg/close.svg" alt="close" />
      </button>
    </div>
    <ul class="settings-cities">
      <draggable :list="cityLocations">
        <li class="settings-cities__list" v-for="city in cityLocations" :key="city.id">
          <div class="settings-cities__left">
            <button class="settings-cities__drag">
              <img src="@/assets/svg/menu.svg" alt="menu" />
            </button>
            <p>{{ city.name }}, {{ city.sys.country }}</p>
          </div>
          <button class="settings-cities__delete" @click="emit('deleteHandler', city.id)">
            <img src="@/assets/svg/trash.svg" alt="trash" />
          </button>
        </li>
      </draggable>
    </ul>
    <form class="settings-form" @submit.enter.prevent="submitHandler">
      <p>Add Location</p>
      <small class="error_message" v-if="isEmpty">Input field can not be empty</small>
      <div class="settings-form__wrapper">
        <input
          v-model="inputValue"
          :class="{ input_error: isEmpty }"
          type="text"
          class="settings-form__input"
        />
        <button type="submit" class="settings-form__submit">
          <img src="@/assets/svg/return-back.svg" alt="return-back" />
        </button>
      </div>
    </form>
  </div>
</template>

<script lang="ts" setup>
import { IWeatherType } from '@/types/weatherDataTypes'
import { PropType, ref, defineEmits, defineProps, watch } from 'vue'
import { VueDraggableNext as draggable } from 'vue-draggable-next'

const emit = defineEmits(['close', 'submitHandler', 'deleteHandler'])
const props = defineProps({
  cityLocations: {
    type: Array as PropType<IWeatherType[]>,
  },
})

watch(props.cityLocations as IWeatherType[], (value) => {
  localStorage.setItem('cityLocations', JSON.stringify(value))
})

const isEmpty = ref(false)
const inputValue = ref<string>('')

const submitHandler = (): void => {
  if (!inputValue.value.length) {
    isEmpty.value = true
    return
  }
  emit('submitHandler', inputValue.value.trim())
  inputValue.value = ''
  isEmpty.value = false
}

const closeHandler = (): void => {
  emit('close', false)
}
</script>
