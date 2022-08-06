import React from "react";
import productItem from "../components/productItem";
import Preview from "../components/productItem";
import Cart from "../components/Cart"

export default function productList() {
  return (
    <SimpleGrid columns={4} spacing={10}>
      <Preview />
    </SimpleGrid>
    <Cart />
  );
}
