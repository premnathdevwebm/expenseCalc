import { useState } from "react";

import ExpenseForm from "../ExpenseForm/ExpenseForm";
import styles from "./NewExpense.module.css";

const generateUniqueRandomNumber = (min, max) => {
  const uniqueNumbers = new Set();

  while (true) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    if (!uniqueNumbers.has(randomNumber)) {
      uniqueNumbers.add(randomNumber);
      return randomNumber;
    }
  }
};

export const NewExpense = ({ onAddExpense }) => {
  const [adding, setAdding] = useState(false);

  const startAdding = () => setAdding(true);

  const cancelAdding = ()=>setAdding(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: generateUniqueRandomNumber(1, 9980765),
    };
    onAddExpense(expenseData);
  };

  return (
    <div className={styles.newexpense}>
      {!adding && <button onClick={startAdding}>Add New Expenses</button>}
      {adding && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} cancelAdding={cancelAdding} />}
    </div>
  );
};
