import React, { useEffect } from "react";
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  useColorModeValue,
  Icon,
} from "@chakra-ui/react";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";

import { MdLocalShipping } from "react-icons/md";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addProductCart } from "../Redux/Cart/action";
import { getSingleProduct } from "../Redux/SingleProduct/action";

const SingleProduct = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const product = useSelector((store) => store.singleProduct.currentProduct);
  console.log("p", product);

  useEffect(() => {
    if (id) {
      dispatch(getSingleProduct(id));
    }
  }, [dispatch, id]);

  const addToCartHandler = () => {
    product && dispatch(addProductCart(product));
  };

  return (
    <Container maxW={"7xl"}>
      <SimpleGrid
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
      >
        <Flex gap="10px">
          <Box
            display={"flex"}
            flexDirection="column"
            justifyContent={"space-between"}
          >
            <Image
              rounded={"md"}
              alt={"product image"}
              src={product.image}
              h="100px"
              w="100px"
            />
            <Image
              rounded={"md"}
              alt={"product image"}
              src={product.img1}
              h="100px"
              w="100px"
            />
            <Image
              rounded={"md"}
              alt={"product image"}
              src={product.img2}
              h="100px"
              w="100px"
            />
            <Image
              rounded={"md"}
              alt={"product image"}
              src={product.img3}
              h="100px"
              w="100px"
            />
          </Box>
          <Image
            rounded={"md"}
            alt={"product image"}
            src={product.image}
            fit={"cover"}
            align={"center"}
            w={"100%"}
            h={{ base: "100%", sm: "400px", lg: "500px" }}
          />
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={"header"}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "2xl", sm: "4xl", lg: "5xl" }}
            >
              {product.title}
            </Heading>
            <Text
              color={useColorModeValue("red.500", "red.500")}
              fontWeight={600}
              fontSize={"2xl"}
            >
              ${product.price}
            </Text>
            <Text textDecoration={"line-through"} color={"gray.600"}>
              ${product.Sprice}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={"column"}
            divider={
              <StackDivider
                borderColor={useColorModeValue("gray.200", "gray.600")}
              />
            }
          >
            <VStack spacing={{ base: 4, sm: 6 }}>
              {/* <Text fontSize={"lg"}>{product.description}</Text> */}
            </VStack>
            <Box color={"green"}>
              {Rating({ rating: Number(product?.rating) })}
            </Box>
          </Stack>

          <Button
            rounded={"none"}
            w={"full"}
            mt={8}
            size={"lg"}
            py={"7"}
            bg={useColorModeValue("gray.900", "gray.50")}
            color={useColorModeValue("white", "gray.900")}
            textTransform={"uppercase"}
            _hover={{
              transform: "translateY(2px)",
              boxShadow: "lg",
            }}
            onClick={addToCartHandler}
          >
            Add to cart
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={"center"}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>
      </SimpleGrid>
    </Container>
  );
};

export default SingleProduct;

export function Rating({ rating }) {
  return (
    <Box display="flex">
      {Array(5)
        .fill("")
        .map((_, i) => {
          const roundedRating = Math.round(rating * 2) / 2;
          if (roundedRating - i >= 1) {
            return (
              <BsStarFill
                key={i}
                style={{ marginLeft: "1" }}
                color={i < rating ? "teal.500" : "gray.300"}
              />
            );
          }
          if (roundedRating - i === 0.5) {
            return <BsStarHalf key={i} style={{ marginLeft: "1" }} />;
          }
          return <BsStar key={i} style={{ marginLeft: "1" }} />;
        })}
    </Box>
  );
}
