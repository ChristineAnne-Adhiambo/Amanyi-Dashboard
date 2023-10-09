'use client';
import React, { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../atoms/forms";
import { InputPassword } from "../atoms/icons";
import { BsFillPersonFill } from "react-icons/bs";
import { BiSolidLockAlt } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import router, { useRouter } from "next/router";
import useRegister from "../hooks/usePostUser";

const formSchema = z.object({
  first_name: z.string({ required_error: "First name is required" }).nonempty("First name is required"),
  last_name: z.string({ required_error: "Last name is required" }).nonempty("Last name is required"),
  email: z.string({ required_error: "Email is required" }).email('Invalid email address'),
  password: z.string({ required_error: "Password is required" }).min(8, { message: 'Password must be at least 8 characters' }),
  username: z.string({ required_error: "Username required" }).min(8, { message: "Username must be at least 8 characters" }),
});

type FormSchemaType = z.infer<typeof formSchema>;

const SignupForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormSchemaType>({
    resolver: zodResolver(formSchema),
  });

  const { user, handleRegister , loading, error} = useRegister()

  const handleFormSubmit = async (data:FormSchemaType) => {
    handleRegister(data)

  };
  

  return (
    <div className="flex w-full min-h-screen flex-col md:flex-row  ">
      <div className="bg-primary flex-1  flex justify-center items-center">
        <img src="/images/Amanyi-Logo.png" alt="logo" className="md:w-[400px] object-cover" />
      </div>
      <div className="flex-1 justify-center items-center flex ">
        <form onSubmit={handleSubmit(handleFormSubmit)} className="w-full  px-2 max-w-[500px]">
          <div>
            <h2 className="text-primary text-[20px] font-[800]">
              Sign Up
            </h2>
          </div>

          {
            error && <p className="text-red-400">{error}</p>
          }
          <Input
            icon={<BsFillPersonFill />}
            placeholder="Username"
            className="text-lg " style={{ marginLeft: 0 }}
            {...register("username")}
          />
          {errors?.username && <p className="text-red-400">{errors?.username?.message}</p>}

          <Input
            icon={<BsFillPersonFill />}
            placeholder="First name"
            className="text-lg " style={{ marginLeft: 0 }}
            {...register("first_name")}
          />
          {errors?.first_name && <p className="text-red-400">{errors?.first_name?.message}</p>}

          <Input
            icon={<BsFillPersonFill />}
            placeholder="Last name"
            className="text-lg " style={{ marginLeft: 0 }}
            {...register("last_name")}
          />
          {errors?.last_name && <p className="text-red-400">{errors?.last_name?.message}</p>}

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
            {loading ? "Loading..." : " Sign up"}
          </button>

          <p className="mt-4 text-sm flex gap-2">
            Already Have an account? <Link href="/signin" className="text-primary font-[800]">
              Sign In
            </Link>
          </p>
        </form>
      </div>
      <div />
    </div>
  );
};

export default SignupForm;


