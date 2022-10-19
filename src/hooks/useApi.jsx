import { useEffect,useState } from 'react'
import React from 'react'
import ContainerCard from '../components/ContainerCard';





export function useApi(contador,setsniper){
  const [data, setdata] = useState([]);
  const [numero,setnumero]=useState([0])
  

  
  

const fetchApi= async()=>{
  setsniper(true)
  const datos=[]
  for (let index = 1; index < 180; index++) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${index}`)
    const results= await response.json()
    datos.push(results)
    setnumero(index)
    if (datos.length>170) {
      setsniper(false)
    }
  }
  
  
  
  setdata(datos)

}

useEffect(() => {
  fetchApi()
}, []);


  return data;
  
}









