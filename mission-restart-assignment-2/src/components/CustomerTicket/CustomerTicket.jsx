import React, { use, useState } from "react";
import bdayayBtn from "../../assets/Vector (2).png";




const CustomerTicket = ({ fetchTicketPromises }) => {
  const ticketData = use(fetchTicketPromises);

  const [buyTicket, setBuyTicket] = useState([]);

  const handleTicket = () =>{
    console.log("clickTicket")
  }


  return (
  <div className="w-11/12 mx-auto mt-6 grid grid-cols-12 gap-6">

    {/* LEFT SIDE */}
    <div className="col-span-9 grid grid-cols-2 gap-4 cursor-pointer 8">

      {ticketData.map((ticket) => (
        <div
          key={ticket.id} onClick={handleTicket}
          className="bg-white rounded-xl shadow-sm p-5 space-y-3 hover:shadow-md transition"
        >
          <div className="flex justify-between items-start">
            <h2 className="font-semibold text-gray-800 text-sm">
              {ticket.title}
            </h2>

            <div className="flex items-center gap-2 bg-green-200 cursor-pointer text-green-700 px-3 py-1 rounded-full text-xs font-medium">
              <span className="w-2 h-2 bg-green-600 rounded-full"></span>
              Open
            </div>
            
          </div>
          <h1 className="text-sm line-clamp-1">{ticket.description}</h1>
          <div className="flex justify-between items-center space-x-2">
            <div >
                <span>{ticket.id}</span>
                <span className=" text-[#F83044] ml-4">{ticket.priority}</span>
            </div>
            <div className="flex gap-4">
            <span className="text-[#627382]">{ticket.user}</span>
            <img src={bdayayBtn} alt="" />
            <span className="text-[#627382]">{ticket.date}</span>
          </div>
          </div>
          
        </div>
        
      ))}
    </div>

    {/* RIGHT SIDE */}
    <div className="col-span-3 bg-gray-50 rounded-xl p-6">
      Right side (empty by default)
    </div>

  </div>
);
}
export default CustomerTicket;
