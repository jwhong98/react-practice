import React from "react";
import { CardInfoWrap, CardName, CardAge } from "./CardInfoElements";

const CardInfo = (props) => {
  return (
    <CardInfoWrap>
      <CardName>{props.name}</CardName>
      <CardAge>({props.age} years old)</CardAge>
    </CardInfoWrap>
  );
};

export default CardInfo;
