import React from "react";
import CardInfo from "../CardInfo";
import { CardContainer } from "./CardElements";

const Card = (props) => {
  const createCardInfo = (data) => {
    return <CardInfo key={data.id} name={data.name} age={data.age} />;
  };
  return <CardContainer>{props.users.map(createCardInfo)}</CardContainer>;
};

export default Card;
