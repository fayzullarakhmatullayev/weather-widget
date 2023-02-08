import { defineCustomElement } from 'vue'
import AppMain from './AppMain.ce.vue'

const element = defineCustomElement(AppMain)

customElements.define('weather-widget', element)
