import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import ProductList from "../components/ProductList";
import Cart from "../components/Cart";

const Home = () => {
  return (
    <ChakraProvider className="container">
      <ProductList />
      <Cart />
    </ChakraProvider>
  );
};

export default Home;