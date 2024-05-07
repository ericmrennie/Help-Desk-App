const express = require('express');
const router = express.Router();
const { createTicket, getTickets, updateTicket, handleResponse } = require('../controllers/ticketController');

// create new ticket
router.post('/', createTicket, (req, res) => {
    console.log('Hello from createTicket route');
    return res.status(200).json(res.locals.ticket);
});

// retrieve tickets
router.get('/', getTickets, (req, res) => {
    console.log('Hello from getTickets route');
    return res.status(200).json(res.locals.tickets);
});

// update the ticket
router.patch('/:_id/status', updateTicket, (req, res) => {
    console.log('Hello from updateTicket route')
    return res.status(200).json(res.locals.ticket)
});

// respond to the ticket
router.patch('/:_id/response', handleResponse, (req, res) => {
    console.log('Hello from response route');
    return res.status(200).json(res.locals.response);
});

module.exports = router;
