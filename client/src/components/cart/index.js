import React, { useEffect } from "react";
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
        Box,
        Text,
        Flex, 
        Spacer
} from '@chakra-ui/react';
import { idbPromise } from "../../utils/helpers";
import { ADD_MULTIPLE_TO_CART, TOGGLE_CART } from "../../utils/actions";

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const btnRef = React.useRef();

    const [state, dispatch] = useArtContext();
    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

    useEffect(() => {
        if (data) {
            stripePromise.then((res) => {
                res.redirectToCheckout({ sessionId: data.checkout.session });
            });
        }
    }, [data]);

    useEffect(() => {
        async function getCart() {
            const cart = await idbPromise('cart', 'get');
            dispatch({ type: ADD_MULTIPLE_TO_CART, products: [...cart] });
        }

        if (!state.cart.length) {
            getCart();
        }
    }, [state.cart.length, dispatch]);

    function calcTotal() {
        let sum = 0;
        state.cart.forEach((item) =>{
            sum += item.price * item.purchaseQuantity;
        });
        return sum.toFixed(2);
    }

    function submitCheckout() {
        const productIds = [];

        state.cart.forEach((item) => {
            for (let i = 0; i < item.purchaseQuantity; i++) {
                productIds.push(item._id);
            }
        });

        getCheckout({
            variables: { products: productIds },
        });
    }

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
                            {state.cart.length > 0 ? (
                                <>
                                    {state.cart.map((item) => (
                                        <CartItem key={item._id} item={item} />
                                    ))}

                                    <Flex borderTop="2px" borderColor="gray.200">
                                    <Box>
                                        <Text>
                                            <strong>Total</strong>
                                        </Text>
                                    </Box>

                                    <Spacer />

                                    <Box>
                                        ${calcTotal()}
                                    </Box>
                                    </Flex>
                                    {Auth.loggedIn() ? (
                                        <Box>
                                            <Button
                                                onClick={submitCheckout}
                                            >
                                                
                                            </Button>
                                        </Box>
                                    ) : (
                                        <Text>Please log in to finish your purchase.</Text>
                                    )}
                                </>
                            ) : (
                                <p>Your cart is empty.</p>
                            )}
                            <CartItem/>
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