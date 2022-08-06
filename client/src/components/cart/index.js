import React from "react";
import { loadStripe } from '@stripe/stripe-js';
import { QUERY_CHECKOUT } from '../../utils/queries';
import { useArtContext } from "../../utils/globalState";
import { useLazyQuery } from "@apollo/client";
import CartItem from '../cartItem';
import Auth from '../../utils/auth';
import { Button,
        Drawer,
        DrawerBody,
        DrawerFooter,
        DrawerHeader,
        DrawerOverlay,
        DrawerContent,
        useDisclosure, 
} from '@chakra-ui/react';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    // const [state, dispatch] = useArtContext();
    // const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

    return (
        <>
            <Button ref={btnRef} onClick={onOpen}>
                Cart
            </Button>
            <Drawer
                isOpen={isOpen}
                placement='right'
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                    <DrawerOverlay />
                    <DrawerContent>
                        <DrawerHeader backgroundColor="teal.200">
                            Your Cart
                        </DrawerHeader>

                        <DrawerBody>
                            <CartItem />
                        </DrawerBody>

                        <DrawerFooter>
                            <Button onClick={onClose}>
                                Close
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
            </Drawer>
        </>
    );
};

export default Cart;