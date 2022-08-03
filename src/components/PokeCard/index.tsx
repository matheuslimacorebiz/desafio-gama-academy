import React from 'react';
import {Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography
} from '@mui/material';

import { PokeObjType } from '../../types';
import { useStyles } from './styles';

type Props = {
  item: PokeObjType;
  handleAddToCart: (clickedItem: PokeObjType) => void;
};

const PokeCard: React.FC<Props> = ({ 
  item, handleAddToCart
 }) => {
  const classes = useStyles();

    return (
      <Card sx={{ minWidth: 250, maxWidth: 350 }} elevation={5}>
      <CardMedia
        className={classes.cardMedia}
        component="img"
        height="140"
        image={item.sprites.front_default}
        alt={item.name}
      />
      <CardContent>
        <Typography className={classes.pokeName} gutterBottom variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="subtitle1" color="text.primary">
          {'R$' + item.base_experience}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          color='secondary'
          fullWidth
          onClick={() => handleAddToCart(item)}
          size="small" variant='contained'>Adicionar ao carrinho</Button>
      </CardActions>
    </Card>
    )
}

export default PokeCard;
