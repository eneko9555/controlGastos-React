import { formatearDinero } from '../helpers'
import { useState, useEffect } from 'react'

import { CircularProgressbar, buildStyles} from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

const ControlPresupuesto = ({ presupuesto, listaGastos, gastado, setGastado, disponible, setDisponible, resetearApp }) => {
  const [porcentaje, setPorcentaje] = useState(0)

  useEffect(() => {
    const gastadoT = listaGastos.reduce((total, gasto) => gasto.cantidad + total, 0)
    const nuevoPorcentaje = ((gastadoT / presupuesto) * 100).toFixed(1)

    setTimeout(() => {
      setPorcentaje(nuevoPorcentaje)
    }, 1000);
    
    setGastado(gastadoT)
    setDisponible(presupuesto - gastadoT)
    localStorage.setItem("gastos", JSON.stringify(listaGastos))
  }, [listaGastos])

  

  return (
    <div className='contenedor-presupuesto contenedor sombra dos-columnas'>
      <div>
        <CircularProgressbar value={porcentaje} text={`${porcentaje}% Gastado`} 
          styles={buildStyles({
            pathColor :  porcentaje > 100 ? "#DC2626" : "#3B82F6",
            trailColor : "#F5F5F5",
            textColor: porcentaje > 100 ? "#DC2626" : "#3B82F6",
            pathTransitionDuration: 1.5,
          })}
        
        />
      </div>

      <div className='contenido-presupuesto'>

        <button className='reset-app'
          onClick={() => resetearApp()}
        >Reiniciar app
        </button>
        
        <p>
          <span>Presupuesto: </span> {formatearDinero( presupuesto)}
        </p>
        <p className={`${disponible < 0 ? "negativo" : ""}`}>
           
           <span>Disponible: </span> {formatearDinero(disponible)}
        </p>
        <p>
          <span>Gastado: </span> {formatearDinero(gastado)}
        </p>
      </div>

    </div>
  )
}

export default ControlPresupuesto
