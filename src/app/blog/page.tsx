import CardBlog from "@/components/cards/cardBlog";
import { getPosts } from "@/lib/utils";
import Link from "next/link";
import Header from "@/components/layout/header";

export default async function Blog() {

    const posts = await getPosts();
  return (
    <>
    <Header />
    <div>
  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {
            posts.map((post : any ) => (
              
                <CardBlog key={post.id} title={post.title} description={post.description} date={post.date} slug={post.slug} />
              
            ))
        }
      </div>
    </div>
    </>
  );
}
    