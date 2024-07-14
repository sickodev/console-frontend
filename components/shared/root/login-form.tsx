import { TypographyMuted } from "@/components/typography/muted";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema, LoginSchema } from "@/schema/forms";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const LoginForm = () => {
    const form = useForm<LoginSchema>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            username: "",
            password: "",
        },
    });

    const router = useRouter();

    async function onSubmit(values: LoginSchema) {
        console.log(values);
        router.push("/console");
    }
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                <FormField
                    control={form.control}
                    name='username'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-green-800'>
                                Username
                            </FormLabel>
                            <FormControl>
                                <Input
                                    placeholder='kungfukenny'
                                    autoComplete='off'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name='password'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel className='text-green-800'>
                                Password
                            </FormLabel>
                            <FormControl>
                                <Input
                                    type='password'
                                    placeholder='iseedeadpeople'
                                    autoComplete='off'
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />
                <div className='flex items-center space-x-2'>
                    <TypographyMuted>
                        Never been in the console?
                    </TypographyMuted>
                    <Link
                        href={"/register"}
                        className='text-sm text-green-500 underline font-extralight hover:text-primary transition duration-300 slide-in-from-top-0'
                    >
                        Register here
                    </Link>
                </div>
                <Button type='submit'>Login with credentials</Button>
            </form>
        </Form>
    );
};

export default LoginForm;
