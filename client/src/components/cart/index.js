import React from "react";
import { loadStripe } from '@stripe/stripe-js';
import { QUERY_CHECKOUT } from '../../utils/actions';
import CartItem from '../cartItem';
import Auth from '../../utils/auth';
import { Button,
        DrawerCloseButton,
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
                        <DrawerHeader>
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