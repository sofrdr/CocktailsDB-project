import { React, useRef, useContext, useEffect } from "react";
import styled from "styled-components";
import colors from "../utils/colors";
import { AppContext } from "../utils/context";

const SearchSection = styled.section`
  margin-top: 16px;
  padding: 80px 0;
  padding-bottom: 0;
`;

const StyledForm = styled.form`
  margin: 0 auto;
  max-width: 640px;
  background-color: white;
  padding: 32px 40px;
  text-transform: capitalize;
  border-radius: 4px;
  box-shadow: 2px 5px 3px 0px rgba(0, 0, 0, 0.5);
`;

const StyledLabel = styled.label`
  font-weight: 700;
  color: ${colors.primary};
  letter-spacing: 4px;
`;

const StyledInput = styled.input`
  width: 100%;
  border: transparent;
  background: #f1f5f8;
  padding: 8px;
  font-size: 19px;
  margin-top: 20px;
`;

const SearchForm = () => {
  const { setSearchTerm } = useContext(AppContext);
  const searchValue = useRef("");

  const handleChange = (e) => {
    setSearchTerm(searchValue.current.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  return (
    <SearchSection>
      <StyledForm onSubmit={handleSubmit}>
        <div>
          <StyledLabel htmlFor="name">
            search your favorite cocktail
          </StyledLabel>
          <StyledInput
            id="name"
            type="text"
            name="name"
            onChange={handleChange}
            ref={searchValue}
          />
        </div>
      </StyledForm>
    </SearchSection>
  );
};

export default SearchForm;
