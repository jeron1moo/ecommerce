import { Box, Typography } from '@material-ui/core';
import React from 'react';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import CustomButton from '../../../atoms/button/CustomButton';
import Image from '../../../atoms/image/Image';
import Stars from '../../../atoms/stars/Stars';
import Tag from '../../../atoms/tag/Tag';
import useStyles from './styles';

const productDescription = {
  Freshness: 'Extra fresh',
  Farm: 'Grocery Tarm Field',
  Delivery: 'Europe',
  Stock: '320',
};

const freshnessNew = ['Extra fresh'];

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
            {Object.entries(productDescription).map(([key, value]) => {
              return (
                <Box className={classes.productDescription}>
                  <Typography variant="body">{key}</Typography>
                  <Typography className={classes.productValue} variant="body">
                    {freshnessNew.includes(value) && (
                      <Typography
                        variant="body"
                        className={classes.productFreshnessNew}
                      >
                        New:
                      </Typography>
                    )}
                    {value}
                  </Typography>
                </Box>
              );
            })}
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
          <CustomButton size="lg" type="colored" rightIcon>
            Product Detail
          </CustomButton>
          <CustomButton
            size="lg"
            type="bright"
            leftIcon={<FavoriteBorderIcon />}
          >
            Add to wish list
          </CustomButton>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductFull;
