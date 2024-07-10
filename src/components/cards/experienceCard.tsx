import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";


type ExperienceCardProps = {
  name_experience: string;
  title: string;
  startDateFormatted: string;
  endDateFormatted: string;
  description: string;
  image: string;
}

export default function WorkExperienceCard({
  name_experience,
  title,
  startDateFormatted,
  endDateFormatted,
  description,
  image,
}: ExperienceCardProps) {
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
          <AvatarFallback className="bg-neutral-300">{name_experience.charAt(0)}</AvatarFallback>
        </Avatar>
      </div>
      
      <div className="flex flex-col gap-4 w-full">
        <div className="flex items-center justify-between w-full">
          <div className="flex flex-col">
            <h3>{name_experience}</h3>
            <p className="text-xs font-light">{title}</p>
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
