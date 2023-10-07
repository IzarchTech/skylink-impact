import Image from "next/image";
import skylinkImpactLogo from "@/app/assets/skylink_impact_logo_full.webp";
import Spacer from "./Spacer";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full flex bg-slate-100 p-2 items-center fixed z-50">
      <Link href="/" className="block">
        <Image
          className="h-12 object-contain -ml-14"
          src={skylinkImpactLogo}
          alt="Skylink Impact logo"
        />
      </Link>
      <Spacer />
      <div className="hidden lg:flex space-x-4">
        <Link href="/">About Us</Link>
        <Link href="/">Consulting</Link>
        <Link href="/">Courses</Link>
        <Link href="/">Events</Link>
        <Link href="/">Contact Us</Link>
        <Link href="/">Success Stories</Link>
      </div>
    </nav>
  );
}
