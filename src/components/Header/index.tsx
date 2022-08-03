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

type Props = {
  handleCartOpen: () => void,
  totalItems: PokeObjType[],
}

const Header: React.FC<Props> = ({ handleCartOpen, totalItems }) => {

  const getTotalItems = (items: PokeObjType[]) => {
    return items.reduce((acc, item) => acc + item.amount, 0);
  }

  return (
    <AppBar position="sticky">
      <Toolbar variant="dense">
        <Badge badgeContent={getTotalItems(totalItems)} color='error'>
          <IconButton onClick={() => handleCartOpen()} edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <ShoppingBagIcon />
          </IconButton>
        </Badge>
        <Typography variant="h6" color="inherit" component="div">
          Pokeshop
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Header;