import React, { useEffect } from "react";
import ProductItem from "../productItem";
import { useArtContext } from "../../utils/globalState";
import { UPDATE_PRODUCTS } from "../../utils/actions";
import { useQuery } from "@apollo/client";
import { QUERY_ALL_PRODUCTS } from "../../utils/queries";
import { idbPromise } from "../../utils/helpers";

function ProductList()
{
  const [state, dispatch] = useArtContext();

  const { loading, data } = useQuery(QUERY_ALL_PRODUCTS);

  // const { userShop } = state;

  // const { products } = state;

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
      idbPromise("products", "get").then((products) =>
      {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: products,
        });
      });
    }
  }, [data, loading, dispatch]);

  // function filterProducts()
  // {
  //   if (!products)
  //   {
  //     return state.products;
  //   }

  //   return state.products.filter(
  //     (product) => product._id === products
  //   );
  // }

  console.log(data)

  return (
    <div className="my-2">
      <h2>Artworks:</h2>
      {state.products.length ? (
        <div className="flex-row">
          {state.products.map((product) => (
            <ProductItem
              key={product._id}
              _id={product._id}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
              quantity={product.quantity}
            />
          ))}
        </div>
      ) : (
        <h3>There are no artworks for sale</h3>
      )}
    </div>
  )
}

export default ProductList;