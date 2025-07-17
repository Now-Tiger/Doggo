import { NextRequest, NextResponse } from "next/server";

/**
 * Handles the POST request to update a user's password.
 * This is a Route Handler in the Next.js App Router.
 * * You would place this file at: `app/api/v1/user/update-password/route.ts`
 * and it will be accessible at the endpoint: `.../api/v1/user/update-password`
 */
export const POST = async (req: NextRequest) => {
  try {
    // Implement/add on page check if new password and confirm password are same
    // if yes then send only one to update in the backend

    const body = await req?.json();
    const password: string = body?.password;
    console.log(`password: `, password);

    // 2. Define a ZOD schema for validation.

    const cleanedPass = password.trim();
    if (!cleanedPass) {
      return Response.json({ success: false, message: "Invalid password", status: 400 });
    }

    return Response.json({ success: true, message: "Password changed!", status: 200 });
  } catch (e) {
    console.log(`Error: `, e);
    return NextResponse.json({ success: false, message: "Internal server error", status: 500});
  }
}
