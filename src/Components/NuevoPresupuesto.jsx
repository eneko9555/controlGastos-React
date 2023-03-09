import { useState } from 'react'

import Mensaje from './Mensaje'

const NuevoPresupuesto = ({ presupuesto, setPresupuesto, isValid, setIsValid }) => {
  const [alerta, setAlerta] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validar presupuesto
    if (presupuesto <= 0) {
      setAlerta({
        mensaje: 'No es un presupuesto válido',
        tipo: 'error'
      })
      return
    }

    setIsValid(true)
  }

  const { mensaje, tipo } = alerta
  return (
    <div className='contener-presupuesto contenedor sombra'>

      <form
        className='formulario'
        onSubmit={handleSubmit}
      >
        <div className='campo'>
          <label htmlFor=''>Definir Presupuesto</label>
          <input
            className='nuevo-presupuesto'
            type='number'
            placeholder='Añade tu Presupuesto'
            value={presupuesto}
            onChange={e => setPresupuesto(Number(e.target.value))}
          />
        </div>

        <input
          type='submit'
          value='Añadir'
        />

        {mensaje &&
          <Mensaje
            mensaje={mensaje}
            tipo={tipo}
            setAlerta={setAlerta}
          />}

      </form>
    </div>
  )
}

export default NuevoPresupuesto
