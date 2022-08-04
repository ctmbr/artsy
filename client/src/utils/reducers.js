import { useReducer } from 'react';
import { 
    UPDATE_PRODUCTS,
    ADD_TO_CART,
    REMOVE_FROM_CART,
    CLEAR_CART
 } from './actions';

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_PRODUCTS:
            return {
                ...state,
                products: [...action.products],
            };
        
        case ADD_TO_CART:
            return {
                ...state,
            };

        case REMOVE_FROM_CART:
            return {
                ...state,
            };

        case CLEAR_CART:
            return {
                ...state,
            };

        default:
            return state;

    }
};

export function useArtReducer(initialState) {
    return useReducer(reducer, initialState)
}