import { BlogRender } from "@/components/ui/blog-render";
import { getBlogBySlug } from "@/lib/firebase/blog-helper";
import { notFound } from "next/navigation";

interface Props {
  params: { slug: string };
}

export default async function Page(props: Props) {
  const blog = await getBlogBySlug(props.params.slug);

  if (!blog) {
    notFound();
  }

  return <BlogRender blog={blog} />;
}
