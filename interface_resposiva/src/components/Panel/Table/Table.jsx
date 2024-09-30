import React from 'react';
import styles from './Table.module.css';

const Table = () => {
  return (
    <div className={styles.tableContainer}>
      <div className="row">
        <div className={`col ${styles.table}`} id="rel-table"></div>
      </div>
    </div>
  );
};

export default Table;
