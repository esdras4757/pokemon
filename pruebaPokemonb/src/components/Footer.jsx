import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Footera>
           <div>Elaborado por: Esdras Uriel Lara Acosta</div>
           <p > &copy; 22 de julio del 2022</p>
        </Footera>
    );
}


const Footera=styled.footer`
height: 130px;
background-color: #167c96;
display: flex;
flex-flow: column;
align-items: center;
justify-content: flex-end;
padding: 20px;
width: 100%;
color: white;
`

export default Footer;
