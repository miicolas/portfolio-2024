export type User = {
    isAdmin?: boolean;
    image?: string | null;
  } | null;
  
  export type Session = {
    user?: User;
  } | null;
  

export type CardBlogProps = {
  title: string;
  description: string;
  date: string;
  slug: string;
};
