import { React, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import colors from "./utils/colors";
import { AppProvider } from "./utils/context";

import Home from "./pages/Home";
import About from "./pages/About";
import Error from "./components/Error";
import Header from "./components/Header";
import SingleCocktail from "./pages/SingleCocktail";

const GlobalStyle = createGlobalStyle`

body, html{
  height: 100%; 
  background-color: #f1f5f8;
  margin: 0;
}
div{
  font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif; 
  height: 100%;
}

h3,h4{
  margin: 0;
}


`;

const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <AppProvider>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/cocktail/:id" element={<SingleCocktail />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </AppProvider>
    </Router>
  );
};

export default App;
