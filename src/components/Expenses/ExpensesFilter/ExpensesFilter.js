import styles from "./ExpensesFilter.module.css"

const ExpensesFilter = ({selected, onChangeFilter}) => {
    const dropdownChangeHandler = (event) => {
      onChangeFilter(event.target.value);
    };
    return (
      <div className={styles.expensesfilter}>
        <div className={styles.expensesfiltercontrol}>
          <label>Filter by year</label>
          <select value={selected} onChange={dropdownChangeHandler}>
            <option value='2023'>2023</option>
            <option value='2022'>2022</option>
            <option value='2021'>2021</option>
            <option value='2020'>2020</option>
            <option value='2019'>2019</option>
          </select>
        </div>
      </div>
    );
  };
  
  export default ExpensesFilter;