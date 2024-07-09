import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";


type WorkExperienceCardProps = {
  companyName: string;
  jobTitle: string;
  startDateFormatted: string;
  endDateFormatted: string;
  description: string;
  image: string;
}

export default function WorkExperienceCard({
  companyName,
  jobTitle,
  startDateFormatted,
  endDateFormatted,
  description,
  image,
}: WorkExperienceCardProps) {
  return (
    <>
    <div className="flex gap-4 lg:gap-10 py-4">
      <div className="h-full">
        <Avatar className="w-12 h-12">
          <AvatarImage
            src={image}
            alt="logo"
            width={75}
            height={75}
          />
          <AvatarFallback className="bg-neutral-300">{companyName.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>
      
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col">
            <h3>{companyName}</h3>
            <p className="text-xs font-light">{jobTitle}</p>
          </div>
          <div className="flex gap-4 text-sm font-light">
            <p>{startDateFormatted}</p>
            <p>{endDateFormatted}</p>
          </div>
        </div>
        <p className="text-sm font-light text-neutral-500">{description}</p>
      </div>
     
    </div>
    </>
  );
}
