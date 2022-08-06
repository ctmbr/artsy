import React from "react";
import Jumbotron from "../components/Jumbotron";
import { Box, Heading } from "@chakra-ui/react";

export default NoMatch = () => {
  return (
    <Box>
      <Jumbotron>
        <Heading size="4xl">404 Page Not Found</Heading>
      </Jumbotron>
    </Box>
  );
};