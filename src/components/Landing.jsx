import { ReactComponent as GithubSVG } from '../asset/big_icon/akar-icons_github-fill.svg'
import { ReactComponent as LinkedinSVG } from '../asset/big_icon/logos_linkedin-icon.svg';
// import { ReactComponent as VectorBackground } from '../asset/background/Vector_1.svg';
import { ReactComponent as Triangle } from '../asset/small_icon/eva_arrow-ios-downward-fill.svg'


function Landing() {

    return (
        <section className="landing">
            <div className="background-image">
                {/* <VectorBackground /> */}
            </div>
            <div className="container">
                <div className="intro">
                    <div className="left-side">
                        <div style={{ position: 'relative' }} className="greeting"><h4>Hello there,</h4></div>
                        <div className="name" style={{ position: 'relative' }}>
                            <h1>I'm Tanmaya Biswal</h1>
                        </div>
                        <div className="subtext" style={{ position: 'relative' }}>
                            <h2>Full stack web developer</h2>
                        </div>
                        <div style={{ padding: '0' }} className="empty-div"></div>
                        <div className="links-to-acc">
                            <a href="https://github.com/arkni8" title='Link to Github profile' target="_blank" rel="noopener noreferrer">
                                <div className="svg-intro">
                                    <GithubSVG />
                                </div>
                            </a>
                            <a href="https://www.linkedin.com/in/tanmaya-biswal-36a767160/" title='Link to Linkedin profile' target="_blank" rel="noopener noreferrer">
                                <div className="svg-intro">
                                    <LinkedinSVG />
                                </div>
                            </a>
                        </div>

                    </div>
                    <div className="right-side">
                        <button className="primary-btn" onClick={() => window.open('https://docs.google.com/document/d/1z_Ry3MA-FzuTt6IR6pmzXlcQfPb6oZKTJkBCHgJd1LI/edit?usp=sharing', '_blank')}>
                            View Resume
                        </button>
                        <a href="#projects"><div className="primary-btn">View Projects</div></a>
                    </div>
                </div>
            </div>
            <div className="scroll-indicator">
                <p>Scroll Down</p>
                <div className="scroll-indicator-tri">
                    <Triangle />
                </div>
                <div className="scroll-indicator-tri">
                    <Triangle />
                </div>
            </div>
        </section>
    )
}

export default Landing;