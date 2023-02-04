import { defineCustomElement } from "vue";
import WeatherWidget from "./weather-widget.ce.vue";

const element = defineCustomElement(WeatherWidget);
customElements.define("vue-counter", element);
