import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

import type { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token = searchParams.get("token");

  if (token !== process.env.REVALIDATE_TOKEN) {
    return NextResponse.json({ status: "Wrong token" });
  }

  const path = "/blog/post/[slug]";
  revalidatePath(path, "layout");

  // NextResponse.re
  return NextResponse.json({ status: "OK" });
}
