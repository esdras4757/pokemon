import React from 'react'
import { useApiInfo } from '../hooks/useApiInfo'
import { useQuery } from '../hooks/useQuery'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import { useState } from 'react'
import Footer from './Footer'


const Details = () => {

    const { cardId } = useParams();
    const data = useApiInfo(`https://pokeapi.co/api/v2/pokemon/${cardId}`)
    const evolucion = useApiInfo(`https://pokeapi.co/api/v2/pokemon-species/${cardId}/`)
    const pokemon = data[0];

    




    if (pokemon && evolucion[0]) {
        console.log(pokemon);
        const es=evolucion[0].flavor_text_entries.filter((item) => {
            return item.language.name=="es"
        })
    
        var descripccionText=es[0].flavor_text;
        
        return (
            <DivContainerCard color={evolucion[0].color} >
                <h1>
                    {pokemon.name}
                </h1>

                <div className='imgContainer'>
                    <img src={pokemon.sprites.other.dream_world.front_default || pokemon.sprites.other.home.front_default} alt="" />
                </div>
                <div>
                    {descripccionText}
                </div>
                <div className='contenedor'>
                    <div>
                        <h2>Tipo:</h2>
                        <h3>{pokemon.types[0].type.name}</h3>
                    </div>

                    <div>
                        <h2>Generacion:</h2>
                        <p>
                            {evolucion[0].generation.name}
                        </p>
                    </div>
                    <div>
                        <h2>Grupos:</h2>
                        <p>
                            {evolucion[0].egg_groups[0].name}
                        </p>
                    </div>
                    <div>
                        <h2>Peso:</h2>
                        <p>
                            {pokemon.weight} kg
                        </p>
                    </div>

                </div>

                <Footer></Footer>


            </DivContainerCard>
        )
    }


}


const DivContainerCard = styled.div`
    margin: 10px auto;
    padding: 10px;
    display: flex;
    flex-flow: column wrap;
    align-content: center;
    box-shadow: 0px 0px 5px gray;
    width: 85%;
    justify-content: space-around;
    row-gap: 50px;
    column-gap: 50px;
    text-align: center;

    h1{
        text-align: center;
        text-transform: uppercase;
        margin: 40px 10px;
        margin-bottom: 5px;
    }

    .imgContainer{
        background-color: ${props=>props.color.name};
        padding: 60px;
        border-radius: 100%;
        margin: 0px auto;
        
    }

    h2{
        margin: 0px;
    }
    img{
        width: 200px;
        height: 200px;
    }
    .contenedor{
        display: flex;
        justify-content: space-around;
        width: 100%;
        background-color: rgba(0,0,0,0.15);
        padding: 5px;
        margin: 5px;
        border-radius: 20px;
        align-items: center;
        align-content: center;
        margin-bottom: 50px;
    }

`


export default Details