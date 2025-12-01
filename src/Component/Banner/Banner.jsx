import React from "react";
import bgVector1 from "../../assets/vector1.png";

const Banner = () => {
  return (
    <div className="w-[90%] mx-auto mb-[3rem]">
      <div className="flex gap-8 justify-center ">
        <div
          className="relative rounded-[10px] p-8 w-full overflow-hidden"
          style={{
            minHeight: 140,
            backgroundImage: `url(${bgVector1}), linear-gradient(to right, #632EE3, #9F62F2)`,
            backgroundPosition: `left center`,
            backgroundSize: `50% 100%, cover`,
            backgroundRepeat: `no-repeat`,
          }}
        >
          <div
            className="absolute top-0 right-0 h-full w-full bg-no-repeat"
            style={{
              backgroundImage: `url(${bgVector1})`,
              backgroundPosition: `left center`,
              backgroundSize: `50% 100%, cover`,
              transform: "scaleX(-1)",
            }}
          ></div>
          <h2 className="text-[#ffffff] text-2xl font-semibold leading-[26px] text-center tracking-[0] font-inter">
            In-Progress
          </h2>
          <h1 className="text-[#ffffff] text-5xl font-semibold leading-[73px] text-center">
            0
          </h1>
        </div>
        <div
          className="relative rounded-[10px] p-8 w-full overflow-hidden"
          style={{
            minHeight: 140,
            backgroundImage: `url(${bgVector1}), linear-gradient(to right, #54CF68,#00827A )`,
            backgroundPosition: `left center`,
            backgroundSize: `50% 100%, cover`,
            backgroundRepeat: `no-repeat`,
          }}
        >
          <div
            className="absolute top-0 right-0 h-full w-full bg-no-repeat"
            style={{
              backgroundImage: `url(${bgVector1})`,
              backgroundPosition: `left center`,
              backgroundSize: `50% 100%, cover`,
              transform: "scaleX(-1)",
            }}
          ></div>
          <h2 className="text-[#ffffff] text-2xl font-semibold leading-[26px] text-center tracking-[0] font-inter">
            Resolved
          </h2>
          <h1 className="text-[#ffffff] text-5xl font-semibold leading-[73px] text-center">
            0
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Banner;
