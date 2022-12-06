import React from "react";
import styled from "styled-components";
import colors from "../utils/colors";
import { Link } from "react-router-dom";

const ErrorPage = styled.section`
  padding: 90px 0;
  display: flex;
  justify-content: center;
`;

const ErrorContainer = styled.div`
  text-align: center;
  text-transform: capitalize;
`;

const ErrorTitle = styled.h1`
  margin-bottom: 20px;
  letter-spacing: 4.8px;
`;

const ErrorButton = styled.button`
  cursor: pointer;
  text-transform: uppercase;
  background-color: ${colors.primary};
  color: white;
  border-color: transparent;
  letter-spacing: 4.8px;
  padding: 7px 13px;
  border-radius: 4px;
  transition: all 0.3s linear;
  &:hover {
    background: ${colors.primaryLight};
    color: ${colors.primary};
  }
`;

const Error = () => {
  return (
    <ErrorPage>
      <ErrorContainer>
        <ErrorTitle>oops ! it's a dead end</ErrorTitle>
        <Link to="/">
          <ErrorButton>back home</ErrorButton>
        </Link>
      </ErrorContainer>
    </ErrorPage>
  );
};

export default Error;
