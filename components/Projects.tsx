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
        transition={{ duration: 0.7 }}
      >
        <ProjectTitle />
      </motion.div>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.7 }}
        className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
      >
        <ProjectCard image={"/invest.svg"} description="teste teste" title="Invest+ Bradesco" tecnologies="teste" cached/>
        <ProjectCard image={"/invest.svg"} description="teste teste" title="teste" tecnologies="teste" />
        <ProjectCard image={"/invest.svg"} description="teste teste" title="teste" tecnologies="teste" />
      </motion.div>
    </div>
  )
}

export default Projects;