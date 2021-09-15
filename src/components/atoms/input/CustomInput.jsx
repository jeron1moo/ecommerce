import { InputBase, Paper } from '@material-ui/core';
import React from 'react';
import useStyles from './styles';

const CustomInput = ({ startIcon, endIcon, children, ...rest }) => {
  const classes = useStyles();
  return (
    <Paper className={classes.root}>
      {startIcon}
      {children}
      <InputBase
        {...rest}
        className={classes.input}
        placeholder="Text field"
        inputProps={{ 'aria-label': 'text field' }}
      />
      {endIcon}
    </Paper>
  );
};

export default CustomInput;
