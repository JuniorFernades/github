import React from 'react'

const Title = ({name, lastname}) => (
    <h1>Olá{`${name} ${lastname}`}</h1>
)

Title.dafaultProps = {
    name: 'Desconhecido',
    lastname: 'Sem sobrenome'
}

export default Title