import ProjectCard from './ProjectCard';

function Projects() {

    return (
        <section className='projects' id='projects'>
            <div className="container">
                <div className="frame">
                    <h5>Portfolio Projects</h5>
                    <ProjectCard imgLink={process.env.NODE_ENV === 'production' ? 'images/ISP_website_Skeleton.webp' : `${process.env.REACT_APP_PUBLIC_URL}/images/ISP_website_Skeleton.webp`} 
                    srcCode='https://lnkd.in/dZky2F_9' liveSite='https://lnkd.in/dcPhknKe'>
                        <p><strong>ISP Webpage Skeleton</strong></p>
                        <p>This project used everything I knew about React.js, Node.js along with discovering the wonderful community built around the Node Package
                            Manager which enabled me a very dynamic and fun page to visit.</p>
                        Nodejs Reactjs Responsive NPM-packages Javascript CSS-Animation
                    </ProjectCard>
                    <ProjectCard imgLink={process.env.NODE_ENV === 'production' ? 'images/Forum_webapp.webp' : `${process.env.REACT_APP_PUBLIC_URL}/images/Forum_webapp.webp`}
                        srcCode='https://lnkd.in/d93wbGZZ' liveSite='https://lnkd.in/dpSPQPzK'>
                        <p><strong>Forum webapp</strong></p>
                        <p>Single page webapp that can be used in manners similar to any forum sites with Upvote and Downvote features. Users are able to communicate with the
                            help of comments and reply to posts. Everything is secured with authentication and that is protected by Firebase frameworks that acts as a backend
                            for this project.</p>
                        Nodejs Reactjs Firebase Responsive Firestore Pagination TailwindCSS Javascript Async/Await
                    </ProjectCard>
                    <ProjectCard imgLink={process.env.NODE_ENV === 'production' ? 'images/Keeper_Notes.webp' : `${process.env.REACT_APP_PUBLIC_URL}/images/Keeper_Notes.webp`}
                        srcCode='https://lnkd.in/dcNVftBH' liveSite='https://keeper-app-for-notes.herokuapp.com/'>
                        <p><strong>Keeper Notepad App</strong></p>
                        <p>A simple secure notepad app that keeps your notes tucked away for the times when you need them and away from prying eyes. This project is a complete
                            MERN package, meaning MongoDB is used for the Database, Node+Express for backend, and Reactjs for frontend along with Material-UI sprinklings.
                        </p>
                        Nodejs Express Reactjs MongoDB Responsive Async/Await Javascript Material-UI
                    </ProjectCard>
                    <ProjectCard imgLink={process.env.NODE_ENV === 'production' ? 'images/Webapp_for_space_tourism.webp' : `${process.env.REACT_APP_PUBLIC_URL}/images/Webapp_for_space_tourism.webp`}
                        srcCode='https://lnkd.in/d6Yc9KHV' liveSite='https://lnkd.in/dzgYEQTi'>
                        <p><strong>Space Tourism Webpage</strong></p>
                        <p>This webapp shows all the information you will need if you ever need to fly to space for your summer vacation! It uses purely HTML and CSS to achieve
                            all its design challenges. This makes the site very fast and lightweight.</p>
                        HTML CSS Figma
                    </ProjectCard>
                </div>
            </div>

        </section>
    )
}

export default Projects;