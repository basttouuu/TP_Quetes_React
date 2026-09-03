interface Pokemon {
    name: string;
    imgSrc: string;
  }
  
function PokemonCard ({ pokemon }: { pokemon: Pokemon }) {

    return (
        <div>
            <figure>
                {pokemon.imgSrc !== undefined ? (<img src={pokemon.imgSrc} alt={pokemon.name} />) : (<p>???</p>)}            
                <figcaption>{pokemon.name}</figcaption>
            </figure>

        </div>
    );
}

export default PokemonCard;