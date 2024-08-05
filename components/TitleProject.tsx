import { Hash } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const ProjectTitle = () => {
  return (
    <div className="flex items-start justify-between">
      <div className="flex items-center justify-center gap-4">
        <div className="flex items-center justify-center">
          <Hash size={30} color="#C778DD" />
          <h2 className="text-3xl">projects</h2>
        </div>
        <div className="w-[400px] h-px bg-[#C778DD] hidden md:block" />
      </div>
      <div className="flex items-center justify-center">
        <Link href={"/projects"} className="lg:text-base text-xs mt-1 cursor-pointer hover:text-white text-[#ABB2BF]">
          <Button variant={"default"}>
            View all ~~&gt;
          </Button>
        </Link>
      </div>
    </div>
  )
}

export default ProjectTitle;