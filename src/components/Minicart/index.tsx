import React from 'react';
import {
    Divider,
    Paper,
    Typography,
} from '@mui/material';

import MinicartItem from '../MinicartItem';
import { CartItemType, PokeObjType } from '../../types';

type Props = {
    cartItems: PokeObjType[];
    addToCart: (clickedItem: PokeObjType) => void;
    removeFromCart: (id: number) => void;
}

const Minicart: React.FC<Props> = ({
    cartItems, addToCart, removeFromCart
}) => {
    return (
        <Paper>
            {cartItems.length === 0 ?
                <Typography>Nenhum pokemon selecionado</Typography>
                : null}
            {cartItems.map((item) => (
                <>
                    <MinicartItem
                        key={item.id}
                        item={item}
                        addToCart={addToCart}
                        removeFromCart={removeFromCart}
                    />
                    <Divider variant="inset" component="li" />
                </>
            ))}

        </Paper>
    )
}

export default Minicart;
