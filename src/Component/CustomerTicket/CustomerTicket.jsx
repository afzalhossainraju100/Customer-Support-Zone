import React from "react";
import greenDot from "../../assets/greendot.png";
import calenderIcon from "../../assets/calender.png";

const CustomerTicket = () => {
  return (
    <div className="w-[90%] mx-auto mb-[3rem]">
      <div className="flex flex-col md:flex-row justify-between gap-[1.5rem]">
        <div className="">
          <p className="text-[#34485a] font-[600] text-[1.5rem] leading-[1.5rem] tracking-normal text-left font-inter pb-[1rem]">
            Customer Ticket
          </p>
          <div className="border-box rounded-md shadow-[0_4px_16px_0_rgba(0,0,0,0.08)] bg-[#ffffff]">
            <div className="space-y-4 p-[1.2rem]">
              <div className="flex justify-between items-center">
                <p className="text-[#001931] text-[1.2rem] font-[500] leading-[1.2rem] tracking-normal text-left font-inter ">
                  Login Issues - Can't Access Account
                </p>
                <button className="flex gap-2 items-center justify-center bg-[#94dbb6] px-3 py-1 rounded-full text-[#008a39]">
                  <img src={greenDot} alt="green dot" />
                  Open
                </button>
              </div>
              <p className="text-[#627382] text-4 font-[400] leading-5 tracking-normal text-left font-inter">
                Customer is unable to log in to their account. They've tried
                resetting their password multiple times but still...
              </p>
              <div className="flex justify-between gap-2 items-center">
                <div className="flex gap-2">
                  <p className="text-[#627382] text-3.5 font-[500] leading-4 tracking-normal text-left font-inter">
                    #1001
                  </p>
                  <p className="text-[#f83044] font-[500] leading-4 tracking-normal text-left font-inter">
                    HIGH PRIORITY
                  </p>
                </div>
                <div className="flex gap-2">
                  <p className="text-[#627382] text-4 font-[400] leading-5 tracking-normal text-left font-inter">
                    John Smith
                  </p>
                  <p className="flex gap-1 text-[#627382] text-4 font-[400] leading-5 tracking-normal text-left font-inter">
                    <img
                      className="text-[#627382] text-4 font-[400] leading-5 tracking-normal text-left font-inter"
                      src={calenderIcon}
                      alt="calendar icon"
                    />
                    1/15/2024
                  </p>
                </div>
              </div>
            </div>
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
