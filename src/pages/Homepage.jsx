import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import Pokecard from "../components/Pokecard";
import { getAllPokemonsName, getPokemon } from "../services";
import "../styles/Pokelist.css";

const limit = 12;
const step = 12;
function Pokelist() {
  const [allPokemons, setAllPokemons] = useState([]);
  const [offset, setOffset] = useState(0);

  const getPokemons = async () => {
    let pokemons = await Promise.all(
      (
        await getAllPokemonsName(offset, limit)
      ).map(async (name) => await getPokemon(name))
    );
    setAllPokemons((prev) => [...prev, ...pokemons]);
    setOffset((current) => current + step);
  };

  useEffect(() => {
    getPokemons();
  }, []);

  return (
    <div className='pokelist'>
      <div className='pokelist-list'>
        {allPokemons
          .sort((first, second) => first.id - second.id)
          .map((pokemon, index) => {
            return (
              <Link
                className='link'
                to='/pokedetails'
                state={pokemon}
                key={index}>
                <Pokecard
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                  types={pokemon.types}></Pokecard>
              </Link>
            );
          })}
      </div>
      <button className='pokelist-btn' onClick={getPokemons}>
        Cargar más Pokémon
      </button>
    </div>
  );
}

export default Pokelist;
