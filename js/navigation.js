const header = document.getElementById("header");
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
const navAnchors = [...document.querySelectorAll(".nav-links a")];

const desktopAnchors = [...document.querySelectorAll(".desktop-nav-links a")];
const smallScreen = window.matchMedia("(max-width: 768px)");

const menuClose = document.getElementById("menu-close");
const pageContent = [header, document.querySelector("main"), document.querySelector("footer")];

function setMenuState(isOpen, restoreFocus = true) {
    isOpen = isOpen && smallScreen.matches;
    navLinks.hidden = !isOpen;
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    document.body.classList.toggle("menu-open", isOpen);
    pageContent.forEach(element => { element.inert = isOpen; });
    if (isOpen) menuClose.focus();
    else if (restoreFocus) menuToggle.focus();
}

menuToggle.addEventListener("click", () => setMenuState(true));
menuClose.addEventListener("click", () => setMenuState(false));

navAnchors.forEach(link => {
    link.addEventListener("click", () => {
        setMenuState(false, false);
        const target = document.querySelector(link.getAttribute("href"));
        if (target) {
            target.setAttribute("tabindex", "-1");
            target.focus({ preventScroll: true });
        }
    });
});

document.addEventListener("keydown", event => {
    if (navLinks.hidden) return;
    if (event.key === "Escape") {
        event.preventDefault();
        setMenuState(false);
    }
    if (event.key === "Tab") {
        const first = menuClose;
        const last = navAnchors[navAnchors.length - 1];
        if (event.shiftKey && document.activeElement === first) {
            event.preventDefault();
            last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
            event.preventDefault();
            first.focus();
        }
    }
});

smallScreen.addEventListener("change", event => {
    const wasOpen = !navLinks.hidden;
    if (!event.matches) {
        setMenuState(false, false);
        if (wasOpen) (desktopAnchors.find(link => link.classList.contains("active")) || desktopAnchors[0]).focus();
    } else if (desktopAnchors.includes(document.activeElement)) {
        menuToggle.focus();
    }
});

function updateHeader() {
    header.classList.toggle("scrolled", window.scrollY > 12);
}

const navTargets = [...navAnchors, ...desktopAnchors]
    .map(link => ({
        link,
        target: document.querySelector(link.getAttribute("href"))
    }))
    .filter(item => item.target);

let navigationFrame;

function updateActiveNavigation() {
    const activationPoint = window.scrollY + (window.innerHeight * 0.38);
    let activeItem = navTargets[0];

    navTargets.forEach(item => {
        const targetTop = item.target.getBoundingClientRect().top + window.scrollY;
        if (targetTop <= activationPoint) {
            activeItem = item;
        }
    });

    navTargets.forEach(item => {
        item.link.classList.toggle("active", item.target === activeItem?.target);
    });
}

function handleScroll() {
    updateHeader();

    if (navigationFrame) return;
    navigationFrame = window.requestAnimationFrame(() => {
        updateActiveNavigation();
        navigationFrame = null;
    });
}

window.addEventListener("scroll", handleScroll, { passive: true });
updateHeader();
updateActiveNavigation();
