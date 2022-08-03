import React from 'react';
import {
  AppBar,
  Badge,
  Box,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { PokeObjType } from '../../types';
import { useStyles } from './styles'

type Props = {
  handleCartOpen: () => void,
  totalItems: PokeObjType[],
}

const Header: React.FC<Props> = ({ handleCartOpen, totalItems }) => {
  const classes = useStyles()

  const getTotalItems = (items: PokeObjType[]) => {
    return items.reduce((acc, item) => acc + item.amount, 0);
  }

  return (
    <AppBar color='secondary' position="sticky" className={classes.appBar} >
      <Toolbar className={classes.tollBar} variant="dense">
        <Typography variant="h6" color="inherit" component="div">
          Pokeshop
        </Typography>
        <Badge badgeContent={getTotalItems(totalItems)} color='error'>
          <IconButton onClick={() => handleCartOpen()} edge="start" color="inherit" aria-label="menu" sx={{ ml: 2 }}>
            <ShoppingBagIcon />
          </IconButton>
        </Badge>

      </Toolbar>
    </AppBar>
  );
}

export default Header;