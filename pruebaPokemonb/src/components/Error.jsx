import React from 'react'
import styled from 'styled-components'

const Error = () => {
    return (
        <Err>
            <h1>Error 404</h1>
            <h2>Pagina no encontrada</h2>
        </Err>
    )
}

const Err=styled.div`
display: flex;
align-content: center;
justify-content: center;
align-items: center;
margin: 20px;
flex-flow: column;


h1{
    font-size: 50px;
}
h2{
    font-size: 30px;
}
`

export default Error