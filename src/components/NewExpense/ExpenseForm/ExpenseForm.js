import { useState } from "react";

import styles from "./ExpenseForm.module.css";

const todayDateInfo = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const ExpenseForm = ({ onSaveExpenseData, cancelAdding }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData);
    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
    cancelAdding();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={styles.newexpensecontrols}>
        <div className={styles.newexpensecontrol}>
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className={styles.newexpensecontrol}>
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className={styles.newexpensecontrol}>
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max={todayDateInfo()}
            value={enteredDate}
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className={styles.newexpenseactions}>
        <button type="submit">Add Expense</button>
        <button onClick={cancelAdding} type="button">
          Cancel Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
