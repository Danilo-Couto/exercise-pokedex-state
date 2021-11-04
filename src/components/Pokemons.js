import React from "react";  

class Pokemons extends React.Component{
    render(){
        const data = this.props.obj; 
        const position = this.props.pokemonPosition;
        const element = this.props.pokemonElement;
        const filterAndPosition = data.filter((pokemon)=>pokemon.type.includes(element))[position];
        const filterAndPosition2 = data.filter((pokemon)=>pokemon.type.includes(element));
           
/*         console.log ('position',position);
        console.log ('element', element);
        console.log ('length', filterAndPosition);
        console.log ('length', filterAndPosition2.length); */

        return(           
            <section className ='pokemon'>
                <h2>{filterAndPosition.name}</h2>
                <p>{filterAndPosition.type}</p>
                <p>
                   {filterAndPosition.averageWeight.value}
                   {filterAndPosition.averageWeight.measurementUnit}
                </p>
                <img src={filterAndPosition.image} alt={filterAndPosition.name}></img>
            </section>
        )
    }
}
export default Pokemons;