import { Suspense } from "react";
import { GetBlogsSection } from "./components/get-blogs";

export default function BlogPage() {
  return (
    <>
      <section className="px-4 pt-10 pb-24 mx-auto max-w-7xl">
        <h2 className="mb-2 text-3xl font-extrabold leading-tight text-white">
          Blog Posts
        </h2>
        <p className="mb-20 text-lg text-slate-400">
          Stay up to date with the latest news and articles from us.
        </p>

        <Suspense
          fallback={
             <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="p-3 border-slate-700 rounded-3xl hover:border-orange-900/50 transition border-2 hover:scale-105 hover:border-2"
                  >
                    <div className="w-full h-56 mb-5 bg-center rounded-2xl animate-pulse bg-slate-700" />
                    <div className="w-2/3 h-5 mb-3 bg-center rounded-2xl animate-pulse bg-slate-700"  />
                    <div className="w-1/3 h-5 mb-3 bg-center rounded-2xl animate-pulse bg-slate-700"/>
                    <div className="w-1/2 h-5 mb-3 bg-center rounded-2xl animate-pulse bg-slate-700"/>
                    <div className="w-1/3 h-5 mb-3 bg-center rounded-2xl animate-pulse bg-slate-700"/>
                  </div>
                ))}

             </div>
          }
        >
          <GetBlogsSection />
        </Suspense>
      </section>
    </>
  );
}
