import React from "react";
import { Box } from "@chakra-ui/react";

import productList from "../components/productList";

export default function Home() {
  return (
    <Box className="container">
      <productList />
    </Box>
  );
}
