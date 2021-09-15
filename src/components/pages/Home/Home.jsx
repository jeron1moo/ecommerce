import { Box } from '@material-ui/core';
import React from 'react';
import CustomButton from '../../atoms/button/CustomButton';
import Tag from '../../atoms/tag/Tag';
import Search from '../../molecules/search/Search';

const Home = () => {
  return (
    <>
      <Box>
        <CustomButton size="lg" type="stroke">
          sdfsd
        </CustomButton>
        <CustomButton size="lg" type="colored" rightIcon />
        <CustomButton size="lg" type="bright" rightIcon />
        <CustomButton size="lg" type="simple" rightIcon />
      </Box>
      <Box>
        <CustomButton size="md" type="stroke" />
        <CustomButton size="md" type="colored" />
        <CustomButton size="md" type="bright" leftIcon />
        <CustomButton size="sm" type="stroke" />
        <CustomButton size="sm" type="colored" />
      </Box>
      <Box>
        <CustomButton size="sm" type="bright" />
        <CustomButton size="sm" type="simple" />
      </Box>
      <Box>
        <Tag label="chip" type="colored" />
        <Tag label="chip" type="bright" size="sm" />
        <Tag label="chip" type="stroke" />
      </Box>
      <Box>
        <Search />
      </Box>
    </>
  );
};

export default Home;
