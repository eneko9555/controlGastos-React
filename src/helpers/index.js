export const generarId = () => {
  const random = Math.random().toString(36).substr(2)
  const fecha = Date.now().toString(36)
  return random + fecha
}

export const formatearFecha = (fecha) => {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  return fecha.toLocaleDateString('es-ES', options)
}

export const formatearDinero = (dinero) => {
  return dinero.toLocaleString('de-DE', {
    style: 'currency',
    currency: 'EUR'
  })
}
