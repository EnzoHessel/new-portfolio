interface SkillsCardProps {
  title: string
  skills: string
}

const SkillsCard = ({ title, skills }: SkillsCardProps) => {
  return (
    <div className="w-[178px] border border-[#ABB2BF]">
      <div className="p-2 border-b border-[#ABB2BF]">
        <h2>{title}</h2>
      </div>
      <div className="text-[#ABB2BF] p-2">
        <p>{skills}</p>
      </div>
    </div>
  )
}

export default SkillsCard