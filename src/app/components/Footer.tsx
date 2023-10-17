import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import HStack from "./HStack";
import VStack from "./VStack";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-50">
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4  p-4 py-8">
        <VStack className="space-y-6" isFull>
          <p className="uppercase font-semibold">Company</p>

          <VStack className="space-y-2 text-xs" isFull>
            <Link href="/">About Us</Link>
            <Link href="/">Resources</Link>
            <Link href="/contact_us">Contact Us</Link>
            <Link href="/">Terms of Use</Link>
            <Link href="/">Privacy</Link>
          </VStack>
        </VStack>

        <VStack className="space-y-6" isFull>
          <p className="uppercase font-semibold">Courses</p>

          <VStack className="space-y-2 text-xs" isFull>
            <Link href="/courses">Software Quality Assurance</Link>
            <Link href="/courses">Business Analysis</Link>
            <Link href="/courses">Software Development</Link>
            <Link href="/courses">Product Management</Link>
            <Link href="/courses">DevOps</Link>
          </VStack>
        </VStack>

        <VStack className="space-y-6" isFull>
          <p className="uppercase font-semibold">Our Services</p>

          <VStack className="space-y-2 text-xs" isFull>
            <Link href="/">Business Consultancy</Link>
            <Link href="/">Organisation Development</Link>
            <Link href="/">Mentoring</Link>
            <Link href="/">Team Training</Link>
          </VStack>
        </VStack>

        <VStack className="space-y-6" isFull>
          <p className="uppercase font-semibold">Social</p>

          <HStack className="space-x-4 text-2xl">
            <FaFacebook />
            <FaInstagram />
            <FaLinkedinIn />
            <FaXTwitter />
          </HStack>
        </VStack>
      </div>
      <div className="w-full p-8 bg-slate-950">
        <div className="mx-auto w-2/3 text-center">
          &copy; Skylink {new Date().getFullYear()}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
