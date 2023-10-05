"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../atoms/forms";
import { BiSolidLockAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";

import { InputPassword } from "../../icons";



const formSchema = z.object({
    email: z.string({ required_error: "Email is required" }).email('Invalid email address'),
    password: z.string({ required_error: "Password is required" }).min(8, { message: 'Password must be at least 8 characters' }),
})
type FormSchemaType = z.infer<typeof formSchema>;
const SigninForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
    });
    const handleFormSubmit = (data: FormSchemaType) => {
        console.log(data);
    };
    return (
        <div className="flex w-full min-h-screen flex-col md:flex-row ">
            <div className= "bg-primary flex-1 justify-center items-center flex">
                <img src="/images/Amanyi-Logo.png" alt="logo" className="md:w-[400px] object-cover" />
            </div>
            <div className="flex-1 justify-center items-center flex">
                <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full sm:w-[400px] px-3">
                    <h2 className="text-primary text-[20px] font-[800]">
                        Sign In
                    </h2>
                    <Input
                        icon={<AiOutlineMail/>}
                        placeholder="Email"
                        type="email"
                        {...register("email")}
                    />
                    {errors?.email && <p className="text-red-400">{errors?.email?.message}</p>}
                    <InputPassword
                        icon={<BiSolidLockAlt/>}
                        placeholder="Password"
                        type="password"
                        {...register("password")}
                    />
                    {errors?.password && <p className="text-red-400">{errors?.password?.message}</p>}                  
                      <Link href="homePage"><button className="mt-8 bg-[#38D0F5] text-primary text-[15px] font-[700] h-[40px] px-6 w-full rounded-full">
                        Sign In
                    </button>
                    </Link>
                    <p className="mt-4 text-md flex gap-2">
                        Don't have an account? <Link href="/signup" className="text-primary font-[800]">
                            Sign Up
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
};
export default SigninForm;