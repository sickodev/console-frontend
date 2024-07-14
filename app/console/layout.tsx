import React from "react";

const ConsoleLayout = ({ children }: { children: React.ReactNode }) => {
    return <main className='h-full'>{children}</main>;
};

export default ConsoleLayout;
