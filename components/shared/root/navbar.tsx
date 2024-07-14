import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";
import TypingAnimation from "@/components/magicui/typing-animation";
import { Button } from "@/components/ui/button";
import React from "react";
import LoginDialog from "./login-dialog";

const RootNavbar = () => {
    return (
        <nav className='w-[80%]'>
            <VelocityScroll
                text=' The Barrows are Calling'
                default_velocity={5}
                className='text-green-800'
            />
            <TypingAnimation
                text="Dead Man's Console..."
                duration={300}
                className='text-green-700 md:text-5xl'
            />
            <VelocityScroll
                text=' The Barrows are Calling'
                default_velocity={5}
                className='text-green-800'
            />
            <div className='mt-4 flex justify-center'>
                <LoginDialog />
            </div>
        </nav>
    );
};

export default RootNavbar;
