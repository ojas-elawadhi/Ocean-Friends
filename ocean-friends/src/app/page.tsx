import BankCardHeading from "@/Components/BankCardHeading";
import CreditCard from "@/Components/CreditCard";
import Footer from "@/Components/Footer";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col justify-between overflow-clip">
      <BankCardHeading />
      <Link href={`/salarycard`}>
        <CreditCard />
      </Link>
      <Footer />
    </main>
  );
}
