"use client";

import { set, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import RichTextEditor from "@/components/text-editor";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";

const createPostSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  content: z.string().min(1, { message: "Content is required" }),
  slug: z.string().min(1, { message: "Slug is required" }),
  date: z.string().min(1, { message: "Date is required" }),
  isDraft: z.boolean().optional(),
});

export function CreatePostForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof createPostSchema>>({
    resolver: zodResolver(createPostSchema),
    defaultValues: {
      isDraft: false,
    },
  });

  const onSubmit = async (values: z.infer<typeof createPostSchema>) => {
    console.log(values, "values");
    const { title, description, content, slug, date, isDraft } = values;
    console.log(title, description, content, slug, date, isDraft, "values");

    try {
      const createPost = async () => {
        const response = await fetch("/api/post/createPost", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            content,
            slug,
            date,
            isDraft,
          }),
        });

        const data = await response.json();
        
        if (response.ok) {
          toast.success("Post created successfully");
        } else {
          toast.error("Post creation failed");
        }

        return data;
      };

      await createPost();
    } catch (error) {
      console.error(error);
    } finally {
      router.push("/blog");
      router.refresh();
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <Input {...field} />
              <FormMessage {...field} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <Textarea {...field} />
              <FormMessage {...field} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <RichTextEditor {...field} {...field} />
              <FormMessage {...field} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
              <Input {...field} />
              <FormMessage {...field} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="date"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Date</FormLabel>
              <Input {...field} />
              <FormMessage {...field} />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="isDraft"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Is Draft</FormLabel>
              <Switch
                id="isDraft"
                checked={field.value}
                onCheckedChange={field.onChange}
              />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
