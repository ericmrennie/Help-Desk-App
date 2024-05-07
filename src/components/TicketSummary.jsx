import React from "react"

export default function TicketSummary({ ticket, onUpdateStatus, onRespond}) {
    const { _id, name, email, status, description, response } = ticket;

    const handleUpdateStatus = (newStatus) => {
        // Call the onUpdateStatus function with the ticket ID and new status
        onUpdateStatus(_id, newStatus);
    };

    const handleRespond = () => {
        const responseMessage = document.getElementById('responseTextarea').value;
        // Call the onRespond function with the ticket ID and response message
        onRespond(_id, responseMessage);
    };

    return(
        <div className="ticket-summary">
            <h2>Ticket ID: {_id}</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Status: {status}</p>
            <p>Description: {description}</p>
            <select value={status} onChange={(e) => handleUpdateStatus(e.target.value)}>
                <option value="new">New</option>
                <option value="in progress">In Progress</option>
                <option value="resolved">Resolved</option>
            </select>
            <div>
                <textarea id="responseTextarea" placeholder="Enter response..." />
                <button onClick={handleRespond}>Respond</button>
            </div>
        </div>
    );
}
