// import "./App.css";
import * as React from "react";

import Header from "./components/Jumbotron";
import Home from "./pages/Home";

import { box, extendTheme, ChakraProvider } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Home />
    </ChakraProvider>
  );
}

export default App;
