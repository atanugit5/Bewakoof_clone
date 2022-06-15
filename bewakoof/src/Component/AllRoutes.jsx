import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Men from "../Pages/Men";
import Women from "../Pages/Women";
import Accessories from "../Pages/Accessories";
import Footer from "./Footer";

const AllRoutes = () => {
  return (
    <Box>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}>
          <Route path="/men-home" element={<Men />} />
          <Route path="/women-home" element={<Women />} />
          <Route path="/accessories-home" element={<Accessories />} />
        </Route>
      </Routes>
      <Footer/>
    </Box>
  );
};

export default AllRoutes;
