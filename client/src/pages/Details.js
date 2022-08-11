import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";

import { useArtContext } from "../utils/globalState";
import { QUERY_PRODUCTS } from "../utils/queries";
import { 
    ADD_TO_CART,
    UPDATE_PRODUCTS
} from "../utils/actions";
import { idbPromise } from "../utils/helpers";
import { Spinner, Box, Image, Heading } from "@chakra-ui/react";

function Details() {
    cons [state, dispatch] = useArtContext();
    const { id } = useParams();

    const [currentProduct, useCurrentProduct] = useState({});

    const { loading, data } = useQuery(QUERY_PRODUCTS);

    const { products, cart } = state;

    useEffect(() => {
        if (products.length) 
            {
            setCurrentProduct(products.find((product) => product._id === id));
        } else if (data) 
            {
            dispatch({
              type: UPDATE_PRODUCTS,
              products: data.products,
            });

            data.products.forEach((product) => {
                idbPromise('products', 'put', product);
              });
        } else if (!loading) 
            {
            idbPromise('products', 'get').then((indexedProducts) => {
              dispatch({
                type: UPDATE_PRODUCTS,
                products: indexedProducts,
              });
            });
        }
    }, [products, data, loading, dispatch, id]);

    const addToCart = () =>
    {
        const itemCart = cart.find((cartItem) => cartItem._id === _id)

        if (itemCart)
            {
            dispatch({
                type: UPDATE_CART_QUANTITY,
                _id: _id,
            });
            idbPromise("cart", "put", {
                ...itemCart,
            });
            } else
            {
            dispatch({
                type: ADD_TO_CART,
                product: { ...item }
            });
            idbPromise("cart", "put", { ...item });
        }
    };

    return (
        <>
            {currentProduct && cart ? (
                <>
                    <Box>
                        <Image
                        src={`/images/${currentProduct.image}`}
                        alt={currentProduct.name}
                        />
                    </Box>

                    <Box>
                        <Heading>{currentProduct.name}</Heading>
                    </Box>
                </>
                
            ) : null}
            
            {loading ? 
            <Spinner />
            : null}
        </>
    )
}

export default Details;