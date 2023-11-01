"use client";
import {ReactNode, useEffect, useRef, useState} from "react";
import VStack from "@/app/(components)/VStack";

export default function NavDropDown({children, title}: { title: string, children?: ReactNode }) {
    const [isOpen, setIsOpen] = useState(false);
    const dropDownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: Event) {
            // @ts-ignore
            if (dropDownRef.current && !dropDownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div className="relative inline-block text-left">
            <div>
                <button role="button" onClick={() => setIsOpen(cv => !cv)}>
                    {title}
                </button>
            </div>

            {isOpen && <div ref={dropDownRef}
                            className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
                            role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex={-1}>
                <div className="py-1" role="none">
                    <VStack className="gap-2 p-2">
                        {children}
                    </VStack>
                </div>
            </div>}
        </div>
    );
}