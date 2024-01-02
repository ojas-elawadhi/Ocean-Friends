import React from "react";

const CreditCard = () => {
  return (
    <div>
      <div
        style={{
          width: "360px",
          height: "240px",
          backgroundColor: "#F59EAC",
          borderRadius: "16px",
          padding: "24px",
          transform: "translateX(-32px) translateY(-49px) rotate(-90deg)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            marginBottom: "24px",
          }}
        >
          <span
            style={{
              color: "#000",
              fontSize: "28px",
              fontWeight: "bold",
              lineHeight: "32px",
              letterSpacing: "2.37px",
            }}
          >
            CB
          </span>
          <span
            style={{
              color: "#000",
              fontSize: "16px",
              lineHeight: "28px",
              marginLeft: "16px",
              marginRight: "12px",
            }}
          >
            |
          </span>
          <span
            style={{
              fontWeight: "500",
              lineHeight: "32px",
              color: "#000",
              fontSize: "14px",
            }}
          >
            Universal Bank
          </span>
        </div>
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "58.7px",
              height: "49px",
              backgroundColor: "white",
              opacity: "0.30",
              borderRadius: "10px",
            }}
          ></div>
          <p>wifi img</p>
        </div>
        <p
          style={{
            color: "#000",
            fontSize: "22px",
            fontWeight: "bold",
            letterSpacing: "0.22px",
            marginTop: "20px",
          }}
        >
          5489 7452 5726 9827
        </p>
        <div
          style={{
            justifyContent: "space-between",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <p
            style={{
              marginTop: "15px",
              color: "rgba(255, 255, 255, 0.60)",
              fontSize: "14px",
              fontWeight: "normal",
            }}
          >
            04/24
          </p>
          <p style={{ marginTop: "17px" }}>master img</p>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
