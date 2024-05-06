const express = require('express');
const router = express.Router();
const { createTicket } = require('../controllers/ticketController');

// create new ticket
router.post('/', createTicket);

module.exports = router;
