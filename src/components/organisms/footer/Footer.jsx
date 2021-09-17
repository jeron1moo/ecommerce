import { Box, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';
import ProductTags from '../../molecules/ProductTags/ProductTags';
import FooterLinks from '../../molecules/FooterLinks/FooterLinks';

const Footer = () => {
  const classes = useStyles();

  return (
    <Box component="footer" className={classes.root}>
      <FooterLinks />
      <ProductTags />
      <Typography variant="body1">Copyright © 2020 petrbilek.com</Typography>
    </Box>
  );
};

export default Footer;
