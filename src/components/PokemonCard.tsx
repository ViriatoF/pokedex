interface pokemonProps {
  Pokemon:
  {
    name : string;
    imgSrc? : string;
  };
}

function PokemonCard({Pokemon}:pokemonProps){

  return(
    
      <figure>
        {Pokemon.imgSrc ? <img src={Pokemon.imgSrc} alt="" /> : <p>???</p>}
        
        <figcaption>{Pokemon.name}</figcaption>
      </figure>
    
  )
};





export default PokemonCard;