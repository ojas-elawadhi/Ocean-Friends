import BankCardHeading from "@/Components/BankCardHeading";
import CreditCard from "@/Components/CreditCard";
import Footer from "@/Components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{
        display: "flex",
        minHeight: "100dvh",
        flexDirection: "column",
        justifyContent: "space-between",
        overflow: "clip",
      }}
    >
      <BankCardHeading />
      <Link href={`/salarycard`}>
        <CreditCard />
      </Link>
      <Footer />
    </main>
  );
}
