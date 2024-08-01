import ProjectCard from '@/components/ProjectCard';
import { Hash } from 'lucide-react';
import React from 'react'

const Projects = () => {
  return (
    <main className='className="flex min-h-screen w-full max-w-[1024px] flex-col items-center mx-auto p-4 sm:p-6 md:p-8 lg:p-10 bg-[#282C33]'>
      <section className='pt-11'>
        <div className="flex flex-col items-start justify-start gap-4">
          <h2 className="text-3xl"><span className='text-[#C778DD]'>/</span>projects</h2>
          <p className="text-[#ABB2BF]">List of my projects</p>
        </div>
        <div>
          <div className="flex items-center justify-start pt-16">
            <Hash size={30} color="#C778DD" />
            <h2 className="text-3xl">complete-projects</h2>
          </div>
          <div className="pt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <ProjectCard image={"/invest.svg"} description="teste teste" title="Invest+ Bradesco" tecnologies="Vuejs"/>
            <ProjectCard image={"/foods.svg"} description="Clone Ifood" title="Foods" tecnologies="Next.js Prisma PostgreSQL" cached/>
            <ProjectCard image={"/loginProject.png"} description="Login Jwt com integração a api Java" title="Login Jwt" tecnologies="Java Spring Next.js" cached />
          </div>
        </div>
      </section>
    </main>
  )
}

export default Projects;