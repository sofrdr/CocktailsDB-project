import { React, useContext } from "react";
import { AppContext } from "../utils/context";
import { StyledTitle } from "../utils/style";
import styled from "styled-components";
import Cocktail from "./Cocktail";
import Loader from "../utils/Atoms";

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

const ErrorText = styled.h2`
  letter-spacing: 4.8px;
  font-size: 32px;
  text-align: center;
  margin-top: 16px;
  text-transform: capitalize;
`;

const CocktailsList = () => {
  const { cocktails, isLoading } = useContext(AppContext);

  const cocktail = cocktails.map((item) => {
    const { name, id, glass, info, image } = item;
    return (
      <Cocktail
        key={id}
        id={id}
        name={name}
        glass={glass}
        info={info}
        image={image}
      />
    );
  });

  if (isLoading) {
    return <Loader />;
  }
  if (cocktails && cocktails.length < 1) {
    return <ErrorText>No cocktail matched your search criteria</ErrorText>;
  }
  return (
    <CocktailSection>
      <StyledTitle>Cocktails</StyledTitle>
      <ListContainer>{cocktail}</ListContainer>
    </CocktailSection>
  );
};

export default CocktailsList;
