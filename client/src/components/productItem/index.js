import React from "react";
import { ADD_TO_CART } from "../../utils/actions";
import { Link } from "react-router-dom";
import { useArtContext } from "../../utils/globalState";
import { UPDATE_CART_QUANTITY } from "../../utils/actions";
import { idbPromise } from "../../utils/helpers";
import { Box, Button } from "@chakra-ui/react";

function ProductItem(item) {
  const [state, dispatch] = useArtContext();

  const { _id, name, description, image, price, quantity } = item;

  const { cart } = state;

  const addToCart = () => {
    const itemCart = cart.find((cartItem) => cartItem._id === _id);
    if (itemCart) {
      dispatch({
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        //purchaseQuantity: parseInt(itemCart, purchaseQuantity) + 1
      });
      idbPromise("cart", "put", {
        ...itemCart,
        //purchaseQuantity: parseInt(itemCart.purchaseQuantity) + 1
      });
    } else {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item },
        //product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise("cart", "put", { ...item });
      //idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  };

  return (
    <Box className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img alt={name} src={`/images/${image}`} />
        <p>{name}</p>
        <p>{description}</p>
        {quantity < 1 && <p> OUT OF STOCK </p>}
      </Link>
      <Box>
        <span>${price}</span>
      </Box>
      <Button onClick={addToCart}>Add to cart</Button>
    </Box>
  );
}

export default ProductItem;
