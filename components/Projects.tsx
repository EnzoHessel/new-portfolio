"use client"

import ProjectCard from "./ProjectCard";
import ProjectTitle from "./TitleProject";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Projects = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
        transition={{ duration: 1 }}
      >
        <ProjectTitle />
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}
        className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        <ProjectCard image={"/invest.svg"} description="teste teste" title="Invest+ Bradesco" tecnologies="Vuejs"/>
        <ProjectCard image={"/foods.svg"} description="Clone Ifood" title="Foods" tecnologies="Next.js Prisma PostgreSQL" cached/>
        <ProjectCard image={"/loginProject.png"} description="Login Jwt com integração a api Java" title="Login Jwt" tecnologies="Java Spring Next.js" cached />
      </motion.div>
    </div>
  )
}

export default Projects;