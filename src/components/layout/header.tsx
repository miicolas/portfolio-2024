import { LoginGithubButton, LogoutButton } from "@/components/buttons/Auth/AuthButton";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import getSession from "@/lib/session";



export default async function Header() {
  const session = await getSession();
  return (
    <header className="flex flex-row justify-between items-center">
      <h1 className="text-2xl font-bold">Weekly Journal Nicolas'</h1>
      <div className="flex flex-row gap-4">
      {!session && (
        <LoginGithubButton />
      )}

      {session && (
        <>
        <div className="flex flex-row gap-4">
          <Avatar className="border-2 border-gray-200">
            <AvatarImage src={session.user.image} />
          </Avatar>
          <LogoutButton />
          {session.user.isAdmin && (
            <Link href="/blog/create">
            <Button> 
            Add Post
            </Button>
          </Link>
          )}
        </div>
        </>
      )}
      </div>
    </header>
  );
}