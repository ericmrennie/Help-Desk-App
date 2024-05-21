import React, { useState } from "react"

export default function TicketSummary({ ticket, onOpenModal }) {
    const { _id, name, email, description, status } = ticket;

    return(
        <div className="ticket-summary">
            <div className="row">
                <p>Name: {name}</p>
                <p>Email: {email}</p>
                <p>Description: {description}</p>
                <p>Status: {status}</p>
                <button onClick={() => onOpenModal(ticket)}>View Details</button>
            </div>
        </div>
    );
}
