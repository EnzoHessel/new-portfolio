"use client"

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from './ui/button';

const HeroContent = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="md:flex justify-center items-center"
    >
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
        className="max-w-xl"
      >
        <div className="flex">
          <h1 className="text-3xl">
            Enzo is a <span className="text-purple-400">front-end developer</span> and <span className="text-purple-400">Back-end developer</span>
          </h1>
        </div>
        <div className="pt-8">
          <p className="text-base text-[#ABB2BF]">He crafts responsive websites where technologies meet creativity</p>
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
          <p className="text-[#ABB2BF]">Currently working on <span className="text-white">Portfolio</span></p>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;