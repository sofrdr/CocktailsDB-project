import React from "react";
import styled from "styled-components";
import colors from "../utils/colors";
import { Link } from "react-router-dom";
import Logo from "../logo.svg";

const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  height: 80px;
  border-bottom: 2px solid ${colors.primary};
  box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
  background-color: white;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  width: 1170px;
  background-color: white;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  text-transform: capitalize;
  margin-right: 8px;
  letter-spacing: 2px;
  padding: 4px 8px;
  font-size: 19px;
  font-weight: 400;
`;

const StyledLogo = styled.img`
  width: 192px;
`;

const NavLinks = styled.ul`
  display: flex;
  align-items: center;
  list-style-type: none;
`;

const Header = () => {
  return (
    <NavContainer>
      <NavWrapper>
        <StyledLink to="/">
          <StyledLogo src={Logo} alt="cocktail db logo" />
        </StyledLink>
        <NavLinks>
          <li>
            <StyledLink to="/">Home</StyledLink>
          </li>
          <li>
            <StyledLink to="/about">About</StyledLink>
          </li>
        </NavLinks>
      </NavWrapper>
    </NavContainer>
  );
};
export default Header;
