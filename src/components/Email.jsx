import React from 'react';

export default function Email({ handleInputChange, value }) {
    return (
        <div>
            <label htmlFor="email">Email: </label>
            <input
                type="text"
                id="emailInput"
                name="email"
                value={value}
                onChange={handleInputChange}
            />
        </div>
    );
}
