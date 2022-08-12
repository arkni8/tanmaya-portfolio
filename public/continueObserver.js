let aboutMeNavElement, keySkillNavElement, projectsNavElement, landingElement, contactNavElement;
var sweepAnimation;

window.addEventListener("load", () => {
    requestAnimationFrame(() => {
        setTimeout(() => {
            aboutMeNavElement = document.querySelector('#about-me');
            keySkillNavElement = document.querySelector('#key-skills');
            projectsNavElement = document.querySelector('#projects');
            contactNavElement = document.querySelector('#contact-me');
            landingElement = document.querySelector('.landing');
        }, 0);
    });
});

// This is for highlighting the navigation bar for their corresponding section in viewport

const navHighlightOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.3
}

const navHighlightObserver = new IntersectionObserver((entry, _navHighlightObserver) => {
    if (entry[0]?.isIntersecting) {

        document.querySelectorAll('.nav li').forEach((ele) => {
            ele.classList.remove('nav-accent-animation');
        });

        switch (entry[0].target.id) {
            case 'about-me':
                document.querySelector('.nav li:nth-child(1)').classList.add('nav-accent-animation');
                break;
            case 'key-skills':
                document.querySelector('.nav li:nth-child(2)').classList.add('nav-accent-animation');
                break;
            case 'projects':
                document.querySelector('.nav li:nth-child(3)').classList.add('nav-accent-animation');
                break;
            case 'contact-me':
                document.querySelector('.nav li:nth-child(4)').classList.add('nav-accent-animation');
                break;
            default:
                break;
        }
    }
}, navHighlightOptions);

window.addEventListener('load', () => {
    // console.log(aboutMeNavElement);

    requestAnimationFrame(() => {
        setTimeout(() => {
            navHighlightObserver.observe(aboutMeNavElement);
            navHighlightObserver.observe(keySkillNavElement);
            navHighlightObserver.observe(projectsNavElement);
            navHighlightObserver.observe(contactNavElement);
        }, 0);
    });
});



// Scroll down element's animation pause

const animationPauseOption = {
    root: null,
    rootMargin: '0px',
    threshold: 0.8
}

const landingSectionObserver = new IntersectionObserver((entry, _landingSectionObserver) => {
    const scrollDownIndicatorElement = document.querySelector('.landing .scroll-indicator');
    if (!entry[0].isIntersecting) {
        // scrollDownIndicatorElement.classList.add('hide-element');
        scrollDownIndicatorElement.style.animationPlayState = 'paused';
    } else {
        // scrollDownIndicatorElement.classList.remove('hide-element');
        scrollDownIndicatorElement.style.animationPlayState = 'running';
    }
}, animationPauseOption);

window.addEventListener('load', () => {
    requestAnimationFrame(() => {
        setTimeout(() => {
            landingSectionObserver.observe(landingElement);
        }, 0);
    });
});



// Animation of icons in landing page

const linksToAccAnimOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.6
}

const hookingLinkToAccObserver = new IntersectionObserver((entry) => {
    let linksToAccEle = document.querySelector('.links-to-acc');

    let viewportWidth = window.innerWidth;
    let originalLeftPos = linksToAccEle.getBoundingClientRect().left

    if (!entry[0].isIntersecting) {

        linksToAccEle.style.opacity = '0';
        linksToAccEle.style.transformOrigin = '0% 0%';
        linksToAccEle.style.transform = `scaleX(0)`;
        requestAnimationFrame(() => {

            requestAnimationFrame(async () => {
                linksToAccEle.style.position = 'fixed';
                linksToAccEle.style.left = originalLeftPos;
                linksToAccEle.style.top = '0px';
                linksToAccEle.style.zIndex = '10';

                // not sure if taking out 'await' changes anything, but I am not sure and having it doesnt harm, so it stays.
                sweepAnimation = await linksToAccEle.animate({
                    opacity: [0, 1],
                    transform: [`translate(0px) scaleX(0)`, `translate(${viewportWidth - originalLeftPos - 210}px) scaleX(1)`],
                    easing: 'ease-out',
                }, {
                    direction: 'normal',
                    fill: 'forwards',
                    duration: 800,
                    iterations: 1,
                    // delay: 500
                });

                sweepAnimation.onfinish = function () {
                    linksToAccEle.classList.add('hanging-box');
                }

            });
        });

    } else {
        sweepAnimation?.cancel();
        requestAnimationFrame(() => {
            linksToAccEle.style.position = 'static';
            linksToAccEle.style.transform = '';
            linksToAccEle.style.top = '';
            linksToAccEle.style.left = '';
            linksToAccEle.style.zIndex = '';
            linksToAccEle.style.opacity = '';
            linksToAccEle.classList.remove('hanging-box');
        });
    }
}, linksToAccAnimOptions);

window.onload = () => {
    requestAnimationFrame(() => {
        setTimeout(() => {
            hookingLinkToAccObserver.observe(landingElement);
        }, 0);
    });
}



