import SkillCard from "./SkillCard";

function KeySkills() {

    return (
        <section className="key-skills" id='key-skills'>
            <div className="container">
                <div className="frame">
                    <h5>Key Skills</h5>
                    <SkillCard imgLink="images/big_icon/vscode-icons_file-type-reactjs.svg" gap="10px" width="310px">
                        {/* <ReactSVG /> */}
                        <p><strong>Reactjs</strong> is my preferred <strong>Frontend framework</strong>. I have multiple projects worth of
                            hands-on experience in React and is closely familiar with React-based workflows.</p>
                    </SkillCard>
                    <SkillCard imgLink="images/big_icon/Frame_9-cropped.svg" gap="0" width="340px">
                        {/* <NodeExpressSVG /> */}
                        <p><strong>Nodejs</strong> along with <strong>Expressjs</strong> is my preferred way to code the <strong>Backend</strong>.
                            There are multiple npm modules to choose from which makes it very powerful, modular and lightweight.</p>
                    </SkillCard>
                    <SkillCard imgLink="images/big_icon/logos_mongodb-icon.svg" gap="30px" height="280px" width="270px">
                        {/* <MongoSVG /> */}
                        <p>I use <strong>MongoDB</strong> as my database solution. I prefer to use <strong>Mongoose ODM</strong> to make MongoDB a
                            little less verbose and more intuitive.</p>
                    </SkillCard> 
                </div>
            </div>
        </section>
    )
}

export default KeySkills;