import { Hash } from "lucide-react"
import { Button } from "./ui/button"
import Image from "next/image"

const About = () => {
  return (
    <div className="flex justify-between">
      <div>
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center justify-center">
              <Hash size={30} color="#C778DD" />
              <h2 className="text-3xl">about-me</h2>
            </div>
            <div className="w-full md:w-[326px] h-px bg-[#C778DD] hidden md:block" />
          </div>
        </div>
        <div className="flex flex-col gap-9 max-w-[515px] text-[#ABB2BF] pt-6">
          <p>Hello, i'm Elias!</p>
          <p> I'm a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences. </p>
          <p>Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online. I always strive to learn about the newest technologies and frameworks.</p>
        </div>
        <Button variant={"default"} className="mt-9">Read more -&gt;</Button>
      </div>
      <Image src="/aboutImage.svg" alt="about" width={343} height={508} className="md:block hidden"/>
    </div>
  )
}

export default About