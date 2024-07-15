"use client";
import { TypographyH4 } from "@/components/typography/h4";
import { DangerProgress } from "@/components/ui/danger-progress";
import { Progress } from "@/components/ui/progress";
import { skills } from "@/lib/skills";
import React from "react";
import Skill from "./skill";
import { TypographyP } from "@/components/typography/p";

const Skills = () => {
    return (
        <div className='h-full row-span-1 col-span-1 border bg-black p-1 cursor-default'>
            <div className='flex justify-between mx-1'>
                <TypographyH4>Skills</TypographyH4>
                <TypographyH4>1</TypographyH4>
            </div>
            <hr className='border border-green-900' />
            <div className='my-4 px-4 space-y-1'>
                {skills.map((skill) => (
                    <Skill
                        name={skill.name}
                        description={skill.description}
                        points={skill.points}
                        dangerous={skill.dangerous}
                        key={skill.name}
                    />
                ))}
            </div>
        </div>
    );
};

export default Skills;
