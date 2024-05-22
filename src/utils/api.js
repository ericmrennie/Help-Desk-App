const BASE_URL = process.env.BASE_URL;

const api = {
    // Function to post ticket to database
    submitTicket: async(formData) => {
        try {
            const response = await fetch(`${BASE_URL}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                return await response.json();
            } else {
                console.error('Failed to submit ticket');
                return null;
            }
        } catch (error) {
            console.error('Error submitting ticket:', error);
            return null;
        }
    },

    // Function to fetch ticket data from backend API
    fetchTickets: async () => {
        try {
            const response = await fetch(`${BASE_URL}`);
            if (response.ok) {
                const data = await response.json();
                return data;
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
                return data;
            }
        } catch (error) {
            console.error('Error updating ticket status:', error);
        }
    },

    // Function to update respond to ticket
    respondToTicket: async (ticketId, responseMessage) => {
        try {
            const response = await fetch(`${BASE_URL}/${ticketId}/response`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ response: responseMessage }),
            });
            if (response.ok) {
                const data = await response.json();
                return data;
            }
        } catch (error) {
            console.error('Error responding to ticket:', error);
        }
    },
} 

export default api;


