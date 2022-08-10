import React from "react";
import { ChakraProvider, Spinner } from "@chakra-ui/react";
import { useQuery } from '@apollo/client';

import ProductList from "../components/productList";
import Cart from "../components/cart";

import { QUERY_ALL_PRODUCTS } from "../utils/queries";

const Home = () => {
  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);
  const products = data?.products || [];

  return (
    <ChakraProvider className="container">
      { loading ? (
        <Spinner />
      ): (
        <ProductList 
          products={products}
        />
      )}
      <Cart />
    </ChakraProvider>
  );
};

export default Home;
