import {
  Divider,
  FormControl,
  IconButton,
  MenuItem,
  Select,
} from '@material-ui/core';
import React, { useState } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import useStyles from './styles';
import CustomInput from '../../atoms/input/CustomInput';

const SearchCategories = ({ className }) => {
  const classes = useStyles();
  const [categories, setCategories] = useState('10');

  const handleChange = (event) => {
    setCategories(event.target.value);
  };

  return (
    <CustomInput
      className={`${classes.input} ${className || ''}`}
      endIcon={
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
        >
          <SearchIcon className={classes.searchIcon} />
        </IconButton>
      }
    >
      <FormControl className={classes.categoriesForm}>
        <Select
          disableUnderline
          className={classes.categoriesList}
          value={categories}
          onChange={handleChange}
          IconComponent={() => (
            <KeyboardArrowDownIcon className={classes.dropDownIcon} />
          )}
        >
          <MenuItem value={10}>All categories</MenuItem>
          <MenuItem value={20}>Food</MenuItem>
          <MenuItem value={30}>Abcd</MenuItem>
        </Select>
      </FormControl>
      <Divider className={classes.divider} orientation="vertical" />
    </CustomInput>
  );
};

export default SearchCategories;
