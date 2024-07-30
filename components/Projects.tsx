import ProjectCard from "./ProjectCard";
import ProjectTitle from "./TitleProject";

const Projects = () => {
  return (
    <div>
      <ProjectTitle />
      <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <ProjectCard image={"/invest.svg"} description="teste teste" title="Invest+ Bradesco" tecnologies="teste" cached/>
        <ProjectCard image={"/invest.svg"} description="teste teste" title="teste" tecnologies="teste" />
        <ProjectCard image={"/invest.svg"} description="teste teste" title="teste" tecnologies="teste" />
      </div>
    </div>
  )
}

export default Projects;