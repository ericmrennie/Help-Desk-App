import React, {useState} from 'react'

export default function Description() {

    // State to store the description
    const [description, setDescription] = useState('');

    // Function to handle changes in the day input
    const handleDescription = (event) => {
        setDescription(event.target.value);
    }

    return(
        <div>
            <label htmlFor="description">Description: </label>
            <input
                type="text"
                id="descriptionInput"
                name="descriptionInput"
                value={description}
                onChange={handleDescription}
            />
        </div>
    )
}