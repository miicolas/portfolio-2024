import prisma from "@/lib/prisma";

export default async function Post({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const post = await prisma.posts.findFirst({
        where: {
            slug,
        }
    })
   

    return (
        <div>
            <h1>{post?.title}</h1>
            
            <div dangerouslySetInnerHTML={{ __html: post?.content || "" }} />
            <p>{post?.date}</p>
            <p>{post?.isDraft}</p>
        </div>
    )
}