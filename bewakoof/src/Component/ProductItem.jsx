import React from "react";
import {
  Box,
  Center,
  useColorModeValue,
  Heading,
  Text,
  Stack,
  Image,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const ProductItem = ({
  id,
  image,
  category,
  section,
  color,
  price,
  Sprice,
  img1,
  img2,
  img3,
  discount,
  description,
  title,
  rating,
}) => {
  return (
    <Link to={`/men-clothing/${id}`}>
      <Center py={12}>
        <Box
          role={"group"}
          p={6}
          maxW={"250px"}
          h={"full"}
          bg={useColorModeValue("white", "gray.800")}
          boxShadow={"2xl"}
          rounded={"lg"}
          // zIndex={1}
        >
          <Box rounded={"lg"} mt={-12} height={"230px"}>
            <Image
              rounded={"lg"}
              height={230}
              width={282}
              // objectFit={"cover"}
              src={image}
            />
          </Box>
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
            {/* <Text fontWeight={800} fontSize={"xl"}>{description?.Mb}</Text> */}
            <Stack direction={"row"} align={"center"}>
              <Text fontWeight={800} fontSize={"xl"}>
                ${price}
              </Text>
              <Text textDecoration={"line-through"} color={"gray.600"}>
                ${Sprice}
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Center>
    </Link>
  );
};

export default ProductItem;
