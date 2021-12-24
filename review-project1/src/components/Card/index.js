import React from "react";
import { CardContainer, CardWrap, CardName, CardAge } from "./CardElements";

const Card = () => {
  return (
    <CardContainer>
      <CardWrap>
        <CardName>max</CardName>
        <CardAge>(31 years old)</CardAge>
      </CardWrap>
    </CardContainer>
  );
};

export default Card;
