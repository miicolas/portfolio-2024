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
            Back to Blog
          </Link>
        </Button>
        <section className="py-10">
          <h1 className="text-2xl font-bold">{post?.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post?.content || "" }} className="mt-5" />
          <p className="text-sm text-gray-500 mt-5" >
            {post?.date}
          </p>
          <p>{post?.isDraft}</p>
        </section>
      </main>
    </>
  );
}
