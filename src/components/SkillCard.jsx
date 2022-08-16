import { UseMediaQuery } from './UseMediaQuery';

function SkillCard({ children, gap = "52px", imgLink, height = "400px", width }) {

    let skillCardWidth = width;
    const smallResSupport = UseMediaQuery('screen and (max-width: 650px)');

    if (smallResSupport) {
        skillCardWidth = "270px";
    }

    return (
        <div className="skill-card" style={{ gap: gap, width: skillCardWidth, marginTop: "20px" }}>
            <div style={{
                backgroundImage: `url(${imgLink})`,
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
                height: height,
            }}>
            </div>
            {children}
        </div>
    );

}

export default SkillCard;