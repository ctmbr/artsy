import { useReducer } from 'react';
import
{
    UPDATE_PRODUCTS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART,
    UPDATE_CART_QUANTITY,
    ADD_MULTIPLE_TO_CART
} from './actions';

export const reducer = (state, action) =>
{
    switch (action.type)
    {
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
            };

        case ADD_TO_CART:
            return {
                ...state,
                cartOpen: true,
                cart: [...state.cart, action.product],
            };

        case REMOVE_FROM_CART:
            let newState = state.cart.filter((product) =>
            {
                return product._id !== action._id;
            });

            return {
                ...state,
                cartOpen: newState.length > 0,
                cart: newState,
            };

        case CLEAR_CART:
            return {
                ...state,
                cartOpen: false,
                cart: [],
            };

        case UPDATE_CART_QUANTITY:
            return {
                ...state,
                cartOpen: true,
                cart: state.cart.map((product) =>
                {
                    if (action._id === product.id)
                    {
                        product.purchaseQuantity = action.purchaseQuantity;
                    }
                    return product;
                })
            };

        case ADD_MULTIPLE_TO_CART:
            return {
                ...state,
                cart: [...state.cart, ...action.products],
        };

        default:
            return state;

    }
};

export function useArtReducer(initialState)
{
    return useReducer(reducer, initialState)
}