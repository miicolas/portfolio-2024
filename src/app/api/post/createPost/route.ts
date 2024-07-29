import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function POST(req: NextRequest) {
    const { title, description, content, slug, date, isDraft } = await req.json();
    
    try {
        const post = await prisma.posts.create({
            data: {
                title,
                description,
                content,
                slug,
                date,
                isDraft,
            }
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Failed to create post!" }, { status: 500 });
    }

    return NextResponse.json({ message: "Post created successfully!" });
}