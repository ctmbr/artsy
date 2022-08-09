import React, { createContext, useContext } from "react";
import { useArtReducer } from "./reducers";

const StoreContext = createContext();
const { Provider } = StoreContext;

const ArtProvider = ({ value = [], ...props }) =>
{
    const [state, dispatch] = useArtReducer({
        products: [],
        cart: [],
        isOpen: false
    });

    return <Provider value={[state, dispatch]}{...props} />;
};

const useArtContext = () =>
{
    return useContext(StoreContext);
};

export { ArtProvider, useArtContext };