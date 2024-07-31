"use client"

import { Hash, Mail } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contacts = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div ref={ref}>
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="flex items-center justify-start gap-4 max-w-80 w-full">
          <motion.div
            className="flex items-center justify-start"
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1 }}
          >
            <Hash size={30} color="#C778DD" />
            <h2 className="text-3xl">contacts</h2>
          </motion.div>
          <motion.div
            className="w-full md:w-[127px] h-px bg-[#C778DD] hidden md:block"
            initial={{ width: 0 }}
            animate={inView ? { width: "100%" } : {}}
            transition={{ duration: 1, delay: 0.5 }}
          />
        </div>
      </div>
      <div className='md:flex block justify-between items-center space-y-9'>
        <motion.div
          className='pt-11 text-[#ABB2BF] max-w-[515px]'
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.7 }}
        >
          <p>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</p>
        </motion.div>
        <motion.div
          className='flex justify-center items-center gap-2 p-2 border border-[#ABB2BF] w-72 h-fit text-[#ABB2BF] hover:text-white duration-200 rounded-lg'
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.9 }}
        >
          <Mail size={32} />
          <a href="mailto:enzohessel12342@gmail.com">enzohessel12342@gmail.com</a>
        </motion.div>
      </div>
    </div>
  );
}

export default Contacts;