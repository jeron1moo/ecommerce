import { Box, Typography } from '@material-ui/core';
import React from 'react';
import Tag from '../../atoms/tag/Tag';
import useStyles from './styles';

const tags = [
  'Beans',
  'Carrots',
  'Apples',
  'Garlic',
  'Mushrooms',
  'Tomatoes',
  'Chilli peppers',
  'Broccoli',
  'Watermelons',
  'Oranges',
  'Bananas',
  'Grapes',
  'Cherries',
  'Meat',
  'Seo tag',
  'Fish',
  'Seo tag',
  'Fresh food',
  'Lemons',
];

const ProductTags = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Typography variant="h4">Product tags</Typography>
      <Box className={classes.tags}>
        {tags.map((tag) => (
          <Tag label={tag} size="md" type="bright" />
        ))}
      </Box>
    </Box>
  );
};

export default ProductTags;
