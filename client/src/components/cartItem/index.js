import React from "react";
import { REMOVE_FROM_CART } from "../../utils/actions";
import { useArtContext } from "../../utils/globalState";
import DeleteBtn from "../DeleteBtn";
import { Flex } from "@chakra-ui/react";

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
            <Flex>
                <p>Yippee!!</p>
                <DeleteBtn />
            </Flex>
        </>
    )
};

export default CartItem;