import { Divider, IconButton, Paper } from '@material-ui/core';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';
import CustomInput from '../../atoms/input/CustomInput';

const Search = () => {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <Divider className={classes.divider} orientation="vertical" />
      <CustomInput />
      <IconButton
        type="submit"
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default Search;
