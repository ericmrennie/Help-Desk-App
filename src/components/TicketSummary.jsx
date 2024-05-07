import React, { useState } from "react"

export default function TicketSummary({ ticket, onUpdateStatus, onRespond}) {
    const { _id, name, email, status, description } = ticket;

    // State to hold the selected status
    const [selectedStatus, setSelectedStatus] = useState(status);

    const handleUpdateStatus = (newStatus) => {
        // Call the onUpdateStatus function with the ticket ID and new status
        onUpdateStatus(_id, newStatus);
        // Update the selected status in the state
        setSelectedStatus(newStatus);
    };

    const handleRespond = () => {
        const responseMessage = document.getElementById('responseTextarea').value;
        // Call the onRespond function with the ticket ID and response message
        onRespond(_id, responseMessage);
    };

    return(
        <div className="ticket-summary">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Description: {description}</p>
            <div>
                <label htmlFor="statusSelect">Status: </label>
                <select id="statusSelect" value={selectedStatus} onChange={(e) => handleUpdateStatus(e.target.value)}>
                    <option value="new">New</option>
                    <option value="in progress">In Progress</option>
                    <option value="resolved">Resolved</option>
                </select>
            </div>
            <div>
                <textarea id="responseTextarea" placeholder="Enter response..." />
                <button onClick={(e) => handleRespond(e.target.value)}>Respond</button>
            </div>
        </div>
    );
}
