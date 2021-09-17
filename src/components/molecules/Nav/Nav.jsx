import { Box, Link, Typography } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const Nav = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Box className={classes.info}>
        <Typography>
          <Link href="/" className={classes.link}>
            Chat with us
          </Link>
        </Typography>
        <Typography>+ 420 336 775 664</Typography>
        <Typography>info@freshnesecom.com</Typography>
      </Box>
      <Box className={classes.links}>
        <Typography>
          <Link href="/" className={classes.link}>
            Blog
          </Link>
        </Typography>
        <Typography>
          <Link href="/" className={classes.link}>
            About us
          </Link>
        </Typography>
        <Typography>
          <Link href="/" className={classes.link}>
            Careers
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Nav;
