"use client"


import { Hash } from "lucide-react";
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
              transition={{ duration: 1 }}
            >
              <Hash size={30} color="#C778DD" />
              <h2 className="text-3xl whitespace-nowrap">about-me</h2>
            </motion.div>
            <motion.div
              className="w-full md:w-[326px] h-px bg-[#C778DD] hidden md:block"
              initial={{ width: 0 }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            />
          </div>
        </div>
        <div className="flex flex-col gap-9 max-w-[515px] text-[#ABB2BF] pt-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.7 }}
          >
            Oi, eu sou o Enzo!
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 0.9 }}
          >
           Sou um desenvolvedor full-stack de São Paulo e adoro criar sites responsivos do zero, transformando-os em experiências web modernas e fáceis de usar.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.1 }}
          >
          Há mais de um ano, venho criando sites e ajudando clientes a se destacarem online. Recentemente, participei do projeto Invest+ Bradesco, onde pude aplicar minhas habilidades e aprender muito.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.1 }}
          >
            Estou sempre de olho nas novas tecnologias e frameworks para continuar evoluindo. Atualmente, também estou explorando o desenvolvimento back-end com Java.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1, delay: 1.1 }}
          >
            Se você precisa de ajuda para criar ou melhorar seu site, adoraria participar do seu projeto ou de sua equipe.
          </motion.p>
        </div>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <Image src="/aboutImage.svg" alt="about" width={343} height={508} className="md:block hidden" />
      </motion.div>
    </div>
  );
}

export default About;