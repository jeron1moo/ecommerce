import { Chip, Typography } from '@material-ui/core';
import React from 'react';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './styles';

const Tag = ({ size, type, label, className, close }) => {
  const classes = useStyles({ size, type });

  const handleDelete = () => {};
  return (
    <Chip
      className={`${classes.root} ${type === 'stroke' && classes.stroke} ${
        type === 'colored' && classes.colored
      }
      ${type === 'bright' && classes.bright}
      ${className || ''}
      `}
      deleteIcon={
        <CloseIcon className={`${type === 'colored' && classes.close}`} />
      }
      onDelete={close && handleDelete}
      label={<Typography variant="h6">{label}</Typography>}
    />
  );
};

export default Tag;
