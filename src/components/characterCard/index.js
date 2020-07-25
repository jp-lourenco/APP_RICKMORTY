import React from 'react'
import './styles.css'

const CharacterCard = ({ name, status, species, image }) => {
    return (
       <div className="card">
          <img src={image} alt={name + '-image'} width="200" height="200"/>
          <div>
            <h1 style={{color: "#fff"}}>{name}</h1>
            <h2 style={{color: "#fff"}}>{status}</h2>
            <h3 style={{color: "#fff"}}>{species}</h3>
          </div>
       </div>
    );
};

export default CharacterCard;
