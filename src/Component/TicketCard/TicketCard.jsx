import React from "react";
import greenDot from "../../assets/greendot.png";
import calenderIcon from "../../assets/calender.png";
import yollowDot from "../../assets/yellowdot.png";

const TicketCard = ({ ticket, onClick }) => {
//   console.log(ticket);
  return (
    <div
      onClick={onClick}
      className="box-border rounded-md shadow-[0_4px_16px_0_rgba(0,0,0,0.08)] bg-[#ffffff]"
    >
      <div className="space-y-4 p-[1.2rem]">
        <div className="flex justify-between items-center">
          <p className="text-[#001931] text-[1.2rem] font-[500] leading-[1.2rem] tracking-normal text-left font-inter ">
            {ticket.title}
          </p>
          <button
            className={`flex gap-2 items-center justify-center bg-[#94dbb6] px-4 py-2 rounded-full ${
              ticket.status === "In Progress"
                ? "bg-[#F8F3B9] text-[#9C7700]"
                : `
                ${
                  ticket.status === "Resolved"
                    ? "bg-[#b1b1b1] text-[#070707]"
                    : "bg-[#94dbb6] text-[#008a39]"
                }`
            } `}
          >
            <img
              src={ticket.status === "In Progress" ? yollowDot : greenDot}
              alt="green dot"
            />
            {ticket.status}
          </button>
        </div>
        <p className="text-[#627382] text-4 font-[400] leading-5 tracking-normal text-left font-inter">
          {ticket.description}
        </p>
        <div className="flex justify-between gap-2 items-center">
          <div className="flex flex-col md:flex-row gap-2">
            <p className="text-[#627382] text-3.5 font-[500] leading-4 tracking-normal text-left font-inter">
              #{ticket.id}
            </p>
            <p
              className={`${
                ticket.status === "In Progress"
                  ? "text-[#FEBB0C]"
                  : "text-[#f83044]"
              }  font-[500] leading-4 tracking-normal text-left font-inter`}
            >
              {ticket.priority}
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-2">
            <p className="text-[#627382] text-4 font-[400] leading-5 tracking-normal text-left font-inter">
              {ticket.customer}
            </p>
            <p className="flex gap-1 text-[#627382] text-4 font-[400] leading-5 tracking-normal text-left font-inter">
              <img
                className="text-[#627382] text-4 font-[400] leading-5 tracking-normal text-left font-inter"
                src={calenderIcon}
                alt="calendar icon"
              />
              {ticket.createdAt}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketCard;
