import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import prisma from "@/lib/prisma";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const post = await prisma.posts.findFirst({
    where: {
      slug,
    },
  });

  return (
    <>
      <Header />
      <main className="py-5">
        <Button asChild>
          <Link href="/blog" className="flex items-center gap-2">
          
          <ArrowLeft />
          Back to Blog</Link>
        </Button>
        <section className="py-10">
          <h1>{post?.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post?.content || "" }} />
          <p>{post?.date}</p>
          <p>{post?.isDraft}</p>
        </section>
      </main>
    </>
  );
}
