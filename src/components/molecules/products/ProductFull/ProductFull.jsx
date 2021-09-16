import { Box, Typography } from '@material-ui/core';
import React from 'react';
import CustomButton from '../../../atoms/button/CustomButton';
import Image from '../../../atoms/image/Image';
import Stars from '../../../atoms/stars/Stars';
import Tag from '../../../atoms/tag/Tag';
import useStyles from './styles';

const ProductFull = ({ className, title, caption, cost, discount }) => {
  const classes = useStyles();

  const getCost = (costArg, discountArg) => {
    if (discount) return (costArg - (costArg * discountArg) / 100).toFixed(2);
    return costArg;
  };

  return (
    <Box className={`${classes.root} ${className || ''}`}>
      <Box className={classes.productHeader}>
        {discount && (
          <Tag
            className={classes.discountTag}
            size="sm"
            type="colored"
            label={`- ${discount || 36} %`}
          />
        )}
        <Image type="dark" className={classes.image} />
      </Box>
      <Box className={classes.content}>
        <Box className={classes.descriptionInfo}>
          <Box className={classes.description}>
            <Typography variant="h5">{title || 'Product title'}</Typography>
            <Typography className={classes.caption} variant="caption">
              {caption || 'Space for a small product description'}
            </Typography>
          </Box>
          <Stars className={classes.stars} />
          <Box className={classes.additionalInfo}>
            <Typography>dsaf</Typography>
          </Box>
        </Box>
        <Box className={classes.buy}>
          <Box className={classes.cost}>
            <Typography variant="h4">
              {getCost(cost, discount) || '36.99'} USD
            </Typography>
            <Typography className={classes.discount} variant="h6">
              {discount && (cost || '48.56')}
            </Typography>
          </Box>
          <CustomButton size="sm" type="colored">
            Buy now
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductFull;
