import React from "react";

const ConsolePage = () => {
    return (
        <main className='grid grid-cols-3 grid-rows-2 h-full gap-0.5'>
            <div className='h-full col-span-2 row-span-2 border bg-black'></div>
            <div className='h-full row-span-1 col-span-1 border bg-black'></div>
            <div className='h-full row-span-1 col-span-1 border bg-black'></div>
        </main>
    );
};

export default ConsolePage;
