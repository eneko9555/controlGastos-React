import { useState, useEffect } from 'react'
import Swal from 'sweetalert2'

import Header from './Components/Header'
import IconoNuevoGasto from './img/nuevo-gasto.svg'
import Modal from './Components/Modal'
import { generarId, formatearFecha } from './helpers' // si se llama index no requiere nombre del archivo al importar.
import ListadoGastos from './Components/ListadoGastos'
import Filtros from './Components/Filtros'

function App() {
  const [presupuesto, setPresupuesto] = useState(JSON.parse(localStorage.getItem("presupuesto")) ?? 0)
  const [gastado, setGastado] = useState(0)
  const [disponible, setDisponible] = useState(presupuesto)

  const [isValid, setIsValid] = useState(false)

  const [modal, setModal] = useState(false)
  const [animarModal, setAnimarModal] = useState(false)

  const [listaGastos, setListaGastos] = useState(JSON.parse(localStorage.getItem("gastos")) ?? [])

  const [editar, setEditar] = useState({})

  const [filtro, setFiltro] = useState("")

  const [gastosFiltrados, setGastosFiltrados] = useState([])

  useEffect(() => {
    if (editar?.cantidad) {
      handleNuevoGasto()
    }
  }, [editar])

  useEffect(() => {
    setEditar({})
  }, [modal])

  useEffect(() => {
    localStorage.setItem('presupuesto', JSON.stringify(presupuesto))
  }, [presupuesto])

  useEffect(() => {
    if (filtro) {
      const gastosFiltrados = listaGastos.filter(gst => gst.categoria === filtro)
      setGastosFiltrados(gastosFiltrados)
    }
  }, [filtro])

  const handleNuevoGasto = () => {
    setModal(true)
    setTimeout(() => {
      setAnimarModal(true)
    }, 500)
  }

  const eliminarGasto = (id) => {
    const gastosActualizados = listaGastos.filter(g => g.id !== id)
    setListaGastos(gastosActualizados)

  }

  const guardarGasto = (gasto) => {
    if (gasto.id) {
      // Actualizar gasto
      const gastosActualizados = listaGastos.map(gastoState => gastoState.id === gasto.id ? gasto : gastoState)
      setListaGastos(gastosActualizados)
    } else {
      gasto.id = generarId()
      gasto.fecha = formatearFecha(new Date())
      setListaGastos([gasto, ...listaGastos])
    }

    setAnimarModal(false)
    setTimeout(() => {
      setModal(false)
    }, 500)
  }

  const resetearApp = () => {
    Swal.fire({
      title: '¿Estás seguro/a?',
      text: "No podrás revertir esta acción",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, quiero reiniciar!',
      cancelButtonText: "Cancelar Cambios",

    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Se han eliminado tus gastos'
        )
        setListaGastos([])
        setPresupuesto(0)
        setIsValid(false)
      }
    })

  }

  return (
    <>
      <div className={modal ? 'fijar' : ''}>


        <Header
          presupuesto={presupuesto}
          setPresupuesto={setPresupuesto}
          listaGastos={listaGastos}
          isValid={isValid}
          setIsValid={setIsValid}
          gastado={gastado}
          setGastado={setGastado}
          disponible={disponible}
          setDisponible={setDisponible}
          resetearApp={resetearApp}
        />

        {isValid &&
          < >
            <main>
              <Filtros
                filtro={filtro}
                setFiltro={setFiltro}
              />
              <ListadoGastos
                listaGastos={listaGastos}
                setEditar={setEditar}
                setAnimarModal={setAnimarModal}
                setModal={setModal}
                eliminarGasto={eliminarGasto}
                filtro={filtro}
                gastosFiltrados={gastosFiltrados}

              />
            </main>

            <div className='nuevo-gasto'>
              <img
                src={IconoNuevoGasto}
                onClick={handleNuevoGasto}
                alt='Nuevo Gasto'
              />
            </div>
          </>

        }


        {modal &&
          <Modal
            setModal={setModal}
            animarModal={animarModal}
            setAnimarModal={setAnimarModal}
            guardarGasto={guardarGasto}
            editar={editar}
            listaGastos={listaGastos}
            setListaGastos={setListaGastos}
            setEditar={setEditar}

          />}

      </div>

    </>

  )
}

export default App
