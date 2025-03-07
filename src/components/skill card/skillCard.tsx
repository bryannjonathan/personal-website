import { skillProps } from "@/types"
import "./skillCard.css"


export default function SkillCard({
  name,
}: skillProps) {
  return (
    <div className="skill-card">
        <span className="skill-name">{name}</span>
    </div>
  )
}
