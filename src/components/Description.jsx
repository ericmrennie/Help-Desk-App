import React from 'react';

export default function Description({ handleInputChange, value }) {
    return (
        <div>
            <label htmlFor="description">Description: </label>
            <input
                type="text"
                id="descriptionInput"
                name="description"
                value={value}
                onChange={handleInputChange}
            />
        </div>
    );
}
