import { Box, IconButton, Typography } from '@material-ui/core';
import React from 'react';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import SearchCategories from '../../molecules/search/SearchCategories';
import useStyles from './styles';

const Header = () => {
  const classes = useStyles();

  return (
    <Box component="header" className={classes.root}>
      <Typography variant="h3">Freshenesecom</Typography>
      <SearchCategories className={classes.search} />
      <Box className={classes.actions}>
        <IconButton aria-label="account">
          <PersonOutlineIcon />
        </IconButton>
        <IconButton aria-label="shoppingCart">
          <ShoppingBasketIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Header;
