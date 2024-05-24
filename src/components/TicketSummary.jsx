import React from "react"

export default function TicketSummary({ ticket, onOpenModal }) {
    const { name, email, status } = ticket;

    return(
        <div className="ticket-summary">
            <div className="ticket-content">
                <p><span className="label">Name:</span> {name}</p>
                <p><span className="label">Email:</span> {email}</p>
                <p><span className="label">Status:</span> {status}</p>
            </div>
            <div className="button-container">
                <button onClick={() => onOpenModal(ticket)}>View Details</button>
            </div>
        </div>
    );
}
