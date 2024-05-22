import React from 'react';

export default function Name({ handleInputChange, value }) {
    return (
        <input
            type="text"
            id="nameInput"
            placeholder='Name*'
            name="name"
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
