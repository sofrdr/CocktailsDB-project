import { React, useContext } from "react";
import { AppContext } from "../utils/context";
import { StyledTitle } from "../utils/style";
import styled from "styled-components";
import Cocktail from "./Cocktail";

const CocktailSection = styled.section`
  padding: 80px 0;
`;

const ListContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(338.8px, 1fr));
  max-width: 1170px;
  margin: 0 auto;
  row-gap: 32px;
  column-gap: 32px;
`;

const CocktailsList = () => {
  const { cocktails, loading } = useContext(AppContext);

  const cocktail = cocktails.map((item) => {
    const { name, id, glass, info, image } = item;
    return (
      <Cocktail id={id} name={name} glass={glass} info={info} image={image} />
    );
  });
  return (
    <CocktailSection>
      <StyledTitle>Cocktails</StyledTitle>
      <ListContainer>{cocktail}</ListContainer>
    </CocktailSection>
  );
};

export default CocktailsList;
