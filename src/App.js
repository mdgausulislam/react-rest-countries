import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadCountries></LoadCountries>
      
    </div>
  );
}

function LoadCountries(){
  const [countries,setCountries]=useState([]);
  useEffect(()=>{
    const url='https://restcountries.com/v3.1/all';
    fetch(url)
    .then(res=>res.json())
    .then(data=>setCountries(data))

  },[])
  return(
    <div>
      <h1>Visiting Every Country of the World !!!</h1>
      <h3>Available Countries: {countries.length}</h3>
      {
        countries.map(country=><p>{country.name.common}</p>)
      }
    </div>
  )
}
function Country(){
  return(
    <div>
      
    </div>
  )
}

export default App;
