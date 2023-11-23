import Link from "next/link";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import HStack from "./HStack";
import VStack from "./VStack";

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-50">
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4  p-4 py-8">
        <VStack className="space-y-6" isFull>
          <p className="uppercase font-semibold">Company</p>

          <VStack className="space-y-2 text-xs" isFull>
            <Link href="/about_us">About Us</Link>
            <Link href="/contact_us">Contact Us</Link>
            <Link href="/">Terms of Use</Link>
            <Link href="/">Privacy</Link>
          </VStack>
        </VStack>

        <VStack className="space-y-6" isFull>
          <p className="uppercase font-semibold">Courses</p>

          <VStack className="space-y-2 text-xs" isFull>
            <Link href="/courses#software_quality_assurance">
              Software Quality Assurance
            </Link>
            <Link href="/courses#business_analysis">Business Analysis</Link>
            <Link href="/courses#software_development">
              Software Development
            </Link>
            <Link href="/courses#product_development">Product Development</Link>
            <Link href="/courses#devops">DevOps</Link>
          </VStack>
        </VStack>

        <VStack className="space-y-6" isFull>
          <p className="uppercase font-semibold">Our Services</p>

          <VStack className="space-y-2 text-xs" isFull>
            <Link href="/">Business Consultancy</Link>
            <Link href="/">Organisation Development</Link>
            <Link href="/mentoring">Mentoring</Link>
            <Link href="/">Team Training</Link>
          </VStack>
        </VStack>

        <VStack className="space-y-6" isFull>
          <p className="uppercase font-semibold">Social</p>

          <HStack className="space-x-4 text-2xl">
            <a
              href="https://www.facebook.com/profile.php?id=100083366206806"
              target="_blank"
            >
              <FaFacebook />
            </a>
            <a href="#">
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/skylink-impact/"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://twitter.com/SkylinkConsult" target="_blank">
              <FaXTwitter />
            </a>
          </HStack>

          <VStack className="gap-2">
            <p className="font-semibold">Get Skylink Latest Updates</p>
            <p className="text-sm">
              Subscribe to get our updates &amp; deals delivered to you
            </p>
            <input
              className="p-2 rounded-md text-slate-900"
              placeholder="Email Address"
            />
          </VStack>
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
