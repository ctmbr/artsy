import React from "react";
import { ChakraProvider } from "@chakra-ui/react";

import productList from "../components/productList";
import Cart from "../components/Cart";

export default function Home() {
  return (
    <ChakraProvider className="container">
      <productList />
      <Cart />
    </ChakraProvider>
  );
}
