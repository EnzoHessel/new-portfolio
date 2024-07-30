import { Hash } from "lucide-react";

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
        <p className="lg:text-base text-xs mt-1">View all ~~&gt;</p>
      </div>
    </div>
  )
}

export default ProjectTitle;