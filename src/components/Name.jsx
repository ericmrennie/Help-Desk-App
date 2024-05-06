import React from 'react';

export default function Name({ handleInputChange, value }) {
    return (
        <div>
            <label htmlFor="name">Name: </label>
            <input
                type="text"
                id="nameInput"
                name="name"
                value={value}
                onChange={handleInputChange}
            />
        </div>
    );
}
