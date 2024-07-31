"use client"


import { Hash } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref} className="flex justify-between">
      <div>
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="flex items-center justify-start gap-4 w-full">
            <motion.div
              className="flex items-center justify-start"
              initial={{ opacity: 0, y: -20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
            >
              <Hash size={30} color="#C778DD" />
              <h2 className="text-3xl whitespace-nowrap">about-me</h2>
            </motion.div>
            <motion.div
              className="w-full md:w-[326px] h-px bg-[#C778DD] hidden md:block"
              initial={{ width: 0 }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-9 max-w-[515px] text-[#ABB2BF] pt-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Hello, i'm Elias!
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            I'm a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.
          </motion.p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 1.3 }}
        >
          <Button variant={"default"} className="mt-9">Read more -&gt;</Button>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 1.5 }}
      >
        <Image src="/aboutImage.svg" alt="about" width={343} height={508} className="md:block hidden" />
      </motion.div>
    </div>
  );
}

export default About;