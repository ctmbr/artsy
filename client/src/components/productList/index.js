import React, { useEffect } from "react";
import productItem from "../components/productItem";
import { useArtContext } from "../../utils/globalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";
import { SimpleGrid } from '@chakra-ui/react';

function productList()
{
  const [state, dispatch] = useArtContext();

  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);

  useEffect(() =>
  {
    if (data)
    {
      dispatch({
        type: UPDATE_PRODUCTS,
        products: data.products,
      });
      data.products.forEach((product) =>
      {
        idbPromise("products", "put", product);
      });
    } else if (!loading)
    {
      idbPromise("product", "get").then((products) =>
      {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  function filterProducts()
  {
    if (!productId)
    {
      return state.products;
    }

    return state.products.filter(
      (product) => product._id === productId
    );
  }
}

export default productList;