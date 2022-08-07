import React from 'react'

function ProjectCard({ children, imgLink, srcCode, liveSite }) {

    const tags = children[children.length-1];
    const tagsArray = tags.split(' ');

    return (
        <div className='project-card'>
            <div className="left-side">
                <div style={{
                    backgroundImage: `url(${imgLink})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat'
                }}>
                    {/*contains image */}
                </div>
                <div>
                    <button onClick={() => window.open(srcCode, '_blank')} className='primary-btn'>View Source Code</button>
                    <button onClick={() => window.open(liveSite, '_blank')} className='primary-btn'>Live Site</button>
                </div>
            </div>
            <div className="right-side">
                <div className="title">
                    {children[0]}
                </div>
                <div className="tags">
                    {tagsArray.map((tag, idx) => <p key={idx}>{tag}</p>)}
                </div>
                <div className="descr">
                    {children[1]}
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;