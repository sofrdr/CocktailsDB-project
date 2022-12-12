import React from "react";
import CocktailsList from "../components/CocktailsList";
import SearchForm from "../components/SearchForm";

const Home = () => {
  return (
    <div>
      <SearchForm />
      <CocktailsList />
    </div>
  );
};

export default Home;
