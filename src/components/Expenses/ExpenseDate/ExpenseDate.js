import styles from "./ExpenseDate.module.css"

const ExpenseDate = (props) => {
  const date = new Date(props.date)
  
  const month =  date.toLocaleString('en-US', { month: 'long' });
  const day =  date.toLocaleString('en-US', { day: '2-digit' });
  const year =  date.getFullYear();

  return (
    <div className={styles.expensedate}>
      <div className={styles.expensedatemonth}>{month}</div>
      <div className={styles.expensedateyear}>{year}</div>
      <div className={styles.expensedateday}>{day}</div>
    </div>
  );
};

export default ExpenseDate;