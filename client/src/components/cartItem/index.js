import React from "react";
import { REMOVE_FROM_CART } from "../../utils/actions";
import { useArtContext } from "../../utils/globalState";
import DeleteBtn from "../DeleteBtn";
import { Flex, 
        Spacer, 
        Image, 
        Box, 
        Text 
} from "@chakra-ui/react";

const CartItem = ({ item }) => {

    // const [, dispatch] = useArtContext();

    // const removeFromCart = item => {
    //   dispatch({
    //     type: REMOVE_FROM_CART,
    //     _id: item._id
    //   });  
    // };

    return (
        <>
            <Flex marginBottom="5%" marginTop="2%">
                <Box border="1px" borderColor="gray.100">
                    <Image
                        boxSize='60px'
                        src="https://www.publicdomainpictures.net/pictures/130000/nahled/smiley-with-shoes.jpg"
                        alt=""
                    />
                </Box>

                <Box>
                    <Text>Name Here</Text>
                    <Text fontSize='sm'>x1</Text>
                    $10
                </Box>
                
                <Spacer />

                <Box textAlign='right'>
                    <DeleteBtn />
                </Box>
            </Flex>
        </>
    )
};

export default CartItem;