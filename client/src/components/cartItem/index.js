import React from "react";
import { REMOVE_FROM_CART } from "../../utils/actions";
import { useArtContext } from "../../utils/globalState";
import DeleteBtn from "../DeleteBtn";
import
    {
        Flex,
        Spacer,
        Image,
        Box,
        Text
    } from "@chakra-ui/react";
import { idbPromise } from "../../utils/helpers";

const CartItem = ({ item }) =>
{

    const [, dispatch] = useArtContext();

    const removeFromCart = item =>
    {
        dispatch({
            type: REMOVE_FROM_CART,
            _id: item._id
        });
        idbPromise('cart', 'delete', { ...item });
    };

    return (
        <>
            <Flex marginBottom="5%" marginTop="2%">
                <Box border="1px" borderColor="gray.100">
                    <Image
                        boxSize='60px'
                        src={`/images/${item.image}`}
                        fallbackSrc="https://upload.wikimedia.org/wikipedia/commons/e/e0/PlaceholderLC.png"
                        alt={`${item.name}`}
                    />
                </Box>

                <Box>
                    <Text>{item.name}</Text>
                    <Text fontSize='sm'>x{item.quantity}</Text>
                    {item.price}
                </Box>

                <Spacer />

                <Box textAlign='right'>
                    <DeleteBtn
                        aria-label="delete"
                        onClick={() => removeFromCart(item)}
                    />
                </Box>
            </Flex>
        </>
    )
};

export default CartItem;