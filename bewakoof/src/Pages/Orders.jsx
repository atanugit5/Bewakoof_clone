import React, { useEffect } from "react";
import { Box, Heading, Flex, Image,Text } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrderData } from "../Redux/Cart/action";


const Orders = () => {
  const order = useSelector((state) => state.cartProducts.order);
  console.log("order", order);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchOrderData());
  }, [dispatch]);
  return (
    <Box>
      <Heading as="h1" textAlign={"center"}>
        Your Orders
      </Heading>
      <Box m="80px">
        {order.length ? (<Box> {order.map((el) => (
          <Flex m="20px">
            <Image src={el.image} w="200px" h="200px"/>
            <Box m="50px">
              <Text>{el.title}</Text>
              <Text>${el.price}</Text>
            </Box>
          </Flex>
        ))}</Box>):(<Text fontSize={"2xl"}>No order item found</Text>)}
       

      </Box>
    </Box>
  );
};

export default Orders;
