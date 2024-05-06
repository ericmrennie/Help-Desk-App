import React, { useState } from 'react';
import Name from './Name.jsx';
import Email from './Email.jsx';
import Description from './Description.jsx';

export default function MainPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('http://localhost:5050/api/tickets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                console.log('Ticket submitted successfully');
                setFormData({
                    name: '',
                    email: '',
                    description: '',
                });
            } else {
                console.error('Failed to submit ticket');
            }
        } catch (error) {
            console.error('Error submitting ticket:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <Name handleInputChange={handleInputChange} value={formData.name} />
            <Email handleInputChange={handleInputChange} value={formData.email} />
            <Description handleInputChange={handleInputChange} value={formData.description} />
            <button type="submit">Submit</button>
        </form>
    );
}
