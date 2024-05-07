const mongoose = require('mongoose');

const ticketShema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, default: 'new' },
  response: { type: String, default: ''},
});

const Ticket = mongoose.model('Ticket', ticketShema);

module.exports = Ticket;
