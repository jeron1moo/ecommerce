import { Box } from '@material-ui/core';
import React from 'react';
import StarIcon from '@material-ui/icons/Star';
// import StarBorderIcon from '@material-ui/icons/StarBorder';
import useStyles from './styles';

const Stars = ({ className }) => {
  const classes = useStyles();

  return (
    <Box className={`${classes.root} ${className || ''}`}>
      <StarIcon className={classes.star} />
      <StarIcon className={classes.star} />
      <StarIcon className={classes.star} />
      <StarIcon className={classes.star} />
      <StarIcon className={classes.star} />
    </Box>
  );
};

export default Stars;
