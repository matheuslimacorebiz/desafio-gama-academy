export type PokeObjType = {
    id: number,
    sprites: {
      front_default: string,
      back_default: string,
    },
    name: string,
    base_experience: number,
    amount: number;
};

export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
};
