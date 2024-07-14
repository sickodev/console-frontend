import { Input } from "@/components/ui/input";
import React from "react";

const ConsoleTextArea = () => {
    return (
        <div className='h-full flex flex-col col-span-2 row-span-2 border bg-black p-1'>
            <div className='h-[92vh] overflow-y-scroll scrollbar-track '>
                {Array.from({ length: 100 }).map((_, idx) => (
                    <p key={idx + 1}>{idx + 1}</p>
                ))}
            </div>
            <div className='flex items-center space-x-1'>
                <p className='text-green-600'>{">"}</p>
                <Input className='border-none focus:outline-none active:outline-none focus-visible:ring-0 text-green-600' />
            </div>
        </div>
    );
};

export default ConsoleTextArea;
