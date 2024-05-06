const Ticket = require('../models/ticket.js');

async function createTicket(req, res) {
    try {
        const { name, email, description } = req.body;
        const newTicket = new Ticket({ name, email, description });
        await newTicket.save();
        res.status(201).json({ message: 'Ticket created successfully' });
    } catch (error) {
        console.error('Error creating ticket:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

async function getTickets(req, res) {
    try {
        const tickets = await Ticket.find({});
        res.locals.players = tickets;
    } catch (error) {
        console.error('Error fetching tickets:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

module.exports = { createTicket, getTickets };
