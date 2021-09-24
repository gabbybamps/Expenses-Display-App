import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Groceries",
    amount: 154.15,
    date: new Date(2020, 5, 19),
  },
  {
    id: "e2",
    title: "Mobile phone",
    amount: 599.99,
    date: new Date(2021, 8, 22),
  },
  {
    id: "e3",
    title: "Gym Subscription",
    amount: 195,
    date: new Date(2021, 5, 28),
  },
  {
    id: "e4",
    title: "New Computer",
    amount: 640,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]; //prevExpenses = expenses in useState
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
