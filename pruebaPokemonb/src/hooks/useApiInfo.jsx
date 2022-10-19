import { useEffect,useState } from 'react'
import React from 'react'
import ContainerCard from '../components/ContainerCard';
import { Spinner } from '../components/Spinner';





export function useApiInfo(url){
  const [data, setdata] = useState([]);
  

  
  

const fetchApi= async()=>{

    const response = await fetch(url)
    const results= await response.json()
    setdata(oldData=>[...oldData,results])
    

}

useEffect(() => {
  fetchApi()
  
}, []);


  return data;
}









