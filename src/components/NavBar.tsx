import { MouseEventHandler } from "react";

interface Pokemon {
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonIndex: number;
  setPokemonIndex: (index: number) => void;
  pokemonList: Pokemon[];
  handleClickNext: MouseEventHandler;
  handleClickReturn: MouseEventHandler
}

function NavBar({ pokemonIndex, pokemonList,handleClickNext, handleClickReturn } : NavBarProps) {

  return(

    <>
      {pokemonIndex > 0 ? <button onClick={handleClickReturn}> Précédent</button> : ""}
      {pokemonIndex < pokemonList.length - 1? <button onClick={handleClickNext}> Suivant</button> : ""}
    
    </>
    
    
  )
}

export default NavBar;