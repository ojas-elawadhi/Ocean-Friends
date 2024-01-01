const BankCardHeading = () => {
  return (
    <div className="w-full bg-[green] px-4 pt-12 pb-10">
      <div className="flex flex-row justify-between">
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
