"use client";

import { BlogRender } from "@/components/ui/blog-render";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import TinyMceEditor from "@/components/ui/tiny-mce-editor";
import { BlogPost } from "@/lib/blog";
import { BlogPayload, BlogSchema } from "@/lib/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

export default function CreateBlog() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<BlogPayload>({
    resolver: zodResolver(BlogSchema),
    defaultValues: {
      coverImageURL:
        "https://images.unsplash.com/photo-1630694093867-4b947d812bf0?q=80&w=2815&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  });

  async function onSubmit(values: BlogPayload) {
    try {
      setLoading(true);
      const res = await fetch("/api/blog", {
        method: "POST",
        body: JSON.stringify(values),
      });
      toast.success("Blog post created");

      form.reset();
      const data = await res.json();
      const slug = data.slug;

      toast.success("Redirecting to blog post");
      return router.push(`/blog/${slug}`);
    } catch (error) {
      toast.error("Failed to create blog post");
    } finally {
      setLoading(false);
    }
  }

  const blog: BlogPost = {
    title: form.watch("title"),
    summary: form.watch("summary"),
    coverImageURL: form.watch("coverImageURL"),
    content: form.watch("content"),
    slug: form.watch("slug"),
    createdAt: new Date().getTime(),
  };

  return (
    <>
      <section className="px-4 pt-10 pb-24 mx-auto max-w-7xl">
        <div className="flex justify-between items-center">
          <h2 className="mb-2 text-3xl font-extrabold leading-tight text-white">
            Create Blog Post
          </h2>

          <div className="flex justify-end">
            <button
              disabled={loading}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 disabled:cursor-not-allowed disabled:opacity-50 flex"
              type="button"
              onClick={() => {
                form.handleSubmit(onSubmit)();
              }}
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
              Submit
            </button>
          </div>
        </div>

        <section className="mt-10">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Blog Title</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your blog title" {...field} />
                    </FormControl>
                    <FormDescription>
                      Enter a title for your blog post.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="summary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Blog Summary</FormLabel>
                    <FormControl>
                      <Textarea
                        className="h-24"
                        placeholder="Enter your blog summary"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      This summary will be used as the preview for your blog
                      post.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="coverImageURL"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Enter a cover image URL</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter a cover image URL" {...field} />
                    </FormControl>
                    <FormDescription>
                      This image will be used as the cover image for your blog
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="content"
                render={({}) => (
                  <FormItem>
                    <FormLabel>Blog Content</FormLabel>
                    <FormControl>
                      <TinyMceEditor
                        initialValue={form.formState.defaultValues?.content}
                        setValueTinymceContent={(v) =>
                          form.setValue("content", v)
                        }
                        watchTinymceContentValue={form.watch("content")}
                      />
                    </FormControl>
                    <FormDescription>
                      Enter the content for your blog post. You can use the
                      editor above to format your content.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </section>

        <BlogRender blog={blog} />
      </section>
    </>
  );
}
