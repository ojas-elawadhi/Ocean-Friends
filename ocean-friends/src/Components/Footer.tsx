import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div
      // className="h-20 bg-blue-950 rounded-t-[48px] justify-around flex items-center"
      style={{
        height: "80px",
        backgroundColor: "#172554",
        borderTopLeftRadius: "48px",
        borderTopRightRadius: "48px",
        justifyContent: "space-around",
        alignItems: "center",
        display: "flex",
      }}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  );
};

export default Footer;
