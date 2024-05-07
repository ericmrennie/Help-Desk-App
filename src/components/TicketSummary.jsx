import React from "react"

export default function TicketSummary({ ticket, onUpdateStatus, onRespond}) {
    const { id, status, description, createdAt } = ticket;

    const handleUpdateStatus = (newStatus) => {
        // Call the onUpdateStatus function with the ticket ID and new status
        onUpdateStatus(id, newStatus);
    };

    const handleRepond = (responseMessage) => {
        // Call the onRespond function with the ticket ID and response message
        onRespond(id, responseMessage);
    };

    return(
        <div className="ticket-summary">
            <h2>Ticket ID: {id}</h2>
            <p>Status: {status}</p>
            <p>Description: {description}</p>
            <p>Created At: {createdAt}</p>
            <select value={status} onChange={(e) => handleUpdateStatus(e.target.value)}>
                <option value="new">New</option>
                <option value="in progress">In Progress</option>
                <option value="resolved">Resolved</option>
            </select>
            <div>
                <textarea placeholder="Enter response..." />
                <button onClick={() => handleRepond('Response message')}>Respond</button>
            </div>
        </div>
    );
}
