import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import getSession from "@/lib/session";

export async function GET(
  req: NextRequest,
  { params }: { params: { slug: string } }
) {
  const { slug } = params;

  console.log(slug);
  const session = await getSession();

  if (!session?.user?.isAdmin) {
    return NextResponse.json(
      { message: "You are not authorized to delete a post!" },
      { status: 401 }
    );
  }

  try {
    const post = await prisma.posts.findFirst({
      where: {
        slug,
      },
    });

    if (!post) {
      return NextResponse.json({ message: "Post not found!" }, { status: 404 });
    }
    await prisma.posts.delete({
      where: {
        id: post.id,
      },
    });

    return NextResponse.json(
      { message: "Post deleted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to delete post!" },
      { status: 500 }
    );
  }
}
