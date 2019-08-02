//PLACAR
import React from 'react';

import './styles.css';

const Placar = ({ onClick, placar, titulo, time}) => (
            <div className='placar'>
                <h2>{titulo}</h2>
                <p className='placarTime'>{time}</p>
                <p className='placarGol'>{ placar }</p>
                <button onClick={onClick}>GOL</button>
            </div>
            )

export default Placar