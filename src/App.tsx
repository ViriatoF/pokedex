import "./App.css";
import "./assets/card.css";
import { useState } from "react";

import PokemonCard from "./components/PokemonCard";

const pokemonList =[
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    name: "mew",
    imgSrc : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png"
  },
];

function App() {

  const [pokemonIndex, SetPokemonIndex] = useState(0);
  console.log(pokemonIndex);
  

  const handleClickNext = () => {
    SetPokemonIndex(pokemonIndex+1 );
    console.log("button +");
  }
  const handleClickReturn = () => {
    SetPokemonIndex(pokemonIndex-1 );
    console.log("button -");
    
  }

  
  return (
    <>
      {pokemonIndex >0 ? <button onClick={handleClickReturn}> Précédent</button> : ""}
      <PokemonCard pokemon={pokemonList[pokemonIndex]}/>
      {pokemonIndex < pokemonList.length - 1? <button onClick={handleClickNext}> Suivant</button> : ""}
    </>
  );
}

export default App;
