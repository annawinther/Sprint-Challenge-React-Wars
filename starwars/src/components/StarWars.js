import React, { Component } from 'react';
import './StarWars.css';

export default function StarWars ({ starwarsChars }){
    return (
      <div className="characters">
      {starwarsChars.map(char => {
        return (
          <div className="char-info">
            {char.name},
            {char.height},
            {char.gender},
            
          </div>
        )
      })}</div>
    )
  }