import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import * as Y from 'yjs'

const ydoc = new Y.Doc()

export async function POST(req: NextRequest) {
    const { title, description, content, slug, date, isDraft } = await req.json();
    
    try {
        const post = await prisma.posts.create({
            data: {
                title,
                description,
                slug,
                date,
                content,
                isDraft,
            }
        });

        

    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Failed to create post!" }, { status: 500 });
    }

    return NextResponse.json({ message: "Post created successfully!" });
}