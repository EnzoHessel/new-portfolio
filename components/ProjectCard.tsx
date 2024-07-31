import Image from 'next/image'
import { Button } from './ui/button';
import Link from 'next/link';

interface ProjectCardProps {
  image: string,
  tecnologies: string,
  title: string,
  description: string,
  cached?: boolean,
  link?: string,
  github?: string
}

const ProjectCard = ({ image, tecnologies, title, description, cached, link, github } : ProjectCardProps ) => {
  return (
    <div className="border border-[#ABB2BF] rounded-lg">
      <div className="relative w-full h-[210px]">
        <Image src={image} alt={title} fill className="object-fill"/>
      </div>
      <div className="border-y border-[#ABB2BF] p-2">
        <span className="text-base text-[#ABB2BF]">{tecnologies}</span>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <h2 className="text-xl first-letter:uppercase">{title}</h2>
        <p className="text-[#ABB2BF] first-letter:uppercase">{description}</p>
        <div className="flex gap-4">
          <Button variant={"default"} asChild>
            <Link href={`${link}`}>Live {'<~>'}</Link>
          </Button>
          {cached &&
            <Button variant={"default"} asChild>
              <Link href={`${github}`}>
                Github {'>='}
              </Link>
            </Button>
          }
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;