import SkillBadge from './SkillBadge';
import { ReactComponent as HTMLSVG } from '../asset/small_icon/logos_html-5.svg';
import { ReactComponent as CSSSVG } from '../asset/small_icon/logos_css-3.svg';
import { ReactComponent as JsSVG } from '../asset/small_icon/vscode-icons_file-type-js-official.svg';
import { ReactComponent as BootstrapSVG } from '../asset/small_icon/logos_bootstrap.svg';
import { ReactComponent as ResponsiveSVG } from '../asset/small_icon/responsive.svg';
import { ReactComponent as SassSVG } from '../asset/small_icon/logos_node-sass.svg';
import { ReactComponent as FigmaSVG } from '../asset/small_icon/logos_figma.svg';
import { ReactComponent as GitSVG } from '../asset/small_icon/fa-brands_git-square.svg';
import { ReactComponent as GithubSVG } from '../asset/small_icon/akar-icons_github-fill.svg';
import { ReactComponent as ReduxSVG } from '../asset/small_icon/logos_redux.svg';
import { ReactComponent as MuiSVG } from '../asset/small_icon/logos_material-ui.svg';
import { ReactComponent as TailwindSVG } from '../asset/small_icon/logos_tailwindcss-icon.svg';
import { ReactComponent as FirebaseSVG } from '../asset/small_icon/logos_firebase.svg';
import { ReactComponent as JiraSVG } from '../asset/small_icon/logos_jira.svg';




function LibraryToolset() {
    return (
        <section className='library-toolset-section'>
            <div className="container">
                <div className="frame">
                    <h5>Other Libraries and Toolset</h5>
                    <SkillBadge><HTMLSVG /><p>HTML</p></SkillBadge>
                    <SkillBadge><CSSSVG /><p>CSS</p></SkillBadge>
                    <SkillBadge><JsSVG /><p>Javascript</p></SkillBadge>
                    <SkillBadge><BootstrapSVG /><p>Bootstrap</p></SkillBadge>
                    <SkillBadge><ResponsiveSVG /><p>Responsive Design</p></SkillBadge>
                    <SkillBadge><SassSVG /><p>SASS</p></SkillBadge>
                    <SkillBadge><FigmaSVG /><p>Figma</p></SkillBadge>
                    <SkillBadge><GitSVG /><p>Git Bash</p></SkillBadge>
                    <SkillBadge><GithubSVG /><p>Github</p></SkillBadge>
                    <SkillBadge><ReduxSVG /><p>Redux</p></SkillBadge>
                    <SkillBadge><MuiSVG /><p>Material-UI</p></SkillBadge>
                    <SkillBadge><TailwindSVG /><p>Tailwind CSS</p></SkillBadge>
                    <SkillBadge><FirebaseSVG /><p>Firebase</p></SkillBadge>
                    <SkillBadge><JiraSVG /><p>Jira</p></SkillBadge>
                </div>
            </div>
        </section>
    )
}

export default LibraryToolset;