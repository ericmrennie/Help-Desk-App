import React from 'react';

export default function Description({ handleInputChange, value }) {
    return (
        <div>
            {/* <label htmlFor="description">Description: </label> */}
            <textarea
                id="descriptionInput"
                name="description"
                placeholder='Problem Description...'
                rows={7} 
                cols={60} 
                value={value}
                onChange={handleInputChange}
            />
        </div>
    );
}
