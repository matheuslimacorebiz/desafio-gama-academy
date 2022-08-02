import React, { useState, useEffect } from 'react';
import PokeCard from '../../components/PokeCard';
import api from '../../services/api';

type PokeObjType = {

}

const Home:React.FC = () => {
    const [pokemons, setPokemons] = useState([] as any);

    useEffect(() => {
      getPokemons();
    }, []);

    const getPokemons  = async () => {
      for (let i = 1; i <= 20; i++) {
        await api.get(`pokemon/${i}`)
        .then((response) => {
          setPokemons((pokemons: any) => [...pokemons, response.data]);
          console.log(response.data);
        })
        .catch((error) => {
          console.log('Algo deu errado');
        })
      }
    }

  return (
    <div className="App">
      <PokeCard />
      <h1>Hello World</h1>
      {pokemons.length > 0 && pokemons.map(
        (pokemon: any, i: number) => (
          <React.Fragment key={i}>
            <p>{ pokemon.name }</p>
            <img alt={pokemon.name + 'img'} src={pokemon.sprites.front_shiny} />
          </React.Fragment>
        )
      )}
    </div>
  );
}

export default Home;
