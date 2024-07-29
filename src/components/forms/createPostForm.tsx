"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner"
import { useRouter } from "next/navigation";


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
    const contentWithBr = content.replace(/\n/g, '<br />');
    console.log(title, description, content, slug, date, isDraft, "values");

    
   


    try {
        const CreatePost = () => {
            return (
            fetch('/api/post/createPost', {
                method: 'POST',
                body: JSON.stringify({ title, description, content: contentWithBr, slug, date, isDraft }),
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
        )
        }

    toast.promise(
        CreatePost(),
        {
            loading: "Creating post...",
            success: "Post created successfully!",
            error: "Failed to create post!"
        }
    )
    } catch (error) {
        console.error(error);
    } finally {
        router.push('/blog')
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
              <Textarea {...field} />
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
