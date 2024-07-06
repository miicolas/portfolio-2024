import { Avatar, AvatarImage, AvatarFallback } from "../ui/avatar";

export default function WorkExperienceCard() {
  return (
    <div className="flex gap-10 min-w-full">
      <Avatar className="w-12 h-12">
        <AvatarImage
          src="/images/profil.webp"
          alt="logo"
          width={100}
          height={100}
        />
        <AvatarFallback className="bg-red-500">CN</AvatarFallback>
      </Avatar>
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col">
          <h3>Compagny Name</h3>
          <p className="text-sm font-light text-neutral-500">Job title</p>
        </div>
        <div className="flex gap-2">
          <p>Start date</p>
          <p>End date</p>
        </div>
      </div>
    </div>
  );
}
