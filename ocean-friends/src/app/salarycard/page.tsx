"use client";

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
    // <div className="">
    //   <div className="p-4 flex flex-col">
    //     <Link href={`/`}>
    //       <div className="pt-2 pb-4">Back</div>
    //     </Link>
    //     <p className="text-white text-[32px] leading-10 tracking-[0.374px] font-bold">
    //       Salary <br />
    //       card
    //     </p>
    //     <div className="mt-4">
    //       {renderSecond ? (
    //         <BackCreditCard />
    //       ) : (
    //         <SalaryCreditCard
    //           onContinuousPress={handleContinuousPress}
    //           onRelease={handleRelease}
    //         />
    //       )}
    //     </div>
    //     <div className="mt-8 flex flex-row justify-between">
    //       <div className="flex flex-col">
    //         <p className=" leading-[26px] tracking-[0.3px] text-[16px] font-bold mb-2 text-[#94A3D3]">
    //           Balance
    //         </p>
    //         <p className="leading-[26px] tracking-[0.3px] text-white text-[26px] font-bold ">
    //           $1234.69
    //         </p>
    //       </div>
    //       <div className="flex flex-row items-center justify-center">
    //         <p>img1</p>
    //         <p>img2</p>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div style={{ padding: 16, display: "flex", flexDirection: "column" }}>
      <Link
        href={`/`}
        style={{ paddingTop: "8px", paddingBottom: "16px", display: "block" }}
      >
        Back
      </Link>
      <p
        style={{
          color: "white",
          fontSize: "32px",
          lineHeight: "40px",
          letterSpacing: "0.374px",
          fontWeight: "bold",
          marginTop: "16px",
          backgroundColor:"blue"
        }}
      >
        Salary <br />
        card
      </p>
      <div style={{ marginTop: "16px" }}>
        {renderSecond ? (
          <BackCreditCard />
        ) : (
          <SalaryCreditCard
            onContinuousPress={handleContinuousPress}
            onRelease={handleRelease}
          />
        )}
      </div>
      <div
        style={{
          marginTop: "32px",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          backgroundColor:"brown",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p
            style={{
              lineHeight: "26px",
              letterSpacing: "0.3px",
              fontSize: "16px",
              fontWeight: "bold",
              marginBottom: "2px",
              color: "#94A3D3",
            }}
          >
            Balance
          </p>
          <p
            style={{
              lineHeight: "26px",
              letterSpacing: "0.3px",
              color: "white",
              fontSize: "26px",
              fontWeight: "bold",
            }}
          >
            $1234.69
          </p>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <p>img1</p>
          <p>img2</p>
        </div>
      </div>
    </div>
  );
};

export default salarycard;
