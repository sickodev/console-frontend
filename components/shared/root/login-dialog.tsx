"use client";
import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema, LoginSchema } from "@/schema/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Form, useForm } from "react-hook-form";
import LoginForm from "./login-form";

const LoginDialog = () => {
    const form = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    async function onSubmit(values: LoginSchema) {
        console.log(values);
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Log In to the Console</Button>
            </DialogTrigger>
            <DialogContent className='border border-green-300/30'>
                <DialogHeader>
                    <DialogTitle className='text-2xl underline text-green-800'>
                        Login to the Console
                    </DialogTitle>
                </DialogHeader>
                <LoginForm />
            </DialogContent>
        </Dialog>
    );
};

export default LoginDialog;
