const express = require('express');
const router = express.Router();
const { createTicket, getTickets } = require('../controllers/ticketController');

// create new ticket
router.post('/', createTicket, (req, res) => {
    console.log('Hello from ticket post');
    return res.status(200).json(res.locals.player);
});

// retrieve tickets
router.get('/', getTickets, (req, res) => {
    console.log('Hello from getting all players');
    return res.status(200).json(res.locals.players);
});

module.exports = router;
