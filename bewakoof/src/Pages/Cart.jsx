import { DeleteIcon } from "@chakra-ui/icons";
import {
  Box,
  Heading,
  Stack,
  Image,
  Text,
  Button,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkout from "../Component/Checkout";
import { Rating } from "../Component/SingleProduct";
import { addOrder, removeProductCart } from "../Redux/Cart/action";
import { Link } from "react-router-dom";

const Cart = () => {
  const cart = useSelector((state) => state.cartProducts.cart);
  const dispatch = useDispatch();
  const removeProduct = (id) => {
    dispatch(removeProductCart(id));
  };
  const checkOutHandler = () => {
    dispatch(addOrder(cart));
  };

  return (
    <Box textAlign={"center"}>
      <Heading as="h2">Cart Items</Heading>
      {cart.map((el) => (
        <CartItem
          key={el.id}
          {...el}
          removeProduct={removeProduct}
          checkOutHandler={checkOutHandler}
        />
      ))}
      {cart.length ? (
        <Checkout cart={cart} checkOutHandler={checkOutHandler} />
      ) : (
        <Box w="300px" pt="100px" m="auto" mb="50px" justifyContent={"center"}>
          <Image
            w="200px"
            src="https://images.bewakoof.com/images/doodles/empty-cart-page-doodle.png"
          />
          <Text fontSize={"2xl"}>Nothing in the bag</Text>
          <Box w="200px" border="1px solid green" m="20px">
            <Link to="/men-clothing">Continue shopping...</Link>
          </Box>
        </Box>
      )}
    </Box>
  );
};

const CartItem = ({
  id,
  image,
  category,
  color,
  price,
  description,
  title,
  rating,
  removeProduct,
  checkOutHandler,
}) => {
  return (
    <Box border={"1px solid red"} margin={"auto"}>
      <Stack
        direction={{ base: "column", md: "row" }}
        justifyContent="center"
        alignItems={"center"}
        p="10px"
      >
        <Box
          width={{ base: "80%", md: "48%", lg: "40%" }}
          height={"300px"}
          border="1px solid blue"
          padding="0 1rem"
        >
          <Image
            alignItems={"center"}
            margin="auto"
            rounded={"lg"}
            height={280}
            width={300}
            objectFit={"content"}
            src={image}
          />
        </Box>
        <Box
          width={{ base: "90%", md: "48%", lg: "40%" }}
          height={"auto"}
          border="1px solid green"
        >
          <Stack pt={10} align={"center"}>
            <Text
              color={"gray.500"}
              fontSize={"sm"}
              textTransform={"uppercase"}
            >
              {category}
            </Text>
            <Heading fontSize={"xl"} fontFamily={"body"} fontWeight={500}>
              {title}
            </Heading>
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"}>
                ${price}
              </Text>
            </Stack>
            {/* <Box>{description}</Box> */}
            <Box>{Rating({ rating: Number(rating) })}</Box>
          </Stack>
          <Button
            variant={"solid"}
            m={"10px"}
            leftIcon={<DeleteIcon />}
            onClick={() => removeProduct(id)}
          >
            Remove
          </Button>
        </Box>
      </Stack>
    </Box>
  );
};

export default Cart;
