"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from './ui/button';
import { TypeAnimation } from "react-type-animation";

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="md:flex justify-start items-center"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl"
      >
        <div className="flex">
          <h1 className="text-3xl">Enzo é um desenvolvedor{' '}
            <TypeAnimation
              sequence={[
                'Front-end', // Texto a ser exibido
                2000, // Tempo de espera antes de apagar (em milissegundos)
                'Back-end', // Texto a ser exibido
                2000, // Tempo de espera antes de apagar (em milissegundos)
                'Full-stack', // Texto a ser exibido
                2000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              className="text-purple-400 -z-10"
            />
          </h1>
        </div>
        <div className="pt-8">
          <p className="text-base text-[#ABB2BF]">Ele cria sites responsivos onde a tecnologia encontra a criatividade</p>
        </div>
        <div className="pt-6"></div>
        <Button variant={"default"}>Contact me!!</Button>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="pt-6"
      >
        <Image src="/heroLogo.svg" alt="hero" width={400} height={400} />
        <div className="flex gap-3 justify-center items-center border-[#ABB2BF] border-[1px] p-2">
          <div className="w-4 h-4 bg-purple-500"></div>
          <p className="text-[#ABB2BF]">Atualmente trabalhando em <span className="text-white">Portfolio</span></p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;