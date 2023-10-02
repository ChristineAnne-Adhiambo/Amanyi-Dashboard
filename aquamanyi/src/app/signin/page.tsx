"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../atoms/forms";
import { InputPassword } from "../atoms/icons";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSolidLockAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

const formSchema = z.object({
    email: z.string({ required_error: "Email is required" }).email('Invalid email address'),
    password: z.string({ required_error: "Password is required" }).min(8, { message: 'Password must be at least 8 characters' }),
});

type FormSchemaType = z.infer<typeof formSchema>;
const SigninForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
    });

    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')
    const router = useRouter()
    const handleFormSubmit = async (data: FormSchemaType) => {
        setError('')
        try {
            setLoading(true)
            const result = await axios.post(`/api/login`, JSON.stringify(data), {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            setLoading(false)
            router.push('/homePage')
        } catch (error: any) {
            setLoading(false)
            console.log(error);
            setError(error.response.data || 'Failed to login')
        }
    };

    return (
        <div className="flex w-full min-h-screen flex-col md:flex-row  ">
            <div className="bg-primary flex-1 justify-center items-center flex">
                <img src="/images/Amanyi-Logo.png" alt="logo" className="md:w-[400px] object-cover" />
            </div>
            <div className="flex-1 justify-center items-center flex">
                <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full sm:w-[400px] px-2">
                    <div>
                        <h2 className="text-primary text-[20px] font-[800]">
                            Sign in
                        </h2>
                    </div>

                    {
                        error && <p className="text-red-400">{error}</p>
                    }

                    <Input
                        icon={<AiOutlineMail />}
                        placeholder="Email"
                        type="email"
                        {...register("email")} />
                    {errors?.email && <p className="text-red-400">{errors?.email?.message}</p>}

                    <InputPassword
                        icon={<BiSolidLockAlt />}
                        placeholder="Password"
                        type="password"
                        {...register("password")}
                    />
                    {errors?.password && <p className="text-red-400">{errors?.password?.message}</p>}

                    <button className="mt-8 bg-[#38D0F5] text-primary text-[15px] font-[700] h-[40px] px-6 w-full rounded-full" disabled={loading}>
                        {loading ? "Loading..." : " Sign in"}
                    </button>

                    <p className="mt-4 text-sm flex gap-2">
                        Don't Have an account? <Link href="/signin" className="text-primary font-[800]">
                            Sign up
                        </Link>
                    </p>
                </form>
            </div>
            <div />
        </div>
    );
};

export default SigninForm;