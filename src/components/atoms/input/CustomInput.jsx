import { InputBase } from '@material-ui/core';
import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import useStyles from './styles';

const CustomInput = ({ size, type }) => {
  const classes = useStyles({ size, type });
  return (
    <>
      <InputBase
        className={classes.root}
        placeholder="Search Google Maps"
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <MailOutlineIcon />
    </>
  );
};

export default CustomInput;
