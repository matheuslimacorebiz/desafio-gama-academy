import React from 'react';
import {
    Divider,
    Paper,
    Typography,
} from '@mui/material';

import MinicartItem from '../MinicartItem';
import { PokeObjType } from '../../types';
import { useStyles } from './styles'

type Props = {
    cartItems: PokeObjType[];
    addToCart: (clickedItem: PokeObjType) => void;
    removeFromCart: (id: number) => void;
}

const Minicart: React.FC<Props> = ({
    cartItems, addToCart, removeFromCart
}) => {
    const classes = useStyles();

    const calculateTotal = (items: PokeObjType[]) =>{
        return items.reduce((acc, item) => acc + item.amount * item.base_experience, 0);
    }
    
    return (
        <>
            {cartItems.length === 0 ?
                <Typography sx={{ margin: 'auto' }} >Nenhum pokemon selecionado</Typography>
                : <Typography variant='h6' textAlign='center'>Total R$ {calculateTotal(cartItems)}</Typography>}
            <Paper sx={{ width: 300 }}>
                {cartItems.map((item) => (
                    <>
                        <MinicartItem
                            key={item.id}
                            item={item}
                            addToCart={addToCart}
                            removeFromCart={removeFromCart}
                        />
                        <Divider className={classes.marker} variant="middle" component="li" />
                    </>
                ))}
            </Paper>
        </>
    )
}

export default Minicart;
