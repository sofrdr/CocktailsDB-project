import React from "react";
import styled from "styled-components";
import colors from "../utils/colors";
import { Link } from "react-router-dom";
import { StyledButton } from "../utils/style";

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

const Error = () => {
  return (
    <ErrorPage>
      <ErrorContainer>
        <ErrorTitle>oops ! it's a dead end</ErrorTitle>
        <Link to="/">
          <StyledButton>back home</StyledButton>
        </Link>
      </ErrorContainer>
    </ErrorPage>
  );
};

export default Error;
