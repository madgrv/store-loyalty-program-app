import React, { useState, useEffect } from "react"
import axios from 'axios'
import styles from '../styles/form.module.css'

export default function Form() {
    // create empty array to store form object data
    // const [dataList, setDataList] = React.useState([]);
    const MAIN_URL = "localhost:8000"

    // Set initial form state
    const [formData, setFormData] = React.useState(
        {
            id: "",
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            bookBought: "",
            bookOfChoice: "",
            comments: "",
            starRating: ""
        }
    )
    


    // A function to make the POST request
    const addCustomer = async (customer) => {
        try {
          await axios.post(`http://${MAIN_URL}/api/customers`, customer);
        //   window.alert('Customer added successfully.');
        } catch (error) {
          console.error(error);
        }
    };
      
      

    // Update form state on change
    function handleChange(event) {
        const {name, value} = event.target
        //deconstructing the event.target object
        setFormData(prevFormData => {
            return {
                ...prevFormData, //spread operator to copy the previous object state
                [name]: value
            }
        })
    }



    function handleSubmit(event) {
        event.preventDefault(); // Prevents the default form submission behavior
    
        // Create the object with form data
        const formDataObject = {
            id: Date.now(), // Use the timestamp as the ID/key
            firstName: event.target.elements.firstName.value,
            lastName: event.target.elements.lastName.value,
            email: event.target.elements.email.value,
            phone: event.target.elements.phone.value,
            bookBought: event.target.elements.bookBought.value,
            bookOfChoice: event.target.elements.bookOfChoice.value,
            comments: event.target.elements.comments.value,
            starRating: event.target.elements.starRating.value
        };
    
        // Send the formDataObject to the API
        addCustomer(formDataObject);    
        
        // // Add the new data to the array
        // setDataList([...dataList, formDataObject]);
        window.alert("Submitted successfully")

        // console.log(dataList)

        // Reset the form input fields by updating the state
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            bookBought: '',
            bookOfChoice: '',
            comments: '',
            starRating: '',
        });
      }

return (
    <div className={styles.formContainer}>
      <div className={styles.blurLayer}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.window}>
            <fieldset className={`${styles.customerDetails} ${styles.formSection}`}>
              <legend className={styles.legend}>Customer details</legend>
              <div className={styles.formRow}>
                <div className={styles.formLabel}>First Name:</div>
                <input
                  type="text"
                  placeholder="First Name"
                  onChange={handleChange}
                  name="firstName"
                  value={formData.firstName}
                  aria-label="First Name"
                  required
                />
                <div className={styles.formLabel}>Last Name:</div>
                <input
                  type="text"
                  placeholder="Last Name"
                  onChange={handleChange}
                  name="lastName"
                  value={formData.lastName}
                  aria-label="Last Name"
                  required
                />
              </div>
              <div className={styles.formRow}>
                <div className={styles.formLabel}>Email:</div>
                <input
                  type="email"
                  placeholder="Email"
                  onChange={handleChange}
                  name="email"
                  value={formData.email}
                  aria-label="Email"
                  required
                />
                <div className={styles.formLabel}>Phone:</div>
                <input
                  type="text"
                  placeholder="Phone"
                  onChange={handleChange}
                  name="phone"
                  value={formData.phone}
                  aria-label="Phone"
                />
              </div>
            </fieldset>
            <fieldset className={`${styles.bookInfo} ${styles.formSection}`}>
              <legend className={styles.legend}>Book info</legend>
              <div className={`${styles.formRow} ${styles.doubleContainer}`}>
                <div className={styles.formLabel}>Purchased book:</div>
                <input
                  type="text"
                  placeholder="Purchased book"
                  onChange={handleChange}
                  name="bookBought"
                  value={formData.bookBought}
                  aria-label="Purchased book"
                  required
                />
                <div className={styles.formLabel}>Rating:</div>
                <select
                  name="starRating"
                  onChange={handleChange}
                  value={formData.starRating}
                  aria-label="Rating"
                  required
                >
                  <option value="" disabled>Select rating</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formLabel}>Book of choice:</div>
                <input
                  type="text"
                  placeholder="Book of choice"
                  onChange={handleChange}
                  name="bookOfChoice"
                  value={formData.bookOfChoice}
                  aria-label="Book of choice"
                  required
                />
              </div>
              <div className={styles.formRow}>
                <div className={styles.formLabel}>Comments:</div>
                <textarea
                  rows="4"
                  placeholder="Add your comments here"
                  onChange={handleChange}
                  name="comments"
                  value={formData.comments}
                  aria-label="Comments"
                />
              </div>
            </fieldset>
          </div>
          <button type="submit" className={styles.formButton} aria-label="Submit form">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
