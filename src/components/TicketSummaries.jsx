import React from "react";
import TicketSummary from "./TicketSummary.jsx";
import TicketModal from "./TicketModal.jsx";

export default function TicketSummaries({
    tickets,
    openModal,
    handleUpdateTicket,
    respond,
    selectedTicket,
    closeModal,
}) {
    const reversedTickets = [...tickets].reverse();

    return (
        <div>
            {reversedTickets.map(ticket => (
                <div key={ticket._id}>
                    <TicketSummary
                        ticket={ticket}
                        onOpenModal={openModal}
                    />
                </div>
            ))}
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
