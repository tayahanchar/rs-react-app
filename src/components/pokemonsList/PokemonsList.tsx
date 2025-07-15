import { Component } from 'react';
import type { IPokemonsList } from '../../types/types';
import Pokemon from '../pokemon/Pokemon';
import './PokemonsList.css';

class PokemonsList extends Component<IPokemonsList> {
  render() {
    return (
      <div className="pokemons-list">
        {this.props.pokemonsList.map((pokemon, index) => (
          <Pokemon
            key={index}
            name={pokemon.name}
            description={pokemon.description}
          />
        ))}
      </div>
    );
  }
}

export default PokemonsList;
