import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [year, setYear] = useState("2020");
  const handleFilter = (filter) => {
    console.log(filter);
    setYear(filter);
  };
  const createItem = (expense) => {
    return (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    );
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={year} onFilter={handleFilter} />
        {props.items.map(createItem)}
      </Card>
    </div>
  );
};

export default Expenses;
