import CardBlog from "@/components/cards/cardBlog";
import { getPosts } from "@/lib/utils";
import Header from "@/components/layout/header";
import getSession  from "@/lib/session";


export default async function Blog() {
  const posts = await getPosts();
  const session = await getSession();

  return (
    <>
      <Header />
      <main className="py-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {posts.map((post: any) => (
            <CardBlog
            key={post.id}
            {...post}
              isAdmin={session?.user?.isAdmin}
            />
          ))}
        </div>
      </main>
    </>
  );
}
