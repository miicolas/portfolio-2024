import Image from "next/image";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { Earth, GitBranch } from "lucide-react";
import Link from "next/link";

export default function ProjectCard({
  name,
  image,
  description,
  date,
  skills,
  video,
  website,
  websiteurl,
  github,
  githuburl,
}: {
  name: string;
  image: string;
  video: string;
  description: string;
  date: string;
  skills: string[];
  website: boolean 
  websiteurl: string 
  github: boolean 
  githuburl: string 
}) {
  return (
    <div
      className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full rounded-lg"
      lang="en"
    >
      <div className="w-full rounded-lg object-cover">
        {image ? (
          <Image
            src={image}
            alt={name}
            width={400}
            height={400}
            className="rounded-t-lg object-cover"
          />
        ) : (
          <div className="h-40 w-full bg-gray-200"></div>
        )}
        {video ? (
          <video src={video} className="rounded-t-lg object-cover" />
        ) : null}
      </div>
      <div className="h-full w-full">
        <div className="p-4 flex flex-col justify-between h-full">
          <div>
            <h2 className="text-lg font-bold">{name}</h2>
            <p className="font-light text-xs">{date}</p>
            <p className="font-light text-xs text-gray-500 my-1">
              {description}
            </p>
          </div>

          <div className="mt-2">
            <div className="flex flex-wrap gap-0.5">
              {skills.map((skill) => (
                <Badge variant={"outline"} className="text-xs">
                  {skill}
                </Badge>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-2">
              {website && (
                <Link href={websiteurl || '#'}>
                  <Button variant={"default"} size={"sm"}>
                    <Earth className="w-4 h-4 mr-2" />
                    <span className="text-xs">Website</span>
                  </Button>
                </Link>
              )}
              {github && (
                <Link href={githuburl || '#'}>
                  <Button variant={"default"} size={"sm"}>
                    <GitBranch className="w-4 h-4 mr-2" />
                    <span className="text-xs">Github</span>
                  </Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
