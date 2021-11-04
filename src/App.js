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
      element: '',
    };
    
    this.nextPokemon = this.nextPokemon.bind(this); 
    this.fire = this.fire.bind(this); 
    this.psychic = this.psychic.bind(this); 
    this.all = this.all.bind(this); 
   }
      
  // let dinamic = data.filter((pokemon)=>pokemon.type.includes(this.state.element)).length -1);

  nextPokemon() {
    this.setState(prevState => 
    { if (this.state.position <  data.filter((pokemon)=>pokemon.type.includes(this.state.element)).length -1) // pq nao consigo declarar uma let (linha 25)?
      {
      return { position: (prevState.position + 1)}
    } 
    return { 
      position: 0
      // unable buton??
    };
    });
  }
  
  fire(){
    this.setState (
      { element: 'Fire' }
    ); 
  }

  psychic(){
    this.setState (
      { element: 'Psychic' }
    );  
  }

  all(){
    this.setState (
      { element: '' }
    );  
  }


  render () {
    const {position} = this.state;
    const {element} = this.state;

    return (
      <>
      <h1> <Title name='Pokedex'/> </h1>
      <button 
      onClick = { this.nextPokemon } 
      // onChange = { (event) => this.nextPokemon(event)} 
      > Next Pokemon
      </button>

      <button
      onClick = { this.fire } 
      > Fire
      </button>

      <button
      onClick = { this.psychic } 
      > Psychic
      </button>

      <button
      onClick = { this.all } 
      > All
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