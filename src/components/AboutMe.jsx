// import { ReactComponent as BgDecorSVG } from '../asset/background/Vector_2.svg';

function AboutMe() {
    return (
        <section className='about-me' id='about-me'>
            <div className="container">
                <div className="frame">
                <h5>About Me</h5>
                <p>I like building stuff, I love giving shapes to ideas. As an engineer, I aim to solve problems and deliver
                    the best possible solution to the client in a cost effective manner. Being a team-player, I have the ability to work hard individually
                    and can collaborate with other team members just as well - to achieve the final goal faster.</p>
                <p>If you are looking for someone like me, feel free to reach out to me. If you are looking to collab, or for hiring me or maybe you just want to chat,
                    to give me any feedback - I would love to hear from you!</p> <a style={{textDecoration: ' underline'}} href="#contact-me"><p>Click here to send me a mail.</p></a>
                </div>
            </div>
            <div className="decor">
                {/* <BgDecorSVG /> */}
            </div>            
        </section>
    )
}

export default AboutMe;