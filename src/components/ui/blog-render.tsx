import { BlogPost } from "@/lib/blog";
import { RichTextRenderer } from "./richtext-renderer";
import { format } from "date-fns/format";

export function BlogRender({ blog }: { blog: BlogPost }) {
  return (
    <article className="px-4 pt-14 pb-24 mx-auto max-w-7xl md:w-3/4 lg:w-1/2">
      <div className="w-full mx-auto mb-10 text-left ">
        <div className="pb-6 mb-8 border-b border-slate-500">
          <h1
            className="mb-3 text-3xl font-bold text-slate-50 md:leading-tight md:text-4xl"
            itemProp="headline"
            title="Rise of Tailwind - A Utility First CSS Framework"
          >
            {blog?.title ?? ""}
          </h1>
          <p className="text-base text-slate-400">{format(new Date(blog.createdAt), "MMM dd, yyyy") ?? ""}</p>
        </div>

        <img
          src={blog?.coverImageURL ?? ""}
          className="object-cover w-full h-64 bg-center rounded"
          alt="cover photo"
        />
      </div>

      <RichTextRenderer className="w-full mx-auto" html={blog?.content ?? ""} />
    </article>
  );
}
