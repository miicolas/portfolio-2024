"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CardBlogProps } from "@/lib/types";
import { Edit, Trash } from "lucide-react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default async function CardBlog({
  title,
  description,
  date,
  slug,
  isAdmin,
  isDraft,
}: CardBlogProps) {
  const router = useRouter();

  const descriptionLimit = 75;

  const limitedDescription = description.slice(0, descriptionLimit);
  

  const handleDelete = async () => {
    try {
      const deletePost = async () => {
        const response = await fetch(`/api/post/deletePost/${slug}`, {
          method: "GET",
        });

        const data = await response.json();

        if (response.ok) {
          toast.success(data.message);
        } else {
          toast.error(data.message);
        }

        return data;
      };

      await deletePost();
    } catch (error) {
      console.error(error);
    } finally {
      router.refresh();
    }
  };

  return (
    <>
      <div className={`border p-4 hover:shadow-lg transition-all duration-300 ease-out  rounded-lg flex flex-col justify-between ${isDraft ? "border-neutral-400" : "border-neutral-200"}`}>
        <div>
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-normal">{title}</h3>
            </div>
            <div>
              <p className="text-neutral-500 text-xs font-light">{date}</p>
            </div>
          </div>
          <div className="my-2">
            <p className="text-neutral-500 text-xs font-light">{limitedDescription}...</p>
          </div>
        </div>
        <div>
          <div className="flex gap-2">
            <Link href={`/blog/${slug}`}>
              <Button variant={"default"} className="text-xs">Read More</Button>
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
