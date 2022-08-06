import React from "react";
import { loadStripe } from '@stripe/stripe-js';
import { QUERY_CHECKOUT } from '../../utils/actions';
import CartItem from '../cartItem';
import Auth from '../../utils/auth';
import { Container } from '@chakra-ui/react';

const stripePromise = loadStripe('pk_test_TYooMQauvdEDq54NiTphI7jx');

const Cart = () => {
    return (
        <Container>
            <p>So cool!</p>
                <CartItem />
        </Container>
    );
};

export default Cart;