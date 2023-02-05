import axios from 'axios'
import IParams from '@/types/weatherParams'
import { IWeatherType } from '@/types/weatherDataTypes'

export async function fetchWeatherData(params: IParams): Promise<IWeatherType> {
  const url = `https://api.openweathermap.org/data/2.5/weather`
  const { data } = await axios.get(url, {
    params: {
      units: 'metric',
      appid: process.env.VUE_APP_API_KEY,
      lat: params.lat,
      lon: params.lon,
      q: params.q,
    },
  })
  return data
}
