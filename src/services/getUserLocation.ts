export function getCurrentLocation(): void {
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  }

  function success(pos: any): void {
    localStorage.setItem(
      'position',
      JSON.stringify({
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
      })
    )
  }

  function error(err: any): void {
    console.log(`ERROR(${err.code}): ${err.message}`)
    throw err
  }

  navigator.geolocation.getCurrentPosition(success, error, options)
}
