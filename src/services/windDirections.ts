let direction: string
export const windDirection = (deg: number) => {
  if (deg) {
    switch (true) {
      case deg >= 0 && deg <= 21:
        direction = 'N'
        break
      case deg >= 22 && deg <= 44:
        direction = 'NNE'
        break
      case deg >= 45 && deg <= 66:
        direction = 'NE'
        break
      case deg >= 67 && deg <= 89:
        direction = 'ENE'
        break
      case deg >= 90 && deg <= 111:
        direction = 'E'
        break
      case deg >= 112 && deg <= 134:
        direction = 'ESE'
        break
      case deg >= 135 && deg <= 156:
        direction = 'SE'
        break
      case deg >= 157 && deg <= 179:
        direction = 'SSE'
        break
      case deg >= 180 && deg <= 201:
        direction = 'S'
        break
      case deg >= 202 && deg <= 224:
        direction = 'SSW'
        break
      case deg >= 225 && deg <= 246:
        direction = 'SW'
        break
      case deg >= 247 && deg <= 269:
        direction = 'WSW'
        break
      case deg >= 270 && deg <= 291:
        direction = 'W'
        break
      case deg >= 292 && deg <= 314:
        direction = 'WNW'
        break
      case deg >= 315 && deg <= 336:
        direction = 'NW'
        break
      case deg >= 337 && deg <= 359:
        direction = 'NNW'
        break
      default:
        direction = ''
    }
  }
  return {
    direction,
  }
}
