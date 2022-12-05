import React from "react";
import styled from "styled-components";

const TextContainer = styled.section`
  padding: 80px 0;
  margin: 0 auto;
  max-width: 640px;
`;

const StyledTitle = styled.h1`
  font-size: 32px;
  text-transform: capitalize;
  text-align: center;
  margin-top: 16px;
  margin-bottom: 56px;
  letter-spacing: 4.8px;
`;

const StyleText = styled.p`
  line-height: 32px;
  font-weight: 400;
  letter-spacing: 2px;
  padding: 0 15px;
`;

const About = () => {
  return (
    <TextContainer>
      <StyledTitle>about us</StyledTitle>
      <StyleText>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corporis,
        veritatis. Et facere voluptas ipsam dolore nisi neque deserunt corporis
        veritatis, odio animi magnam dolores libero commodi, accusantium autem
        consectetur voluptatem. Ea aut voluptatum illo culpa officiis possimus
        earum facilis animi eum porro error adipisci, asperiores neque aliquam?
        Unde error at dolorem provident. Mollitia minima aliquam optio quae,
        recusandae perferendis facere explicabo molestias ipsum accusantium
        iusto aliquid quas numquam quam odio aut id eligendi cumque? Rerum eos
        recusandae saepe possimus ipsa.
      </StyleText>
    </TextContainer>
  );
};

export default About;
