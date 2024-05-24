import React from 'react';

export default function Email({ handleInputChange, value }) {
    return (
        <input
            type="email"
            id="emailInput"
            placeholder='Email address*'
            name="email"
            value={value}
            onChange={handleInputChange}
            style={{ 
                padding: '7px', 
                borderRadius: '10px',
                margin: '0 auto',
                marginBottom: '10px',
                width: '45%',
                border: '1px outset #000'
            }}
        />
    );
}
