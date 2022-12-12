import React from "react";
import styled from "styled-components";
import colors from "./colors";

export const StyledButton = styled.button`
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
