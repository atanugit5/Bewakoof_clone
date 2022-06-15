import { Box } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Accessories from "./Accessories";
import Men from "./Men";
import Women from "./Women";
const Home = () => {
  return (
    <Box pt="60px">
        <Box w={"100%"} position={"fixed"} bgColor="white">
      <Box
        w="300px"
        h="50px"
        justifyContent="center"
        textAlign={"center"}
        pt="10px"
        fontSize={"20px"}
        fontWeight="600"
        m="auto"
        display={"flex"}
        gap="60px"
      >
        <Link to="/men-home">MEN</Link>
        <Link to="/women-home">WOMEN</Link>
        <Link to="/accessories-home">ACCESSORIES</Link>
      </Box>
      </Box>
      <Routes>
        <Route index element={<Men />} />
        <Route path="/men-home" element={<Men />} />
        <Route path="/women-home" element={<Women />} />
        <Route path="/accessories-home" element={<Accessories />} />
      </Routes>
    </Box>
  );
};

export default Home;
