import React from 'react';
import {Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material';

import { PokeObjType } from '../../types';

type Props = {
  item: PokeObjType;
  handleAddToCart: (clickedItem: PokeObjType) => void;
};

const PokeCard: React.FC<Props> = ({ 
  item, handleAddToCart
 }) => {

    return (
        <Card sx={{ maxWidth: 345 }} elevation={5}>
          <CardMedia
            component="img"
            height="140"
            image={item.sprites.front_default}
            alt={item.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.name}
            </Typography>
            <Typography variant="body2" color="text.primary">
              {'R$' + item.base_experience + ',99' }
            </Typography>
          </CardContent>
          <CardActions>
            <Button
            color='success'
            onClick={() => handleAddToCart(item)}
            size="small" variant='contained'>Adicionar ao carrinho</Button>
          </CardActions>
        </Card>
    )
}

export default PokeCard;
