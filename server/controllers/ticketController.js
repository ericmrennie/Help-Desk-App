const Ticket = require('../models/ticket.js');

async function createTicket(req, res, next) {
    try {
        const newTicket = await Ticket.create({
            name: req.body.name,
            email: req.body.email,
            description: req.body.description,
        });
        res.locals.player = newTicket;
        return next();
    } catch {
        return next({
            log: 'An error occurred wuthin the getTickets controller',
            status: 500,
            message: { err: 'An error occurred when trying to get tickets.'},
        });
    }
}

async function getTickets(req, res, next) {
    try {
        const tickets = await Ticket.find({});
        res.locals.players = tickets;
        return next();
    } catch {
        return next({
            log: 'An error occurred wuthin the getTickets controller',
            status: 500,
            message: { err: 'An error occurred when trying to get tickets.'},
        });
    }
};

module.exports = { createTicket, getTickets };
