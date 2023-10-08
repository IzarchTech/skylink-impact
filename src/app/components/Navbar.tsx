"use client";
import {useState} from "react";
import Image from "next/image";
import Link from "next/link";
import {FaBars} from "react-icons/fa6";

import skylinkImpactLogo from "@/app/assets/skylink_impact_logo_full.webp";
import Spacer from "./Spacer";
import Drawer from "@/app/components/Drawer";
import NavDropDown from "@/app/components/NavDropDown";

export default function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const onClose = () => {
        setIsDrawerOpen(false);
    };

    return (
        <>
            <nav className="w-full flex bg-slate-100 p-2 items-center fixed z-50">
                <Link href="/" className="block">
                    <Image
                        className="h-12 object-contain -ml-14"
                        src={skylinkImpactLogo}
                        alt="Skylink Impact logo"
                    />
                </Link>
                <Spacer/>
                <div className="hidden lg:flex space-x-4">
                    <NavDropDown title="About Us">
                        <Link href="/">Who We Are</Link>
                        <Link href="/">Our Services</Link>
                        <Link href="/">Meet The Team</Link>
                    </NavDropDown>

                    <Link href="/">Consulting</Link>
                    <Link href="/">Courses</Link>

                    <NavDropDown title="Events">
                        <Link href="/">Events</Link>
                        <Link href="/">Blogs</Link>
                        <Link href="/">Job Link</Link>
                    </NavDropDown>

                    <Link href="/">Contact Us</Link>
                    <Link href="/">Success Stories</Link>
                </div>
                <button
                    className="lg:hidden text-xl border border-slate-950 p-2 rounded-md active:bg-slate-950 active:text-slate-50"
                    onClick={() => setIsDrawerOpen(true)}>
                    <FaBars/>
                </button>
            </nav>

            <Drawer isOpen={isDrawerOpen} onClose={onClose}/>
        </>
    );
}
