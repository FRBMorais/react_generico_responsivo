import React from 'react';
import styles from './Chart.module.css';

const Chart = () => {
  return (
    <div className={styles.chartContainer}>
      <div className="row">
        <div className={`col ${styles.chart}`} id="rel-graf"></div>
      </div>
    </div>
  );
};

export default Chart;
