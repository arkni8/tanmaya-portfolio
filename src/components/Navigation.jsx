import React from 'react'

function Navigation() {
    return (
        <section className='nav'>
            <nav>
                <ul>
                    <li>
                        <a href="#about-me">About Me</a>
                    </li>
                    <li>
                        <a href="#key-skills">Key Skills</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact-me">Contact Me</a>
                    </li>
                </ul>
            </nav>
            <div className='nav-accent'>
                {/* This will be the navigation observer */}
            </div>
        </section>
    )
}

export default Navigation;