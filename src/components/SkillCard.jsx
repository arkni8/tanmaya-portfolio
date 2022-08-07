
function SkillCard({children}) {
    return (
        <div className="skill-card">
            <div>
                {children[0]}
            </div>
            {children[1]}
        </div>
    )
}

export default SkillCard;