import { BlogPost } from "@/lib/blog";
import { getPaginatedBlogs } from "@/lib/firebase/blog-helper";

export async function GET() {
  const blogPost: BlogPost = {
    title: "Azraf Al Moznim",
    summary: Math.random().toString(36).substring(2, 15),
    coverImageURL:
      "https://images.unsplash.com/photo-1682695797873-aa4cb6edd613?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: Math.random().toString(36).substring(2, 15),
    createdAt: new Date().getTime(),
  };

  //   const res = await createBlog({
  //     firebase: fireAdminDB,
  //     blog: blogPost,
  //   });

  //   const res = await getBlogBySlug(
  //     "how-to-build-a-full-stack-app-with-nextjs-13-and-firebase-3u8"
  //   );

  const blogsPerPage = 2;
  const firstPage = await getPaginatedBlogs(null, blogsPerPage);
  const secondPage = await getPaginatedBlogs(
    firstPage[firstPage.length - 1].id,
    blogsPerPage
  );

  return new Response(
    JSON.stringify({
      firstPage,
      secondPage,
    }),
    {
      headers: { "content-type": "application/json" },
    }
  );
}
