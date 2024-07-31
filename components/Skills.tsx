"use client"

import { Hash } from "lucide-react";
import Image from 'next/image';
import SkillsCard from "./SkillsCard";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const Skills = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="flex items-center justify-start gap-4 max-w-96 w-full">
          <motion.div
            className="flex items-center justify-start"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Hash size={30} color="#C778DD" />
            <h2 className="text-3xl">skills</h2>
          </motion.div>
          <motion.div
            className="w-full md:w-[230px] h-px bg-[#C778DD] hidden md:block"
            initial={{ width: 0 }}
            animate={inView ? { width: "100%" } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
          />
        </div>
      </div>
      <div className="pt-3 flex flex-col md:flex-row justify-between">
        <motion.div
          className="hidden md:block pl-8"
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Image src={"/skillsBg.svg"} alt="skills" width={349} height={282} />
        </motion.div>
        <div className="flex flex-col md:flex-row gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <SkillsCard />
          </motion.div>
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.1 }}
            >
              <SkillsCard />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.3 }}
            >
              <SkillsCard />
            </motion.div>
          </div>
          <div className="flex flex-col gap-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.5 }}
            >
              <SkillsCard />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 1.7 }}
            >
              <SkillsCard />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;