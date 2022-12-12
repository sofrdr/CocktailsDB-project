import { React, useContext } from "react";
import { AppContext } from "../utils/context";

const CocktailsList = () => {
  const { cocktails, loading } = useContext(AppContext);
  console.log(cocktails);
};

export default CocktailsList;
