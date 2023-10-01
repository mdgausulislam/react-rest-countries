import React from 'react';
import './Country.css'

const Country = (props) => {
    console.log(props.country);
    const {name,area,population,region}=props.country;
    return (
        <div className="country">
            <h2>Country Name:{name.common}</h2>
            <p>Area: {area}</p>
            <p>population: {population} </p>
            <p>Region:{region}</p>
            
        </div>
    );
};

export default Country;