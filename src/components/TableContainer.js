import React from 'react';
import styles from '../styles/tableContainer.module.css'
import CustomersTable from "./CustomersTable"


const TableContainer = () => {
  return (
<div className={styles.tableContainer}>
      <CustomersTable />
        {/* {isLoggedIn && <CustomersTable />} */}
    </div>
  );
};

export default TableContainer;
