import { z } from "zod";

export const loginSchema = z.object({
    username: z
        .string()
        .min(3, { message: "Username too short!!" })
        .max(20, { message: "Username too long!!" }),
    password: z.string().min(6, { message: "Password too short!!" }),
});

export type LoginSchema = z.infer<typeof loginSchema>;
