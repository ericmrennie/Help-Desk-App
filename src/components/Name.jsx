import React, {useState} from 'react'

export default function Name() {

    // State to store the selected name
    const [name, setName] = useState('');

    // Function to handle changes in the name input
    const handleName = (event) => {
        setName(event.target.value);
    }

    return(
        <div>
            <label htmlFor="name">Name: </label>
            <input
                type="text"
                id="nameInput"
                name="nameInput"
                value={name}
                onChange={handleName}
            />
        </div>
    )
}