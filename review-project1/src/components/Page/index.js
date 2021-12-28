import React, { useState } from "react";
import Card from "../Card";
import User from "../User";
import { PageContainer } from "./PageElements";

const Page = () => {
  const USERS = [];
  const [users, setUsers] = useState(USERS);

  const addUser = (user) => {
    setUsers((prevUsers) => {
      console.log(user);
      return [...prevUsers, user];
    });
  };
  return (
    <PageContainer>
      <User onAddUser={addUser} />
      <Card users={users} />
    </PageContainer>
  );
};

export default Page;
