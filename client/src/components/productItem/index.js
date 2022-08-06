import React from "react";
import { ADD_TO_CART } from "../../utils/actions";
import { Link } from "react-router-dom";
import { useArtContext } from "../../utils/globalState";

function ProductItem()
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
        type: UPDATE_CART_QUANTITY,
        _id: _id,
        purchaseQuantity: parseInt(itemCart, purchaseQuantity) + 1
      });
      idbPromise("cart", "put", {
        ...itemCart,
        purchaseQuantity: parseInt(itemCart.purchaseQuantity) + 1
      });
    } else
    {
      dispatch({
        type: ADD_TO_CART,
        product: { ...item, purchaseQuantity: 1 }
      });
      idbPromise("cart", "put", { ...item, purchaseQuantity: 1 });
    }
  }

  return (
    <div className="card px-1 py-1">
      <Link to={`/products/${_id}`}>
        <img
          alt={name}
          src={`/images/${image}`}
        />
        <p>{name}</p>
        <p>{description}</p>
        {quantity < 1 && <p> OUT OF STOCK </p>}
      </Link>
      <div>
        <span>${price}</span>
      </div>
      <button onClick={addToCart}>Add to cart</button>
    </div>
  );
};

export default ProductItem;
