import React, { Component } from 'react';
import './StarWars.css';


export default function StarWars ({ starwarsChars }){
    return (
      <div className="characters">
      {starwarsChars.map(char => {
        return (
          <div className="char-info">
                <div>Name: {char.name}</div>
                <div>Gender: {char.gender}</div>
                <div>Height: {char.height}</div>
                <div>Mass: {char.mass}</div>
          </div>
        )
      })}
      </div>
    )
  }




// class StarWars extends Component {
//     constructor(props){
//         super(props)
//         this.statae = {
//             name: props.character.name,
//             gender: props.character.gener,
//             height: props.character.height,
//             mass: props.character.mass,
//             eyes: props.character.eyes,
//         }
//     }

//     render(){
//         return(
//             <div>
//                 <h1>{this.state.name}</h1>
//                 <h2>{this.state.gender}</h2>
//                 <h3>{this.state.height}</h3>
//                 <h4>{this.state.mass}</h4>
//                 <h5>{this.state.eyes}</h5>
//                 <Card c={this.state}/>
//             </div>
//         )
//     }
// }

// export defualt StarWars;

