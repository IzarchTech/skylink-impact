import VStack from "@/app/components/VStack";
import HStack from "@/app/components/HStack";
import Spacer from "@/app/components/Spacer";
import {FaTimes} from "react-icons/fa";
import Link from "next/link";
import NavDropDown from "@/app/components/NavDropDown";

export default function Drawer({isOpen, onClose}: { isOpen: boolean, onClose: () => void }) {
    if (!isOpen) return null;
    return (
        <>
            <div className="inset-0 fixed transition-opacity bg-opacity-75 bg-black z-[1400]"
                 onClick={onClose}/>
            <div className="fixed right-0 top-0 bottom-0 bg-slate-50 w-[75dvw] z-[1400]">
                <VStack>
                    <HStack>
                        <Spacer/>
                        <button
                            className="lg:hidden text-xl p-2 rounded-md active:bg-slate-950 active:text-slate-50"
                            onClick={onClose}>
                            <FaTimes/>
                        </button>
                    </HStack>
                    <VStack className="px-4 gap-4">
                        <NavDropDown title="About Us">
                            <Link onClick={onClose} href="/">Who We Are</Link>
                            <Link onClick={onClose} href="/">Our Services</Link>
                            <Link onClick={onClose} href="/">Meet The Team</Link>
                        </NavDropDown>
                        <Link onClick={onClose} href="/consulting">Consulting</Link>
                        <Link onClick={onClose} href="/courses">Courses</Link>
                        <NavDropDown title="Events">
                            <Link onClick={onClose} href="/">Events</Link>
                            <Link onClick={onClose} href="/">Blogs</Link>
                            <Link onClick={onClose} href="/">Job Link</Link>
                        </NavDropDown>
                        <Link onClick={onClose} href="/contact_us">Contact Us</Link>
                        <Link onClick={onClose} href="/">Mentoring</Link>
                    </VStack>
                </VStack>
            </div>
        </>
    );
}