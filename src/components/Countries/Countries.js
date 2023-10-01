import React, { useEffect, useState } from 'react';

const Countries = () => {
    const [countries,setCountries]=useState([]);
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=>setCountries(data))

    },[])

    return (
        <div>
            <h1>Hello From Countries.</h1>
            <p>Total Countries: {countries.length}</p>
            {
                countries.map(country=>console.log(country))
            }
            
        </div>
    );
};

export default Countries;