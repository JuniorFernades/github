//PLACAR CASA
import React from 'react'

const PlacarCasa = ({ onClick, placar}) => {
        return(
            <div className='placar'>
                <h2>Casa</h2>
                <p>Confiança</p>
                <p>{ placar }</p>
                <button onClick={onClick}>GOL</button>
            </div>
        )
    
}

export default PlacarCasa