'use client'
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import WordPullUp from "@/components/magicui/word-pull-up";
import ExperienceCard from "@/components/cards/experienceCard";
import { workExperiences, educationExperiences } from "@/lib/utils";
import { delay, motion } from "framer-motion";

export default function Home() {

  return (
    <motion.main className="flex flex-col min-h-[100dvh] space-y-10" 
    initial={{ opacity: 0, y: -100, filter: "blur(30px)", }}
    animate={{ opacity: 1, y: 0, filter: "blur(0px)", duration: 1, ease: "easeInOut" }}
    exit={{ opacity: 0, y: 200, filter: "blur(30px)" }} 
    transition={{ duration: 1, type: "spring", stiffness: 110, damping: 15 }}
    
    
    >
      <section className="flex flex-col items-center justify-center space-y-4">
        <div className="block lg:flex items-center gap-4">
          <Avatar className="w-48 h-48 block lg:hidden mb-4 lg:mb-0">
            <AvatarImage src="/images/profil.webp" alt="Nicolas Becharat" />
          </Avatar>
          <div className="flex flex-col space-y-4">
            <div className="flex items-center gap-4">
              <WordPullUp
                words="Hi, I'm Nicolas  👋"
                className="text-4xl font-bold tracking-[-0.02em] text-black dark:text-white md:text-7xl md:leading-[5rem]"
              />
            </div>
            <p className="text-lg">
              I'm a full stack developer with a passion for building web
              applications that are both visually appealing and functionally
              sound.
            </p>
          </div>
          <Avatar className="w-48 h-48 hidden lg:block">
            <AvatarImage src="/images/profil.webp" alt="Nicolas Becharat" />
          </Avatar>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">About</h2>
        <p className="font-light text-neutral-500 text-sm">
          When i was 15, i started to code in Python and i was amazed by the possibilities of the language.
          I started to learn more about <span className="text-black underline underline-offset-2">the language</span> and the possibilities of the language. And i decided to make the code my life and my futur job. I integrate the passion of coding in <span className="text-black underline underline-offset-2">all my projects</span> and i love to learn new things about the world of web development in my school at <span className="text-black underline underline-offset-2">IIM Paris</span>.
        </p>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">My Work Experience</h2>
        {workExperiences
          .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
          .map((workExperience) => {
            const startDate = new Date(workExperience.startDate);
            const endDate = workExperience.endDate ? new Date(workExperience.endDate) : "present";
            const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric' };

            return (
              <ExperienceCard
                key={workExperience.name_experience}
                {...workExperience}
                startDateFormatted={startDate.toLocaleDateString('fr-FR', options)}
                endDateFormatted={endDate === "present" ? "present" : endDate.toLocaleDateString('fr-FR', options)}
              />
            );
          }).reverse()}
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4">Education</h2>
        {educationExperiences
          .sort((a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime())
          .map((educationExperience) => {
            const startDate = new Date(educationExperience.startDate);
            const endDate = educationExperience.endDate ? new Date(educationExperience.endDate) : "present";
            const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'numeric' };

            return (
              <ExperienceCard
                key={educationExperience.name_experience}
                {...educationExperience}
                startDateFormatted={startDate.toLocaleDateString('fr-FR', options)}
                endDateFormatted={endDate === "present" ? "present" : endDate.toLocaleDateString('fr-FR', options)}
              />
            );
          }).reverse()}
      </section>
    </motion.main>
  );
}