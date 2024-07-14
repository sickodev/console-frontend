import React from "react";

export function TypographyMuted({ children }: { children: React.ReactNode }) {
    return <p className='text-sm text-muted'>{children}</p>;
}
