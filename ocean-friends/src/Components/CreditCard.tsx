import React from "react";

const CreditCard = () => {
  return (
    <div>
      <div className="w-[360px] h-[240px] bg-pink-300 rounded-2xl p-6 -translate-x-8 -translate-y-12 -rotate-90">
        <div className="flex flex-row items-center mb-6">
          <span className="text-[28px] font-black leading-8 tracking-[2.37px]">
            CB
          </span>
          <span className=" text-[16px] leading-7 ml-4 mr-3">|</span>
          <span className="font-500 leading-8 text-[14px]">Universal Bank</span>
        </div>
        <div className="justify-between flex flex-row">
          <div className="w-[58.7px] h-[49px] bg-white bg-opacity-30 rounded-[10px]"></div>
          <p> wifi img</p>
        </div>
        <p className="text-[22px] font-black tracking-[0.22px] mt-5">
          5489 7452 5726 9827
        </p>
        <div className="justify-between flex flex-row">
          <p className="mt-3 text-[rgba(255, 255, 255, 0.60)] text-[14px] font-normal">
            04/24
          </p>
          <p className="mt-[17px]"> master img</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
