import React, { useEffect } from "react";
import { Box, Heading } from "@chakra-ui/react";
import { useMutation } from "@apollo/client";
import Jumbotron from "../components/Jumbotron";
import { ADD_ORDER } from "../utils/mutations";
import { idbPromise } from "../utils/helpers";

export default function Success()
{
  const [addOrder] = useMutation(ADD_ORDER);

  useEffect(() =>
  {
    async function saveOrder()
    {
      const cart = await idbPromise("cart", "get");
      const products = cart.map((item) => item._id);

      if (products.length)
      {
        const { data } = await addOrder({ variables: { products } });
        const productData = data.addOrder.products;

        productData.forEach((item) =>
        {
          idbPromise("cart", "delete", item);
        });
      }

      setTimeout(() =>
      {
        window.location.assign("/");
      }, 3000);
    }

    saveOrder();
  }, [addOrder]);

  return (
    <Box>
      <Jumbotron>
        <Heading size="4xl">Success!</Heading>
        <Heading size="lg">Thank you for your purchase!</Heading>
        <Heading size="lg">You will now be redirected to the home page</Heading>
      </Jumbotron>
    </Box>
  );
}
