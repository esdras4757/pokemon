import React from 'react'
import Card from './Card'
import styled from 'styled-components'
import { useApi } from '../hooks/useApi'
import { useState } from 'react'
import { useApiInfo } from '../hooks/useApiInfo'
import { isContentEditable } from '@testing-library/user-event/dist/utils'
import { Spinner } from './Spinner'
import Footer from './Footer'




const ContainerCard = () => {

    let idAnt = 0;




    const [contador, setcontador] = useState(1);
    const [text, settext] = useState('');
    const [habilidad, sethabilidad] = useState('');
    const [ataques, setataques] = useState('');
    const [spiner, setspiner] = useState(false);



    var data = useApi(contador,setspiner);

    
    
    if (text!="") {
        data= data.filter((item) => {
            return item.name.includes(text)||item.id==text;
        })
    }
    if(habilidad!=""){
        data= data.filter((item) => {
            const p=item.abilities.map((item) => {
                return item.ability.name
            });
            return p.includes(habilidad)
        })
    }
    if(ataques!=""){
        data= data.filter((item) => {
            const p=item.moves.slice(0,3).map((item) => {
                return item.move.name
            });
            return p.includes(ataques)
        })
    }


    function aumentar() {
        setcontador(contador + 1)
    }

    function disminuir() {
        setcontador(contador - 1)
    }



    if (contador == 1) {
        data = data.slice(0, 9);
    }
    if (contador <= 0) {
        setcontador(1);

    }

    if (contador != 1) {
        const inicio = ((contador - 1) * 10) - 1;
        const fin = inicio + 10;
        data = data.slice(inicio, fin)
    }







if (spiner) {
    return(
        <DivContainerCard><Spinner></Spinner></DivContainerCard>
    )
}
else{


    return (
        <DivContainerCard>

            <Nava>
                <form onSubmit={e=>e.preventDefault()}>
                    <div className='contenedorSelect'>
                        <label htmlFor="habilidades">Filtrar por habilidades:</label>
                        <select onChange={e=>{sethabilidad(e.target.value)}} name="habilidades" id="habilidades">
                            <option value="" defaultValue>ninguna</option>
                            <option value="overgrow">overgrow</option>
                            <option value="chlorophyll">chlorophyll</option>
                            <option value="blaze">blaze</option>
                            <option value="solar-power">solar-power</option>
                            <option value="torrent">torrent</option>
                            <option value="rain-dish">rain-dish</option>
                            <option value="keen-eye">keen-eyeent</option>
                            <option value="guts">guts</option>
                        </select>
                    </div>

                    <input className='busqueda'
                        type="text"
                        placeholder='Buscar por Nombre o id'
                        onChange={e => { settext(e.target.value); }}
                    />

                    <div className='contenedorSelect'>
                        <label htmlFor="ataques">Filtrar por ataques:</label>
                        <select onChange={e=>{setataques(e.target.value)}} name="ataques" id="ataques">
                            <option value="" defaultValue>ninguna</option>
                            <option value="razor-wind">razor-wind</option>
                            <option value="swords-dance">swords-dance</option>
                            <option value="cut">cut</option>
                            <option value="bind">bind</option>
                            <option value="headbutt">headbutt</option>
                            <option value="fire-punch">fire-punch</option>
                            <option value="thunder-punch">thunder-punch</option>
                            <option value="mega-punch">mega-punch</option>
                        </select>
                    </div>

                </form>
            </Nava>


            {
                data.map((personaje) => {

                    if (personaje.id != idAnt) {
                        idAnt = personaje.id
                        return <Card key={idAnt} datos={personaje}></Card>
                    }

                })
            }
            <DivPag className='paginador'>
                <button onClick={disminuir}>  Pag. anterior </button>
                <div>{contador}</div>
                <button onClick={aumentar}> Pag. siguiente  </button>
            </DivPag>

            <Footer/>
        </DivContainerCard>
    )}

}


const DivContainerCard = styled.div`
    margin: 10px auto;
    padding: 20px;
    display: flex;
    flex-flow: row wrap;
    align-content: center;
    box-shadow: 0px 0px 5px gray;
    width: 85%;
    justify-content: space-around;
    row-gap: 50px;
    column-gap: 50px;
    min-height: 200px;

`
const Nava = styled.nav`

background-color: #0f4c5c;
width: 100%;
display: flex;
align-content: center;
align-items: center;
justify-content: center;
flex-flow: row wrap;

form{
    width: 100%;
    display: flex;
    align-content: center;
    justify-content: space-around;
    align-items: center;
    flex-flow: row wrap;
}
.busqueda{
    padding: 10px;
    border-radius: 20px;
    inset: none;
    width: 20%;
    text-align: center;
    min-width: 200px;
}

.contenedorSelect{
    display: flex;
    flex-flow: column wrap;
    color: white;
    text-align: center;
    margin: 0px;
    margin: 30px;
}

select{
    width: 100%;
    margin: 10px;
    padding: 5px 10px;
}





`



const DivPag = styled.div`
    padding: 20px;
    display: flex;
    align-content: center;
    justify-content: space-around;
    flex-basis: 100%;
    margin-bottom: 50px;

    button{
        padding: 8px;
        box-shadow: 0px 0px 5px gray;
        background-color: aliceblue;
    }
    div{
        padding: 8px;
    }

`

export default ContainerCard;