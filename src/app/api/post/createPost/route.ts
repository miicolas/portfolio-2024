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
    const checkSlug = await prisma.posts.findFirst({
      where: {
        slug,
      },
    });

    if (checkSlug) {
      return NextResponse.json(
        { message: "Slug already exists!" },
        { status: 400 }
      );
    }

    await prisma.posts.create({
      data: {
        title,
        description,
        slug,
        date,
        content,
        isDraft,
      },
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { message: "Failed to create post!" },
      { status: 500 }
    );
  }

  return NextResponse.json(
    { message: "Post created successfully!" },
    { status: 201 }
  );
}
