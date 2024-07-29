import { Button } from "@/components/ui/button";
import Link from "next/link";
import getSession from "@/lib/session";
import { Session, CardBlogProps } from "@/lib/types";





export default async function CardBlog({
  title,
  description,
  date,
  slug,
}: CardBlogProps) {
  const session: Session = await getSession();

  return (
    <>
  
      <div className="border border-gray-200 p-4 hover:shadow-lg transition-all duration-300 ease-out h-full rounded-lg">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold">{title}</h3>
          </div>
          <div>
            <p className="text-gray-500">{date}</p>
          </div>
        </div>
        <div>
          <p className="text-gray-500">{description}</p>
        </div>
        <Link href={`/blog/${slug}`}>
          <Button>Read More</Button>
        </Link>
        {session?.user?.isAdmin && (
          <Link href={`/blog/${slug}/edit`}>
            <Button>Edit</Button>
          </Link>
        )}
      </div>
    </>
  );
}
