import { React, createContext, useState, useEffect } from "react";

const url = "www.thecocktaildb.com/api/json/v1/1/search.php?s=";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [cocktails, setCocktails] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState("a");

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`${url}${searchTerm}`);
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AppContext.Provider value={{ cocktails, isLoading }}>
      {children}
    </AppContext.Provider>
  );
};
