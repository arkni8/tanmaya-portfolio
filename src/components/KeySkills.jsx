import SkillCard from "./SkillCard";
import { ReactComponent as ReactSVG } from '../asset/big_icon/vscode-icons_file-type-reactjs.svg';
import { ReactComponent as NodeExpressSVG } from '../asset/big_icon/Frame_9.svg';
import {ReactComponent as MongoSVG} from '../asset/big_icon/logos_mongodb-icon.svg';



function KeySkills() {

    return (
        <section className="key-skills" id='key-skills'>
            <div className="container">
                <div className="frame">
                    <h5>Key Skills</h5>
                    <SkillCard>
                        <ReactSVG />
                        <p><strong>Reactjs</strong> is my preferred <strong>Frontend framework</strong>. I have multiple projects worth of
                            hands-on experience in React and is closely familiar with React-based workflows.</p>
                    </SkillCard>
                    <SkillCard>
                        <NodeExpressSVG />
                        <p><strong>Nodejs</strong> along with <strong>Expressjs</strong> is my preferred way to code the <strong>Backend</strong>.
                            There are multiple npm modules to choose from which makes it very powerful, modular and lightweight.</p>
                    </SkillCard>
                    <SkillCard>
                        <MongoSVG />
                        <p>I use <strong>MongoDB</strong> as my database solution. I prefer to use <strong>Mongoose ODM</strong> to make MongoDB a
                            little less verbose and more intuitive.</p>
                    </SkillCard>
                </div>
            </div>
        </section>
    )
}

export default KeySkills;