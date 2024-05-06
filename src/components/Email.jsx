import React, {useState} from 'react'

export default function Email() {

    // State to store the selected email
    const [email, setEmail] = useState('');

    // Function to handle changes in the email input
    const handleEmail = (event) => {
        setEmail(event.target.value);
    }

    return(
        <div>
            <label htmlFor="email">Email: </label>
            <input
                type="text"
                id="emailInput"
                name="emailInput"
                value={email}
                onChange={handleEmail}
            />
        </div>
    )
}