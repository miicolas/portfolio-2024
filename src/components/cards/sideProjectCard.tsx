import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";
import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRightIcon, GitBranch, Webhook, LinkIcon } from "lucide-react";

type SideProjectCardProps = {
  name: string;
  startDateFormatted: string;
  endDateFormatted: string;
  description: string;
  gitHubLink: string;
  liveLink: string;
  type: string;
  apiLink: string;
};

export default function SideProjectCard({
  name,
  type,
  startDateFormatted,
  endDateFormatted,
  description,
  gitHubLink,
  liveLink,
  apiLink,
}: SideProjectCardProps) {
  return (
    <>
      <div className="flex gap-4 lg:gap-10 p-4 border hover:shadow-lg transition-all duration-300 ease-out h-full rounded-lg">
        <div className="flex flex-col gap-4 w-full">
          <div className="flex items-center justify-between w-full">
            <div className="flex flex-col">
              <h3>{name}</h3>
              <p className="text-xs font-light">{type}</p>
            </div>
            <div className="flex gap-4 text-sm font-light">
              <p>{startDateFormatted}</p>
              <ArrowRightIcon className="w-4 h-4" />
              <p>{endDateFormatted}</p>
            </div>
          </div>
          <p className="text-sm font-light text-neutral-500">{description}</p>
          <div className="flex gap-2 items-center">
            {gitHubLink && (
              <Link href={gitHubLink} target="_blank" rel="noreferrer">
                <Button variant="default" size={"sm"} className="text-xs">
                  <GitBranch className="w-4 h-4 mr-2" />
                  GitHub
                </Button>
              </Link>
            )}
            {apiLink && (
              <Link href={apiLink} target="_blank" rel="noreferrer">
                <Button variant="default" size={"sm"} className="text-xs">
                  <Webhook className="w-4 h-4 mr-2" />
                  API
                </Button>
              </Link>
            )}
            {liveLink && (
              <Link href={liveLink} target="_blank" rel="noreferrer">
                <Button variant="default" size={"sm"} className="text-xs">
                  <LinkIcon className="w-4 h-4 mr-2" />
                  Live
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
