"use client";

import { set, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";
import { authFormSchma } from "@/lib/utils";
import { useState } from "react";
import { Loader2 } from "lucide-react";
import { logIn } from "@/lib/actions/user.action";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const FormInput = ({ type }: { type: string }) => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const [error, setError] = useState(null);

  const formSchema = authFormSchma(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // 2. Define a submit handler.
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading(true);
    try {
      const user = await logIn(values);

      if (user) router.push("/");
    } catch (error) {
      setError(error?.message);
    }
    setLoading(false);
  };
  return (
    <div className="space-y-8 w-full md:w-1/2 xl:w-1/4 mx-auto p-10  h-screen content-center">
      {type === "sign-in" && (
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p>Sign in to your account</p>
        </div>
      )}
      {type === "sign-up" && (
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome</h1>
          <p>Sign up to your account</p>
        </div>
      )}
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CustomInput
            control={form.control}
            name="email"
            placeholder="Email"
          />
          <CustomInput
            control={form.control}
            name="password"
            placeholder="Password"
          />
          <Button className="w-full bg-primary text-secondary">{type === "sign-in" ? "Sign In" : "Sign Up"}</Button>
        </form>
      </Form>

      <footer className="text-center">
        {type === "sign-in" ? (
          <p>
            Don't have an account?
            <Link href="/sign-up" className="font-semibold">
              Sign Up
            </Link>
          </p>
        ) : (
          <p>
            Already have an account?
            <Link href="/sign-in" className="font-semibold">
              Sign In
            </Link>
          </p>
        )}
      </footer>
    </div>
  );
};

export default FormInput;
