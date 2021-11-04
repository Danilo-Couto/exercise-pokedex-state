import React from 'react';
import './App.css';
import Pokemons from './components/Pokemons';
import data from './data'
import Title from './Title';

class App extends React.Component {

  constructor() {
    super ();

    this.state = { 
      position: 0,
      element: 'Fire',
    };
    console.log(this.state.position);

    this.handleClick = this.handleClick.bind(this); 
    this.handleClickFire = this.handleClickFire.bind(this); 
    this.handleClickPsychic = this.handleClickPsychic.bind(this); 
  }

  handleClick() {
    this.setState (() => (
      { 
        data.(data.findIndex((elem) => elem.id === this.state.position)) +1
      }
    )); 
  }

/*   handleClick() {
    this.setState ((estadoAnterior, _props) => (
      { 
        position: estadoAnterior.position + 1
      }
    )); 
  } */

  handleClickFire(){
    this.setState (
      { element: 'Fire' }
    ); 
  }

  handleClickPsychic(){
    this.setState (
      { element: 'Psychic' }
    );  
  }

  render () {
    const {position} = this.state;
    const {element} = this.state;

    return (
      <>
      <h1> <Title name='Pokedex'/> </h1>
      <button
      onClick = { this.handleClick } 
      // onChange = { (evento) => this.handleClick(evento)} 
      > Next Pokemon
      </button>
      <button
      onClick = { this.handleClickFire } 
      > Fire
      </button>
      <button
      onClick = { this.handleClickPsychic } 
      > Psychic
      </button>
      <article className ='pokedex'>
        <Pokemons
          obj={data}
          pokemonPosition = {position}
          pokemonElement = {element}
        />
      </article>
      </>
      )
    }   
  }

export default App;