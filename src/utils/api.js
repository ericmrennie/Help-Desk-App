const BASE_URL = process.env.BASE_URL;

const api = {
    // Function to fetch ticket data from backend API
    fetchTickets : async () => {
        try {
            const response = await fetch(`${BASE_URL}`);
            if (response.ok) {
                const data = await response.json();
                setTickets(data);
            } else {
                console.error('Failed to fetch tickets');
            }
        } catch (error) {
            console.error('Error fetching tickets:', error);
        }
    },

    // Function to update ticket status
    updateTicketStatus: async (ticketId, newStatus) => {
        try {
            const response = await fetch(`${BASE_URL}/${ticketId}/status`, {
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
    },

    // Function to update respond to ticket
} 

export default api;


