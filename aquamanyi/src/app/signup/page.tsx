"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "../atoms/forms";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSolidLockAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import SigninForm from "../signin/page";
import { InputPassword } from "../../icons";

const formSchema = z.object({
    name: z.string({ required_error: "Name is required" }).nonempty("Name is required"),
    email: z.string({ required_error: "Email is required" }).email('Invalid email address'),
    password: z.string({ required_error: "Password is required" }).min(8, { message: 'Password must be at least 8 characters' }),
    confirmPassword: z.string({ required_error: "Confirm password is required" }).min(8, { message: 'Password must be at least 8 characters' })
}).refine((data) => data.password === data.confirmPassword, {
    path: ['confirmPassword'],
    message: 'Passwords does not match'
});
type FormSchemaType = z.infer<typeof formSchema>;
const SignupForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormSchemaType>({
        resolver: zodResolver(formSchema),
    });
    const handleFormSubmit = (data: FormSchemaType) => {
        console.log(data);
    };
    return (
        <div className="flex w-full min-h-screen flex-col md:flex-row min-width:1200px " >
            <div className="bg-primary flex-1 justify-center items-center flex" >
                <img src="/images/Amanyi-Logo.png" alt="logo" className="md:w-[7800px] object-cover" />
            </div>
            <div className="flex-1 justify-center items-center flex ml-[320px] ">
                <form onSubmit={handleSubmit(handleFormSubmit)}className="w-full sm:w-[400px] px-2">
                    <div>
                        <h2 className="text-primary text-[20px] font-[800]">
                            Sign Up
                        </h2>
                    </div>
                    <Input
                        icon={<BsFillPersonFill />}
                        placeholder="Full Name"
                        className="text-lg " style={{ marginLeft: 0 }}
                        {...register("name")}
                    />
                    {errors?.name && <p className="text-red-400">{errors?.name?.message}</p>}
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
                    <InputPassword
                        icon={<BiSolidLockAlt />}
                        placeholder="Confirm Password"
                        type="password"
                        {...register("confirmPassword")}
                    />
                    {errors?.confirmPassword && <p className="text-red-400">{errors?.confirmPassword?.message}</p>}
                    <button className="mt-4 bg-[#38D0F5
] text-primary text-[15px] font-[700] h-[40px] px-6 w-full rounded-full  ">
                        <Link href='signin'>Sign Up
                        </Link>
                    </button>                    <p className="mt-4 text-sm flex gap-2">
                        Already Have an account? <Link href="/signin" className="text-primary font-[800]">
                            Sign In
                        </Link>
                    </p>
                </form>
            </div>
            <div/>
        </div>
    );
};
export default SignupForm;