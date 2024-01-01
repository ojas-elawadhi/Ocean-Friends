const BankCardHeading = () => {
  return (
    <div
      className="w-full"
      style={{
        backgroundColor: "green",
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 47,
        paddingBottom: 40,
      }}
    >
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <p className="text-white text-[32px] leading-10 tracking-[0.374px] font-bold ">
          Bank
          <br />
          Cards
        </p>
        <p>img</p>
      </div>
      <p className=" leading-[26px] tracking-[0.3px] text-[16px] font-bold mb-1 text-[#94A3D3]">
        Balance
      </p>
      <p className="leading-[26px] tracking-[0.3px] text-white text-[26px] font-bold ">
        $1235.69
      </p>
    </div>
  );
};

export default BankCardHeading;
