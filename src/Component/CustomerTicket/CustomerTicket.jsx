import React, { useState, useEffect, useRef } from "react";
import TicketCard from "../TicketCard/TicketCard";
import TaskStatus from "../TaskStatus/TaskStatus";
import { toast } from "react-toastify";

const CustomerTicket = ({ onSelectedChange, onResolvedChange }) => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTicket, setSelectedTicket] = useState([]);
  const [resolvedTickets, setResolvedTickets] = useState([]);

  useEffect(() => {
    let mounted = true;
    fetch("/ticketData.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load ticket data");
        return res.json();
      })
      .then((data) => {
        if (mounted) setTickets(data || []);
      })
      .catch((err) => {
        if (mounted) setError(err.message || String(err));
      })
      .finally(() => {
        if (mounted) setLoading(false);
      });
    return () => (mounted = false);
  }, []);

  const HandleSelectTicket = (ticket) => {
    setSelectedTicket((prev) => {
      if (prev.some((t) => t.id === ticket.id)) return prev;
      return [...prev, ticket];
    });
  };

  const HandleComplete = (ticketId) => {
    setSelectedTicket((prev) => {
      const idx = prev.findIndex((t) => t.id === ticketId);
      if (idx === -1) return prev;
      const ticket = prev[idx];
      setResolvedTickets((rPrev) => [...rPrev, ticket]);
      return prev.filter((t) => t.id !== ticketId);
    });
  };

  const prevLenRef = useRef(0);
  const prevResolvedRef = useRef(0);

  useEffect(() => {
    if (selectedTicket.length > prevLenRef.current) {
      toast.success("Ticket added successfully");
      if (typeof onSelectedChange === "function")
        onSelectedChange(selectedTicket.length);
    }
    prevLenRef.current = selectedTicket.length;
  }, [selectedTicket, onSelectedChange]);

  useEffect(() => {
    if (resolvedTickets.length > prevResolvedRef.current) {
      toast.info("Ticket moved to Resolved");
      if (typeof onResolvedChange === "function")
        onResolvedChange(resolvedTickets.length);
    }
    prevResolvedRef.current = resolvedTickets.length;
  }, [resolvedTickets, onResolvedChange]);
  return (
    <div className="w-[90%] mx-auto mb-[3rem]">
      <div className="flex flex-col md:flex-row justify-between gap-[1.5rem]">
        {/* Left: Ticket list */}
        <div className="w-full md:w-2/3">
          <p className="text-[#34485a] font-[600] text-[1.5rem] leading-[1.5rem] tracking-normal text-left font-inter pb-[1rem]">
            Customer Ticket
          </p>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            {loading ? (
              <p>Loading tickets...</p>
            ) : error ? (
              <p className="text-red-500">{error}</p>
            ) : (
              tickets.map((ticket) => (
                <TicketCard
                  key={ticket.id}
                  ticket={ticket}
                  onClick={() => HandleSelectTicket(ticket)}
                />
              ))
            )}
          </div>
        </div>

        {/* Right: Task status & Resolved */}
        <div className="w-full md:w-1/3 flex flex-col">
          <div className="mb-[1.2rem]">
            <p className="text-[#34485a] font-[600] text-[1.5rem] leading-[1.5rem] tracking-normal text-left font-inter pb-[1rem]">
              Task Status
            </p>
            <div className="flex flex-col gap-4">
              {selectedTicket.map((TSticket) => (
                <TaskStatus
                  key={TSticket.id}
                  TSticket={TSticket}
                  onComplete={() => HandleComplete(TSticket.id)}
                />
              ))}
            </div>
          </div>

          <div className="mb-[1.2rem]">
            <p className="text-[#34485a] font-[600] text-[1.5rem] leading-[1.5rem] tracking-normal text-left font-inter pb-[1rem]">
              Resolved Task
            </p>
            <div>
              {resolvedTickets.length === 0 ? (
                <div className="border-box rounded-md shadow-[0_4px_16px_0_rgba(0,0,0,0.08)] bg-[#ffffff]">
                  <div className="space-y-4 p-[1.2rem]">
                    <p className="text-[#001931] text-[1.1rem] font-[300] leading-[1.2rem] tracking-normal text-left font-inter ">
                      No resolved tasks
                    </p>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {resolvedTickets.map((r) => (
                    <div
                      key={r.id}
                      className="border-box rounded-md shadow-[0_4px_16px_0_rgba(0,0,0,0.08)] bg-[#ffffff]"
                    >
                      <div className="space-y-4 p-[1.2rem]">
                        <p className="text-[#001931] text-[1.1rem] font-[500] leading-[1.2rem] tracking-normal text-left font-inter ">
                          {r.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTicket;
