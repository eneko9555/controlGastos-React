import { useEffect, useState } from 'react'

import CerrarModal from '../img/cerrar.svg'
import Mensaje from './Mensaje'

const Modal = ({ setModal, animarModal, setAnimarModal, guardarGasto,  editar }) => {
  const [nombreGasto, setNombreGasto] = useState('')
  const [cantidad, setCantidad] = useState('')
  const [categoria, setCategoria] = useState('')

  const [alerta, setAlerta] = useState({})
  const [id, setId] = useState('')
  const [fecha, setFecha] = useState()

  useEffect(() => {
    const editarGasto = () => {
      if (Object.keys(editar).length > 0) {
        setNombreGasto(editar.nombreGasto)
        setCantidad(editar.cantidad)
        setCategoria(editar.categoria)
        setId(editar.id)
        setFecha(editar.fecha)
      }
    }
    editarGasto()
  }, [editar])

  const ocultarModal = () => {
    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if ([nombreGasto, cantidad, categoria].includes('')) {
      setAlerta({
        mensaje: 'Todos los campos son obligatorios',
        tipo: 'error'
      })
      return
    }

    guardarGasto({ nombreGasto, cantidad, categoria, id, fecha })
  }

  const { mensaje, tipo } = alerta
  return (
    <div className='modal'>
      <div className='cerrar-modal'>
        <img src={CerrarModal} alt='cerrar' onClick={ocultarModal} />
      </div>

      <form
        className={`formulario ${animarModal ? 'animar' : 'cerrar'}`}
        onSubmit={handleSubmit}
      >
        <legend>{editar.nombreGasto ? 'Editar Gasto' : 'Nuevo Gasto'}</legend>

        <div className='campo'>
          <label htmlFor='nombre'>Nombre del Gasto</label>
          <input
            id='nombre'
            type='text'
            placeholder='Nombre del Gasto'
            value={nombreGasto}
            onChange={e => setNombreGasto(e.target.value)}
          />
        </div>

        <div className='campo'>
          <label htmlFor='cantidad'>Cantidad</label>
          <input
            id='cantidad'
            type='number'
            placeholder='Cantidad del Gasto: ej. 300'
            value={cantidad}
            onChange={e => setCantidad(Number(e.target.value))}
          />
        </div>

        <div className='campo'>
          <label htmlFor='categoria'>Categoria</label>
          <select name='' id='categoria' value={categoria} onChange={e => setCategoria(e.target.value)}>
            <option value=''>-- Seleccione -- </option>
            <option value='ahorro'>Ahorro</option>
            <option value='comida'>Comida</option>
            <option value='ocio'>Ocio</option>
            <option value='salud'>Salud</option>
            <option value='suscripciones'>Suscripciones</option>
            <option value='casa'>Hogar</option>
            <option value='gastos'>Gastos varios</option>

          </select>
        </div>

        <input
          type='submit'
          value={editar.nombreGasto ? 'Guardar Cambios' : 'Añadir Gasto'}
        />

        {mensaje && <Mensaje mensaje={mensaje} tipo={tipo} setAlerta={setAlerta} />}

      </form>

    </div>
  )
}

export default Modal
