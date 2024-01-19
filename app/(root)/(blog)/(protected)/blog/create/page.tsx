import { fireAdminFire } from "@/lib/firebase/firebase_admin";
import { cookies } from "next/headers";
import CreateBlog from "./_components/create-blog";
import SingIn from "./_components/sign-in";

export default async function Page() {
  const cookieStore = cookies();
  const authToken = cookieStore.get("token");

  if (authToken) {
    const tokenRef = fireAdminFire.collection("tokens").doc(authToken.value);
    const tokenDoc = await tokenRef.get();

    if (tokenDoc.exists) {
      const token = tokenDoc.data();
      const expiresAt = token?.expiresAt;

      if (expiresAt) {
        const now = new Date();
        const expiresAtDate = expiresAt.toDate();
        if (now > expiresAtDate) {
          cookieStore.delete("token");
        } else {
          return <CreateBlog />;
        }
      }
    }
  }

  return <SingIn />;
}
