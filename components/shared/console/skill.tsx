"use client";
import { TypographyP } from "@/components/typography/p";
import { DangerProgress } from "@/components/ui/danger-progress";
import { Progress } from "@/components/ui/progress";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import React from "react";
type SkillProps = {
    name: string;
    description: string;
    points: number;
    dangerous: boolean;
};
const Skill = ({ name, description, points, dangerous }: SkillProps) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                    <div
                        className={cn(
                            dangerous ? "text-red-700" : "text-green-700",
                            "flex items-center justify-between"
                        )}
                    >
                        <p className='w-1/3'>{name}</p>
                        {!dangerous ? (
                            <Progress
                                value={points}
                                className='hidden md:block w-1/2'
                            />
                        ) : (
                            <DangerProgress
                                value={points}
                                className='hidden md:block w-1/2'
                            />
                        )}

                        <p className='w-1/6 text-right'>{points}</p>
                    </div>
                </TooltipTrigger>
                <TooltipContent
                    className={cn(
                        dangerous ? "border-red-700" : "border-green-700",
                        "w-1/2 bg-black/80 text-primary border-2 rounded-none"
                    )}
                >
                    <TypographyP>{description}</TypographyP>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default Skill;
