import prisma from "@/lib/prisma";

export default async function Post({ params }: { params: { slug: string } }) {
    const { slug } = params;
    const post = await prisma.posts.findFirst({
        where: {
            slug,
        }
    })
    const contentWithLineBreaks = post?.content.replace(/<br \/>/g, '\n').replace(/\n/g, '<br />'); 

    return (
        <div>
            <h1>{post?.title}</h1>
            
            <div dangerouslySetInnerHTML={{ __html: contentWithLineBreaks || "" }} />
            <p>{post?.date}</p>
            <p>{post?.isDraft}</p>
        </div>
    )
}