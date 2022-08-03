import React, { useState, useEffect, useCallback } from 'react';
import { Grid, Drawer } from '@mui/material';

import PokeCard from '../../components/PokeCard';
import Minicart from '../../components/Minicart';
import Header from '../../components/Header';
import api from '../../services/api';

import { PokeObjType } from '../../types';

const Home: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState<PokeObjType[]>([]);
  const [pokemons, setPokemons] = useState<PokeObjType[]>([]);

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = useCallback(async () => {
    for (let i = 1; i <= 20; i++) {
      await api.get(`pokemon/${i}`)
        .then((response) => {
          setPokemons((prev) => [...prev, response.data]);
          console.log(response.data);
        })
        .catch((error) => {
          console.log('Algo deu errado', error);
        })
    }
  }, []);

  const handleAddToCart = (clickedItem: PokeObjType) => {
    setCartItems((prev) => {
      const isItemInCart = prev.find((item) => item.id === clickedItem.id);

      if (isItemInCart) {
        return prev.map((item) =>
          item.id === clickedItem.id
            ? { ...item, amount: item.amount + 1 }
            : item
        );
      }

      return [...prev, { ...clickedItem, amount: 1 }];
    });
    setCartOpen(true);
  };

  const handleRemoveFromCart = (id: number) => {
    setCartItems((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === id) {
          if (item.amount === 1) return acc;
          return [...acc, { ...item, amount: item.amount - 1 }];
        } else {
          return [...acc, item];
        }
      }, [] as PokeObjType[])
    );
  };

  const handleCartOpen = () => {
    setCartOpen(true);
  }

  return (
    <>
      <Header
        handleCartOpen={handleCartOpen}
        totalItems={cartItems}
      />
      <Drawer anchor="right" open={cartOpen} onClose={() => setCartOpen(false)}>
        <Minicart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <div className='loja'>
        {pokemons?.map(
          (pokemon, i: number) => (
            <Grid item key={pokemon.id} xs={12} sm={4}>
              <PokeCard
                item={pokemon}
                handleAddToCart={handleAddToCart}
              />
            </Grid>
          )
        )}
      </div>
    </>
  );
}

export default Home;
