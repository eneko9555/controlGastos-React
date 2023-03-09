
const Mensaje = ({ mensaje, tipo, setAlerta }) => {
  setTimeout(() => {
    setAlerta({})
  }, 3000)

  return (
    <div className={`alerta ${tipo}`}>{mensaje}</div>
  )
}

export default Mensaje
