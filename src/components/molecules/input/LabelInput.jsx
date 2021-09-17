import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import { Typography } from '@material-ui/core';
import useStyles from './styles';
import CustomInput from '../../atoms/input/CustomInput';

const SimpleInput = ({ startIcon, endIcon, textLabel }) => {
  const classes = useStyles();
  return (
    <>
      <Typography variant="h6" className={classes.label}>
        {textLabel}
      </Typography>
      <CustomInput
        className={classes.root}
        startIcon={startIcon && <MailOutlineIcon />}
        endIcon={endIcon && <MailOutlineIcon />}
      />
    </>
  );
};

export default SimpleInput;
