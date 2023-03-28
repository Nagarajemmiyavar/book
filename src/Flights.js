
import React,{useState,useEffect}from 'react';
import './Flight.css';


 
const Flights=()=>{
const [fake,setFake]=useState([]);
console.log(fake);
useEffect(()=>{

fakestore();

},[])

const fakestore=async()=>{

const responce=await fetch("https://fetch-teew.onrender.com/flights");
const jsonData=await responce.json();
setFake(jsonData);
}
 return (
    <>
        <div className='container'> 
        {fake.map((values)=>{
         return(
         <>
        <div className='box'>
        <div className='content'>
        
        <h1>{values.no}</h1>
        <p> { values.name}</p>
        </div>
        <h1>{values.route}</h1> 
        </div>
          </>
          )
          })}
      </div>
      </>
      
  
  )
}

export default Flights;
