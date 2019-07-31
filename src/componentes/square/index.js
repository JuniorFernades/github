import React from 'react'
import '../square/style.css'

const Square = ({ color }) => (
    <div className='square' style={{
        background: color
    }} />
)




export default Square