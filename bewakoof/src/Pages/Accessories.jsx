import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Accessories = () => {
  return (
    <Box pt="60px">
      <Box w={"100%"} display="flex" justifyContent={"space-around"} m={"auto"}>
          <Image
            src="https://images.bewakoof.com/uploads/grid/app/ezgif-com-gif-maker--1--1651324109.gif"
            w="31%"
          />
        <Image
          src="https://images.bewakoof.com/uploads/grid/app/OOFsale-Homepage-Static-1X1-SaleEnds48hrs-common-extend1-1655307773.gif"
          w="31%"
        />
        <Image
          src="https://images.bewakoof.com/uploads/grid/app/1x1Banner-static-shoes-1651235308.gif"
          w="31%"
        />
      </Box>

      <Box w={"88%"} m="auto" display="flex" justifyContent={"space-around"} mt="20px">
        <Image
          src="https://images.bewakoof.com/uploads/grid/app/thumbnails-best-sellers-1653387856.jpg"
          w="9%"
          borderRadius={"10px"}
        />
        <Image
          src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-new-arrival-Acc-1653048927.jpg"
          w="9%"
          borderRadius={"10px"}
        />
        <Image
          src="https://images.bewakoof.com/uploads/grid/app/merch-store-thumbnail-1650383334.jpg"
          w="9%"
          borderRadius={"10px"}
        />
        <Image
          src="https://images.bewakoof.com/uploads/grid/app/thumbnails-mobile-covers-1653388044.jpg"
          w="9%"
          borderRadius={"10px"}
        />
        <Image
          src="https://images.bewakoof.com/uploads/grid/app/thumbnails-phone-grippers-1653387857.jpg"
          w="9%"
          borderRadius={"10px"}
        />
        <Image
          src="https://images.bewakoof.com/uploads/grid/app/thumbnails-sliders-1653387857.jpg"
          w="9%"
          borderRadius={"10px"}
        />
        <Image
          src="https://images.bewakoof.com/uploads/grid/app/thumbnails-mugs-1653388044.jpg"
          w="9%"
          borderRadius={"10px"}
        />
        <Image
          src="https://images.bewakoof.com/uploads/grid/app/CUSTOMISE-thumbnail-1644818150.jpg"
          w="9%"
          borderRadius={"10px"}
        />
        <Image
          src="https://images.bewakoof.com/uploads/grid/app/tod-thumbnail-essentials-1637307130.jpg"
          w="9%"
          borderRadius={"10px"}
        />
      </Box>

      <Text fontSize={"2xl"} fontWeight="600" mt="10px">
        POPULAR CATEGORIES
      </Text>
      <Box
        w={"90%"}
        m="auto"
        display="flex"
        justifyContent={"space-around"}
        mt="10px"
      >
        <Link to="#">
          <Image
            src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1c-1654678208.png"
            w="90%"
            borderRadius={"10px"}
          />
        </Link>
        <Link to="#">
          <Image
            src="https://images.bewakoof.com/uploads/grid/app/slider-box-1654677089.png"
            w="90%"
            borderRadius={"10px"}
          />
        </Link>
        <Link to="#">
          <Image
            src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1p-1654678209.png"
            w="90%"
            borderRadius={"10px"}
          />
        </Link>
        <Link to="#">
          <Image
            src="https://images.bewakoof.com/uploads/grid/app/flipflop-box-1654677086.png"
            w="90%"
            borderRadius={"10px"}
          />
        </Link>
        <Link to="#">
          <Image
            src="https://images.bewakoof.com/uploads/grid/app/notebook-box-1654677088.png"
            w="90%"
            borderRadius={"10px"}
          />
        </Link>
        <Link to="#">
          <Image
            src="https://images.bewakoof.com/uploads/grid/app/categories-to-bag-boxes-size-1o-1654678209.png"
            w="90%"
            borderRadius={"10px"}
          />
        </Link>
      </Box>

      <Box w={"100%"} display="flex" justifyContent={"space-around"}>
        <Image
          src="https://images.bewakoof.com/uploads/grid/app/1x1Banner-static-Backpack-low-1646747551.gif"
          w="31%"
        />
        <Image
          src="https://images.bewakoof.com/uploads/grid/app/Static-Banner-1-1-New-Arrivals-Accessories--1--1652689573.jpg"
          w="31%"
        />
        <Image
          src="https://images.bewakoof.com/uploads/grid/app/1x1-monsoon-ready-women-1654785496.gif"
          w="31%"
        />
      </Box>
      <Box
        display={"flex"}
        m="auto"
        justifyContent="space-around"
        w="99%"
        mt="30px"
      >
        <Image
          w="49%"
          src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Bags-1645250698.jpg"
        />
        <Image
          w="49%"
          src="https://images.bewakoof.com/uploads/grid/app/Mid-Size-Banner-Zig-Zag-Sliders--1--1651237690.jpg"
        />
      </Box>
      
    </Box>
  );
};

export default Accessories;
