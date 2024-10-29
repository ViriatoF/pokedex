import "./App.css";
import "./assets/card.css";
import { useEffect, useState } from "react";


import PokemonCard from "./components/PokemonCard";
import NavBar from "./components/NavBar";

const pokemonList =[
  {
    id : 1,
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    id:2,
    name: "charmander",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
  },
  {
    id:3,
    name: "squirtle",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  },
  {
    id:4,
    name: "pikachu",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
  },
  {
    id:5,
    name: "mew",
    imgSrc : "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/151.png"
  },
];

function App() {

  useEffect(()=>{

    alert("hello pokemon trainer :)")
  },
  []
  )

  useEffect(()=>{

    alert("hello pokemon trainer :)")
  },
  []
  )

  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickChangePoke = (name: string): void => {
    const pokemonId = pokemonList.findIndex((el) => el.name === name);
    setPokemonIndex(pokemonId);
  }
  
  

  
  return (
    <>
      <NavBar pokemonList={pokemonList} handleClickChangePoke={handleClickChangePoke} />
      <PokemonCard Pokemon={pokemonList[pokemonIndex]}/>
    </>
  );
}

export default App;
