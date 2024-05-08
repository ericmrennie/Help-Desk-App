const Ticket = require('../models/ticket.js');

// create ticket controller
async function createTicket(req, res, next) {
    try {
        const newTicket = await Ticket.create({
            name: req.body.name,
            email: req.body.email,
            description: req.body.description,
        });
        res.locals.ticket = newTicket;
        return next();
    } catch {
        return next({
            log: 'An error occurred wuthin the getTickets controller',
            status: 404,
            message: { err: 'An error occurred when trying to get tickets.'},
        });
    }
}

//get tickets controller
async function getTickets(req, res, next) {
    try {
        const tickets = await Ticket.find({});
        res.locals.tickets = tickets;
        return next();
    } catch {
        return next({
            log: 'An error occurred wuthin the getTickets controller',
            status: 404,
            message: { err: 'An error occurred when trying to get tickets.'},
        });
    }
};

// update tickets controller
async function updateTicket(req, res, next) {
    try{
        const updatedTicket = await Ticket.findOneAndUpdate(
            { id: req.params.id },
            { status: req.body.status },
            { new: true }
        );

        res.locals.ticket = updatedTicket;
        return next();
    } catch {
        return next({
            log: 'An error occurred within the updateTickets controller',
            status: 404,
            message: { err: 'An error occurred when trying to update ticket.'},
        });
    }
};

// response controller
async function handleResponse(req, res, next) {
    try{
        const handledResponse = await Ticket.findOneAndUpdate(
            { id: req.params.id },
            { response: req.body.response },
            { new: true }
        );

        res.locals.response = handledResponse;
        return next();
    } catch {
        return next({
            log: 'An error occurred wuthin the handleResponse controller',
            status: 404,
            message: { err: 'An error occurred when trying to respond to ticket.'},
        });
    }
}

module.exports = { createTicket, getTickets, updateTicket, handleResponse };
