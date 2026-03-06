import React, { use, useEffect } from "react";
import bdayayBtn from "../../assets/Vector (2).png";

const CustomerTicket = ({
  fetchTicketPromises,
  tickets,
  setTickets,
  setProgress,
}) => {
  const ticketData = use(fetchTicketPromises);

  useEffect(() => {
    const ticketsWithStatus = ticketData.map((ticket) => ({
      ...ticket,
      status: "open",
    }));
    setTickets(ticketsWithStatus);
  }, [ticketData, setTickets]);

  const handleTicket = (id) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === id ? { ...ticket, status: "in-progress" } : ticket,
      ),
    );

    setProgress((prev) => ({
      ...prev,
      inProgress: prev.inProgress + 1,
    }));
  };

  const handleComplete = (id) => {
    setTickets((prev) =>
      prev.map((ticket) =>
        ticket.id === id ? { ...ticket, status: "resolved" } : ticket,
      ),
    );

    setProgress((prev) => ({
      ...prev,
      inProgress: prev.inProgress - 1,
      resolved: prev.resolved + 1,
    }));
  };

  return (
    <div className="w-11/12 mx-auto mt-6 grid grid-cols-1 md:grid-cols-12 gap-6">
      {/* LEFT SIDE */}
      <div className="md:col-span-9 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {tickets
          .filter((ticket) => ticket.status === "open")
          .map((ticket) => (
            <div
              key={ticket.id}
              onClick={() => handleTicket(ticket.id)}
              className="bg-white rounded-xl shadow-sm p-5 space-y-3 hover:shadow-md transition cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <h2 className="font-semibold text-gray-800 text-sm">
                  {ticket.title}
                </h2>

                <div className="flex items-center gap-2 bg-green-200 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  <span className="w-2 h-2 bg-green-600 rounded-full"></span>
                  Open
                </div>
              </div>

              <h1 className="text-sm line-clamp-1">{ticket.description}</h1>

              <div className="flex justify-between items-center space-x-2">
                <div>
                  <span>{ticket.id}</span>
                  <span className="text-[#F83044] ml-4">{ticket.priority}</span>
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
      <div className="md:col-span-3 bg-gray-50 rounded-xl p-6 space-y-6">
        {/* IN PROGRESS */}
        <div>
          <h3 className="font-bold mb-2">Task Status</h3>

          {tickets
            .filter((ticket) => ticket.status === "in-progress")
            .map((ticket) => (
              <div key={ticket.id} className="mb-3 bg-white p-4 rounded-2xl">
                <p className="text-sm ">{ticket.title}</p>
                <button
                  onClick={() => handleComplete(ticket.id)}
                  className="mt-2 w-full bg-green-600 text-white py-2 rounded cursor-pointer"
                >
                  Complete
                </button>
              </div>
            ))}
        </div>
        <div>
          <h3 className="font-bold mb-2">Resolved Task</h3>

          {tickets
            .filter((ticket) => ticket.status === "resolved")
            .map((ticket) => (
              <p
                key={ticket.id}
                className="text-sm bg-sky-100 p-3 rounded mb-2"
              >
                {ticket.title}
              </p>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerTicket;