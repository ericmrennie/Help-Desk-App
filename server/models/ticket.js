const mongoose = require('mongoose');

async function connectToDb() {
  try {
    await mongoose.connect('mongodb+srv://Eric:eric@helpdesk.kvozikl.mongodb.net/?retryWrites=true&w=majority&appName=HelpDesk');
    console.log('DB connection complete');
  } catch (err) {
    console.error('Error connecting to database: ', err);
  }
}

const ticketShema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  description: { type: String, required: true },
  status: { type: String, default: 'new' },
});

const Ticket = mongoose.model('Ticket', ticketShema);

module.exports = Ticket;
