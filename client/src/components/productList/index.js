import React, { useEffect } from "react";
import productItem from "../components/productItem";
import { useArtContext } from "../../utils/globalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { idbPromise } from "../../utils/helpers";

function productList()
{
  const [state, dispatch] = useArtContext();

  const { loading, data } = useQuery(k)

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

    }
  })
}

export default productList;