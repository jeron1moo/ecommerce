import { Button } from '@material-ui/core';
import React from 'react';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import useStyles from './styles';

const CustomButton = ({
  size,
  type,
  leftIcon,
  rightIcon,
  children,
  onClick,
}) => {
  const classes = useStyles({ size, type });
  return (
    <Button
      className={`${classes.root} ${type === 'stroke' && classes.stroke} ${
        type === 'colored' && classes.colored
      }
      ${type === 'bright' && classes.bright}
      ${type === 'simple' && classes.simple}`}
      onClick={onClick}
    >
      {leftIcon && (
        <ChevronLeftIcon className={`${type === 'simple' && classes.arrow}`} />
      )}
      {children || 'Button'}
      {rightIcon && (
        <ChevronRightIcon className={`${type === 'simple' && classes.arrow}`} />
      )}
    </Button>
  );
};

export default CustomButton;
