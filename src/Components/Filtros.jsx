

const Filtros = ({filtro, setFiltro, filtroDinero, setFiltroDinero, setFiltroDineroMaximo, filtroDineroMaximo}) => {

    return (
        <>
       
        <div className='filtros sombra contenedor'>
            <h2>Filtra tus Gastos</h2>
            <form 
                value={filtro}
                onChange={e => setFiltro(e.target.value)}
            >
                <div className='campo'>
                    <label></label>
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

            

          
            <form 
                value={filtroDinero}
                onChange={e => setFiltroDinero(e.target.value)}
            >
                <div className='campo'>
                    <label></label>
                    <select>
                        <option value=''> --Precio Mínimo-- </option>
                        <option value='5'> 5</option>
                        <option value='15'> 15</option>
                        <option value='30'> 30</option>
                        <option value='50'> 50</option>
                        <option value='70'> 70</option>
                        <option value='100'> 100</option>
                        <option value='250'> 250</option>
                    </select>
                </div>
            </form>

            <form 
                value={filtroDineroMaximo}
                onChange={e => setFiltroDineroMaximo(e.target.value)}
            >
                <div className='campo'>
                    <label></label>
                    <select>
                        <option value=''> --Precio Máximo-- </option>
                        <option value='15'>15</option>
                        <option value='30'>30</option>
                        <option value='60'>60</option>
                        <option value='90'>90</option>
                        <option value='150'>150</option>
                        <option value='200'>200</option>
                        <option value='300'>300</option>
                    </select>
                </div>
            </form>

        </div>
        </>
    )
}

export default Filtros