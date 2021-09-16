import { Box } from '@material-ui/core';
import React from 'react';
import CustomButton from '../../atoms/button/CustomButton';
import Tag from '../../atoms/tag/Tag';
import LabelInput from '../../molecules/input/LabelInput';
import ProductDefault from '../../molecules/products/ProductDefault/ProductDefault';
import ProductFull from '../../molecules/products/ProductFull/ProductFull';
import Header from '../../organisms/header/Header';

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
        <LabelInput textLabel="Text lable" />
      </Box>
      <Header />
      <Box>
        <ProductDefault discount="12" cost="31.44" />
      </Box>
      <Box>
        <ProductFull discount="12" cost="31.44" />
      </Box>
    </>
  );
};

export default Home;
