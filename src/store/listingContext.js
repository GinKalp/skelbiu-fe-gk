import { useContext, createContext, useState, useEffect } from "react";

export const ListingContext = createContext({
  item: {},
  setItem() {},
});

export const ListingContextProvider = ({ children }) => {
  const [item, setItem] = useState({});

  return (
    <ListingContext.Provider value={{ item, setItem }}>
      {children}
    </ListingContext.Provider>
  );
};

export const useListingCtx = () => useContext(ListingContext);
