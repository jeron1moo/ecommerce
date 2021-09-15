import React from 'react';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import useStyles from './styles';
import CustomInput from '../../atoms/input/CustomInput';

const SimpleInput = ({ startIcon, endIcon }) => {
  const classes = useStyles();
  return (
    <CustomInput
      className={classes.root}
      startIcon={startIcon && <MailOutlineIcon />}
      endIcon={endIcon && <MailOutlineIcon />}
    />
  );
};

export default SimpleInput;
