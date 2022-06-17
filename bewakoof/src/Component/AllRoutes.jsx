import { Box } from "@chakra-ui/react";
import React from "react";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Men from "../Pages/Men";
import Women from "../Pages/Women";
import Accessories from "../Pages/Accessories";
import Footer from "./Footer";
import MenClothing from "../Pages/MenClothing";
import SingleProduct from "./SingleProduct";
import Cart from "../Pages/Cart";
import Orders from "../Pages/Orders";
import Login from "./Login";
import PrivateRoute from "./PrivateRoute";

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
        <Route path="/men-clothing" element={<MenClothing/>}/>
        <Route path="/men-clothing/:id" element={<SingleProduct/>} />
      <Route path="/cart" element={<PrivateRoute><Cart/></PrivateRoute>} />
      <Route path="/orders" element={<PrivateRoute><Orders/></PrivateRoute>} />
      <Route path="/login" element={<Login/>} />

      </Routes>
      <Footer/>
    </Box>
  );
};

export default AllRoutes;
