"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars } from "react-icons/fa6";

import skylinkImpactLogo from "@/app/assets/skylink_impact_logo_full.webp";
import Spacer from "./Spacer";
import Drawer from "@/app/(components)/Drawer";
import NavDropDown from "@/app/(components)/NavDropDown";

export default function Navbar() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const onClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <nav className="w-full flex items-center justify-items-center bg-slate-100 fixed z-50">
        <div className="flex items-center container p-2">
          <Link href="/" className="block">
            <Image
              className="h-12 object-contain -ml-14 lg:-ml-0"
              src={skylinkImpactLogo}
              alt="Skylink Impact logo"
            />
          </Link>
          <Spacer />
          <div className="hidden lg:flex space-x-4">
            <NavDropDown title="About Us">
              <Link href="/about_us">Who We Are</Link>
              <Link href="/about_us/meet_the_team">Meet The Team</Link>
            </NavDropDown>

            <Link href="/consulting">Consulting</Link>
            <Link href="/mentoring">Mentoring</Link>
            <Link href="/courses">Courses</Link>

            <NavDropDown title="Events">
              <Link href="/">Events</Link>
              <Link href="/">Blogs</Link>
            </NavDropDown>

            <Link href="/contact_us">Contact Us</Link>
          </div>
          <button
            className="lg:hidden text-xl border border-slate-950 p-2 rounded-md active:bg-slate-950 active:text-slate-50"
            onClick={() => setIsDrawerOpen(true)}
          >
            <FaBars />
          </button>
        </div>
      </nav>

      <Drawer isOpen={isDrawerOpen} onClose={onClose} />
    </>
  );
}
