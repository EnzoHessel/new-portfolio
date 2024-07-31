"use client";

import { Hash } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Links = [
    { name: "home", to: "home" },
    { name: "works", to: "works" },
    { name: "about-me", to: "about-me" },
    { name: "contacts", to: "contacts" },
  ];

  return (
    <div className="flex w-full max-w-[1024px] flex-col items-center mx-auto px-4 pt-4 sm:px-6 sm:pt-6 md:px-8 md:pt-8 lg:pt-10 lg:px-10 bg-[#282C33]">
      <div className="flex justify-between w-full">
        <motion.div
          className="flex gap-2 items-center cursor-pointer"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Image src="/logo.svg" alt="logo" width={16} height={16} />
          <p className="font-bold text-base">Enzo</p>
        </motion.div>
        <div className="hidden md:flex gap-8">
          {Links.map((link) => (
            <ScrollLink
              key={link.name}
              to={link.to}
              smooth={true}
              duration={500}
              className="flex items-center justify-center font-medium text-base cursor-pointer"
            >
              <motion.div
                className="flex items-center"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 * Links.indexOf(link) }}
              >
                <Hash size={16} color="#C778DD" />
                <span className="hover:text-white text-[#ABB2BF]">{link.name}</span>
              </motion.div>
            </ScrollLink>
          ))}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none">
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.svg
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 1 }}
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </motion.svg>
              ) : (
                <motion.svg
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 1 }}
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                </motion.svg>
              )}
            </AnimatePresence>
          </button>
        </div>
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="absolute top-16 left-0 w-full h-full bg-[#282C33] flex flex-col items-start gap-8 md:hidden pt-11"
            >
              {Links.map((link) => (
                <ScrollLink
                  key={link.name}
                  to={link.to}
                  smooth={true}
                  duration={500}
                  className="flex items-center justify-center font-medium text-4xl pl-2 cursor-pointer"
                  onClick={toggleMenu}
                >
                  <Hash size={38} color="#C778DD" />
                  <span>{link.name}</span>
                </ScrollLink>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Header;