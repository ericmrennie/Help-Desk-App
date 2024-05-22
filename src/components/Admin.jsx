import React, { useState, useEffect } from "react";
import TicketSummary from "./TicketSummary.jsx"
import TicketModal from "./TicketModal.jsx";
import { Link } from 'react-router-dom';
import api from '../utils/api.js';

export default function Admin() {
    const[tickets, setTickets] = useState([]);
    const[selectedTicket, setSelectedTicket] = useState(null);

    // fetch ticket data from backend API when component mounts
    useEffect(() => {
        fetchTickets();
    }, []);
    
    // Function to fetch ticket data from backend API
    const fetchTickets = async () => {
        try {
            const data = await api.fetchTickets();
            setTickets(data);
        } catch (error) {
            console.error('Error fetching tickets:', error);
        }
    };

    // Function to update ticket status
    const handleUpdateTicket = async (ticketId, newStatus) => {
        try {
            const data = await api.updateTicketStatus(ticketId, newStatus)
            console.log('Ticket status updated successfully:', data);
            setTickets(prevTickets => prevTickets.map(ticket => 
                ticket._id === data._id ? {...ticket, status: data.status} : ticket));
                return data;
        } catch (error) {
            console.error('Error updating ticket status:', error);
        }
    };

    // Function to respond to a ticket
    const respond = async (ticketId, responseMessage) => {
        try {
            const data = await api.respondToTicket(ticketId, responseMessage);
            console.log('Response added to ticket successfully:', data);
            console.log('Would normally send email here with body: ', responseMessage);
        } catch (error) {
            console.error('Error responding to ticket:', error);
        }
    };

    const openModal = (ticket) => {
        setSelectedTicket(ticket);
    }

    const closeModal = () => {
        setSelectedTicket(null);
    }

    // Make new tickets appear first
    const reversedTickets = [...tickets].reverse();

    return(
        <div className="admin-page">
            <h1 className="ticket-summaries-title">Ticket Summaries</h1>
            <Link to='/'>
                <button className="main-page-button">Go to Main Page</button>
            </Link>
            <div>
                {reversedTickets.map(ticket => (
                    <div key={ticket._id}>
                        <TicketSummary
                            ticket={ticket}
                            onOpenModal={openModal}
                        />
                    </div>
                ))}
            </div>
            {selectedTicket && (
                <TicketModal 
                    ticket={selectedTicket} 
                    onClose={closeModal} 
                    onUpdateStatus={handleUpdateTicket}
                    onRespond={respond}
                    />
            )}
        </div>
    );
}