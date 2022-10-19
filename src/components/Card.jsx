import React from 'react'
import styled from 'styled-components'
import {useApiInfo} from '../hooks/useApiInfo'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";

const Card = ({datos}) => {
    

    const descripccion=useApiInfo(`https://pokeapi.co/api/v2/pokemon-species/${datos.id}/`);
    if (descripccion[0]) {

        const es=descripccion[0].flavor_text_entries.filter((item) => {
            return item.language.name=="es"
        })

        var descripccionText=es[0].flavor_text;
       var colord=descripccion[0].color.name;
     
    }
    
    if (datos.sprites) {
        return (
            <Cards color={colord}>

                <Link className='Link' to={"/details/"+datos.id}>


                <div className='headerCard'>
                    <h1 className='nombre'>{datos.name}</h1>
                    <h2 className='nombre'>No.{datos.id}</h2>
                </div>
                <img src={datos.sprites.other.dream_world.front_default} alt={datos.name} />
                <div className='descripcion'> {descripccionText}</div>
    
                <div className='extras'>
                    <div className='Habilidades'> Habilidades:
                    
                    <ul>
                        {
                            // console.log(datos.abilities);
                            datos.abilities.map((item) => {
                                return <li key={item.ability.name} >{item.ability.name}</li>
                            })
                        }
                    </ul>
    
                    </div>
                    <div className='Ataques'> Ataques:
                    
                    <ul>
                        {
                            // console.log(datos.abilities);
                            datos.moves.slice(0,3).map((item) => {
    
                                return <li key={item.move.name}>{item.move.name}</li>
                            })
                        }
                    </ul>
                    
                    </div>
                </div>
                </Link>
    
            </Cards>
        )
    }
    
}

const Cards = styled.div`
    display: flex;
    align-content: center;
    flex-basis: 19%;
    height: 460px;
    padding: 10px;
    box-shadow: 0px 0px 3px gray;
    margin: 20px;
    background-color: ${props=> props.color };
    border-width: 10px;
    border-style: solid;
    border-color: rgba(0,0,0,0.4);
    flex-flow: column wrap;
    align-content: center;
    border-radius: 10px;
    box-shadow: 0px 0px 3px gray;
    transition: all 300ms;
    min-width: 370px;

    .Link{
        text-decoration: none;
        font-style: none;
        color: ${props=>props.color =='white' || props.color =='yellow'  ? 'black': 'white'};
    }

    &:hover{
        transform: translateX(10px) translateY(-10px);
        box-shadow: -2px 2px 8px black;
    }

    .headerCard{
        display: flex;
        flex-flow: row nowrap;
        width: 100%;
        justify-content:space-between;
        align-content: center;
        align-items: center;
        height: 40px;
        color: ${props=>props.color =='white' || props.color =='yellow'  ? 'black': 'white'};
        background-color: rgba(0,0,0,0.2);
        box-shadow: 0px 0px 8px gray;
        
    }
    img{
        background-color: white;
        width: 100%;
        margin-top: 10px;
        height: 200px;
        box-shadow: 0px 0px 3px inset;
    }
    .descripcion{
        color: ${props=>props.color =='white' || props.color =='yellow'  ? 'black': 'white'};
        text-align: center;
        margin: 20px;
        font-size: 14px;
    }
    .extras{
        display: flex;
        justify-content: space-around;
        color: ${props=>props.color =='white' || props.color =='yellow'  ? 'black': 'white'};
        font-size: 14px;
        overflow: hidden;
        
    }
    .extras ul{
        padding:3px;
        margin-left: 10px;
    }
`


export default Card