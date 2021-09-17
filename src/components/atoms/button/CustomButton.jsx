import { Button, Typography } from '@material-ui/core';
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
  ...rest
}) => {
  const classes = useStyles({ size, type });
  return (
    <Button
      className={`${classes.root} ${type === 'stroke' && classes.stroke} ${
        type === 'colored' && classes.colored
      }
      ${type === 'bright' && classes.bright}
      ${type === 'simple' && classes.simple}`}
      {...rest}
    >
      {(leftIcon !== true && leftIcon) ||
        (leftIcon && (
          <ChevronLeftIcon
            className={`${type === 'simple' && classes.arrow}`}
          />
        ))}
      <Typography variant="button">{children || 'Button'} </Typography>
      {rightIcon && (
        <ChevronRightIcon className={`${type === 'simple' && classes.arrow}`} />
      )}
    </Button>
  );
};

export default CustomButton;
