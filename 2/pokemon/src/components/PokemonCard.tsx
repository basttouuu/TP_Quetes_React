import './Pokemon.css'

interface Pokemon {
    name: string;
    imgSrc?: string;
  }
  
function PokemonCard ({ pokemon }: { pokemon: Pokemon }) {

    return (
        <div>
            <figure className="card">
                {pokemon.imgSrc !== undefined ? (<img className="cardImg" src={pokemon.imgSrc} alt={pokemon.name} />) : (<p>???</p>)}            
                <figcaption>{pokemon.name}</figcaption>
            </figure>

        </div>
    );
}

export default PokemonCard;