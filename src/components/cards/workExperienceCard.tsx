import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";


type WorkExperienceCardProps = {
  companyName: string;
  jobTitle: string;
  startDateFormatted: string;
  endDateFormatted: string;
  description: string;
}

export default function WorkExperienceCard({
  companyName,
  jobTitle,
  startDateFormatted,
  endDateFormatted,
  description,
}: WorkExperienceCardProps) {
  return (
    <div className="flex gap-10 py-4">
      <div className="h-full">
        <Avatar className="w-12 h-12">
          <AvatarImage
            src="/images/profil.webp"
            alt="logo"
            width={100}
            height={100}
          />
          <AvatarFallback className="bg-red-500">CN</AvatarFallback>
        </Avatar>
      </div>
      
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col">
            <h3>{companyName}</h3>
            <p className="text-xs font-light">{jobTitle}</p>
          </div>
          <div className="flex gap-4">
            <p>{startDateFormatted}</p>
            <p>{endDateFormatted}</p>
          </div>
        </div>
        <p className="text-sm font-light text-neutral-500">{description}</p>
      </div>
     
    </div>
  );
}
