import { TypographyH4 } from "@/components/typography/h4";
import { TypographyP } from "@/components/typography/p";
import React from "react";

const ConsoleMenu = () => {
    return (
        <nav className='h-full row-span-1 col-span-1 border bg-black p-1'>
            <TypographyH4>Menu</TypographyH4>
            <hr className='border border-green-900' />
            <nav className='my-4 space-y-1 mx-4'>
                <nav className='p-2 text-center hover:bg-green-900/30 transition duration-300 animate-accordion-down cursor-default'>
                    <TypographyP>Start Guided Session</TypographyP>
                </nav>
                <nav className='p-2 text-center hover:bg-green-900/30 transition duration-300 animate-accordion-down cursor-default'>
                    <TypographyP>Load Guided Session</TypographyP>
                </nav>
                <nav className='p-2 text-center hover:bg-neutral-900/30 text-gray-800 transition duration-300 animate-accordion-down cursor-default'>
                    <TypographyP>End Guided Session</TypographyP>
                </nav>
                <nav className='p-2 text-center hover:bg-green-900/30 transition duration-300 animate-accordion-down cursor-default'>
                    <TypographyP>View Previous Sessions</TypographyP>
                </nav>
                <nav className='p-2 text-center hover:bg-green-900/30 transition duration-300 animate-accordion-down cursor-default'>
                    <TypographyP>Help</TypographyP>
                </nav>
                <nav className='p-2 text-center hover:bg-red-900/30 transition duration-300 animate-accordion-down cursor-default'>
                    <TypographyP>Log out</TypographyP>
                </nav>
            </nav>
        </nav>
    );
};

export default ConsoleMenu;
