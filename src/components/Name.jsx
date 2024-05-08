import React from 'react';

export default function Name({ handleInputChange, value }) {
    return (
        <div>
            <input
                type="text"
                id="nameInput"
                placeholder='Name*'
                name="name"
                value={value}
                onChange={handleInputChange}
            />
        </div>
    );
}
