const BankCardHeading = () => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "green",
        padding: "48px 16px 40px",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <p
          style={{
            color: "white",
            fontSize: "32px",
            lineHeight: "40px",
            letterSpacing: "0.374px",
            fontWeight: "bold",
          }}
        >
          Bank
          <br />
          Cards
        </p>
        <p>img</p>
      </div>
      <p
        style={{
          lineHeight: "26px",
          letterSpacing: "0.3px",
          fontSize: "16px",
          fontWeight: "bold",
          marginBottom: "4px",
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
        $1235.69
      </p>
    </div>
  );
};

export default BankCardHeading;
