import React, { use, useState } from "react";
import TicketCard from "../TicketCard/TicketCard";

const CustomerTicket = ({ TicketPromise }) => {
  const TicketData = use(TicketPromise);
  const [selectedTicket, setSelectedTicket] = useState([]);

  console.log(selectedTicket);

  const HandleSelectTicket = (ticket) =>{
      setSelectedTicket(ticket);
  }
  return (
    <div className="w-[90%] mx-auto mb-[3rem]">
      <div className="flex flex-col md:flex-row justify-between gap-[1.5rem]">
        <div className="">
          <p className="text-[#34485a] font-[600] text-[1.5rem] leading-[1.5rem] tracking-normal text-left font-inter pb-[1rem]">
            Customer Ticket
          </p>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {TicketData.map((ticket) => (
              <TicketCard
                key={ticket.id}
                ticket={ticket}
                onClick={() => {
                  HandleSelectTicket(ticket);
                }}
              ></TicketCard>
            ))}
          </div>
        </div>
        <div className="flex flex-col">
          <div className="mb-[1.2rem]">
            <p className="text-[#34485a] font-[600] text-[1.5rem] leading-[1.5rem] tracking-normal text-left font-inter pb-[1rem]">
              Task Status
            </p>
            <div>
              <div className="border-box rounded-md shadow-[0_4px_16px_0_rgba(0,0,0,0.08)] bg-[#ffffff]">
                <div className="space-y-4 p-[1.2rem]">
                  <p className="text-[#001931] text-[1.1rem] font-[500] leading-[1.2rem] tracking-normal text-left font-inter ">
                    Payment Failed - Card Declined
                  </p>
                  <button className="bg-[#02a53b] px-3 py-1 rounded-sm w-full text-[#ffffff]">
                    Complete
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="mb-[1.2rem]">
            <p className="text-[#34485a] font-[600] text-[1.5rem] leading-[1.5rem] tracking-normal text-left font-inter pb-[1rem]">
              Resolved Task
            </p>
            <div>
              <div className="border-box rounded-md shadow-[0_4px_16px_0_rgba(0,0,0,0.08)] bg-[#ffffff]">
                <div className="space-y-4 p-[1.2rem]">
                  <p className="text-[#001931] text-[1.1rem] font-[300] leading-[1.2rem] tracking-normal text-left font-inter ">
                    Payment Failed - Card Declined
                  </p>
                  <button className="bg-[#a1a1a1] px-3 py-1 rounded-sm w-full text-[#ffffff]">
                    <del>Complete</del>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTicket;
