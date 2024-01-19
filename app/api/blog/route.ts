import { BlogPost } from "@/lib/blog";
import { createBlog } from "@/lib/firebase/blog-helper";
import { fireAdminFire } from "@/lib/firebase/firebase_admin";
import { BlogSchema } from "@/lib/validator";
import { cookies } from "next/headers";
import { z } from "zod";

export async function POST(req: Request) {
  try {
    const cookieStore = cookies();
    const authToken = cookieStore.get("token");

    if (!authToken) {
      return new Response("Unauthorized", { status: 401 });
    }

    const tokenRef = fireAdminFire.collection("tokens").doc(authToken.value);
    const tokenDoc = await tokenRef.get();

    if (!tokenDoc.exists) {
      return new Response("Unauthorized", { status: 401 });
    }

    const token = tokenDoc.data();
    const expiresAt = token?.expiresAt;
    const now = new Date();
    const expiresAtDate = expiresAt.toDate();

    if (now > expiresAtDate) {
      cookieStore.delete("token");
      return new Response("Unauthorized", { status: 401 });
    }

    const body = await req.json();
    const reqBlog = BlogSchema.parse(body);

    const _newBlog: BlogPost = {
      title: reqBlog.title,
      summary: reqBlog.summary,
      coverImageURL: reqBlog.coverImageURL,
      slug: reqBlog.slug,
      content: reqBlog.content,
      createdAt: new Date().getTime(),
    };

    await createBlog({ blog: _newBlog });
    return new Response(JSON.stringify(_newBlog), { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(error.message, { status: 400 });
    }
  }
}
