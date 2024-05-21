import React, { useState, useEffect } from "react";
import TicketSummary from "./TicketSummary.jsx"
import TicketModal from "./TicketModal.jsx";
import { Link } from 'react-router-dom';
import utils from '../utils/api.js';

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
            const response = await fetch('http://localhost:5050/api/tickets');
            if (response.ok) {
            const data = await response.json();
            setTickets(data);
            } else {
                console.error('Failed to fetch tickets');
            }
        } catch (error) {
            console.error('Error fetching tickets:', error);
        }
    };

    // Function to update ticket status
    const handleUpdateTicket = async (ticketId, newStatus) => {
        try {
            const response = await fetch(`http://localhost:5050/api/tickets/:${ticketId}/status`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: newStatus }),
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Ticket status updated successfully:', data);
                setTickets(prevTickets => prevTickets.map(ticket => 
                    ticket._id === data._id ? {...ticket, status: data.status} : ticket));
                return data;
            }
        } catch (error) {
            console.error('Error updating ticket status:', error);
        }
    };

    // Function to respond to a ticket
    const respond = async (ticketId, responseMessage) => {
        try {
            const response = await fetch(`http://localhost:5050/api/tickets/:${ticketId}/response`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ response: responseMessage }),
            });
            if (response.ok) {
                const data = await response.json();
                console.log('Response added to ticket successfully:', data);
                console.log('Would normally send email here with body: ', responseMessage);
                return data;
            }
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
                            onUpdateStatus={handleUpdateTicket}
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