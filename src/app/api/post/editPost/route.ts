import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import getSession from "@/lib/session";

export async function POST(req: NextRequest) {
  const { title, description, content, slug, date, isDraft } = await req.json();

  const session = await getSession();

  if (!session?.user?.isAdmin) {
    return NextResponse.json(
      { message: "You are not authorized to create a post!" },
      { status: 401 }
    );
  }

  try {
    await prisma.$transaction(async (tx) => {
      const id_post = await prisma.posts.findFirst({
        where: {
          slug,
        },
      });

      if (!id_post) {
        return NextResponse.json(
          { message: "Post not found!" },
          { status: 404 }
        );
      }

      await prisma.posts.update({
        where: {
          id: id_post.id,
        },
        data: {
          title,
          description,
          slug,
          date,
          content,
          isDraft,
        },
      });
    });

    return NextResponse.json(
      { message: "Post updated successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to update post!" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Post updated successfully!" },
    { status: 201 }
  );
}
