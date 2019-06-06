import React, { Component } from 'react';
import './StarWars.css';


export default function StarWars ({ starwarsChars }){
    return (
      <div className="characters">
      {starwarsChars.map(char => {
        return (
          <div className="char-info"
           key={char.name}
           >
                <div className="name">Name: {char.name}</div>
                <div>Gender: {char.gender}</div>
                <div>Height: {char.height}</div>
                <div>Mass: {char.mass}</div>
          </div>
        )
      })}
      </div>
    )
  }


