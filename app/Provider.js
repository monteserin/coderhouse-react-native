import { createContext, useEffect, useState } from 'react';
import { getItems } from './api';

const Provider = ({ children }) => {
    const [state, setState] = useState({ productsInCart: [] });

    const addItem = (newItem, quantity) => {
        !state.productsInCart.find(item => item.id === newItem.id) && setState({ ...state, productsInCart: [...state.productsInCart, newItem] });
    };
    const removeItem = id => {
        setState(state.productsInCart.filter(item => item.id !== id));
    };
    const clear = () => setState({ ...state, productsInCart: [] });
    const isInCart = (id) => state.productsInCart.find(item => item.id === id) ? true : false;




    return (
        <AppContext.Provider value={{ state, addItem, removeItem, clear, isInCart }}>
            {children}
        </AppContext.Provider>
    );
}

export default Provider;
export const AppContext = createContext();  