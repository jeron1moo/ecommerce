import { Chip } from '@material-ui/core';
import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './styles';

const Tag = ({ size, type, label }) => {
  const classes = useStyles({ size, type });

  const handleDelete = () => {};
  return (
    <Chip
      className={`${classes.root} ${type === 'stroke' && classes.stroke} ${
        type === 'colored' && classes.colored
      }
      ${type === 'bright' && classes.bright}
      `}
      deleteIcon={
        <CloseIcon className={`${type === 'colored' && classes.close}`} />
      }
      onDelete={handleDelete}
      label={label}
    />
  );
};

export default Tag;
