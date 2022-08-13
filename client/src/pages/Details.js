import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import Reviews from "../components/reviews";
import { useArtContext } from "../utils/GlobalState";
import { QUERY_PRODUCTS } from "../utils/queries";
import
  {
    REMOVE_FROM_CART,
    ADD_TO_CART,
    UPDATE_PRODUCTS,
    UPDATE_CART_QUANTITY
  } from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import { Spinner, 
        Box, 
        Image, 
        Heading, 
        Button, 
        Wrap
} from "@chakra-ui/react";

function Details()
{
  const [state, dispatch] = useArtContext();
  const { id } = useParams();

  const [currentProduct, setCurrentProduct] = useState({});

  const { loading, data } = useQuery(QUERY_PRODUCTS);

  const { products, cart } = state;

  useEffect(() =>
  {
    if (products.length)
    {
      setCurrentProduct(products.find((product) => product._id === id));
    } else if (data)
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
      idbPromise("products", "get").then((indexedProducts) =>
      {
        dispatch({
          type: UPDATE_PRODUCTS,
          products: indexedProducts,
        });
      });
    }
  }, [products, data, loading, dispatch, id]);

  const addToCart = () =>
  {
    const itemCart = cart.find((cartItem) => cartItem._id === id);
    if (itemCart)
    {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: id,
        quantity: parseInt(itemCart.purchaseQuantity) + 1,
      });
      idbPromise('cart', 'put', {
        ...itemCart,
        quantity: parseInt(itemCart.purchaseQuantity) + 1,
      });
    } else
    {
      dispatch({
        type: ADD_TO_CART,
      });
      idbPromise('cart', 'put', { ...currentProduct, quantity: 1 });
    }
  };

  const removeFromCart = () =>
  {
    dispatch({
      type: REMOVE_FROM_CART,
      _id: currentProduct._id,
    });

    idbPromise('cart', 'delete', { ...currentProduct });
  };

  return (
    <>
      {currentProduct ? (
        <Wrap p="30px">
          <Box maxW="2xl">
            <Image
              src={`/images/${currentProduct.image}`}
              alt={currentProduct.name}
              border="1px"
              borderColor="gray.200"
              p="2px"
            />

            <Box>
              <Heading>{currentProduct.name}</Heading>

              <p>{currentProduct.description}</p>
              <Box mt="10px">
                <Button colorScheme="blue" onClick={addToCart}>
                  Add to Cart
                </Button>
                <Button colorScheme="blue"
                  disabled={!cart.find((p) => p._id === currentProduct._id)}
                  onClick={removeFromCart}
                >
                  Remove from Cart
                </Button>
              </Box>
            </Box>
          </Box>

          <Reviews />
        </Wrap>

      ) : null}

      {loading ? <Spinner /> : null}
    </>
  );
}

export default Details;
