import React, { useState, useEffect } from 'react';
import styles from '../styles/customersTable.module.css';
import data from '../Data.json';

export default function CustomersTable() {
  const [sortedData, setSortedData] = useState(data);
  const [sortBy, setSortBy] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [searchCriteria, setSearchCriteria] = useState('name');
  const [filteredData, setFilteredData] = useState(data); // New state for filtered data

  // Event handler for the 'sort by' selector
  const handleSortByChange = (event) => {
    setSortBy(event.target.value);
    // Pass filteredData as well
    sortByCriteria(event.target.value, filteredData); 
  };

  // Function to sort the displayed data
  const sortByCriteria = (criteria, dataToSort) => { // Accept data as a parameter
    let sortedByCriteria;

    switch (criteria) {
      case 'name':
        sortedByCriteria = [...dataToSort].sort((a, b) =>
          a.firstName.localeCompare(b.firstName)
        );
        break;
      case 'time':
        sortedByCriteria = [...dataToSort].sort((a, b) => a.id - b.id);
        break;
      case 'book':
        sortedByCriteria = [...dataToSort].sort((a, b) =>
          a.bookBought.localeCompare(b.bookBought)
        );
        break;
      case 'rating':
        sortedByCriteria = [...dataToSort].sort((a, b) =>
          a.starRating.localeCompare(b.starRating)
        );
        break;
      default:
        sortedByCriteria = dataToSort;
        break;
    }

    setSortedData(sortedByCriteria);
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
    const filteredData = data.filter((customer) => {
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

  // Apply search criteria when searchTerm or searchCriteria change
  useEffect(() => {
    applySearchCriteria();
  }, [searchTerm, searchCriteria]);

  return (
    <div className={styles.customersTable}>
      <h2>Customers Table</h2>
      <div className={styles.actionBar}>
        <div className={styles.sortingSelector}>
          <label htmlFor="sortBy">Sort By:</label>
          <select id="sortBy" value={sortBy} onChange={handleSortByChange}>
            <option value="time">Time</option>
            <option value="name">Name</option>
            <option value="book">Book</option>
            <option value="rating">Rating</option>
          </select>
        </div>
        <div className={styles.searchInput}>
          <select
            value={searchCriteria}
            onChange={handleSearchCriteriaChange}
          >
            <option value="name">Name</option>
            <option value="bookBought">Book</option>
            <option value="email">Email</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Book</th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((customer) => (
            <tr key={customer.id}>
              <td>{`${customer.firstName} ${customer.lastName}`}</td>
              <td>{customer.email}</td>
              <td>{customer.bookBought}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
