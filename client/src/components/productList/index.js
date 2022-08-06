import React from "react";
import productItem from "../components/productItem";
import Preview from "../components/productItem";

export default function productList() {
  return (
    <SimpleGrid columns={4} spacing={10}>
      <Preview />
    </SimpleGrid>
  );
}
