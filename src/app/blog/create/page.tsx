import { CreatePostForm } from "@/components/forms/createPostForm";
import Header from "@/components/layout/header";
import getSession from "@/lib/session";
import { Session } from "@/lib/types";
import { redirect } from "next/navigation";

export default async function CreatePost() {
  const session: Session = await getSession();
  if (!session?.user?.isAdmin) {
    redirect("/blog");
  }

  return (
    <>
      <Header />
      <main>
        <CreatePostForm />
      </main>
    </>
  );
}
