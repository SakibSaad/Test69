import { getPaginatedBlogs } from "@/lib/firebase/blog-helper";
import { format } from "date-fns";
import Link from "next/link";

export async function GetBlogsSection() {
  const blogs = await getPaginatedBlogs({});

  if (blogs.length === 0) {
    return (
      <>
        <section className="grid items-center justify-center grid-cols-1 px-4 py-24 text-center lg:grid-cols-3">
          <div className="col-auto lg:col-start-2">
            <p className="mb-2 text-base font-semibold text-primary">
              No blogs found.
            </p>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        {blogs.map((blog, i) => (
          <Link
            key={blog.id}
            href={`/blog/${blog.slug}`}
            className="p-3 border-slate-700 rounded-3xl hover:border-orange-900/50 transition border-2 hover:scale-105 hover:border-2"
          >
            <img
              src={blog.coverImageURL ?? ""}
              className="object-cover w-full h-56 mb-5 bg-center rounded-2xl"
              alt="cover photo"
              loading="lazy"
            />
            <h2 className="mb-2 text-lg font-semibold text-white">
              <p className="text-white hover:text-orange-400">
                {blog.title ?? ""}
              </p>
            </h2>

            <p className="mb-3 text-sm font-normal text-slate-400 line-clamp-5">
              {blog.summary ?? ""}
            </p>
            <p className="mb-3 text-sm font-normal text-slate-400">
              • {format(new Date(blog.createdAt), "MMM dd, yyyy") ?? ""}
            </p>
          </Link>
        ))}
      </div>

      {/* <div className="flex flex-col items-center justify-center mt-20 space-x-0 space-y-2 md:space-x-2 md:space-y-0 md:flex-row">
        <a
          href="#"
          className="w-full rounded-full btn btn-light btn-xl md:w-auto"
        >
          Previous Page
        </a>
        <a
          href="#"
          className="w-full rounded-full btn btn-light btn-xl md:w-auto"
        >
          Next Page
        </a>
      </div> */}
    </>
  );
}
