import React, { useState, useEffect } from "react";
import '../styles/ticketModal.scss'

export default function TicketModal({ ticket, onClose, onUpdateStatus, onRespond }) {
    const [selectedStatus, setSelectedStatus] = useState(ticket.status);
    const [responseMessage, setResponseMessage] = useState(ticket.response || '');

    // Update selectedStatus when ticket prop changes
    useEffect(() => {
        setSelectedStatus(ticket.status);
    }, [ticket]);

    const handleUpdateStatus = (newStatus) => {
        console.log("Ticket ID of ticket we are updating:", ticket._id);
        console.log(ticket._id, newStatus);
        onUpdateStatus(ticket._id, newStatus);
        setSelectedStatus(newStatus);
    };

    const handleRespond = () => {
        onRespond(ticket._id, responseMessage);
        setResponseMessage('');
    };
    
    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <h2>Ticket Details</h2>
                <p><strong>Name:</strong> {ticket.name}</p>
                <p><strong>Email:</strong> {ticket.email}</p>
                <div className="status-and-selector">
                    <label htmlFor="statusSelect">Status: </label>
                    <select
                        id="statusSelect"
                        value={selectedStatus}
                        onChange={(e) => handleUpdateStatus(e.target.value)}
                    >
                        <option value="new">New</option>
                        <option value="in progress">In Progress</option>
                        <option value="resolved">Resolved</option>
                    </select>
                </div>
                <p>Description: {ticket.description}</p>
                <div className="response-wrapper">
                    <textarea
                        value={responseMessage}
                        onChange={(e) => setResponseMessage(e.target.value)}
                        placeholder="Enter response..."
                        rows={7}
                        cols={60}
                    />
                    <button onClick={handleRespond}>Respond</button>
                </div>
                <button onClick={onClose}>Close</button>
            </div>
        </div>
    );
}
