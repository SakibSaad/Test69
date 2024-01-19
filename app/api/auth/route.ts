import { fireAdminFire } from "@/lib/firebase/firebase_admin";
import { Timestamp } from "firebase-admin/firestore";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
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
            return new Response("Authorized", { status: 200 });
          }
        }
      }
    }

    const body = await request.json();
    const email = body.email;
    const password = body.password;

    if (!email || !password) {
      return new Response("Unauthorized from query params", { status: 401 });
    }

    const userRef = fireAdminFire.collection("users").doc(email);
    const userDoc = await userRef.get();
    const user = userDoc.data();

    if (!userDoc.exists || !user) {
      return new Response("User not found", { status: 404 });
    }

    const incomeingPasswordHash = await passwordhash(password);
    const userPasswordHash = user?.password;

    if (incomeingPasswordHash !== userPasswordHash) {
      return new Response("passwords do not match", { status: 401 });
    }

    // generate token
    const token = await crypto.subtle.generateKey(
      { name: "HMAC", hash: "SHA-256" },
      true,
      ["sign", "verify"]
    );

    const exportedKey = await crypto.subtle.exportKey("raw", token);
    const tokenString = btoa(
      String.fromCharCode(...Array.from(new Uint8Array(exportedKey)))
    );

    const sanitizedTokenString = tokenString.replace(/[\/\.\#\$\[\]]/g, "_");
    const tokenRef = fireAdminFire
      .collection("tokens")
      .doc(sanitizedTokenString);

    const tokenDoc = await tokenRef.get();
    if (tokenDoc.exists) {
      return new Response("Unauthorized", { status: 401 });
    }

    await tokenRef.set({
      email: email,
      token: sanitizedTokenString,
      createdAt: Timestamp.fromDate(new Date()),
      expiresAt: Timestamp.fromDate(new Date(Date.now() + 1000 * 60 * 60 * 24)),
    });

    cookieStore.set("token", sanitizedTokenString, {
      httpOnly: true,
      secure: true,
      sameSite: "strict",
      path: "/",
      expires: new Date(Date.now() + 1000 * 60 * 60 * 24),
    });

    return new Response("Authorized", { status: 200 });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}

function passwordhash(password: string) {
  return crypto.subtle
    .digest("SHA-256", new TextEncoder().encode(password))
    .then((buf) => {
      return Array.prototype.map
        .call(new Uint8Array(buf), (x) => ("00" + x.toString(16)).slice(-2))
        .join("");
    });
}
