import {
  Box,
  Checkbox,
  CheckboxGroup,
  Text,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItemOption,
  MenuOptionGroup,
  MenuDivider,
  Button,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchData } from "../Redux/Men/action";
import { useDispatch } from "react-redux";

const Filter = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const dispatch = useDispatch();

  const [color, setColor] = useState(searchParams.getAll("color") || []);
  const [category, setCategory] = useState(
    searchParams.getAll("category") || []
  );

  const colorHandler = (values) => {
    setColor(values);
  };
  const categoryHandler = (values) => {
    setCategory(values);
  };

  useEffect(() => {
    if ((category,color)) {
      setSearchParams({ category: category, color: color }, { replace: true });
      let params = {
        category: searchParams.getAll("category"),
        color: searchParams.getAll("color"),
      };
      dispatch(fetchData(params));
    }
  }, [dispatch, searchParams, setSearchParams, category, color]);

  return (
    <Box pl={"10px"} pt="50px">
      <Box display={{ base: "none", md: "block" }}>
        <Text fontSize="2xl" color={"blue"}>
          Filter
        </Text>
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
            <Checkbox value="Boxers">Jackets</Checkbox>
            <Checkbox value="Polo T-shirts">Polo T-shirts</Checkbox>
          </VStack>
        </CheckboxGroup>
      </Box>
      <Box display={{ base: "block", md: "none" }}>
        <Menu closeOnSelect={false}>
          <MenuButton as={Button} colorScheme="blue">
            MenuItem
          </MenuButton>
          <MenuList minWidth="240px">
            <MenuOptionGroup defaultValue="asc" title="Order" type="radio">
              <MenuItemOption value="asc">Ascending</MenuItemOption>
              <MenuItemOption value="desc">Descending</MenuItemOption>
            </MenuOptionGroup>
            <MenuDivider />
            <MenuOptionGroup title="Country" type="checkbox">
              <MenuItemOption value="email">Email</MenuItemOption>
              <MenuItemOption value="phone">Phone</MenuItemOption>
              <MenuItemOption value="country">Country</MenuItemOption>
            </MenuOptionGroup>
          </MenuList>
        </Menu>
      </Box>
    </Box>
  );
};

export default Filter;
