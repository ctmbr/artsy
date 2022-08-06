import React from "react";
import { ADD_TO_CART } from "../../utils/actions";
import { Link } from "react-router-dom";
import { useArtContext } from "../../utils/globalState";

export default function ProductItem()
{
  const [state, dispatch] = useArtContext();

  const {
    _id, name, description, image, price, quantity
  } = item

  const { cart } = state;

  const addToCart = () =>
  {
    const itemCart = cart.find((cartItem) => cartItem._id === _id)
    if (itemCart)
    {
      dispatch({
        type: UPDATE_CART_QUANTITY
      })
    }
  }

  return products.map((product) => (
    <section>
      <h2>{product.name}</h2>
      <img alt={product.name} src={product.img} />
      <h2>{product.price}</h2>
    </section>
  ));
}
