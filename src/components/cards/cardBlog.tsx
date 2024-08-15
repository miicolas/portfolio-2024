"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CardBlogProps } from "@/lib/types";
import { Edit, Trash } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from 'next/navigation'


export default async function CardBlog({
  title,
  description,
  date,
  slug,
  isAdmin,
}: CardBlogProps) {
  const router = useRouter();
  const handleDelete = async () => {
    const deletePost = () => {
      return fetch(`/api/post/deletePost/${slug}`, {
        method: "GET",
      });
    };
    try {
    toast.promise(deletePost(), {
        loading: "Deleting...",
        success: "Post deleted successfully",
        error: "Error deleting post",
      });

    Promise.resolve(deletePost());
      
    } catch (error) {
      console.error(error);
    }
    finally {
        router.refresh();
    }
  };

  return (
    <>
      <div className="border border-gray-200 p-4 hover:shadow-lg transition-all duration-300 ease-out h-40 rounded-lg flex flex-col justify-between">
        <div>
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
        </div>
        <div>
          <div className="flex gap-2">
            <Link href={`/blog/${slug}`}>
              <Button variant={"default"}>Read More</Button>
            </Link>
            {isAdmin && (
              <div className="flex gap-2">
                <Button variant={"outline"} asChild>
                  <Link href={`/blog/edit/${slug}`}>
                    <Edit className="w-4 h-4" />
                  </Link>
                </Button>

                <Button variant={"outline"} onClick={() => handleDelete()}>
                  <Trash className="w-4 h-4" />
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
