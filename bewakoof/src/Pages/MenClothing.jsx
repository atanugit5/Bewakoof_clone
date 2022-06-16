import { Box, Flex, Grid, Heading, Stack } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import Filter from "../Component/Filter";
import ProductItem from "../Component/ProductItem";
import { fetchData } from "../Redux/Men/action";


const MenClothing = () => {
  const men = useSelector((state) => state.menData.men);
  const loading = useSelector((state) => state.menData.loading);
  const error = useSelector((state) => state.menData.error);
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  useEffect(() => {
    if (men?.length === 0) {
      let params = { category: searchParams.getAll("category") };
      dispatch(fetchData(params));
    }
  }, []);
  console.log("men",men);
  return (
    <Box >
      <Stack display={{ md: "flex" }} flexDirection={{ md: "row" }} gap={"2rem"}>
        <Box minWidth={"15 rem"} w="20%">
          <Filter />
        </Box>
        <Box w="80%">
          <Heading as="h2">Products</Heading>
          {loading && <Heading as="h4">Loading.....</Heading>}
          <Flex flexWrap="wrap" justifyContent="space-around">
            {men.map((el) => (
              <ProductItem key={el.id} {...el} />
            ))}
          </Flex>
          {error && <Heading as="h2">Error 404</Heading>}
        </Box>
      </Stack>
    </Box>
  );
}

export default MenClothing