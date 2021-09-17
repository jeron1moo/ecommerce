import { IconButton } from '@material-ui/core';
import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import useStyles from './styles';
import CustomInput from '../../atoms/input/CustomInput';

const Search = () => {
  const classes = useStyles();

  return (
    <CustomInput
      endIcon={
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon className={classes.searchIcon} />
        </IconButton>
      }
    />
  );
};

export default Search;
