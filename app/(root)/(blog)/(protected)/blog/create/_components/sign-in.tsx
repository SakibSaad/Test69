"use client";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { LoginPayload, LoginSchema } from "@/lib/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SingIn() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string>(null);

  const form = useForm<LoginPayload>({
    resolver: zodResolver(LoginSchema),
  });

  async function onSubmit(values: LoginPayload) {
    try {
      setLoading(true);
      const res = await axios.post("/api/auth", values);
      const data = res.data;

      if (res.status === 200) {
        router.refresh();
      }
    } catch (error) {
      // check if axios error
      if (axios.isAxiosError(error)) {
        setError(error.response.data);
        const message = error.response.data as string;

        if (message.includes("User")) {
          form.setError("email", {
            type: "manual",
            message: message,
          });
          return;
        }

        form.setError("password", {
          type: "manual",
          message: message,
        });
      } else {
        setError(error.message);
      }
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="rounded-lg shadow-lg bg-black p-6 space-y-6 border border-gray-200 dark:border-gray-700">
        <h1 className="text-2xl text-white font-bold text-center">Sign In</h1>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-6 w-[300px]"
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your password"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />

            {/* <div className="text-red-500 text-sm">
              <p>{error ?? "No error"}</p>
            </div> */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-600 text-white p-2 rounded-lg flex justify-center items-center"
            >
              {loading && (
                <svg
                  className="animate-spin -ml-1 mr-2 h-5 w-5 text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  ></path>
                </svg>
              )}
              Sign In
            </button>
          </form>
        </Form>
      </div>
    </div>
  );
}
