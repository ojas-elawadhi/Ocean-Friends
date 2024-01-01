"use client"

import BackCreditCard from "@/Components/BackCreditCard";
import CreditCard from "@/Components/CreditCard";
import SalaryCreditCard from "@/Components/SalaryCreditCard";
import Link from "next/link";
import React, { useState } from "react";

const salarycard = () => {
  const [renderSecond, setRenderSecond] = useState(false);

  const handleContinuousPress = () => {
    setRenderSecond(true);
  };

  const handleRelease = () => {
    setRenderSecond(false);
  };

  return (
    <div className="">
      <div className="p-4 flex flex-col">
        <Link href={`/`}>
          <div className="pt-2 pb-4">Back</div>
        </Link>
        <p className="text-white text-[32px] leading-10 tracking-[0.374px] font-bold">
          Salary <br />
          card
        </p>
        <div className="mt-4">
          {renderSecond ? (
            <BackCreditCard />
          ) : (
            <SalaryCreditCard
              onContinuousPress={handleContinuousPress}
              onRelease={handleRelease}
            />
          )}
        </div>
        <div className="mt-8 flex flex-row justify-between">
          <div className="flex flex-col">
            <p className=" leading-[26px] tracking-[0.3px] text-[16px] font-bold mb-2 text-[#94A3D3]">
              Balance
            </p>
            <p className="leading-[26px] tracking-[0.3px] text-white text-[26px] font-bold ">
              $1234.69
            </p>
          </div>
          <div className="flex flex-row items-center justify-center">
            <p>img1</p>
            <p>img2</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default salarycard;
