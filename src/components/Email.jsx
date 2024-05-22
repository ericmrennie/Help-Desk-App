import React from 'react';

export default function Email({ handleInputChange, value }) {
    return (
        <div>
            <input
                type="email"
                id="emailInput"
                placeholder='Email address*'
                name="email"
                value={value}
                onChange={handleInputChange}
            />
        </div>
    );
}
