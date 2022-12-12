import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledButton } from "../utils/style";

const CocktailContainer = styled.article`
  background: #fff;
  margin-bottom: 32px;
  display: grid;
  grid-template-rows: auto 1fr;
  box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
  border-radius: 4px;
  transition: all linear 0.3s;

  &:hover {
    box-shadow: 4px 10px 5px 0px rgba(0, 0, 0, 0.5);
  }
`;

const StyledImg = styled.img`
  height: 320px;
  object-fit: cover;
  width: 100%;
`;

const CocktailFooter = styled.div`
  padding: 24px;
`;

const StyledTitle = styled.h3`
  font-size: 32px;
  margin-bottom: 5px;
  letter-spacing: 5px;
`;

const StyledSubtitle = styled.h4`
  margin-bottom: 5px;
  letter-spacing: 5px;
`;

const StyledText = styled.p`
  color: #afafaf;
  margin-bottom: 8px;
`;

const Cocktail = ({ id, name, image, info, glass }) => {
  return (
    <CocktailContainer>
      <div>
        <StyledImg src={image} alt={name} />
      </div>
      <CocktailFooter>
        <StyledTitle>{name}</StyledTitle>
        <StyledSubtitle>{glass}</StyledSubtitle>
        <StyledText>{info}</StyledText>
        <Link to={`/cocktail/${id}`}>
          <StyledButton>details</StyledButton>
        </Link>
      </CocktailFooter>
    </CocktailContainer>
  );
};

export default Cocktail;
