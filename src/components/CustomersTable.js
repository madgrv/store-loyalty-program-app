import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from '../styles/customersTable.module.css';
// import data from '../Data.json';

export default function CustomersTable() {
  const [sortedData, setSortedData] = useState([]);
  const [sortBy, setSortBy] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCriteria, setSearchCriteria] = useState('name');
  const [filteredData, setFilteredData] = useState([]); // New state for filtered data

  const MAIN_URL = "localhost:8000"

  // Create a fetch request function
  const fetchData = async () => {
    try {
      const response = await axios.get(`http://${MAIN_URL}/api/customers`);
      const customers = response.data;
      setSortedData(customers);
      setFilteredData(customers);
    } catch (error) {
      console.error(error);
    }
  };


  // Call the fetchData function on component mount to display in the table
  useEffect(() => {
    fetchData();
  }, []);

  // Function to sort the displayed data
  const sortByCriteria = (criteria, direction) => {
    let sortedByCriteria;

    switch (criteria) {
      case 'name':
        sortedByCriteria = [...filteredData].sort((a, b) =>
          a.firstName.localeCompare(b.firstName)
        );
        break;
      case 'time':
        sortedByCriteria = [...filteredData].sort((a, b) => a.id - b.id);
        break;
      case 'book':
        sortedByCriteria = [...filteredData].sort((a, b) =>
          a.bookBought.localeCompare(b.bookBought)
        );
        break;
      case 'rating':
        sortedByCriteria = [...filteredData].sort((a, b) =>
          a.starRating.localeCompare(b.starRating)
        );
        break;
      case 'email':
        sortedByCriteria = [...filteredData].sort((a, b) =>
          a.email.localeCompare(b.email)
        );
        break;
      default:
        sortedByCriteria = filteredData;
        break;
    }

    if (direction === 'desc') {
      sortedByCriteria.reverse();
    }

    setSortedData(sortedByCriteria);
  };

  // Event handler for the sort by column click
  const handleSortByColumn = (criteria) => {
    const newSortDirection = sortBy === `${criteria}-asc` ? 'desc' : 'asc';

    sortByCriteria(criteria, newSortDirection);
    setSortBy(`${criteria}-${newSortDirection}`);
  };

  // Event handler for the search term input
  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Event handler for the search criteria selector
  const handleSearchCriteriaChange = (event) => {
    setSearchCriteria(event.target.value);
  };

  // Apply search criteria to filter the data
  const applySearchCriteria = () => {
    const filteredData = sortedData.filter((customer) => {
      // Make it case insensitive by converting to lower case
      const searchTermLowerCase = searchTerm.toLowerCase();
      const customerValue = customer[searchCriteria]?.toLowerCase() || '';

      if (searchCriteria === 'name') {
        const fullName = `${customer.firstName} ${customer.lastName}`;
        return fullName.toLowerCase().includes(searchTermLowerCase);
      }

      return customerValue.includes(searchTermLowerCase);
    });

    // Update the filtered data state
    setFilteredData(filteredData);

    if (sortBy) {
      // Sort the filtered data
      sortByCriteria(sortBy, filteredData);
    } else {
      setSortedData(filteredData);
    }
  };


  // handler for the delete entry function
  const handleDelete = () => {

  }

  // Apply search criteria when searchTerm or searchCriteria change
  useEffect(() => {
    applySearchCriteria();
  }, [searchTerm, searchCriteria]);

  return (
    <div className={styles.customersTable}>
      <h2>Customers Table</h2>
      <div className={styles.actionBarContainer}>
        <div className={styles.actionBar}>
          <select value={searchCriteria} onChange={handleSearchCriteriaChange}>
            <option value='name'>Search by name ↓</option>
            <option value='bookBought'>Search by book ↓</option>
            <option value='email'>Search by email ↓</option>
          </select>
          <input
            type='text'
            placeholder='Search...'
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th onClick={() => handleSortByColumn('time')}>
              Date {sortBy === 'time-asc' && <span> ↓</span>}
              {sortBy === 'time-desc' && <span> ↑</span>}
            </th>
            <th onClick={() => handleSortByColumn('name')}>
              Name {sortBy === 'name-asc' && <span> ↓</span>}
              {sortBy === 'name-desc' && <span> ↑</span>}
            </th>
            <th onClick={() => handleSortByColumn('email')}>
              Email {sortBy === 'email-asc' && <span> ↓</span>}
              {sortBy === 'email-desc' && <span> ↑</span>}
            </th>
            <th onClick={() => handleSortByColumn('book')}>
              Book {sortBy === 'book-asc' && <span> ↓</span>}
              {sortBy === 'book-desc' && <span> ↑</span>}
            </th>
            {/* <th className={styles.edit} onClick={() => handleEdit()}>
              edit
            </th> */}
            <th className={styles.delete} onClick={() => handleDelete()}>
              Delete
            </th>
          </tr>
        </thead>
        <tbody>
            {sortedData.map((customer) => (
              <tr key={customer.id}>
                <td>{new Date(customer.id).toLocaleDateString()}</td>
                <td>{`${customer.firstName} ${customer.lastName}`}</td>
                <td>{customer.email}</td>
                <td>{customer.bookBought}</td>
                {/* <td>✏️</td> */}
                <td className={styles.deleteButton}>
                  <span  role="img" aria-label="delete">
                    🗑
                  </span>
                </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
