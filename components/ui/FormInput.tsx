"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import CustomInput from "./CustomInput";
import { authFormSchma } from "@/lib/utils";



const FormInput = ({ type }: { type: string }) => {

  const formSchema = authFormSchma(type);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })


  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <div className="space-y-8 w-full md:w-1/2 xl:w-1/4 mx-auto p-10  h-screen content-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Welcome Back</h1>
        <p>Sign in to your account</p>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <CustomInput control={form.control} name="email" placeholder="Email" />
          <CustomInput control={form.control} name="password" placeholder="Password" />
          <Button type="submit" className="w-full bg-primary text-secondary">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default FormInput;
