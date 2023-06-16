import React, { useState } from "react";

import ExpenseItem from "../ExpenseItem/ExpenseItem";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesChart from '../ExpenseChart/ExpenseChart';
import { Card } from "../../UI";

import styles from "./Expenses.module.css";

export const Expenses = ({ items }) => {
  const [filteredYear, setFilteredYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = [...items].filter((expense) => {
    const fullYearCheck = new Date(expense.date).getFullYear().toString()
    return fullYearCheck === filteredYear;
  });

  return (
    <Card className={styles.expenses}>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {[...items].length > 0 &&
        [...filteredExpenses]
          .map((item) => (
            <ExpenseItem
              key={item.id}
              title={item.title}
              amount={item.amount}
              date={item.date}
            />
          ))}
      {![...filteredExpenses].length && (
        <p className={styles.noexpenses}>No Expenses Added Yet for this year</p>
      )}
    </Card>
  );
};
