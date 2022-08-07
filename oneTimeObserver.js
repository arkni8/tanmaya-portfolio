let greetingElement, nameElement, subtextElement, landingBtnElements, skillCardElements, skillBadgeElements, aboutMeElement, projectCardElements, contactMeElement;
let delay = 0;

function sweepInAnimation(direction, element) {
    let value;

    if (direction === 'sweepDown') {
        value = [`translateY(-120px)`, `translateY(0px)`]
    }
    if (direction === 'sweepUp') {
        value = [`translateY(120px)`, `translateY(0px)`]
    }
    if (direction === 'sweepRight') {
        value = [`translateX(-120px)`, `translateX(0px)`]
    }
    if (direction === 'sweepLeft') {
        value = [`translateX(120px)`, `translateX(0px)`]
    }
    if (!value) { value = [] }

    let sweepInAni_ = element.animate({
        opacity: [0, 1],
        transform: value,
        easing: 'ease-out',
    }, {
        direction: 'normal',
        fill: 'none',
        duration: 800,
        iterations: 1,
    });
}


window.addEventListener("load", () => {
    requestAnimationFrame(() => {
        setTimeout(() => {
            greetingElement = document.querySelector('.landing .greeting');
            nameElement = document.querySelector('.landing .name');
            subtextElement = document.querySelector('.landing .subtext');
            landingBtnElements = document.querySelectorAll('.landing .right-side .primary-btn');
            skillCardElements = document.querySelectorAll('.key-skills .skill-card');
            skillBadgeElements = document.querySelectorAll('.library-toolset-section .skill-badge');
            aboutMeElement = document.querySelector('#about-me .frame');
            projectCardElements = document.querySelectorAll('#projects .project-card');
            contactMeElement = document.querySelector('#contact-me');
        }, 0);
    });
});

const curtainOpenOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
}

const curtainOpenObserver = new IntersectionObserver((entries, curtainOpenObserver) => {

    entries.map((entry) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add('curtain-open-ele'), delay);
            delay = delay + 100;
            curtainOpenObserver.unobserve(entry.target);
        }
    });
}, curtainOpenOptions);

const landingBtnObserver = new IntersectionObserver((entries, landingBtnObserver) => {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            sweepInAnimation('sweepLeft', entry.target);
            landingBtnObserver.unobserve(entry.target);
        }
    });
}, curtainOpenOptions);

const keySkillObserver = new IntersectionObserver((entries, keySkillObserver) => {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            sweepInAnimation('sweepUp', entry.target);
            keySkillObserver.unobserve(entry.target);
        }
    });
}, curtainOpenOptions);

const libraryToolsetObserver = new IntersectionObserver((entries, libraryToolsetObserver) => {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            entry.target.style.visibility = 'visible';
            sweepInAnimation('sweepDown', entry.target);
            libraryToolsetObserver.unobserve(entry.target);
        }
    });
}, curtainOpenOptions);

const aboutMeObserver = new IntersectionObserver((entries, aboutMeObserver) => {
    let entry = entries[0];
    if (entry.isIntersecting) {
        entry.target.style.visibility = 'visible';
        sweepInAnimation('appear', entry.target);
        aboutMeObserver.unobserve(entry.target);
    }
}, curtainOpenOptions);

const projectCardObserver = new IntersectionObserver((entries, projectCardObserver) => {
    entries.map((entry) => {
        if (entry.isIntersecting) {
            sweepInAnimation('sweepRight', entry.target.children[0]);
            sweepInAnimation('sweepLeft', entry.target.children[1]);
            projectCardObserver.unobserve(entry.target);
        }
    })
}, curtainOpenOptions);

const contactMeObserver = new IntersectionObserver((entries, contactMeObserver) => {
    let entry = entries[0];
    if (entry.isIntersecting) {
        entry.target.style.visibility = 'visible';
        sweepInAnimation('sweepUp', entry.target);
        contactMeObserver.unobserve(entry.target);
    }
}, curtainOpenOptions);

window.addEventListener('load', () => {
    // Observers
    requestAnimationFrame(() => {
        setTimeout(() => {
            curtainOpenObserver.observe(greetingElement);
            curtainOpenObserver.observe(nameElement);
            curtainOpenObserver.observe(subtextElement);
            landingBtnObserver.observe(landingBtnElements[0]);
            landingBtnObserver.observe(landingBtnElements[1]);
            keySkillObserver.observe(skillCardElements[0]);
            keySkillObserver.observe(skillCardElements[1]);
            keySkillObserver.observe(skillCardElements[2]);
            for (const element of skillBadgeElements) {
                libraryToolsetObserver.observe(element);
            }
            aboutMeObserver.observe(aboutMeElement);
            for (const eachCard of projectCardElements) {
                projectCardObserver.observe(eachCard);
            }
            contactMeObserver.observe(contactMeElement);
        }, 0);
    });
});