import { Hash } from "lucide-react";
import Image from 'next/image';
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="flex items-center justify-center gap-4">
          <div className="flex items-center justify-center">
            <Hash size={30} color="#C778DD" />
            <h2 className="text-3xl">skills</h2>
          </div>
          <div className="w-full md:w-[230px] h-px bg-[#C778DD] hidden md:block" />
        </div>
      </div>
      <div className="pt-3 flex flex-col md:flex-row justify-between">
        <div className="hidden md:block pl-8">
          <Image src={"/skillsBg.svg"} alt="skills" width={349} height={282} />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="">
            <SkillsCard />
          </div>
          <div className="flex flex-col gap-4">
            <SkillsCard />
            <SkillsCard />
          </div>
          <div className="flex flex-col gap-4">
            <SkillsCard />
            <SkillsCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;