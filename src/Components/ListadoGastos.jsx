import Gasto from './Gasto'

const ListadoGastos = ({ listaGastos, setEditar, eliminarGasto, filtro, gastosFiltrados, filtroDinero, filtroDineroMaximo,someFilter  }) => {
  return (
    <div className='listado-gastos contenedor'>


      {
        someFilter ? 
          <>
            <h2>{gastosFiltrados.length ? "Gastos"  : 'No hay gastos en esta categoría'}</h2>
            {gastosFiltrados.map(gasto =>
              <Gasto key={gasto.id} gasto={gasto} setEditar={setEditar} eliminarGasto={eliminarGasto} />
            )}
          </>
         :
          <>
            <h2>{listaGastos.length ? 'Gastos' : 'Aun no has agregado ningún gasto'}</h2>
            {listaGastos.map(gasto => 
              <Gasto key={gasto.id} gasto={gasto} setEditar={setEditar} eliminarGasto={eliminarGasto} />
            )}
          </>
      }
    </div>
  )
}

export default ListadoGastos
