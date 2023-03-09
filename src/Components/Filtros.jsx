import { useState, useEffect } from 'react'

const Filtros = ({filtro, setFiltro}) => {

    return (
        <div className='filtros sombra contenedor'>
            <form 
                value={filtro}
                onChange={e => setFiltro(e.target.value)}
            >
                <div className='campo'>
                    <label>Filtrar Gastos</label>
                    <select>
                        <option value=''>-- Todas las categorías -- </option>
                        <option value='ahorro'>Ahorro</option>
                        <option value='comida'>Comida</option>
                        <option value='ocio'>Ocio</option>
                        <option value='salud'>Salud</option>
                        <option value='suscripciones'>Suscripciones</option>
                        <option value='casa'>Hogar</option>
                        <option value='gastos'>Gastos varios</option>
                    </select>
                </div>
            </form>

        </div>
    )
}

export default Filtros