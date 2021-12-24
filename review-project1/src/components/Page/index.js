import React from "react";
import Card from "../Card";
import User from "../User";
import { PageContainer } from "./PageElements";

const Page = () => {
  return (
    <PageContainer>
      <User />
      <Card />
    </PageContainer>
  );
};

export default Page;
