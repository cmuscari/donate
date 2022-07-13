
import React, { createContext, useContext, useState } from "react";

const StoreContext = createContext();
const { Provider } = StoreContext;

const StoreProvider = ({ children }) => {
    const [category, setCategory] = useState('');
    const newCategory = (value) => {
        setCategory(value);
    }


  return <Provider value={{category, newCategory}}>{children}</Provider>;
};

const useStoreContext = () => {
  return useContext(StoreContext);
};

export { StoreProvider, useStoreContext };
