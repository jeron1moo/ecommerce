import { Box } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const Image = ({ className, img, title, type }) => {
  const classes = useStyles({ type });

  return (
    <Box className={`${classes.root} ${className || ''}`}>
      <img src={img} alt={title} />
    </Box>
  );
};

export default Image;
