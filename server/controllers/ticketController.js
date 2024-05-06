const Ticket = require('../models/ticket.js');

async function createTicket(req, res) {
    try {
        const { name, email, description } = req.body;
        const newTicket = new Ticket
    }
}

