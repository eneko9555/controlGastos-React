import { formatearDinero } from '../helpers'

import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions
} from 'react-swipeable-list'

import 'react-swipeable-list/dist/styles.css'

import iconoAhorro from '../img/icono_ahorro.svg'
import iconoCasa from '../img/icono_casa.svg'
import iconoComida from '../img/icono_comida.svg'
import iconoGastos from '../img/icono_gastos.svg'
import iconoOcio from '../img/icono_ocio.svg'
import iconoSalud from '../img/icono_salud.svg'
import iconoSub from '../img/icono_suscripciones.svg'

const Gasto = ({ gasto, setEditar, eliminarGasto }) => {
  const { categoria, nombreGasto, cantidad, fecha, id } = gasto

  const diccionarioIconos = {
    ahorro: iconoAhorro,
    comida: iconoComida,
    ocio: iconoOcio,
    casa: iconoCasa,
    salud: iconoSalud,
    suscripciones: iconoSub,
    gastos: iconoGastos
  }

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setEditar(gasto)}>
        Editar
      </SwipeAction>
    </LeadingActions>
  )

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction
        onClick={() => eliminarGasto(id)}
        destructive
      >
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className='gasto sombra'>
          <div className='contenido-gasto'>
            <img src={diccionarioIconos[categoria]} alt='icono categoria' />
            <div className='descripcion-gasto'>
              <p className='categoria'>{categoria}</p>
              <p className='nombre-gasto'>{nombreGasto}</p>
              <p className='fecha-gasto'>Agregado el {fecha}</p>
            </div>

          </div>
          <p className='cantidad-gasto'> {formatearDinero(cantidad)} </p>
        </div>
      </SwipeableListItem>
    </SwipeableList>

  )
}

export default Gasto
