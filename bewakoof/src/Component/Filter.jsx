import { Box, Checkbox, CheckboxGroup, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchData } from "../Redux/Men/action";
import { useDispatch } from "react-redux";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const [color, setColor] = useState(searchParams.getAll("color") || []);
  const [section, setSection] = useState(searchParams.getAll("section") || []);
  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );

  const sectionHandler = (values) => {
    setSection(values);
  };
  const colorHandler = (values) => {
    setColor(values);
  };

  const categoryHandler = (values) => {
    setCategory(values);
  };

  useEffect(() => {
    if ((section, category, color)) {
      setSearchParams(
        { category: category, color: color, section: section },
        { replace: true }
      );
      let params = {
        category: searchParams.getAll("category"),
        color: searchParams.getAll("color"),
        section: searchParams.getAll("section"),
      };
      dispatch(fetchData(params));
    }
  }, [dispatch, searchParams, setSearchParams, section, color, category]);

  return (
    <Box pl={"10px"}>
      <Box>
        <Text fontSize="2xl" color={"blue"}>
          Filter
        </Text>
        <Text fontSize={"lg"} fontWeight={"600"}>
          Filter By Section.
        </Text>
        <CheckboxGroup
          colorScheme="green"
          defaultValue={section}
          onChange={sectionHandler}
        >
          <VStack alignItems={"baseline"} border="1px solid gray" p="10px">
            <Checkbox value="topwear">Top-wear</Checkbox>
            <Checkbox value="bottomwear">Bottom-wear</Checkbox>
            <Checkbox value="sportswear">Sports-wear</Checkbox>
            <Checkbox value="footwear">Foot-wear</Checkbox>
            <Checkbox value="winterwear">Winter-wear</Checkbox>
            <Checkbox value="accessories">Accessories</Checkbox>
          </VStack>
        </CheckboxGroup>
        <Text fontSize={"lg"} fontWeight={"600"}>
          Filter By Color.
        </Text>
        <CheckboxGroup
          colorScheme="green"
          defaultValue={color}
          onChange={colorHandler}
        >
          <VStack alignItems={"baseline"} border="1px solid gray" p="10px">
            <Checkbox value="White">White</Checkbox>
            <Checkbox value="Gray">Gray</Checkbox>
            <Checkbox value="Red">Red</Checkbox>
            <Checkbox value="Blue">Blue</Checkbox>
            <Checkbox value="Brown">Brown</Checkbox>
            <Checkbox value="Pink">Pink</Checkbox>
            <Checkbox value="Yellow">Yellow</Checkbox>
            <Checkbox value="Green">Green</Checkbox>
            <Checkbox value="Orange">Orange</Checkbox>
          </VStack>
        </CheckboxGroup>
        <Text fontSize={"lg"} fontWeight={"600"}>
          Filter By Category
        </Text>
        <CheckboxGroup
          colorScheme="green"
          defaultValue={category}
          onChange={categoryHandler}
        >
          <VStack alignItems={"baseline"} border="1px solid gray" p="10px">
            <Checkbox value="Printed T-shirts">Printed T-shirts</Checkbox>
            <Checkbox value="Plain T-shirts">Plain T-shirts</Checkbox>
            <Checkbox value="Shirts">Shirts</Checkbox>
            <Checkbox value="Kurtas">Kurtas</Checkbox>
            <Checkbox value="Jackets">Jackets</Checkbox>
            <Checkbox value="Polo T-shirts">Polo T-shirts</Checkbox>
          </VStack>
        </CheckboxGroup>
      </Box>
    </Box>
  );
};

export default Filter;
