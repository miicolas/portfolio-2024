import { EditPostForm } from "@/components/forms/PostForm";
import Header from "@/components/layout/header";
import getSession from "@/lib/session";
import { Session } from "@/lib/types";
import { redirect } from "next/navigation";
import prisma from "@/lib/prisma";

export default async function CreatePost({params}: {params: {slug: string}}) {
  const session: Session = await getSession();
  if (!session?.user?.isAdmin) {
    redirect("/blog");
  }

  const post = await prisma.posts.findFirst({
    where: {
      slug: params.slug,
    },
  });

  return (
    <>
      <Header />
      <main>
        <EditPostForm post={post!} />
      </main>
    </>
  );
}
