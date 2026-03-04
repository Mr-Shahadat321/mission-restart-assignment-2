import React, { use } from 'react';

const CustomerTicket = ({fetchTicketPromises}) => {
    const ticketData = use(fetchTicketPromises);
    
    return (
        <div>
            ticketData.map(ticket => )
        </div>
    );
};

export default CustomerTicket;