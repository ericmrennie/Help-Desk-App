import React from 'react';

export default function Email({ handleInputChange, value }) {
    return (
        <div>
            {/* <label htmlFor="email">Email: </label> */}
            <input
                type="text"
                id="emailInput"
                placeholder='Email address*'
                name="email"
                value={value}
                onChange={handleInputChange}
            />
        </div>
    );
}
