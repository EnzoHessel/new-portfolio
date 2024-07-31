"use client"

import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Footer = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <footer className="border-t border-[#ABB2BF] " ref={ref}>
      <div className="flex w-full max-w-[1024px] flex-col items-center mx-auto px-4 pt-4 sm:px-6 sm:pt-6 md:px-8 md:pt-8 lg:pt-10 lg:px-10 bg-[#282C33]">
        <div className="flex justify-between w-full">
          <motion.div
            className="flex flex-col gap-4"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <div className="flex gap-2 items-center cursor-pointer">
              <Image src="/logo.svg" alt="logo" width={16} height={16} />
              <p className="font-medium text-base">Enzo</p>
            </div>
            <p>Web designer and front-end developer</p>
          </motion.div>
          <motion.div
            className="flex flex-col gap-3"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <p className="text-2xl">Media</p>
            <div className="flex gap-4 cursor-pointer">
              <Link href="https://github.com/EnzoHessel">
                <Github size={24} className="hover:text-white text-[#ABB2BF] duration-200"/>
              </Link>
              <Link href="https://www.linkedin.com/in/enzo-hessel/">
                <Linkedin size={24} className="hover:text-white text-[#ABB2BF] duration-200"/>
              </Link>
            </div>
          </motion.div>
        </div>
        <motion.div
          className="py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <p className="text-[#ABB2BF] text-base">© Copyright 2024. Made by Enzo </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer;