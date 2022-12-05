import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./components/Error";
import Header from "./components/Header";
import SingleCocktail from "./pages/SingleCocktail";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/cocktail/:id" element={<SingleCocktail />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
