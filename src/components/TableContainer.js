import React, { useState } from 'react';
import CustomersTable from "./CustomersTable"


const TableContainer = ({ data }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div>
        {isLoggedIn && <CustomersTable />}
    </div>
  );
};

export default TableContainer;
