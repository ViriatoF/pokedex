

interface Pokemon {
  id: number;
  name: string;
  imgSrc?: string;
}

interface NavBarProps {
  pokemonList: Pokemon[];
  handleClickChangePoke: (name: string) => void;
}

function NavBar({pokemonList, handleClickChangePoke } : NavBarProps) {


  return(

    <>
      {pokemonList.map((el) =>{
        return(
          <button key={el.name} onClick={() => handleClickChangePoke(el.name)}>{el.name}</button>
        )
      })}
    
    </>
    
    
  )
}

export default NavBar;