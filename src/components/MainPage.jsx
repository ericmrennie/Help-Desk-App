import React, { useState, useEffect } from 'react'
import Name from './Name.jsx'
import Email from './Email.jsx'
import Description from './Description.jsx'
import Snackbar from './Snackbar.jsx'
import Form from './Form.jsx'
import '../styles/main.scss'
import { Link } from 'react-router-dom';
import api from '../utils/api.js'

export default function MainPage() {

    // state for snackbar
    const [snackbarKey, setSnackbarKey] = useState(0);
    const [snackbarMessage, setSnackbarMessage] = useState('');
    const [snackbarType, setSnackbarType] = useState('');

    // Check local storage on mount
    useEffect(() => {
        const snackbarShown = localStorage.getItem('snackbarShown');
        if (snackbarShown) {
            localStorage.removeItem('snackbarShown'); // Remove the flag if it exists
        }
    }, []);


    // submit formData to database
    const handleSubmit = async (formData) => {
        try {
            const data = await api.submitTicket(formData);
            if (data) {
                setSnackbarMessage('Ticket submitted successfully!');
                setSnackbarType('success');
                console.log('Ticket data: ',data)
            } else {
                setSnackbarMessage('Ticket submission failed.');
                setSnackbarType('error');
            }
            setSnackbarKey((prevKey) => prevKey + 1);
        } catch (error) {
            setSnackbarMessage('Error submitting ticket.');
            setSnackbarType('error');
            console.error('Error submitting ticket:', error);
            setSnackbarKey((prevKey) => prevKey + 1);
        }
    };

    return (
        <div className='main-page-container'>
            <div className='main-page-form'>
            <h1 className="help-desk-title">Help Desk</h1>
            <Form initialState={{ name: '', email: '', description: '' }} onSubmit={handleSubmit}>
                <Name name="name" />
                <Email name="email" />
                <Description name="description" />
            </Form>
            <Link to='/admin'>
                <button className="admin-page-button">Go to Admin Page</button>
            </Link>
            </div>
            <Snackbar key={snackbarKey} message={snackbarMessage} show={snackbarMessage !== ''} type={snackbarType} />
        </div>
    );
};
