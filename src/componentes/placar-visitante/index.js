//PLACAR VISITANTE
import React from 'react'

const PlacarVisitante = ({ onCLick, placar }) => {
        return(
            <div className='placar'>
                <h2>Visitante</h2>
                <p>Sergipe</p>
                <p>{ placar }</p>
                <button onClick={onCLick}>GOL</button>
            </div>
        )   
}


export default PlacarVisitante