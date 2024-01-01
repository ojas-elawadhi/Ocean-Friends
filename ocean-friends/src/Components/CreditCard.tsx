import React from "react";

const CreditCard = () => {
  return (
    <div>
      <div className="w-[360px] h-[240px] bg-[pink] rounded-2xl p-6 -translate-x-8 -translate-y-12 -rotate-90">
        <div className="flex flex-row items-center mb-6">
          <span className="text-[28px] font-black leading-8 tracking-[2.37px]">
            CB
          </span>
          <span className=" text-[16px] leading-7 ml-4 mr-3">|</span>
          <span className="font-500 leading-8 text-[14px]">Universal Bank</span>
        </div>
        <div className="justify-between flex flex-row">
          <div
            style={{
              width: 58.7,
              height: 49,
              backgroundColor: "rgba(255, 255, 255, 0.3)",
              borderRadius: 10,
            }}
          ></div>
          <p> wifi img</p>
        </div>
        <p
          style={{
            fontSize: 22,
            fontWeight: "900",
            letterSpacing: 0.22,
            marginTop: 20,
          }}
        >
          5489 7452 5726 9827
        </p>
        <div className="justify-between flex flex-row">
          <p
            style={{
              marginTop: 12,
              color: "rgba(255, 255, 255, 0.60)",
              fontSize: 14,
              fontWeight: "400",
            }}
          >
            04/24
          </p>
          <p style={{ marginTop: 17 }}> master img</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
