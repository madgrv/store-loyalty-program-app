import React from "react"

export default function Form() {
    const [formData, setFormData] = React.useState(
        {firstName: "",
         lastName: "",
         email: "",
         phone: "",
         bookBought: "",
         bookOfChoice: "",
         comments: "",
         starRating: ""}
    )
    
    console.log(formData) // for testing
    
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
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          bookBought: formData.bookBought,
          bookOfChoice: formData.bookOfChoice,
          comments: formData.comments,
          starRating: formData.starRating
        };
    
        // Send the formDataObject to the API
        // You can use fetch or any other library for making API requests
    
        console.log(formDataObject); // For testing purposes
      }

    return (
        <form className="form" onSubmit={handleSubmit}>
            <fieldset>
                <legend className="legend">Customer details</legend>
                <div className="form-row">
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
                <div className="form-row">    
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
                <legend className="legend">Book info</legend>
                <div className="form-row">    
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
                <div className="form-row">
                    <input
                        type="text"
                        placeholder="Book of choice"
                        onChange={handleChange}
                        name="bookOfChoice"
                        value={formData.bookOfChoice}
                        required
                    />
                </div>
                <div className="form-row">
                    <textarea 
                        rows="4"
                        placeholder="Add your comments here"
                        onChange={handleChange}
                        name="comments"
                        value={formData.comments}
                    />
                </div>
            </fieldset>
            <button type="submit" className="form-button">Submit</button>
        </form>
    )
}