import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import ProductList from "../components/productList";

const Home = () => {
  return (
    <ChakraProvider className="container">
      <ProductList />
    </ChakraProvider>
  );
};

export default Home;
