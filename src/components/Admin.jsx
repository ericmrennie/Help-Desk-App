import React, { useState, useEffect } from "react";
import TicketSummary from "./TicketSummary.jsx"
import { updateTicket, handleResponse } from "/Users/ericrennie/Desktop/Zealthy-FSE-Exercise/server/controllers/ticketController.js"

export default function Admin() {
    const[tickets, setTickets] = useState([]);

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

    // Function to handle updating ticket status
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
                return data;
            }
        } catch (error) {
            console.error('Error updating ticket status:', error);
        }
    };

    // Function to handle responding to a ticket
    const handleHandleResponse = async (ticketId, responseMessage) => {
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
                console.log(responseMessage);
                return data;
            }
        } catch (error) {
            console.error('Error responding to ticket:', error);
        }
    };






    return(
        <div>
            <h1>Ticket Summaries</h1>
            <div>
                {tickets.map(ticket => (
                    <TicketSummary
                        key={ticket._id}
                        ticket={ticket}
                        onUpdateStatus={handleUpdateTicket}
                        onRespond={handleHandleResponse}
                    />
                ))}
            </div>
        </div>
    );
}