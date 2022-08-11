import React from "react";
import { ChakraProvider} from "@chakra-ui/react";

import ProductList from "../components/productList";
import Cart from "../components/cart";

const Home = () => {

  return (
    <ChakraProvider className="container">
        <ProductList />
      <Cart />
    </ChakraProvider>
  );
};

export default Home;
