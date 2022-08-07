
function SkillBadge({children}) {
  return (
    <div className='skill-badge'>
      <div className="icon">
        {children[0]}
      </div>
      {children[1]}
    </div>
  )
}

export default SkillBadge;