import ConsoleMenu from "@/components/shared/console/console-menu";
import Skills from "@/components/shared/console/skills";
import ConsoleTextArea from "@/components/shared/console/text-area";
import React from "react";

const ConsolePage = () => {
    return (
        <main className='grid grid-cols-3 grid-rows-2 h-full gap-0.5'>
            <ConsoleTextArea />
            <ConsoleMenu />
            <Skills />
        </main>
    );
};

export default ConsolePage;
