import React, { useState, useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import styled from "styled-components";
import colors from "../utils/colors";
import { StyledButton, StyledTitle } from "../utils/style";

const url = "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

const CocktailSection = styled.section`
  text-align: center;
  padding: 80px 0;
`;

const CocktailContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  gap: 48px;
  align-items: center;
  max-width: 1170px;
  margin: 0 auto;
  text-align: left;
`;

const StyledImg = styled.img`
  border-radius: 4px;
  display: block;
  width: 100%;
`;

const StyledText = styled.p`
  font-weight: 700;
  line-height: 1.8;
  margin-bottom: 20px;
`;

const StyledSpan = styled.span`
  margin-right: 8px;
  background-color: ${colors.primaryLight};
  color: ${colors.primary};
  border-radius: 4px;
  padding: 4px 8px;
`;

const SingleCocktail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState([]);

  const getCocktail = async () => {
    setLoading(true);
    try {
      const response = await fetch(`${url}${id}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        const {
          strDrink: name,
          strCategory: category,
          strAlcoholic: info,
          strDrinkThumb: image,
          strGlass: glass,
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
          strInstructions: instructions,
        } = drinks[0];

        const ingredients = [
          strIngredient1,
          strIngredient2,
          strIngredient3,
          strIngredient4,
          strIngredient5,
          strIngredient6,
          strIngredient7,
          strIngredient8,
        ];

        const newCocktail = {
          name,
          category,
          image,
          info,
          ingredients,
          instructions,
          glass,
        };

        setCocktail(newCocktail);
      } else {
        setCocktail(null);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCocktail();
  }, []);

  const { name, category, glass, image, info, instructions, ingredients } =
    cocktail;

  if (cocktail === null) {
    return <StyledTitle>No cocktail matched</StyledTitle>;
  }
  return (
    <CocktailSection>
      <Link to="/">
        <StyledButton>back home</StyledButton>
      </Link>

      <StyledTitle>{name}</StyledTitle>
      <CocktailContainer>
        <StyledImg src={image} alt={name} />
        <div>
          <StyledText>
            <StyledSpan>Name :</StyledSpan>
            {name}
          </StyledText>

          <StyledText>
            <StyledSpan>Category :</StyledSpan>
            {category}
          </StyledText>

          <StyledText>
            <StyledSpan>Info :</StyledSpan>
            {info}
          </StyledText>

          <StyledText>
            <StyledSpan>Glass :</StyledSpan>
            {glass}
          </StyledText>

          <StyledText>
            <StyledSpan>Instructions :</StyledSpan>
            {instructions}
          </StyledText>

          <StyledText>
            <StyledSpan>Ingredients :</StyledSpan>
            {ingredients &&
              ingredients.map((item, index) => {
                return item ? (
                  <span key={index} style={{ marginRight: "8px" }}>
                    {item}
                  </span>
                ) : null;
              })}
          </StyledText>
        </div>
      </CocktailContainer>
    </CocktailSection>
  );
};

export default SingleCocktail;
