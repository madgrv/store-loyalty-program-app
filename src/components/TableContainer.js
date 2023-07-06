import React from 'react';
import CustomersTable from "./CustomersTable"
const [isLoggedIn, setIsLoggedIn] = useState(false);


const TableContainer = ({ data }) => {
  return (
    <div>
        {isLoggedIn && <CustomersTable />}
    </div>
  );
};

export default TableContainer;
