export function getCurrentLocation(): any {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  }

  function success(pos: any): void {
    const crd = pos.coords

    localStorage.setItem(
      'location',
      JSON.stringify({
        latitude: crd.latitude,
        longitude: crd.longitude,
      })
    )
  }

  function error(err: any): void {
    console.warn(`ERROR(${err.code}): ${err.message}`)
    localStorage.setItem(
      'locationError',
      JSON.stringify({
        code: err.code,
        message: err.message,
      })
    )
  }

  navigator.geolocation.getCurrentPosition(success, error, options)

  const location = JSON.parse(localStorage.getItem('location') || '{}')
  const locationError = JSON.parse(localStorage.getItem('locationError') || '{}')

  return {
    location,
    locationError,
  }
}
