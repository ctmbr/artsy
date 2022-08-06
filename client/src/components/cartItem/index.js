import React from "react";
import { REMOVE_FROM_CART } from "../../utils/actions";
import { useArtContext } from "../../utils/globalState";
import DeleteBtn from "../DeleteBtn";

const CartItem = () => {

    // const [, remove] = useArtContext();

    // const removeFromCart = item => {
    //   remove({
    //     type: REMOVE_FROM_CART,
    //     _id: item._id
    //   });  
    // };

    return (
        <>
            <p>Yippee!!</p>
            <DeleteBtn />
        </>
    )
};

export default CartItem;