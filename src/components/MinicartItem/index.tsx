import React from 'react';
import {
    Avatar,
    Divider,
    IconButton,
    List,
    ListItem,
    ListItemText,
    ListItemAvatar
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import { CartItemType, PokeObjType } from '../../types';

type Props = {
    item: PokeObjType;
    addToCart: (clickedItem: PokeObjType) => void;
    removeFromCart: (id: number) => void;
};

const MinicartItem: React.FC<Props> = ({
    item, addToCart, removeFromCart }) => {
    return (
        <List
            sx={{
                width: '100%',
                maxWidth: 360,
                bgcolor: 'background.paper',
            }}
        >
            <ListItem
                secondaryAction={
                    <IconButton onClick={() => removeFromCart(item.id)} edge="end" aria-label="delete">
                        <DeleteIcon />
                    </IconButton>
                }
            >
                <ListItemAvatar>
                    <Avatar src={item.sprites.front_default} />
                </ListItemAvatar>
                <ListItemText primary={item.name} secondary={'R$' + item.base_experience + ',99'} />
            </ListItem> 

        </List>
    );
}

export default MinicartItem;
