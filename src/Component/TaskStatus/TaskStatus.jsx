import React from "react";

const TaskStatus = ({ TSticket, onComplete }) => {
  // console.log(TSticket);
  return (
    <div className="border-box rounded-md shadow-[0_4px_16px_0_rgba(0,0,0,0.08)] bg-[#ffffff]">
      <div className="space-y-4 p-[1.2rem]">
        <p className="text-[#001931] text-[1.1rem] font-[500] leading-[1.2rem] tracking-normal text-left font-inter ">
          {TSticket.title}
        </p>
        <button
          onClick={() => {
            if (typeof onComplete === "function") onComplete();
          }}
          className="bg-[#02a53b] px-3 py-1 rounded-sm w-full text-[#ffffff]"
        >
          Complete
        </button>
      </div>
    </div>
  );
};

export default TaskStatus;
