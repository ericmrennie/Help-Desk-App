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
    const handleUpdateStatus = async (ticketId, newStatus) => {
        try {
        await updateTicketStatus(ticketId, newStatus);
        // Update local state to reflect the change in status
        setTickets(prevTickets =>
            prevTickets.map(ticket =>
            ticket.id === ticketId ? { ...ticket, status: newStatus } : ticket
            )
        );
        } catch (error) {
        console.error('Error updating ticket status:', error);
        }
    };

    // Function to handle responding to a ticket
    const handleRespondToTicket = async (ticketId, responseMessage) => {
        try {
        await respondToTicket(ticketId, responseMessage);
        // Optionally, fetch updated ticket data after responding to the ticket
        fetchTickets();
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
                        key={ticket.id}
                        ticket={ticket}
                        onUpdateStatus={handleUpdateStatus}
                        onRespond={handleRespondToTicket}
                    />
                ))}
            </div>
        </div>
    );
}