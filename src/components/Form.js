import React, { useState, useEffect } from "react"
import axios from 'axios'
import styles from '../styles/form.module.css'

export default function Form() {
    // create empty array to store form object data
    const [dataList, setDataList] = React.useState([]);

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
    


    // // A function to make a GET request to the server
    // const fetchCustomers = async () => {
    //     try {
    //       const response = await axios.get('/api/customers');
    //       const customers = response.data;
    //       setSortedData(customers);
    //     } catch (error) {
    //       console.error(error);
    //       // Handle error
    //     }
    // };

    // // Call the fetchCustomers function when the component mounts
    // useEffect(() => {
    //     fetchCustomers();
    // }, []);



    // A function to make the POST request
    const addCustomer = async (customer) => {
        try {
          await axios.post('/api/customers', customer);
        //   fetchCustomers(); // Refresh customer data after successful addition
          window.alert('Customer added successfully.');
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
        
        // Add the new data to the array
        setDataList([...dataList, formDataObject]);
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
        <div>
            <form className={styles.form} onSubmit={handleSubmit}>
                <fieldset>
                    <legend className={styles.legend}>Customer details</legend>
                    <div className={styles.formRow}>
                        <input
                            type="text"
                            placeholder="First Name"
                            onChange={handleChange}
                            name="firstName"
                            value={formData.firstName} //receives value from the changed state of formData
                            required
                        />
                        <input
                            type="text"
                            placeholder="Last Name"
                            onChange={handleChange}
                            name="lastName"
                            value={formData.lastName}
                            required
                        />
                    </div>
                    <div className={styles.formRow}>    
                        <input
                            type="email"
                            placeholder="Email"
                            onChange={handleChange}
                            name="email"
                            value={formData.email}
                            required
                        />
                        <input
                            type="text"
                            placeholder="phone"
                            onChange={handleChange}
                            name="phone"
                            value={formData.phone}
                        />
                    </div>
                </fieldset>
                <fieldset>
                    <legend className={styles.legend}>Book info</legend>
                    <div className={styles.formRow}>    
                        <input
                            type="text"
                            placeholder="Last book bought"
                            onChange={handleChange}
                            name="bookBought"
                            value={formData.bookBought}
                            required
                        />
                        <label htmlFor="starRating">Rating:</label>
                        <select 
                            id="starRating"
                            name="starRating"
                            onChange={handleChange}
                            value={formData.starRating}
                            required
                        >Rating
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className={styles.formRow}>
                        <input
                            type="text"
                            placeholder="Book of choice"
                            onChange={handleChange}
                            name="bookOfChoice"
                            value={formData.bookOfChoice}
                            required
                        />
                    </div>
                    <div className={styles.formRow}>
                        <textarea 
                            rows="4"
                            placeholder="Add your comments here"
                            onChange={handleChange}
                            name="comments"
                            value={formData.comments}
                        />
                    </div>
                </fieldset>
                <button type="submit" className={styles.formButton}>Submit</button>
            </form>
        </div>
    )
}