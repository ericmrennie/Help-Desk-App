import React, { useState } from 'react'
import Name from './Name.jsx'
import Email from './Email.jsx'
import Description from './Description.jsx'
import Snackbar from './Snackbar.jsx'
import '../styles/main.scss'
import { Link } from 'react-router-dom';

export default function MainPage() {

    // state for form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        description: '',
    });

    // event handler for setForm data
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    // state for snackbar
    const [snackbarKey, setSnackbarKey] = useState(0);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarType, setSnackbarType] = useState('');

    // submit formData to database
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
                setSnackbarMessage('Ticket submitted successfully!');
                setSnackbarType('success');
            } else {
                setSnackbarMessage('Ticket submission failed.');
                setSnackbarType('error');
                console.error('Failed to submit ticket');
            }
            setSnackbarKey((prevKey) => prevKey + 1);
        } catch (error) {
            console.error('Error submitting ticket:', error);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="main-page-form">
                <h1 className="help-desk-title">Help Desk</h1>
                <Name handleInputChange={handleInputChange} value={formData.name} />
                <Email handleInputChange={handleInputChange} value={formData.email} />
                <Description handleInputChange={handleInputChange} value={formData.description} />
                <button type="submit" className="submit-button">Submit</button>
                <Link to='/admin'>
                    <button className="admin-page-button">Go to Admin Page</button>
                </Link>
            </form>
            <Snackbar key={snackbarKey} message={snackbarMessage} show={true} type={snackbarType}/>
        </div>
    );
};
