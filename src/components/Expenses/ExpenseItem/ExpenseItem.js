import ExpenseDate from "../ExpenseDate/ExpenseDate";
import { Card } from "../../UI";
import styles from "./ExpenseItem.module.css";
import { number } from "../../../utils/formatter";

const ExpenseItem = (props) => {
  return (
    <Card className={styles.expenseitem}>
      <ExpenseDate date={props.date} />
      <div className={styles.expenseitemdescription}>
        <h2>{props.title}</h2>
        <div className={styles.expenseitemprice}>{number(props.amount)}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
