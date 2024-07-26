"use client"

import { Hash } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const Links = [
    { name: "home", path: "/" },
    { name: "works", path: "/works" },
    { name: "about-me", path: "/about-me" },
    { name: "contacts", path: "/contacts" },
  ];

  return (
    <div className="flex justify-between w-full">
      <div className="flex gap-2 items-center">
        <Image src="/logo.svg" alt="logo" width={16} height={16} />
        <p className="font-bold text-base">Enzo</p>
      </div>
      <div className="hidden md:flex gap-8">
        {Links.map((link) => (
          <Link key={link.name} href={link.path} className="flex items-center justify-center font-medium text-base">
            <Hash size={16} color="#C778DD" />
            <span>{link.name}</span>
          </Link>
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
                transition={{ duration: 0.3 }}
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
                transition={{ duration: 0.3 }}
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
            transition={{ duration: 0.3 }}
            className="absolute top-16 left-0 w-full h-full bg-[#282C33] flex flex-col items-start gap-8 md:hidden pt-11"
          >
            {Links.map((link) => (
              <Link key={link.name} href={link.path} className="flex items-center justify-center font-medium text-4xl pl-2 ">
                <Hash size={38} color="#C778DD" />
                <span>{link.name}</span>
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;