import ControlPresupuesto from './ControlPresupuesto'
import NuevoPresupuesto from './NuevoPresupuesto'

const Header = ({ presupuesto, setPresupuesto, isValid, setIsValid, listaGastos, gastado, setGastado, disponible, setDisponible, resetearApp }) => {
  return (
    <header>
      <h1>Control De Gastos</h1>

      {isValid 
        ? <ControlPresupuesto
            presupuesto={presupuesto}
            listaGastos={listaGastos}
            gastado={gastado}
            setGastado={setGastado}
            disponible={disponible}
            setDisponible={setDisponible}
            resetearApp={resetearApp}
          />

        : <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            isValid={isValid}
            setIsValid={setIsValid}
          />}

    </header>
  )
}

export default Header
