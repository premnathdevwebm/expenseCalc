import { useState } from "react";
import { Expenses } from "./components/Expenses";
import { NewExpense } from "./components/NewExpense/NewExpense/NewExpense";

import expenses from "./expanseData.json";

const App = () => {
  const [data, setData] = useState(expenses);

  const addExpenseHandler = (expense) => {
    setData((prev) => [...prev, expense]);
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={data} />
    </div>
  );
};

export default App;
