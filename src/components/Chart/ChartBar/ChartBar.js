import styles from './ChartBar.module.css';

const ChartBar = (props) => {
  let barFillHeight = '0%';

  if (props.maxValue > 0) {
    barFillHeight = Math.round((props.value / props.maxValue) * 100) + '%';
  }

  return (
    <div className={styles.chartbar}>
      <div className={styles.chartbarinner}>
        <div
          className={styles.chartbarfill}
          style={{ height: barFillHeight }}
        ></div>
      </div>
      <div className={styles.chartbarlabel}>{props.label}</div>
    </div>
  );
};

export default ChartBar;